(function () {
  const root = document.documentElement;
  const stored = localStorage.getItem("theme");
  if (stored) root.setAttribute("data-theme", stored);

  document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("theme-toggle");
    toggle.addEventListener("click", () => {
      const current = root.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
    });

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
      head.className = "cat-head";
      head.innerHTML = `<h2>${cat.category}</h2>`;
      section.appendChild(head);

      if (cat.intro) {
        const sub = document.createElement("p");
        sub.className = "cat-sub";
        sub.textContent = cat.intro;
        section.appendChild(sub);
      }

      items.forEach((item) => section.appendChild(renderItem(item)));
      container.appendChild(section);
    });
  }

  function renderItem(item) {
    const el = document.createElement("div");
    el.className = "item";

    const top = document.createElement("div");
    top.className = "item-top";
    top.innerHTML = `
      <span class="item-name">${item.name}</span>
      <span class="badge kind">${item.kind}</span>
      <span class="badge ${item.access}">${item.accessLabel}</span>
    `;
    el.appendChild(top);

    if (item.author) {
      const author = document.createElement("p");
      author.className = "item-author";
      author.textContent = item.author;
      el.appendChild(author);
    }

    const desc = document.createElement("p");
    desc.className = "item-desc";
    desc.textContent = item.desc;
    el.appendChild(desc);

    const url = item.affiliateUrl || item.officialUrl;
    if (url) {
      const link = document.createElement("a");
      link.className = "item-link";
      link.href = url;
      link.target = "_blank";
      link.rel = item.affiliateUrl ? "sponsored noopener" : "noopener";
      link.textContent = item.affiliateUrl ? "Ver oferta →" : "Acessar →";
      el.appendChild(link);
    } else if (item.howToFind) {
      const note = document.createElement("p");
      note.className = "item-note";
      note.textContent = item.howToFind;
      el.appendChild(note);
    }

    return el;
  }
})();
