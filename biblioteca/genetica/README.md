# Guia do R1 de Genética Médica

Site estático com os recursos (livros, bancos de dados, ferramentas) para quem
está começando a residência de Genética Médica. Lista compilada com apoio do
OpenEvidence. Aponta para os recursos, não os hospeda — livros pagos podem
virar link de afiliado. Mesma estrutura do guia de Patologia
(`patologia-recursos`), com visual na paleta Meu Locus V4.

## Estrutura

- `index.html` — página única, monta as seções via JS a partir de `resources.js`.
- `resources.js` — os dados: cada item tem nome, tipo, tipo de acesso
  (`free` / `paid` / `mixed`), descrição, `officialUrl` (link oficial gratuito)
  e `affiliateUrl` (preencha para trocar o botão pelo seu link de afiliado).
- `style.css` / `app.js` — visual e renderização, sem dependências externas
  além das fontes do Google Fonts.

## Adicionar um link de afiliado

Em `resources.js`, ache o item pelo `name` e preencha `affiliateUrl`:

```js
{
  name: "Thompson & Thompson Genetics in Medicine",
  ...
  affiliateUrl: "https://amzn.to/xxxxx", // era null
}
```

O botão passa a apontar para esse link automaticamente e usa
`rel="sponsored noopener"`.

## Publicar no GitHub Pages

```bash
gh repo create DamaTech00/genetica-recursos --public --source=. --remote=origin --push
```

Depois, em Settings → Pages do repositório, defina a branch `master` e a pasta
`/ (root)` como fonte. O site fica em
`https://damatech00.github.io/genetica-recursos/`.

## Rodar localmente

Basta abrir `index.html` direto no navegador — não precisa de servidor local.
