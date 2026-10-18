# Landing page — Duas Asas

Landing page em **React + Vite** (CSS puro, sem bibliotecas extras). Fontes self-hosted (`@fontsource`), sem cookies nem rastreadores.

## Estrutura de pastas

```
duas-asas/
├─ index.html                 # SEO, Open Graph, favicon
├─ package.json · vite.config.js
├─ public/
│  ├─ favicon.svg · og-image.png
│  ├─ politica-de-privacidade.html   # texto-base (revisar antes de publicar)
│  └─ 404.html                        # página de erro
└─ src/
   ├─ main.jsx · App.jsx
   ├─ data/contact.js         # ← WhatsApp, Instagram, e-mail, endereço, horário
   ├─ data/content.js         # ← textos, FAQ, proprietárias, fotos, seções ligadas/desligadas
   ├─ lib/whatsapp.js         # gera links wa.me com mensagem codificada
   ├─ hooks/useReveal.js      # animação de entrada (respeita "reduzir movimento")
   ├─ components/             # Header, Hero, Treatments, About, Owners, Differentials,
   │                          # HowTo, Contact, Faq, Footer, FloatingWhatsApp, ...
   └─ styles/index.css        # tokens de cor, layout e componentes
```

## Rodar localmente

Requer Node.js 18+.

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # gera a pasta dist/
npm run preview    # testa o build em http://localhost:4173
```

## Publicar

Gere `npm run build` e publique a pasta **dist/** em qualquer hospedagem estática:

- **Netlify / Cloudflare Pages / Vercel**: conecte o repositório (comando `npm run build`, pasta `dist`) ou arraste a pasta `dist`.
- **GitHub Pages**: em *Settings → Pages*, escolha **GitHub Actions** como origem. Cada push para `main` executa o workflow `.github/workflows/deploy.yml` e publica o build automaticamente (`base: './'` permite subpastas).
- **Hospedagem comum (cPanel)**: envie o conteúdo de `dist` para `public_html`.

Quando o domínio for definido:
1. Em `index.html`, troque `og:image` por URL absoluta (`https://seudominio.com.br/og-image.png`) — redes sociais não leem caminho relativo.
2. Adicione `<link rel="canonical" href="https://seudominio.com.br/">` e `<meta property="og:url" ...>`.
3. Aponte o DNS do domínio (registro A/CNAME indicado pela hospedagem) e ative o HTTPS.
4. Só então considere dados estruturados locais (JSON-LD), com endereço e horários reais.

## Dados que as proprietárias ainda precisam fornecer

- [ ] Nome completo, foto profissional, formação, experiência, apresentação e área de atuação de cada proprietária (`content.js → owners`)
- [ ] Revisão do texto "Sobre" e confirmação dos 4 diferenciais (`content.js`)
- [ ] Instagram oficial (link e @)
- [ ] E-mail oficial
- [ ] Telefone — só se o número também recebe ligações
- [ ] Endereço (se houver atendimento presencial divulgado) e horário de funcionamento
- [ ] Fotos profissionais com autorização de uso (hero e sobre) → `public/images/` + `content.js → images`
- [ ] Razão social/CNPJ (rodapé e política de privacidade)
- [ ] Revisão da política de privacidade (campos entre colchetes)
- [ ] Domínio e hospedagem

Canais de contato em branco ficam **ocultos** no site publicado; em `npm run dev` aparecem como "pendente".

## Como preencher

- **Instagram / e-mail / telefone / endereço / horário:** edite `src/data/contact.js`. Links `mailto:` e `tel:` são gerados automaticamente.
- **Proprietárias:** edite o array `owners` em `src/data/content.js`. Para ocultar a seção, use `sections.owners = false`.
- **Fotos:** coloque em `public/images/` e informe o caminho (ex.: `./images/hero.jpg`) em `content.js → images`.

## Verificação realizada

Testes automatizados em Chromium (Playwright) sobre o build, em desktop (1366px) e celular (375px):

- Links `wa.me` (cabeçalho, hero, cards, "como agendar", contato, FAQ, rodapé e botão flutuante) com número `5511915335422` e mensagens codificadas: geral, laserterapia e auriculogia ✔
- Âncoras internas sem links quebrados; navegação leva à seção correta ✔
- Menu mobile abre (`aria-expanded`), e fecha ao escolher um item ✔
- FAQ abre e fecha ✔
- Sem rolagem horizontal em desktop e celular; botão principal do hero visível na primeira tela do celular ✔
- Modo "reduzir movimento" mantém o conteúdo visível ✔
- Sem erros no console; página de privacidade abre ✔

**Não verificados:** links de `tel:`, Instagram e e-mail (dados ainda não informados, portanto ocultos); abertura real do aplicativo WhatsApp em aparelhos; Lighthouse/leitor de tela; navegadores além do Chromium; publicação online.
