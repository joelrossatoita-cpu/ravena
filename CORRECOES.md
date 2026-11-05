# Sugestões de correção: revisão final de 05/11/2026

> Baseado na crítica `.impeccable/critique/2026-11-05T17-48-40Z__index-html.md` (25/36), conferida contra o `SPEC.md` e o `brief.md`. **Status (05/11/2026): itens 5 a 20 aplicados no `index.html` e conferidos no navegador** (1440, 1100, 840 e 375 px). Os números de linha se referem à versão anterior às correções.
>
> **Fora deste relatório:** tudo o que é do formulário de simulação. Isso será feito à parte; a lista do que ficou para lá está no fim (§ F).

Ordem sugerida: P1 primeiro (afetam confiança e o SPEC), depois P2, depois P3. Cada item diz **onde**, **o problema**, **a correção** e **como conferir**.

---

## P1: contraste

> Os itens 1 a 4 (dados do rodapé, retomada do CTA, "garante" no FAQ e subtítulo do hero) foram retirados deste relatório a pedido do cliente em 05/11/2026. Os dados de contato do rodapé vêm do site anterior e estão validados (SPEC §6 e §7).

### 5. Rodapé ilegível no celular e abaixo do contraste no computador

**Onde:** CSS l.520–546 (`.foot`, `.foot__bg`, `.foot__scrim`).

**Problema (medido no navegador):**
- **375 px:** título branco sobre céu claro, **1,84:1** (mínimo 3:1 para texto grande).
- **1440 px:** título 3,25:1 (passa raspando); notas do CTA 4,44:1 e descrição da marca 3,44:1 (mínimo 4,5:1).

O motivo: a máscara faz a foto nascer do branco (`transparent 0% → #000 26%`), e o título está justamente nessa faixa clara de céu.

**Como foi aplicado (diferente da sugestão original):** a primeira ideia, texto azul sobre o céu, falhou na medição a 1440 px (2,2:1), porque ali o céu é azul médio. A solução aplicada mantém o texto branco e muda o fundo:

- a passagem do branco para a foto termina antes do título (`mask-image: linear-gradient(to bottom, transparent 0, #000 110px)`, menor que o `padding-top` de 120 px ou mais);
- um véu no azul da marca cobre a foto inteira: 0 → 0,5 até 12% da altura, 0,5 até a metade, 0,75 em 75% e 0,85 no fim.

**Resultado medido (pior pixel):** a 1440 px, título 7,3:1, notas do CTA 7,6:1, descrição 5,6:1, contato 6,5:1; a 375 px, título 7,7:1, notas 7,5:1, descrição 7,1:1, contato 6,6:1.

**Conferir:** medir de novo nos dois tamanhos (título ≥ 3:1, texto de 16–17 px ≥ 4,5:1). Se o título cair sobre a borda do painel em alguma largura, aumentar o `padding-top` do `.foot` em vez de clarear o texto.

---

## P2: texto, clareza e o "Como funciona"

### 6. O caso de Sorocaba não faz o que o SPEC 3.2 pede

**Onde:** `.p2`, l.687–688.

**Problema:**
- falta o enquadramento de amostra: *"dentro dos 75% a 90% de queda que vemos na média dos nossos clientes"*;
- a "permanência" tem só um dos três pontos (equipe própria). Faltam acompanhamento no 1º ano e assistência técnica autorizada da marca do inversor;
- o tamanho do sistema (6,4 kWp, dado do brief) não aparece. Quem compara 3 orçamentos vai ver "kWp" nos outros;
- "Energia Solar" com maiúsculas, "média" repetida, "sem preocupações para o cliente" é enchimento;
- "cliente." fica sozinha na última linha a 1440 px (detector).

**Correção:**

```html
<p>Uma das 412 casas que instalamos na região: um sistema de 6,4 kWp (o tamanho do sistema),
ligado em março de 2025. Na média dos 12 meses seguintes, a conta ficou em <span class="nb">R$ 118</span>:
85% a menos, dentro dos 75% a 90% de queda que vemos na média dos nossos clientes.</p>
<p>Quem instalou foi a <strong>nossa equipe, com carteira assinada</strong>. No primeiro ano
acompanhamos a produção, e somos assistência técnica autorizada da marca do inversor.</p>
```

CSS: `.p2 p { text-wrap: pretty; }` (resolve a palavra sozinha).

**Conferir:** o SPEC 3.2 item por item: caso, amostra, permanência (3 pontos), sem fala de cliente.

---

### 7. Texto ao lado das fotos geradas por IA diz "nosso"

**Onde:** l.761 e l.770.

**Problema:** o `IMAGENS.md` diz que, com foto que não é da Ravena, o texto ao lado não pode dizer que é a equipe dela. Hoje: *"Um técnico nosso mede o seu telhado"* e *"com equipe própria"*, ao lado de técnicos gerados por IA.

**Correção:**

- l.761: **Visita técnica.** Um técnico mede o seu telhado, sem custo e sem compromisso.
- l.770: **Instalação.** Dois dias de obra no seu telhado. Se a obra causar infiltração, a garantia de 5 anos cobre.

O fato "equipe própria, com carteira assinada" continua na prova do hero, no caso (item 6) e no FAQ nº 1, longe das fotos.

**Melhor a médio prazo:** o brief diz que existem fotos próprias de 40 obras, autorizadas. Pedir ao cliente 3 delas (técnico medindo, gancho/trilho sobre telha de barro, inversor) e trocar. Com foto real, o "nosso" volta e passa a ser prova. O hero também é foto de banco (`fotos/pexels-…`) com uma casa vizinha de aparência europeia; é o primeiro candidato a trocar.

---

### 8. Setas do "Como funciona" incoerentes e mudas

**Onde:** JS l.1136–1162; CSS l.402–413.

**Problema (já apontado na crítica anterior e ainda aberto):**
- "Próxima" na fase 3 volta para a 1ª (`i = (i + n) % n`); "Anterior" na 1ª fica desativada; o teclado para nas pontas. São três regras diferentes;
- a troca pelas setas não é anunciada ao leitor de tela;
- no celular, as setas ficam ~600 px abaixo da foto, que muda fora da tela.

**Correção:**

```js
function go(i, foco) {
  i = Math.max(0, Math.min(fases.length - 1, i));        // sem dar a volta
  if (i === atual) return;
  sec.style.setProperty('--dx', atual > -1 && i < atual ? '-40px' : '40px');
  atual = i;
  /* … igual … */
  prev.disabled = i === 0;
  next.disabled = i === fases.length - 1;
  status.textContent = `Fase ${i + 1} de ${fases.length}: ${tabs[i].textContent}`;
  if (foco) tabs[i].focus();
}
```

HTML, dentro de `.palco__txt`: `<p class="sr-only" aria-live="polite" id="fase-status"></p>` e `const status = sec.querySelector('#fase-status');`. Na primeira chamada (`go(0)`), não anunciar (limpar o texto logo depois ou só preencher a partir da 2ª troca).

CSS:

```css
.sr-only { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }
@media (max-width: 820px) { .palco__ctl .seta { display: none; } }   /* no celular: abas + arrastar */
```

Quando uma seta fica desativada com o foco nela, mandar o foco para a outra seta.

**Conferir:** clicar, teclado (← → Home End), arrastar no celular, e com leitor de tela (NVDA) ouvir "Fase 2 de 3: Projeto e obra".

---

### 9. "Funcionamento" sem o destaque que o SPEC pede

**Onde:** l.777. O SPEC 3.3 diz que FUNCIONAMENTO *"é o destaque visual da linha"*.

**Correção:** `<li class="destaque">` e

```css
.lista li.destaque { background: #FDF0DD; padding: 14px 16px; margin: 0 -16px; }
```

(o mesmo creme do aviso, que já é da paleta; o `margin` negativo mantém o texto alinhado com as outras etapas).

---

### 10. "Taxaram o sol" não é explicado

**Onde:** FAQ, l.837.

**Problema:** o SPEC 3.4 pede a Lei 14.300 *"explicada em linguagem simples"*. A resposta diz que *"quase ninguém explica direito"*, e também não explica.

**Correção (só com o que o brief diz):**

> Vale. Desde a Lei 14.300, a energia que o seu sistema manda para a rede durante o dia paga uma pequena cobrança, que aumenta um pouco a cada ano. Na prática, o que sobra de energia rende um pouco menos de crédito do que rendia antes.
>
> Mesmo com essa cobrança, o que vemos hoje: na média dos nossos clientes, a conta cai de **75% a 90%** e o investimento volta em **3 a 4 anos**. Na simulação, o vendedor faz a conta com o valor da sua conta de luz, já com a cobrança, e não com uma promessa genérica.

**Aplicado sem o trecho "já com a cobrança"**, que seria uma afirmação nova. Se o cliente confirmar que a simulação já considera a cobrança, dá para acrescentar.

---

### 11. Termos sem explicação

- **Inversor:** com o novo texto do caso (item 6), a primeira vez que a palavra aparece passa a ser na seção 2, então a explicação foi para lá: *"…assistência técnica autorizada da marca do inversor, o aparelho que converte a energia dos painéis para a sua casa."*
- **"homologação"** na `meta description` (l.7): trocar por *"aprovação da CPFL"* (SPEC §5).

---

## P3: acabamento

| # | Onde | Problema | Correção |
|---|---|---|---|
| 12 | l.810 | "Dúvidas Frequentes" em caixa de título; os outros títulos usam só a inicial | "Dúvidas frequentes" |
| 13 | l.502 | `line-height: 1.25` nas perguntas do FAQ (detector) | `1.3` |
| 14 | l.489 | Cabeçalho do FAQ centralizado numa página alinhada à esquerda | `.faq__head { text-align: left; }` e tirar o `margin-inline: auto` do `.p4 h2` (l.493). Opcional |
| 15 | l.612 × l.948 | Índice do topo diz "O caso real", o do rodapé "O caso de Sorocaba" | **Aplicado:** "O caso de Sorocaba" nos dois; cabe na barra a 840 e a 1100 px sem estourar |
| 16 | l.1235 | `aria-current="true"` no índice | `aria-current="location"` (e ajustar o seletor CSS l.83) |
| 17 | l.667 / l.158 | Link "137 avaliações no Google" com 24 px de altura no celular | `.proof a { display: inline-flex; align-items: center; min-height: 44px; }` |
| 18 | l.399, l.509 | Palavras sozinhas no fim de parágrafos | `text-wrap: pretty` em `.lista li` e `.qa .resp p` (junto com o item 6) |
| 19 | l.114 | A 1440 px, as notas do CTA e o "6 anos" ficam sobre a parte meio transparente da foto | Empurrar a máscara: `transparent 26%, #000 64%`. Conferir que o telhado continua aparecendo |
| 20 | l.277 | No celular (≤ 420 px) os 3 números da prova ficam empilhados e empurram o resto para baixo | Três colunas não cabem a 375 px (as estrelas da nota precisam de ~110 px). **Aplicado:** a nota ocupa a linha, e 412 e 6 anos ficam lado a lado |

---

## Sugestão que precisa do cliente (conteúdo novo)

**"O que comparar nos 3 orçamentos."** O comprador pede três orçamentos; a página poderia dar a lista do que perguntar a qualquer integradora: tamanho do sistema em kWp, quem sobe no telhado (equipe própria ou terceirizada), garantia contra infiltração por escrito, assistência autorizada do inversor, prazo realista (45 a 60 dias). Em todos os itens a Ravena tem resposta. **Não entra sem aprovação do cliente**, porque é uma seção que o SPEC não prevê.

---

## F. Fica para o trabalho do formulário (não tratado aqui)

Para não se perder, os achados da crítica que pertencem ao formulário:

1. **[P0]** O envio não vai para lugar nenhum (`TODO` l.1084) e não há GTM/GA4 para o `dataLayer`.
2. **[P1]** `valor()` (l.1074): "150,00" vira R$ 15.000 e fura o filtro.
3. **[P1]** A 375 px o campo de anexo vaza do diálogo (424 px de conteúdo em 337 px).
4. Erros só com balão nativo, às vezes em inglês; sem mensagem própria para o WhatsApp; sem `aria-invalid`.
5. Foco inicial do diálogo vai para "Fechar"; depois do envio o foco cai no `<body>`; aviso de R$ 200–449 sem `aria-live`; popup sem `aria-describedby`.
6. O aviso pisca ao digitar valores altos (2000 passa por 200): avaliar ao sair do campo.
7. Reabrir depois do envio mostra "Pedido recebido" e registra `simulacao_aberta`, sujando a métrica.
8. Sem JS, o formulário faria um GET com nome e WhatsApp na URL.
9. Nome só com espaços passa na validação.
10. Abrir por `#simulacao` direto grava a origem como "hero".
11. Tela de sucesso fraca: repetir o próximo passo (visita sem custo e sem compromisso).
12. Considerar o valor da conta como primeiro campo, para quem tem conta baixa ver o aviso antes de preencher o resto.
13. Decidir se o formulário fica inline na retomada (SPEC 3.5) ou no diálogo.
