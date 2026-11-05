# Conferir antes de publicar — Ravena Solar

> **AVISO URGENTE.** Os dados de contato do site (telefone, endereço e e-mail) foram copiados do site antigo, que ainda estava no ar. **Eles podem estar desatualizados ou ter sido alterados.** A empresa precisa confirmá-los **com urgência**, antes de o site novo ir ao ar. Um telefone ou e-mail errado faz o cliente que quer comprar não conseguir falar com a Ravena, e o pedido de simulação se perde.

## 1. Urgente: dados de contato (vieram do site antigo)

Estão no rodapé de [index.html](index.html) (linhas 951 a 955). O telefone aparece também no botão do WhatsApp.

| Dado | Valor no site hoje | Confirmado pela empresa? |
|---|---|---|
| Telefone (rodapé) | (15) 3200-0000 | ☐ Sim ☐ Mudou para: ______ |
| WhatsApp (botão do formulário) | (15) 99000-0000 | ☐ Sim ☐ Mudou para: ______ |
| E-mail | contato@ravenasolar.com.br | ☐ Sim ☐ Mudou para: ______ |
| Endereço | Av. das Nações, 1420, sala 8, Sorocaba/SP | ☐ Sim ☐ Mudou para: ______ |
| CEP | 18000-000 | ☐ Sim ☐ Mudou para: ______ |
| CNPJ | 00.000.000/0001-00 | ☐ Sim ☐ Mudou para: ______ |

Atenção a estes dois pontos:
- **CNPJ e CEP parecem valores de exemplo** (zeros e CEP genérico). Podem ter vindo assim do site antigo. Não publicar sem confirmar.
- **O botão "Enviar no WhatsApp"** usa o número `WA_NUMERO` em [index.html](index.html), hoje (15) 99000-0000, informado pelo Joel. Se o número mudou ou não tem WhatsApp, o cliente não consegue falar com a Ravena por esse botão. Teste: abrir `https://wa.me/5515990000000` no celular.

## 2. Formulário e armazenamento

- ☐ Conferir se as linhas de teste "TESTE Claude (apagar)" chegaram na planilha e apagá-las.
- ☐ Definir o `EMAIL_AVISO` em [apps-script/Code.gs](apps-script/Code.gs) para o vendedor ser avisado de cada lead. Depois, criar nova versão da implantação.
- ☐ Confirmar que a planilha e a pasta do Drive estão privadas, com acesso só da equipe.
- ☐ Confirmar quem vai olhar a planilha, e com que frequência. A promessa do site é resposta **no mesmo dia útil**.
- ☐ Publicar uma política de privacidade e linkar na linha de consentimento do formulário (hoje o texto não tem link). A conta de luz anexada tem dados pessoais.
- ☐ Testar o envio completo no site publicado, com e sem anexo, no celular.

## 3. Números e provas (confirmar que estão atuais)

Aparecem no site como fatos. Se algum mudou, corrigir:
- ☐ 412 sistemas instalados, 6 anos de empresa, 11 pessoas.
- ☐ Nota 4,8 no Google com 137 avaliações.
- ☐ Caso de Sorocaba (conta de R$ 780 para R$ 118, sistema de 6,4 kWp, instalado em março de 2025): confirmar que o cliente autorizou o uso.
- ☐ Garantias: 25 anos do painel, 10 do inversor, 5 da instalação (inclui infiltração). Conferir com o contrato.
- ☐ Faixa de investimento, retorno de 3 a 4 anos, redução de 75% a 90% na conta, prazo de 45 a 60 dias.
- ☐ Atendimento em Sorocaba, Votorantim, Itu e Salto, e os dois bancos de financiamento.
- ☐ Fotos: confirmar autorização de imagem das pessoas e das casas que aparecem.

## 4. Antes de ir ao ar

- ☐ Domínio e hospedagem definidos, e o site antigo substituído.
- ☐ Métricas (`dataLayer`) ligadas a uma ferramenta de análise. Hoje os eventos são enviados, mas ninguém os recebe.
- ☐ Revisão final do texto pela empresa, principalmente as promessas (o setor tem fama ruim e o Procon da região é ativo).
