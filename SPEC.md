# Spec: página de venda da Ravena Solar

> Uma página só, em cinco seções, para energia solar residencial. Todo número citado aqui vem do `brief.md`. Se um dado não está no brief, ele não entra na página.

---

## 1. Objetivo

**A ação que a página pede:** pedir uma simulação.

A simulação só vale se trouxer os quatro dados obrigatórios:

| Campo | Tipo | Regra |
|---|---|---|
| Nome | texto | obrigatório |
| WhatsApp | telefone com DDD | obrigatório, com máscara `(15) 9XXXX-XXXX` |
| Cidade | lista | Sorocaba, Votorantim, Itu, Salto, "Outra cidade da região" |
| Valor médio da conta de luz | número em R$ | obrigatório, define o filtro (ver seção 2) |
| Foto ou PDF da conta | anexo | **opcional**: o brief diz que ajuda, mas que nem todo mundo vai anexar |

Depois do envio, a página diz o que acontece em seguida, sem prometer além do brief: *"Você recebe a resposta pelo WhatsApp no mesmo dia útil."*

**Como saber que funciona:**

- **Volume:** os pedidos de simulação passam de ~12 para **25 por mês** (meta do brief).
- **Qualidade:** diminui a parte dos pedidos com conta abaixo de R$ 200. Para medir, a página conta quantas vezes o popup abre e quantas pessoas clicam em "Enviar mesmo assim".
- **Completude:** 100% dos pedidos que chegam trazem os quatro campos obrigatórios. Hoje o formulário do rodapé não exige isso.
- **Origem:** cada pedido registra de qual CTA veio (hero, fim da página etc.) para saber qual seção converte.

## 2. Para quem

**Público que a página atrai:** pessoa comum, de 20 a 60 anos, que quer pagar menos de luz em casa.

**Quem de fato compra** (é para essa pessoa que o texto é escrito): tem entre 35 e 60 anos, é dono da casa, geralmente tem família, não pretende vender o imóvel tão cedo e paga **R$ 450 ou mais** de luz. Costuma pedir três orçamentos e leva de 2 a 8 semanas para decidir. Por isso a página precisa responder às dúvidas sem depender do vendedor.

**Quem a página quer afastar:** quem paga **menos de R$ 200**. Com essa conta a venda não fecha, e o pedido toma o tempo do vendedor.

**Não há corte.** Nenhum pedido é bloqueado. A página afasta quem não compensa avisando com honestidade, e a pessoa decide se envia ou não. O campo "valor da conta" funciona assim:

| Conta informada | O que a página faz |
|---|---|
| **Abaixo de R$ 200** | Abre um **popup** dizendo que não vale a pena: *"Com uma conta abaixo de R$ 200, a energia solar não compensa: o sistema demora demais para se pagar. Preferimos te dizer isso agora do que te vender algo que não vale a pena."* O popup tem dois botões: **"Corrigir o valor"** (volta ao campo) e **"Enviar mesmo assim"** (envia o pedido). |
| **R$ 200 a R$ 449** | Mostra um **aviso** embaixo do campo, sem interromper o preenchimento: *"Para contas abaixo de R$ 450, a economia existe, mas o retorno costuma demorar mais. Você pode pedir a simulação mesmo assim."* O pedido é enviado normalmente. |
| **R$ 450 ou mais** | Não mostra aviso. O pedido é enviado normalmente. É o perfil ideal. |

Todo pedido chega ao vendedor com o valor da conta, para ele saber quem priorizar.

Perto do CTA também aparece o texto *"Ideal para contas a partir de R$ 450 por mês"*. Assim a pessoa já se filtra sozinha antes de preencher.

## 3. O que entra, em ordem

### 3.1 Hero: provar o valor e levar para a simulação

| Parte | Função | Conteúdo |
|---|---|---|
| **Título** | Provar o valor com um número | Foco na conta de luz menor, por exemplo: *"Pague de 75% a 90% menos de luz, com instalação feita pela nossa equipe."* |
| **Subtítulo** | Dizer o que é e como agrega valor | Painéis no telhado, ligados à rede da CPFL, com projeto, instalação e acompanhamento feitos pela Ravena. Atende Sorocaba, Votorantim, Itu e Salto. |
| **Visual** | Trazer o produto para a realidade do cliente | Foto de telhado com painéis. O antes e depois da conta fica na seção 3.2, como barras na proporção real (ver §7: nada de imitar a conta da CPFL). |
| **Prova social** | Dar confiança logo de cara | Faixa com **412 casas instaladas** · **nota 4,8 no Google (137 avaliações)** · **6 anos em Sorocaba**. |
| **CTA** | Levar direto para a simulação | Botão **"Simular minha economia"**, que abre o formulário (ou rola até ele). Embaixo, a linha do filtro: *"Ideal para contas a partir de R$ 450/mês"*. |

### 3.2 Prova social: o caso de Sorocaba

Seção curta, sem altura de página, só com a prova. O caso conferido é o protagonista, e a seção prova duas coisas: o resultado e que a empresa continua por perto. Nenhuma fala de cliente.

- **O caso, em destaque:** é o único título com marca-texto: *"Em Sorocaba, a conta de R$ 780 virou R$ 118."*
- **O caso como amostra:** o texto diz que é *"uma das 412 casas que instalamos na região"* e que os 85% ficam *"dentro dos 75% a 90% de queda que vemos na média dos nossos clientes"*. Os números do hero voltam aqui com outra função: mostrar que o caso não é exceção (decisão do cliente, 04/11/2026).
- **Permanência:** equipe própria com carteira assinada, acompanhamento da produção no primeiro ano e assistência técnica autorizada da marca do inversor. É a prova que uma empresa que some não teria.
- **O visual:** duas barras na proporção real (118 / 780 = 15,1%). O rótulo do "depois" diz "na média", porque R$ 118 é a média de 12 meses e não a conta de um mês. A legenda repete "R$ 662 a menos" (o rótulo dentro do gráfico não chega ao leitor de tela) e explica que a conta não zera: taxa mínima e custo do fio, que é o uso da rede da CPFL. A barra do "depois" tem contorno #A84C0C e o tracejado é #6B849B, para passar de 3:1 sobre o painel.
- **Movimento:** só o gráfico anima. Quando ele entra na tela, a barra de "depois" encolhe de 780 até 118 (0,15 s de espera, 0,9 s de queda). O texto nunca fica escondido. Quem pediu menos movimento, e a impressão, veem o estado final.
- **Fecho:** *"E a sua conta, quanto cairia?"* + botão "Simular minha economia" (origem `caso`) + a linha do filtro (R$ 450/mês, sem quebra no meio do valor) e a do WhatsApp no mesmo dia útil.

As objeções (empresa sumir, telhado, Lei 14.300) saíram desta seção por decisão do cliente em 04/11/2026. Elas são respondidas na seção 3.3 e no FAQ (3.4). O título do hero continua "até 90%", também por decisão do cliente.

### 3.3 Como funciona: o valor do produto, do primeiro contato ao suporte

> **Como ficou na página (05/11/2026, decisão do cliente):** a seção cabe em uma tela, no modelo do "Como funciona" da Lemon (energialemon.com.br): um palco com três fases, cada uma com uma foto, um título que afirma algo e três linhas. As 9 etapas se dividem em 3 × 3: *Antes de assinar* (simulação, visita, proposta), *Projeto e obra* (assinatura, projeto com aprovação da CPFL, instalação) e *Sistema ligado* (vistoria e ligação, funcionamento, acompanhamento). Abas, setas, teclado (← → Home End) e arrastar no celular trocam a fase, com transição; o botão "Simular minha economia" fica sempre visível. Sem JavaScript, as três fases aparecem uma embaixo da outra. A previsão de data e as barras de prazo saíram para a seção ficar simples; o prazo de 45 a 60 dias está na etapa de vistoria. Os três blocos de problema abaixo foram absorvidos pelas fases. **A seção usa fotos**, seguindo `IMAGENS.md`. **Faixa de prazo e garantia (05/11/2026):** embaixo do palco, fora das abas e sempre visível, três números no desenho da prova do hero: *45 a 60 dias* (da assinatura ao sistema ligado), *2 dias* (de obra no seu telhado), *5 anos* (de garantia da instalação, incluindo infiltração). Responde aos medos do telhado e do prazo para quem nunca clica numa aba.

Esta seção mostra o que a Ravena entrega e como isso resolve os três maiores problemas de quem pensa em energia solar. Abre com três blocos, cada um com o problema e a resposta da Ravena. Depois vem a linha do tempo.

| Problema do cliente | Como a Ravena resolve | Dado do brief que sustenta |
|---|---|---|
| **"É muita burocracia e dificuldade para instalar."** | **Instalação completa.** A Ravena faz o projeto, a aprovação da CPFL, a instalação e o acompanhamento. O cliente não corre atrás de papel nenhum. | Equipe própria com carteira assinada, sem terceirização. Instalação em 2 dias. |
| **"A conta de luz está muito cara."** | **A conta cai de 75% a 90%.** No caso conferido: de R$ 780 para R$ 118 por mês (média de 12 meses). O retorno leva de 3 a 4 anos e o sistema dura mais de 25. | Nunca escrever 95% nem "conta zero": sempre resta a taxa mínima e o custo do fio. |
| **"E se a empresa sumir e eu ficar sem suporte?"** | **6 anos de mercado e garantia por escrito.** 412 sistemas instalados e assistência técnica autorizada da marca do inversor. Garantias: **25 anos** de desempenho do painel, **10 anos** do inversor e **5 anos** da instalação, incluindo infiltração causada pela obra. Depois de ligado, acompanha a produção no 1º ano e liga se cair fora do previsto. | Garantias e prazos copiados do brief, sem arredondar. |

Cada bloco termina com um número em destaque (2 dias · 75% a 90% · 25/10/5 anos de garantia). Sem fala de cliente e sem foto.

Em seguida, a linha do tempo mostra o ciclo completo, com 9 etapas e uma frase em cada uma:

1. **Simulação**: você manda os dados e recebe a resposta pelo WhatsApp no mesmo dia útil.
2. **Visita técnica sem custo**: medição do telhado, sem compromisso.
3. **Proposta**: três tamanhos de sistema para você comparar.
4. **Assinatura**: com opção de financiamento por dois bancos parceiros, com entrada zero possível.
5. **Projeto**: inclui a homologação na CPFL.
6. **Instalação**: dois dias no seu telhado.
7. **Vistoria**: a distribuidora confere a instalação.
8. **FUNCIONAMENTO**: o sistema é ligado. É o destaque visual da linha.
9. **Acompanhamento**: no primeiro ano a Ravena acompanha a produção e liga para você se ela cair fora do previsto.

Junto da linha do tempo vai o prazo total: **de 45 a 60 dias entre a assinatura e o sistema ligado**. A maior parte desse tempo é a homologação na CPFL, que não depende da empresa.

### 3.4 FAQ: as objeções, na ordem do brief

1. Como sei que vocês não vão sumir daqui a dois anos?
2. Isso não vai estragar meu telhado? (inclusive telha de barro)
3. Ouvi dizer que "taxaram o sol". Ainda vale a pena? (Lei 14.300, explicada em linguagem simples)
4. E se eu mudar de casa?
5. E em dia nublado, e à noite?
6. Preciso de bateria?
7. A conta zera? (não: sempre resta a taxa mínima e o custo do fio)
8. Quanto custa e tem financiamento? (de R$ 14 mil a R$ 19 mil; parcela próxima do que já paga de luz na maioria dos casos)

As respostas usam só informação do brief. Use acordeão para a página não ficar longa demais.

### 3.5 Retomada do CTA: lembrar o valor e o impacto

- Retoma o número principal (75% a 90% menos na conta, retorno em 3 a 4 anos, sistema que dura mais de 25 anos).
- Mostra o impacto na vida do cliente com conta simples, sem prometer nada. Exemplo: *"quem paga R$ 600 de luz pode passar a pagar algo entre R$ 60 e R$ 150"* (é o mesmo intervalo de 75% a 90%).
- **O formulário de simulação fica aqui, completo**, com os 4 campos, o aviso e o popup. É o mesmo formulário que o botão do hero abre.
- Repete a linha *"resposta no WhatsApp no mesmo dia útil"*.

## 4. O que fica de fora, e por quê

| Corte | Por quê |
|---|---|
| Vídeos de depoimento | Os arquivos não estão no projeto, então não há como provar que existem. |
| Fotos de obras | Os arquivos não estão no projeto. Os visuais serão ilustrações, nunca fotos de banco de imagem passando por obra da Ravena. |
| Qualquer fala ou depoimento de cliente | É proibido simular fala de cliente. Nada de citações com nome, nem que pareçam reais. |
| Avaliações do Google copiadas para a página | Reescrever avaliação é simular fala. A página mostra só a nota e o total, com link para o perfil. |
| "Quem somos" e "nossa missão" | O site de 2021 tinha essas seções e não trazia cliente. Os fatos que importam (6 anos, 11 pessoas, equipe própria) entram como prova na faixa do hero (3.1) e na seção 3.3. |
| Formulário de contato genérico no rodapé | Ele deixa de existir. O único formulário é o da simulação, com os campos obrigatórios. |
| Bateria, comércio e indústria | A Ravena não vende bateria nem atende acima de 75 kWp. Falar disso atrairia o lead errado. |
| Manutenção de sistema de outra empresa | A Ravena não faz. |
| Calculadora de economia exata | Ela daria um número que pareceria promessa. A simulação de verdade é feita pelo vendedor. |

## 5. Restrições do cliente

**Linguagem:** a de quem paga a conta de luz, direta e com números. Explique os termos técnicos quando eles aparecerem: "kWp" vira "tamanho do sistema", e "homologação" vira "aprovação da CPFL".

**Palavras e ideias proibidas:**

- "Sustentável" / "sustentabilidade"
- "Energia do futuro"
- "Revolução" / "revolução solar"
- Jargão de mercado ou de causa global ("transição energética", "planeta", "matriz limpa" e afins)
- "Grátis": o brief proíbe a palavra. A visita técnica é chamada de **"sem custo e sem compromisso"**.

**Promessas proibidas:**

- **Nunca prometer 95% de economia.** O máximo permitido é o intervalo do brief: **75% a 90%, "na média dos nossos clientes"**.
- **Nunca prometer prazo menor que o padrão.** O prazo é **de 45 a 60 dias** (até 2 meses) entre a assinatura e o sistema ligado. Nada de "em 30 dias" nem "instalação imediata".
- Nunca dizer que a conta zera.

## 6. Fonte de cada dado

| Dado | Valor | Fonte |
|---|---|---|
| Sistemas instalados | 412 residenciais | `brief.md`, "O que temos de prova" |
| Nota no Google | 4,8 com 137 avaliações | `brief.md`, "O que temos de prova" |
| Caso conferido | R$ 780 → R$ 118/mês, 6,4 kWp, Sorocaba, mar/2025 | `brief.md`, "O que temos de prova" |
| Tempo de empresa e equipe | 6 anos, 11 pessoas, sede em Sorocaba | `brief.md`, "A empresa" |
| Área atendida | Sorocaba, Votorantim, Itu, Salto (raio de 80 km) | `brief.md`, "A empresa" |
| Economia média | 75% a 90% | `brief.md`, "O que vendemos" |
| Retorno e durabilidade | 3 a 4 anos; mais de 25 anos | `brief.md`, "O que vendemos" |
| Investimento | R$ 14 mil a R$ 19 mil (ticket médio R$ 16.300) | `brief.md`, "O que vendemos" |
| Prazo | 45 a 60 dias; instalação em 2 dias | `brief.md`, "O que vendemos" |
| Garantias | painel 25 anos, inversor 10 anos, instalação 5 anos | `brief.md`, "O que vendemos" |
| Financiamento | 2 bancos, entrada zero possível | `brief.md`, "O que vendemos" |
| Resposta da simulação | mesmo dia útil, por WhatsApp | `brief.md`, "O que queremos que aconteça" |
| Metas | de 12 para 25 simulações por mês | `brief.md`, "O que queremos que aconteça" |
| Logo | SVG e PNG | `logos/logo.svg`, `logos/logo.png` |
| Cores da marca | `#123A55` (azul), `#F2A03D` (sol), `#E8721C` (laranja), `#FFFFFF` | lidas de `logos/logo.svg`. O brief pede para sempre pegar as cores do arquivo, nunca de memória. |

## 7. Decisões tomadas onde o pedido e o brief divergem

- **Contas baixas.** O brief diz que abaixo de R$ 450 a empresa desaconselha a compra. **Decisão do cliente:** nenhum pedido é bloqueado. Abaixo de R$ 450 a página mostra um aviso; abaixo de R$ 200, um popup dizendo que não vale a pena. A pessoa ainda pode enviar se quiser.
- **"Visita técnica grátis".** O brief proíbe a palavra "grátis", então a página usa "visita técnica sem custo".
- **Homologação.** Não aparece no ciclo do pedido, mas é a etapa mais longa. Entra dentro de "Projeto", para explicar o prazo de 45 a 60 dias.
- **Conta de luz ilustrada.** A primeira versão desenhava uma conta da CPFL com a marca, o CNPJ e o endereço reais da distribuidora, e mostrava R$ 118,00 como se fosse um mês só, quando R$ 118 é a média de 12 meses. Isso parece documento real e afirma algo falso. Foi trocada por barras na proporção real, com a média dita por extenso.
- **Vídeos e fotos.** O brief diz que existem, mas os arquivos não estão no projeto. Ficam fora até chegarem com autorização. Mesmo quando chegarem, depoimento só entra se for o vídeo real.
