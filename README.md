# Fluency Garden English School

Site institucional da Fluency Garden English School — escola de inglês online com
metodologia baseada em Linguística Aplicada (CEFR, CLT, TBLT e SLA).

## Estrutura

| Arquivo | Conteúdo |
|---|---|
| `index.html` | Página principal: hero, sobre, metodologia, programas, depoimentos, FAQ, captação de leads e banco de talentos |
| `faca-parte-do-time.html` | Página de recrutamento pedagógico (visão de educação, perfil buscado, processo seletivo e banco de talentos) |
| `styles.css` | Folha de estilo única, com os tokens da marca no `:root` |
| `script.js` | Menu mobile, scroll reveal, acordeões (FAQ e metodologia) e envio do formulário de leads |

Site estático, sem build step. Basta abrir `index.html` no navegador.

## Programas

- **Bloom Path** — aulas individuais, 25h (Sprout) ou 50h (Flourish) por semestre
- **Root Path** — aulas em dupla, com a dupla já formada, 25h (Sprout) ou 50h (Flourish) por semestre
- **Grove Path** — aulas em grupo, com o grupo já formado, 50h (Flourish) por semestre

## Imagens

Tudo fica em `fotos/`. Os arquivos originais da marca (2000×2000) são mantidos
intactos; o site consome versões recortadas e redimensionadas geradas a partir
deles. Os originais têm até 28% de margem transparente em volta do desenho, o que
encolhia a logo no menu, e pesam ~300 KB cada.

| Arquivo usado no site | Origem | Onde aparece |
|---|---|---|
| `logo-mark.png` | `logo-flor.png` | Menu e rodapé das duas páginas |
| `selo-azul-icon.png` | `selo-azul.png` | Favicon e ícone iOS |
| `selo-vermelho-tight.png` | `selo-vermelho.png` | Seção Banco de Talentos |
| `adesivo-azul-tight.png` | `adesivo-azul.png` | Hero da página Faça Parte do Time |
| `gabi-hero.jpg` | — | Hero da home |
| `gabi-sobre.jpg` | — | Seção Sobre |

Originais preservados e ainda não usados: `adesivo-marrom`, `adesivo-vermelho`,
`selo-marrom`, `selo-rosa`.

No rodapé a logo recebe `filter: brightness(0) invert(1)`, porque o arquivo é
traço escuro e desapareceria sobre o fundo navy.

As fotos usam `object-fit: cover`; o enquadramento vertical vem do
`object-position` em `styles.css` — ajuste a porcentagem se o rosto sair do corte.

## Depoimentos

A seção usa depoimentos reais enviados pelos alunos, com revisão leve de digitação
e pontuação — o sentido e a voz de cada pessoa são preservados. Dos sete feedbacks
recebidos, quatro estão publicados; os demais ficam no histórico do repositório.

Para incluir ou remover um card, duplique um bloco `.depo-card` em `index.html`.
Duas convenções:

- A grade tem duas colunas, com largura máxima menor que a do resto da seção para
  o texto em itálico não formar linhas longas demais. Em número ímpar de
  depoimentos, o CSS centraliza sozinho o card órfão da última linha
  (`.depo-card:last-child:nth-child(odd)`).
- As classes `reveal-delay-*` escalonam a animação **dentro de cada linha**. Com
  duas colunas, o padrão alterna `reveal` e `reveal-delay-1`; ao mudar a
  quantidade de colunas, reajuste esse ciclo.

Ênfase dentro da citação vai em `<em>`, que no contexto do texto em itálico é
renderizado em peso e cor de destaque, em vez de mais itálico.

## Captação de leads

O formulário envia via [FormSubmit](https://formsubmit.co) para a constante
`FORMSUBMIT_TOKEN` em `script.js`, sem backend próprio.

O token é o identificador público que o FormSubmit emite para uma caixa já
ativada, e pode ficar no front-end sem problema: é justamente ele que mantém o
endereço de e-mail da escola fora do código-fonte e deste repositório público.
Para trocar a caixa que recebe os leads, gere um token novo e substitua a
constante.

O corpo do envio leva ainda `_subject`, que define o assunto do e-mail, e
`_honey`, campo-isca anti-spam que fica oculto no formulário e só é preenchido
por robôs.

## Pendências

- Testar um envio real pelo formulário publicado e confirmar que o lead chega na
  caixa da escola
