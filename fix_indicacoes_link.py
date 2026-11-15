import re

with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

# Substitui o link do repositório antigo pelo novo subdiretório
html = html.replace("https://damatech00.github.io/indicacoes", "indicacoes/")
html = html.replace("href=\"/indicacoes\"", "href=\"indicacoes/\"")
# Caso esteja como href="indicacoes.html"
html = html.replace("href=\"indicacoes.html\"", "href=\"indicacoes/\"")

with open("index.html", "w", encoding="utf-8") as f:
    f.write(html)
