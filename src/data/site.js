/**
 * Conteúdo da landing page.
 * Troque textos, pratos, fotos e links aqui — a página lê só este arquivo.
 *
 * Fotos do slider: coloque os arquivos em public/images e atualize `slides`.
 * Instagram: confirme o @ em `instagramUrl` antes de publicar.
 * Cardápio e regras do cartão fidelidade estão provisórios de propósito.
 */

export const site = {
  name: "Parada Teixeiras",
  since: "2024",
  phrase: "Comida caseira",
  tagline: "O sabor da comida caseira com o carinho de sempre",
  about:
    "Aqui no Parada Teixeiras, cada prato é preparado com ingredientes frescos, receitas tradicionais e aquele sabor que lembra casa.",
  phoneDisplay: "(31) 9 9511-1193",
  phoneTel: "+5531995111193",
  whatsapp: "5531995111193",
  addressLine: "BR-120, 1068",
  city: "Teixeiras - MG",
  mapsQuery: "BR-120, 1068, Teixeiras - MG",
  instagramHandle: "@paradateixeiras",
  instagramUrl: "https://instagram.com/paradateixeiras",
  deliveryHours: "Sábados e domingos, a partir das 18:30",
};

export function whatsappLink(message = "") {
  const base = `https://wa.me/${site.whatsapp}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const mapsEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(site.mapsQuery)}&z=16&output=embed`;

export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapsQuery)}`;

export const nav = [
  { label: "Cardápio", href: "#cardapio" },
  { label: "Localização", href: "#localizacao" },
  { label: "Aluguel", href: "#aluguel" },
];

export const slides = [
  {
    src: "/images/sliders/teste.jpeg",
    alt: "Prato feito servido no salão da Parada Teixeiras",
    // caption: 'Seu almoço merece o melhor',
  },
  {
    src: "/images/sliders/slider02.jpeg",
    alt: "Prato feito servido no salão da Parada Teixeiras",
    // caption: 'Seu almoço merece o melhor',
  },
  {
    src: "/images/sliders/slider03.jpeg",
    alt: "Tilápia com arroz, batata gratinada e salada",
    // caption: 'Tilápia com sabor e crocância',
  },
  {
    src: "/images/sliders/slider04.jpeg",
    alt: "Pão com linguiça da Parada Teixeiras",
    // caption: 'O pão com linguiça mais famoso de Teixeiras',
  },
  {
    src: "/images/sliders/slider05.jpeg",
    alt: "Delivery da Parada Teixeiras aos sábados e domingos",
    // caption: 'Peça pelo nosso delivery',
  },
  {
    src: "/images/sliders/slider06.jpeg",
    alt: "Delivery da Parada Teixeiras aos sábados e domingos",
    // caption: 'Peça pelo nosso delivery',
  },
  {
    src: "/images/sliders/slider07.jpeg",
    alt: "Delivery da Parada Teixeiras aos sábados e domingos",
    // caption: 'Peça pelo nosso delivery',
  },
];

export const highlights = [
  {
    icon: "mdi-account-group",
    title: "Atendimento familiar",
    text: "A porta abre e você é recebido como gente da casa.",
  },
  {
    icon: "mdi-pot-steam",
    title: "Comida feita na hora",
    text: "O prato sai quente, no tempo da panela, sem pressa furada.",
  },
  {
    icon: "mdi-silverware-fork-knife",
    title: "Prato feito todos os dias",
    text: "Almoço completo, do jeito que a mesa mineira pede.",
  },
  {
    icon: "mdi-food-takeout-box",
    title: "Marmitex para viagem",
    text: "Leve a comida caseira quando o dia não deixa sentar.",
  },
];

export const shifts = [
  {
    id: "dia",
    icon: "mdi-white-balance-sunny",
    when: "Durante o dia",
    title: "Almoço",
    text: "Uma variedade de pratos para agradar todos os gostos! Escolha seu favorito, mate a fome com muito sabor e, se preferir, peça para levar. Também preparamos marmitas com aquele gostinho de comida caseira para você aproveitar onde estiver.",
  },
  {
    id: "noite",
    icon: "mdi-weather-night",
    when: "Durante a noite",
    title: "Porções e lanches",
    text: "Quando a noite chega, é hora de reunir a galera e aproveitar o melhor da Parada: porções caprichadas, hambúrgueres irresistíveis e o famoso pão com linguiça que já conquistou a cidade!",
  },
];

export const menu = [
  {
    id: "feijoada",
    name: "Feijoada",
    category: "almoco",
    categoryLabel: "Almoço",
    description:
      "O prato mais vendido do almoço. Panela caprichada, do jeito que a freguesia pede de novo.",
    badge: "Mais vendido",
    featured: true,
    image: "",
    imagePosition: "center",
    icon: "mdi-pot-steam",
  },
  {
    id: "tilapia",
    name: "Tilápia",
    category: "almoco",
    categoryLabel: "Almoço",
    description:
      "Arroz, feijão, batata gratinada e salada. Sabor e crocância no mesmo prato.",
    badge: "",
    featured: false,
    image: "/images/tilapia.png",
    imagePosition: "center 12%",
    zoom: 2.15,
    icon: "mdi-fish",
  },
  {
    id: "pf",
    name: "Prato feito",
    category: "almoco",
    categoryLabel: "Almoço",
    description:
      "Carne, arroz, feijão, farofa, purê e couve. O almoço que lembra casa.",
    badge: "Todo dia",
    featured: false,
    image: "/images/almoco.jpg",
    imagePosition: "58% 86%",
    zoom: 2.35,
    icon: "mdi-silverware-fork-knife",
  },
  {
    id: "marmitex",
    name: "Marmitex",
    category: "almoco",
    categoryLabel: "Almoço",
    description:
      "A mesma comida caseira, fechada para viagem, quando a rotina aperta.",
    badge: "Para viagem",
    featured: false,
    image: "",
    imagePosition: "center",
    icon: "mdi-food-takeout-box",
  },
  {
    id: "pao",
    name: "Pão com linguiça",
    category: "noite",
    categoryLabel: "Noite",
    description:
      "O mais famoso de Teixeiras. Pão macio, linguiça e queijo no ponto.",
    badge: "O famoso",
    featured: true,
    image: "/images/pao-linguica.png",
    imagePosition: "94% 64%",
    zoom: 2.6,
    icon: "mdi-baguette",
  },
  {
    id: "porcao-linguica",
    name: "Porção de linguiça",
    category: "noite",
    categoryLabel: "Noite",
    description:
      "Para a mesa inteira. A noite da Parada é feita de porção e conversa.",
    badge: "",
    featured: false,
    image: "",
    imagePosition: "center",
    icon: "mdi-food-steak",
  },
  {
    id: "hamburguer",
    name: "Hambúrguer",
    category: "noite",
    categoryLabel: "Noite",
    description:
      "Lanche para quem chega com fome de verdade. Peça no salão ou no delivery.",
    badge: "",
    featured: false,
    image: "",
    imagePosition: "center",
    icon: "mdi-hamburger",
  },
  {
    id: "batata",
    name: "Porção de batata",
    category: "noite",
    categoryLabel: "Noite",
    description:
      "Crocante, para acompanhar o pão com linguiça e os outros lanches da noite.",
    badge: "",
    featured: false,
    image: "",
    imagePosition: "center",
    icon: "mdi-french-fries",
  },
];

export const loyalty = {
  provisional: true,
  script: "Volte sempre",
  title: "Cartão fidelidade",
  intro:
    "Quem prova nossa comida caseira sempre encontra um motivo para voltar! E, a cada visita, você fica mais perto de completar seu cartão de fidelidade e aproveitar suas vantagens.",
  rules: [
    "Válido para pagamentos via PIX ou dinheiro",
    "Assinatura somente no ato da compra",
    "Não vale assinatura de terceiros",
    "Preencha 10 quadradinhos de refeição", 
    "Ganhe um Feijão tropeiro",
    "Não vale trocar por outro prato",
  ],
};

export const partners = [
  { name: "Parceiro 1", logo: "" },
  { name: "Parceiro 2", logo: "" },
  { name: "Parceiro 3", logo: "" },
  { name: "Parceiro 4", logo: "" },
  { name: "Parceiro 5", logo: "" },
  { name: "Parceiro 6", logo: "" },
];
