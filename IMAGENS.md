# Estilo das imagens: Ravena Solar

> Vale para a página inteira a partir da seção "Como funciona". Antes de colocar uma foto, confira se ela segue as regras abaixo.

## A ideia

**As cores da marca já estão no telhado.** O azul do painel é o `#123A55` da logo, a telha de barro é o laranja `#E8721C` e o céu limpo de Sorocaba é o fundo. Por isso a foto não leva filtro de cor, moldura nem efeito: ela já combina com a página, desde que seja tirada **de dia, com céu limpo e cores reais**.

O tom é de **registro de obra**, não de propaganda. São fotos que um técnico tiraria para mostrar ao cliente o que foi feito: mãos, ferramentas, telhado, equipamento. Assim a foto responde às dúvidas do brief ("vão estragar meu telhado?", "vocês vão sumir?") em vez de só enfeitar.

## Regras

| Faça | Não faça |
|---|---|
| Luz do dia, sol de manhã ou de tarde, céu azul | Pôr do sol dourado, lens flare, céu dramático |
| Telha de barro (é a casa de quem compra na região) | Telhado de casa europeia ou americana, neve, telha shingle |
| Gente trabalhando, de lado ou de costas, com EPI (capacete, cinto, luva) | Pessoa sorrindo para a câmera, aperto de mão, "família feliz" na frente da casa |
| Detalhe de perto: gancho, trilho, cabo, display do inversor | Ícones, ilustrações 3D, painel brilhando com raios de luz |
| Tela real (celular com a conversa, app do inversor) | Notebook com gráfico inventado, dashboard genérico |
| Cores naturais, o mesmo tratamento em todas | Preto e branco em umas e colorido em outras, saturação forçada |

**Tratamento na página (já aplicado pelo CSS em `.shot img`):** o mesmo leve ajuste da foto do hero (`hue-rotate(-10deg) saturate(.92)`), cantos retos, nenhum texto por cima da foto.

**Proporção:** a seção "Como funciona" usa `4:3` nas três fotos (no celular o recorte vira quadrado, então deixe o assunto no centro). Para fotos futuras em outras seções, mantenha só `4:3` e `3:2`.

**Tamanho mínimo:** 2000 px no lado maior. Exporte em `.jpg` (qualidade 80) e, se puder, também em `.webp`.

## Atenção: de onde vem a foto

O brief diz que a Ravena tem **fotos próprias de 40 obras**, telhado e inversor, todas autorizadas. Elas são a primeira opção para todos os espaços abaixo.

Se usar foto de banco de imagem (Pexels, Unsplash), ela pode mostrar **o mundo da energia solar**, mas não pode passar por obra ou equipe da Ravena (spec, §4). Na prática:

- **Pode ser de banco:** o detalhe do gancho na telha, o display de um inversor, um projeto de telhado na tela.
- **Precisa ser da Ravena:** a foto da equipe no telhado e a do técnico na visita, porque a legenda diz que é a nossa equipe. Com foto de banco, troque a legenda por uma que não diga "nossa".

## Os espaços da seção "Como funciona"

A seção é um palco de três fases (como o "Como funciona" da Lemon): uma foto por fase, que troca junto com o texto. Cada espaço está no `index.html` com `data-foto="<nome>"`. Para trocar, apague o `<div class="ph">…</div>` dentro do `<figure>` e coloque no lugar:

```html
<img src="img/como-visita.jpg" width="2000" height="1500" alt="(descreva o que a foto mostra)" loading="lazy">
```

| Fase | `data-foto` | Arquivo | O que mostra | Busca sugerida |
|---|---|---|---|---|
| Antes de assinar | `visita` | `img/como-visita.jpg` | Técnico medindo o telhado de barro, trena ou medidor a laser na mão. De perto, da cintura para cima, ninguém olhando para a câmera. | *technician measuring roof*, *roof inspection tape measure* |
| Projeto e obra | `instalacao` | `img/como-instalacao.jpg` | Instaladores de uniforme e cinto fixando o trilho sobre a telha de barro, com a telha inteira. Céu azul, de lado. Responde a "vai estragar meu telhado?". | *solar installers roof clay tiles*, *instaladores painel solar telhado* |
| Sistema ligado | `inversor` | `img/como-inversor.jpg` | O inversor na parede com o display aceso mostrando a produção, cabos organizados. Luz natural. | *solar inverter wall display*, *inversor solar parede* |

As fotos `visita` e `instalacao` mostram gente trabalhando: se vierem de banco de imagem, a legenda e o texto em volta não podem dizer que é a equipe da Ravena (ver acima). A do inversor pode vir de banco sem problema.

## Fotos em uso (05/11/2026, versão 3)

| Fase | Arquivo na página | Original |
|---|---|---|
| Antes de assinar | `img/como-visita-1448.jpg/.webp` (+ versão 800) | `fotos/como-funciona/Inspeção do Telhado no Quintal.png` |
| Projeto e obra | `img/como-instalacao-1448.jpg/.webp` (+ versão 800) | `fotos/como-funciona/Família Observa Instalação Solar.png` |
| Sistema ligado | `img/como-inversor-1448.jpg/.webp` (+ versão 800) | `fotos/como-funciona/Casal inspeciona sistema solar na garagem.png` |

Geradas por IA com os prompts da versão 3, do ponto de vista do dono da casa e com uniforme cinza sem logo. As três são 4:3 (1448 × 1086), abaixo do mínimo de 2000 px; numa troca futura, prefira arquivos maiores.

## Prompts para gerar as fotos (versão 3: o ponto de vista do dono da casa)

**Por que trocar (crítica de 05/11/2026):** as fotos da versão 2 mostram técnicos com uniforme nas cores da marca, ao lado de "um técnico nosso" e "equipe própria". Como são geradas por IA, parecem ser a equipe da Ravena, o que contraria a regra acima e a spec (§4).

**A ideia agora:** a câmera fica com o dono da casa. Cada foto mostra o projeto acontecendo **na casa dele**, do lugar de onde ele assiste: o quintal, a varanda, a porta da garagem. Ele aparece de costas ou de lado, nunca olhando para a câmera, e o que dá pessoalidade são os sinais de uma casa vivida, como o varal, a bicicleta das crianças, o cachorro, a caneca de café e o portão.

**O que muda em relação à versão 2:**

- Uniforme **cinza-claro, sem logo e sem faixa laranja**, para a foto não dizer "esta é a equipe da Ravena".
- Nenhum texto legível: nada de tela de celular com números, conta de luz ou marca.
- Continua igual: 4:3, 2400 × 1800 px, tudo o que importa no quadrado central de 1800 × 1800 px, luz do dia, céu azul, telha de barro.

### Bloco de estilo (igual nos três prompts)

> Photorealistic documentary photo, natural late-morning daylight, clear blue sky, true-to-life colors, 35mm lens at eye level, slight depth of field. Lived-in Brazilian suburban house in the interior of São Paulo state, terracotta clay "colonial" roof tiles, small backyard. The homeowner is seen from behind or in profile, never looking at the camera, and is not posing. Workers wear plain light grey work clothes with no logos and no colored stripes, white hard hats. No readable text anywhere, no watermark, no lens flare, no sunset, no HDR look, no brand logos.

### 1. `visita` · Antes de assinar

```
Over-the-shoulder view from behind a Brazilian homeowner in his late 40s, wearing a casual polo shirt, standing in his own small backyard and looking up at his terracotta clay tile roof. His shoulder and the back of his head are soft in the left foreground. In sharp focus in the central square of the frame, a technician in plain light grey work clothes and a white hard hat, on a ladder against the eave, holds a yellow tape measure across the tiles and points at the roof while explaining. Domestic details around them: a clothesline with towels, a potted plant, a garden hose on the patio floor. Clear space above the technician's hard hat. Photorealistic documentary photo, natural late-morning daylight, clear blue sky, true-to-life colors, 35mm lens, slight depth of field. Nobody looks at the camera. No text, no logos, no watermark, no lens flare. Aspect ratio 4:3, 2400x1800.
```

### 2. `instalacao` · Projeto e obra

```
View from the backyard of a lived-in Brazilian house: a woman in her early 40s in casual clothes stands on the patio in the right foreground, seen from behind, holding a coffee mug, with a child of about 8 next to her pointing up at the roof. On their terracotta clay tile roof, in the central square of the frame, two installers in plain light grey work clothes, white hard hats and safety harnesses fix aluminium rails onto the roof; three dark blue solar panels are already in place and the clay tiles around them are intact. A child's bicycle leans against the wall, a dog lies in the shade. Seen from ground level looking up. Photorealistic documentary photo, natural late-morning daylight, clear blue sky, true-to-life colors, 35mm lens, slight depth of field. Nobody looks at the camera. No text, no logos, no watermark, no lens flare. Aspect ratio 4:3, 2400x1800.
```

### 3. `inversor` · Sistema ligado

```
Inside the garage of a Brazilian family house, a couple in their 50s in casual clothes stands side by side in profile, looking at a plain white solar inverter mounted on a light grey painted wall. The man leans in slightly toward its small lit display, which shows only a simple green bar graph and a green status light, with no readable numbers. The woman holds his arm. Neat red and black cables run down into a straight galvanised conduit. The inverter and the couple sit in the central square of the frame, with space above their heads. Family details: the front of a parked car at the edge, a shelf with paint cans and a child's helmet. Natural daylight from the open garage door on the left. Photorealistic documentary photo, true-to-life colors, 35mm lens, slight depth of field. Nobody looks at the camera. No text, no logos on the inverter, no watermark, no lens flare. Aspect ratio 4:3, 2400x1800.
```

**Texto alternativo e legenda:** como as pessoas são geradas por IA, o texto alternativo descreve a cena ("Dona da casa e o filho olham do quintal a instalação dos painéis no telhado") e nunca diz "nossa equipe" ou "cliente da Ravena".

---

## Prompts anteriores (versão 2, com moldura fixa)

### Por que as primeiras não enquadraram

A moldura da foto mudava de formato com a tela: ficava mais alta que larga em 1024 px e bem horizontal em 1920 px, e nenhuma imagem cabia bem em todos esses formatos. Agora ela é fixa:

| Tela | Moldura | Tamanho exibido |
|---|---|---|
| Computador (acima de 1100 px) | 4:3 | de 672 × 504 até 1400 × 1050 |
| Notebook pequeno e tablet deitado (821 a 1100 px) | 4:3 ou mais alta, ao lado do texto | cerca de 400 × 520 |
| Tablet em pé (481 a 820 px) | 4:3 | até 760 × 570 |
| Celular (até 480 px) | 1:1, recorte do centro | cerca de 360 × 360 |

### Medidas de cada imagem

- **Tamanho:** 2400 × 1800 px (4:3). Se a ferramenta não aceitar esse tamanho, gere no 4:3 mais próximo e eu redimensiono.
- **Área segura:** o quadrado central de 1800 × 1800 px (de x = 300 a x = 2100). Tudo o que importa precisa caber nele, porque o celular só mostra essa parte.
- **Folga:** deixe pelo menos 8% de espaço acima da cabeça ou do objeto. Nada encostado na borda.
- **Sem texto na imagem.** O texto do site fica ao lado da foto, nunca por cima, então a imagem não precisa de espaço vazio para ele.

### Bloco de estilo (igual nos três prompts)

> Photorealistic documentary photo, natural late-morning daylight, clear blue sky, true-to-life colors, 35mm lens at eye level, slight depth of field. Brazilian suburban house in the interior of São Paulo state, terracotta clay "colonial" roof tiles. Workers wear navy blue work uniforms (#123A55) with orange reflective stripes (#E8721C), white hard hats, safety harness when on the roof. Nobody looks at the camera. No text, no watermark, no lens flare, no sunset, no dramatic sky, no HDR look, no logos on the equipment.

### 1. `visita` · Antes de assinar

```
A Brazilian solar technician in a navy blue work vest with orange reflective stripes and a white hard hat, measuring a terracotta clay tile roof with a yellow tape measure, seen from the side at roof level, waist up. His whole hard hat is visible with clear space above it. He and the tape measure sit in the central square of the frame; the tape stretches across the tiles toward the right. Background: soft-focus neighbourhood of small houses and green trees under a clear blue sky. Photorealistic documentary photo, natural late-morning daylight, true-to-life colors, 35mm lens, slight depth of field. Nobody looks at the camera. No text, no watermark, no lens flare, no logos. Aspect ratio 4:3, 2400x1800.
```

### 2. `instalacao` · Projeto e obra

```
Two Brazilian solar installers in navy blue uniforms with orange reflective stripes, white hard hats and orange safety harnesses, fixing aluminium mounting rails onto a terracotta clay tile roof. Foreground installer, centre of the frame, drives a screw into a stainless steel roof hook that comes out from under an intact clay tile; the hook, the rail and the unbroken tile are sharp and clearly visible. Second installer kneels slightly behind and above him, also inside the central square of the frame. Clear blue sky behind, a tree at the edge. Seen from the side at roof level. Photorealistic documentary photo, natural late-morning daylight, true-to-life colors, 35mm lens, slight depth of field. Nobody looks at the camera. No text, no watermark, no lens flare, no logos. Aspect ratio 4:3, 2400x1800.
```

### 3. `inversor` · Sistema ligado

```
A grid-tie solar inverter mounted on a light grey painted wall in a Brazilian house garage, with a small lit display showing a simple green bar chart of energy production, a green status light on. Neat cabling: red and black DC cables and a green ground wire run down into a straight galvanised steel conduit; small grey breaker boxes with clear covers on each side. The inverter is centred in the frame with space around it, seen slightly from the side. Plain unbranded white inverter, no logo, no readable text. Natural daylight from the open garage door on the left, a glimpse of a green garden. Photorealistic documentary photo, true-to-life colors, 35mm lens. No people, no watermark, no lens flare. Aspect ratio 4:3, 2400x1800.
```

**Por que o inversor vai sem logo:** a Ravena não fabrica inversor, ela é assistência autorizada da marca que instala. Um inversor com a logo da Ravena contradiz o brief.

**Como entregar:** salve os três arquivos em `fotos/como-funciona/` com os nomes `visita`, `instalacao` e `inversor` (qualquer extensão). Eu converto para JPG e WebP e coloco no lugar.
