(function () {
  document.addEventListener("DOMContentLoaded", () => {
    render("all");

    document.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        document
          .querySelectorAll(".filter-btn")
          .forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        render(btn.dataset.filter);
      });
    });
  });

  function render(filter) {
    const container = document.getElementById("categories");
    container.innerHTML = "";

    RESOURCES.forEach((cat) => {
      const items =
        filter === "all" ? cat.items : cat.items.filter((i) => i.access === filter);
      if (items.length === 0) return;

      const section = document.createElement("section");
      section.className = "category";

      const head = document.createElement("div");
      head.className = "cat-header";
      head.innerHTML = `<h2>${cat.category}</h2><span class="cat-count">${items.length} itens</span>`;
      section.appendChild(head);

      const grid = document.createElement("div");
      grid.className = "grid";

      items.forEach((item) => {
        const url = item.affiliateUrl || item.officialUrl;
        
        const card = document.createElement(url ? "a" : "div");
        card.className = "card";
        if (url) {
          card.href = url;
          card.target = "_blank";
          card.rel = item.affiliateUrl ? "sponsored noopener" : "noopener";
        }

        const typeColor = item.kind.toLowerCase() === "livro" ? "accent" : 
                          item.kind.toLowerCase() === "canal" ? "eosin" : "accent-soft";

        card.innerHTML = `
          <div class="card-top">
            <div class="title-wrap">
              <h3>${item.name}</h3>
              ${item.author ? `<div class="author">${item.author}</div>` : ""}
            </div>
            <span class="badge ${item.access}">${item.accessLabel}</span>
          </div>
          <p>${item.desc}</p>
          <div class="card-meta">
            <span class="meta-item" style="color: var(--${typeColor})">${item.kind}</span>
            ${!url && item.howToFind ? `<span class="meta-item">${item.howToFind}</span>` : ""}
          </div>
        `;
        
        grid.appendChild(card);
      });
      
      section.appendChild(grid);
      container.appendChild(section);
    });
  }
})();
