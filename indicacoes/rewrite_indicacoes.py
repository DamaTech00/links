import re

with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

# Delete everything from Recursos que eu criei up to the social nav
html = re.sub(
    r"<p class=\"section-label\">Recursos que eu criei</p>.*?<nav class=\"social\"",
    r"<nav class=\"social\"",
    html,
    flags=re.DOTALL
)

with open("index.html", "w", encoding="utf-8") as f:
    f.write(html)
