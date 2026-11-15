# Guia do R1 de Patologia

Site estático com os recursos (livros, sites, ferramentas) para quem está
começando a residência de Patologia, organizado a partir da transcrição de
um vídeo sobre o tema. Aponta para os recursos, não os hospeda — livros
pagos podem virar link de afiliado.

## Estrutura

- `index.html` — página única, monta as seções via JS a partir de `resources.js`.
- `resources.js` — os dados: cada item tem nome, tipo, tipo de acesso
  (`free` / `paid` / `mixed`), descrição, `officialUrl` (link oficial gratuito)
  e `affiliateUrl` (preencha para trocar o botão pelo seu link de afiliado).
- `style.css` / `app.js` — visual e renderização, sem dependências externas
  além das fontes do Google Fonts.
- `cap-protocolos/` — PDFs baixados dos protocolos do CAP para uso pessoal.
  **Fica de fora do git** (veja `.gitignore`) — são documentos do College of
  American Pathologists, não devem ser redistribuídos por este site.

## Adicionar um link de afiliado

Em `resources.js`, ache o item pelo `name` e preencha `affiliateUrl`:

```js
{
  name: "The Practice of Surgical Pathology",
  ...
  affiliateUrl: "https://amzn.to/xxxxx", // era null
}
```

O botão passa a apontar para esse link automaticamente e usa
`rel="sponsored noopener"` (recomendado pelo Google para links pagos).

## Publicar no GitHub Pages

```bash
gh repo create patologia-recursos --public --source=. --remote=origin
git add index.html style.css app.js resources.js README.md .gitignore
git commit -m "Site inicial com recursos de patologia"
git push -u origin main
```

Depois, em Settings → Pages do repositório, defina a branch `main` e a pasta
`/ (root)` como fonte. O site fica em `https://<seu-usuário>.github.io/patologia-recursos/`.

## Rodar localmente

Como os arquivos usam `<script src="...">` simples (sem `fetch`), basta abrir
`index.html` direto no navegador — não precisa de servidor local.
