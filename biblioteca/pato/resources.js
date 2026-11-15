// Base de dados dos recursos. Para adicionar um link de afiliado,
// preencha "affiliateUrl" no item correspondente — enquanto estiver
// null, o botão aponta para "officialUrl" (ou para "howToFind" se
// não houver URL oficial confiável).
const RESOURCES = [
  {
    category: "Essenciais — para ter desde o R1",
    intro:
      "O que o vídeo chama de \"primordiais\": resolve a grande maioria dos casos da rotina.",
    items: [
      {
        name: "Shotgun Histology",
        kind: "Playlist · YouTube",
        access: "free",
        accessLabel: "Gratuito",
        desc: "Introdução básica e sucinta à histologia, em vídeos curtos.",
        officialUrl: null,
        affiliateUrl: null,
        howToFind: "Busque “Shotgun Histology” no YouTube.",
      },
      {
        name: "The Practice of Surgical Pathology",
        author: "Diana Molavi",
        kind: "Livro",
        access: "paid",
        accessLabel: "Pago",
        desc: "A ponte entre o médico generalista e o patologista. Recomendado reler mais de uma vez, principalmente no R1.",
        officialUrl: null,
        affiliateUrl: null, // TODO: link de afiliado
      },
      {
        name: "Quick Reference Handbook for Surgical Pathologists",
        kind: "Livro",
        access: "paid",
        accessLabel: "Pago",
        desc: "Foco em imuno-histoquímica; livro de consulta constante, não de leitura corrida.",
        officialUrl: null,
        affiliateUrl: null, // TODO: link de afiliado
      },
      {
        name: "CAP Cancer Protocol Templates",
        kind: "Site · Templates",
        access: "free",
        accessLabel: "Gratuito",
        desc: "Protocolos do College of American Pathologists por órgão: template de laudo, estadiamento e notas explanatórias.",
        officialUrl:
          "https://www.cap.org/protocols-and-guidelines/cancer-protocols/current-cancer-protocols/",
        affiliateUrl: null,
      },
      {
        name: "PathologyOutlines.com",
        kind: "Site",
        access: "free",
        accessLabel: "Gratuito",
        desc: "Referência por órgão/diagnóstico, múltiplos autores, consultada quase diariamente na residência.",
        officialUrl: "https://www.pathologyoutlines.com",
        affiliateUrl: null,
      },
      {
        name: "WHO Classification of Tumours Online",
        kind: "Assinatura",
        access: "paid",
        accessLabel: "Pago (~US$100/ano)",
        desc: "Versão online dos “livros azuis” da OMS, 5ª edição — vale o investimento mesmo sem acesso institucional.",
        officialUrl: null,
        affiliateUrl: null, // TODO: link de afiliado (assinatura)
      },
    ],
  },
  {
    category: "Complementares",
    intro: "Bons e importantes, mas de prioridade menor que os essenciais.",
    items: [
      {
        name: "Libre Pathology",
        kind: "Site · Wiki",
        access: "free",
        accessLabel: "Gratuito",
        desc: "Formato tipo Wikipédia, escrita acessível, com exemplos de laudo e quizzes.",
        officialUrl: "https://librepathology.org",
        affiliateUrl: null,
      },
      {
        name: "Kurt's Notes",
        kind: "Site",
        access: "free",
        accessLabel: "Gratuito",
        desc: "Resumos e exemplos de laudo comentados — úteis para estilo de laudo e para entender a patologia.",
        officialUrl: null,
        affiliateUrl: null,
        howToFind: "Busque “Kurt's Notes pathology” no Google.",
      },
      {
        name: "PathPresenter",
        kind: "Site · Lâminas digitais",
        access: "mixed",
        accessLabel: "Misto",
        desc: "Lâminas escaneadas, bibliotecas próprias e compartilhadas.",
        officialUrl: "https://pathpresenter.net",
        affiliateUrl: null,
      },
      {
        name: "AFIP Fascicles (Atlas of Tumor Pathology)",
        kind: "Coleção de livros",
        access: "paid",
        accessLabel: "Pago · institucional",
        desc: "Seleção de imagens quase incomparável; muito cara, geralmente só a coleção física do departamento.",
        officialUrl: null,
        affiliateUrl: null, // TODO: link de afiliado
      },
      {
        name: "Série “Biopsy Interpretation of...”",
        kind: "Coleção de livros",
        access: "paid",
        accessLabel: "Pago",
        desc: "Muito didática, boa para uso na residência.",
        officialUrl: null,
        affiliateUrl: null, // TODO: link de afiliado
      },
      {
        name: "Rosai and Ackerman's Surgical Pathology",
        kind: "Livro",
        access: "paid",
        accessLabel: "Pago",
        desc: "Clássico geral de patologia cirúrgica.",
        officialUrl: null,
        affiliateUrl: null, // TODO: link de afiliado
      },
      {
        name: "Fletcher — Diagnostic Histopathology of Tumors",
        kind: "Livro",
        access: "paid",
        accessLabel: "Pago",
        desc: "Cobre todas as especialidades; alguns capítulos praticamente livros à parte. Rico em imagens.",
        officialUrl: null,
        affiliateUrl: null, // TODO: link de afiliado
      },
      {
        name: "Expert Path",
        kind: "Plataforma",
        access: "paid",
        accessLabel: "Pago (anuidade)",
        desc: "Compila a série Diagnostic Pathology com busca simultânea em todos os livros.",
        officialUrl: null,
        affiliateUrl: null, // TODO: link de afiliado
      },
      {
        name: "NCCN Guidelines",
        kind: "Site · Guidelines",
        access: "free",
        accessLabel: "Gratuito (com cadastro)",
        desc: "Protocolos de tratamento oncológico — ajuda a enxergar o impacto clínico do diagnóstico.",
        officialUrl: "https://www.nccn.org",
        affiliateUrl: null,
      },
      {
        name: "Radiopaedia",
        kind: "Site",
        access: "free",
        accessLabel: "Gratuito",
        desc: "O “Pathology Outlines dos radiologistas”.",
        officialUrl: "https://radiopaedia.org",
        affiliateUrl: null,
      },
    ],
  },
  {
    category: "Navegação e busca de literatura",
    intro: "Para os casos que não estão em nenhum livro-texto.",
    items: [
      {
        name: "Google Acadêmico (Google Scholar)",
        kind: "Site",
        access: "free",
        accessLabel: "Gratuito",
        desc: "“Citado por” de um artigo antigo para achar publicações mais recentes sobre o mesmo achado.",
        officialUrl: "https://scholar.google.com",
        affiliateUrl: null,
      },
      {
        name: "PubMed / PubMed Central",
        kind: "Site",
        access: "free",
        accessLabel: "Gratuito",
        desc: "Base de artigos indexados — ponto de partida para revisão de literatura de achados raros.",
        officialUrl: "https://pubmed.ncbi.nlm.nih.gov",
        affiliateUrl: null,
      },
    ],
  },
  {
    category: "Comunidade",
    items: [
      {
        name: "Twitter/X de patologistas",
        kind: "Rede social",
        access: "free",
        accessLabel: "Gratuito",
        desc: "Um perfil dedicado só a seguir patologistas — vários autores de livros e da classificação da OMS postam casos e discutem informalmente.",
        officialUrl: null,
        affiliateUrl: null,
      },
    ],
  },
];
