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

## Pendências

- Substituir os placeholders de foto da Teacher Gabi (`index.html`, seções hero e sobre)
- Substituir os depoimentos placeholder por depoimentos reais de alunos
- Definir o e-mail de destino dos leads na constante `LEAD_EMAIL` (`script.js`)
- Aplicar o arquivo definitivo da logo no lugar do SVG atual
