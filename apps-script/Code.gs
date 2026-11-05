/**
 * Ravena Solar — recebe os pedidos de simulação do site.
 *
 * Como publicar (uma vez):
 * 1. Crie uma planilha "Leads Ravena" no Google Sheets e copie o ID da URL
 *    (o trecho entre /d/ e /edit). Cole em SHEET_ID abaixo.
 * 2. Crie uma pasta "Ravena - Contas de luz" no Drive (privada) e copie o ID
 *    da URL (depois de /folders/). Cole em FOLDER_ID.
 * 3. Em script.google.com, crie um projeto, cole este arquivo e preencha EMAIL_AVISO.
 * 4. Implantar > Nova implantação > App da Web.
 *    Executar como: Eu. Quem tem acesso: Qualquer pessoa.
 * 5. Copie a URL da implantação e cole em ENDPOINT no index.html.
 *
 * Ao mudar este código, é preciso criar uma nova versão da implantação.
 */

const SHEET_ID = '1sQiPwJ2aMnwM3qpeuhJD2D9CG2tX6H2NjZ6ikaqXDww';
const FOLDER_ID = '1RTY6zkKkkGTS56h2Zcw3RQoBCEOlqWJY';
const EMAIL_AVISO = 'contato@ravenasolar.com.br';
const ABA = 'Leads';
const MAX_ANEXO_BYTES = 5 * 1024 * 1024;
const TIPOS_OK = {
  'application/pdf': 'pdf',
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp',
  'image/heic': 'heic',
  'image/heif': 'heif',
};
const CABECALHO = ['Data e hora', 'Nome', 'WhatsApp', 'Cidade', 'Conta (R$)', 'Origem', 'Conta abaixo de 450', 'Anexo', 'Status'];

function doPost(e) {
  try {
    const d = JSON.parse(e.postData.contents);

    // Honeypot: robôs preenchem, pessoas não veem.
    if (d.website) return resposta({ ok: true });

    const nome = limpa(d.nome, 120);
    const whatsapp = limpa(d.whatsapp, 20);
    const cidade = limpa(d.cidade, 60);
    const conta = Number(d.conta) || 0;
    if (!nome || !/^\(\d{2}\) 9\d{4}-\d{4}$/.test(whatsapp) || !cidade || conta <= 0) {
      return resposta({ ok: false, erro: 'dados invalidos' });
    }

    const linkAnexo = salvaAnexo(d.anexo, nome, whatsapp);

    const aba = abaLeads();
    aba.appendRow([
      new Date(), nome, whatsapp, cidade, conta,
      limpa(d.origem, 40), conta < 450 ? 'sim' : 'não', linkAnexo, 'novo',
    ]);

    if (EMAIL_AVISO) {
      MailApp.sendEmail(
        EMAIL_AVISO,
        'Novo pedido de simulação: ' + nome,
        'Nome: ' + nome + '\nWhatsApp: ' + whatsapp + '\nCidade: ' + cidade +
        '\nConta: R$ ' + conta + '\nOrigem: ' + limpa(d.origem, 40) +
        (linkAnexo ? '\nAnexo: ' + linkAnexo : '')
      );
    }
    return resposta({ ok: true });
  } catch (err) {
    return resposta({ ok: false, erro: String(err) });
  }
}

function salvaAnexo(anexo, nome, whatsapp) {
  if (!anexo || !anexo.base64) return '';
  const ext = TIPOS_OK[anexo.tipo];
  if (!ext) return '';
  const bytes = Utilities.base64Decode(anexo.base64);
  if (bytes.length > MAX_ANEXO_BYTES) return '';
  const data = Utilities.formatDate(new Date(), 'America/Sao_Paulo', 'yyyy-MM-dd');
  const arquivo = (data + '_' + nome + '_' + whatsapp.replace(/\D/g, '')).replace(/[^\w\-]+/g, '_') + '.' + ext;
  const blob = Utilities.newBlob(bytes, anexo.tipo, arquivo);
  return DriveApp.getFolderById(FOLDER_ID).createFile(blob).getUrl();
}

function abaLeads() {
  const planilha = SpreadsheetApp.openById(SHEET_ID);
  let aba = planilha.getSheetByName(ABA);
  if (!aba) {
    aba = planilha.insertSheet(ABA);
    aba.appendRow(CABECALHO);
    aba.setFrozenRows(1);
  }
  return aba;
}

// Evita que o texto digitado vire fórmula na planilha (=, +, -, @).
function limpa(v, max) {
  let s = String(v == null ? '' : v).trim().slice(0, max);
  if (/^[=+\-@]/.test(s)) s = "'" + s;
  return s;
}

function resposta(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
