/**
 * Conteúdo da landing page.
 * Troque textos, pratos, fotos e links aqui — a página lê só este arquivo.
 *
 * Fotos do slider: coloque os arquivos em public/images e atualize `slides`.
 * Instagram: confirme o @ em `instagramUrl` antes de publicar.
 * Cardápio: cada dia de almoço é uma lista própria. Porções ficam à parte.
 * Regras do cartão fidelidade estão provisórias de propósito.
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
  { label: "Cartão Fidelidade", href: "#fidelidade" },
  { label: "Clientes", href: "#avaliacoes" },
];

export const slides = [
  {
    src: "/images/sliders/slider003.png",
    alt: "Prato feito servido no salão da Parada Teixeiras",
    // caption: 'Seu almoço merece o melhor',
  },
  {
    src: "/images/sliders/slider002.png",
    alt: "Prato feito servido no salão da Parada Teixeiras",
    // caption: 'Seu almoço merece o melhor',
  },
  {
    src: "/images/sliders/slider001.png",
    alt: "Tilápia com arroz, batata gratinada e salada",
    // caption: 'Tilápia com sabor e crocância',
  },
  {
    src: "/images/sliders/slider004.png",
    alt: "Pão com linguiça da Parada Teixeiras",
    // caption: 'O pão com linguiça mais famoso de Teixeiras',
  },
  {
    src: "/images/sliders/slider005.png",
    alt: "Delivery da Parada Teixeiras aos sábados e domingos",
    // caption: 'Peça pelo nosso delivery',
  },
  {
    src: "/images/sliders/slider006.png",
    alt: "Delivery da Parada Teixeiras aos sábados e domingos",
    // caption: 'Peça pelo nosso delivery',
  },
  {
    src: "/images/sliders/slider007.png",
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

export const pickup = {
  script: "Atenção!!",
  title: "Não fazemos entrega",
  lede: "Nossos pedidos são para consumo no restaurante ou retirada no balcão. Não trabalhamos com entrega em domicílio.",
  options: [
    {
      icon: "mdi-silverware-fork-knife",
      title: "Comer no local",
      text: "Sente-se à mesa e aproveite sua refeição, servida quentinha, direto da nossa cozinha.",
    },
    {
      icon: "mdi-food-takeout-box",
      title: "Retirada",
      text: "Faça seu pedido pelo WhatsApp e retire no balcão, prontinho para levar.",
    },
  ],
};

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

/**
 * Almoço por dia. Cada lista é independente: o mesmo prato pode ser copiado
 * na aba em que ele entra. `todos` é o cardápio completo, sem dia em destaque.
 * Terça e quinta usam `askDay` para o card que pergunta as duas opções no WhatsApp.
 *
 * Para incluir um prato:
 * plate("id-unico", "Nome", "Descrição.", { image: "/images/foto.jpg", badge: "Mais vendido", featured: true, icon: "mdi-pot-steam" })
 */
function plate(id, name, description, extra = {}) {
  return {
    id,
    name,
    description,
    tag: "Almoço",
    badge: "",
    featured: false,
    image: "",
    imagePosition: "center",
    zoom: 1,
    icon: "mdi-silverware-fork-knife",
    ...extra,
  };
}

export const lunchDays = [
  { id: "todos", label: "Tudo", full: "Todas as opções" },
  { id: "segunda", label: "Segunda", full: "Segunda-feira" },
  { id: "terca", label: "Terça", full: "Terça-feira", askDay: "terça-feira" },
  { id: "quarta", label: "Quarta", full: "Quarta-feira" },
  {
    id: "quinta",
    label: "Quinta",
    full: "Quinta-feira",
    askDay: "quinta-feira",
  },
  { id: "sexta", label: "Sexta", full: "Sexta-feira" },
  { id: "sabado", label: "Sábado", full: "Sábado" },
];

export const lunches = {
  todos: [
    plate(
      "todos-feijoada",
      "Feijoada",
      "O prato mais vendido do almoço. Panela caprichada, do jeito que a freguesia pede de novo.",
      {
        badge: "Mais vendido",
        tag: "Quartas e sábados",
        featured: true,
        image: "/images/cardapio/almoco/quarta/feijoadaparada.png",
        imagePosition: "28% 42%",
        icon: "mdi-pot-steam",
      },
    ),
    plate(
      "seg-frangocomquiabo",
      "Frango com quiabo",
      "Arroz, feijão, angu e salada.",
      {
        badge: "Mais vendido",
        tag: "Especial de segunda-feira",
        featured: true,
        image: "/images/cardapio/almoco/segunda/frangoComQuiabo.jpeg",
        imagePosition: "28% 42%",
        icon: "mdi-pot-steam",
      },
    ),

    // plate(
    //   "todos-marmitex",
    //   "Marmitex",
    //   "A mesma comida caseira, fechada para viagem, quando a rotina aperta.",
    //   {
    //     badge: "Para viagem",
    //     icon: "mdi-food-takeout-box",
    //   },
    // ),

    plate(
      "seg-tilapiabatatagratinada",
      "Filé de tilápia com batata gratinada",
      "Arroz, feijão e salada.",
      {
        tag: "Especial de segunda-feira",
        featured: true,
        image:
          "/images/cardapio/almoco/segunda/fileDeTilapiaComBatataGratinada.jpeg",
        icon: "mdi-fish",
      },
    ),
    plate(
      "seg-tilapiaefritas",
      "Filé de tilápia com fritas",
      "Arroz, feijão e salada.",
      {
        tag: "Especial de segunda-feira",
        featured: true,
        image: "/images/cardapio/almoco/segunda/fileDeTilapiaComFritas.jpeg",
        icon: "mdi-silverware-fork-knife",
      },
    ),
    plate(
      "seg-bifeboiacebolado",
      "Bifé de boi acebolado",
      "Arroz, feijão, ovo, fritas e salada.",
      {
        tag: "Todos os dias",
        image: "/images/cardapio/almoco/segunda/bifeBovinoAcebolado.jpeg",
        icon: "mdi-silverware-fork-knife",
      },
    ),
    plate(
      "seg-suinoacebolado",
      "Bifé suíno acebolado",
      "Arroz, feijão, ovo, fritas e salada.",
      {
        tag: "Todos os dias",
        image: "/images/cardapio/almoco/segunda/bifeSuinoAcebolado.jpeg",
        icon: "mdi-silverware-fork-knife",
      },
    ),
    plate(
      "seg-tropeirocompleto",
      "Tropeiro Completo",
      "Arroz, torresmo, bife suíno, ovo, fritas e couve.",
      {
        badge: "Mais vendido",
        featured: true,
        tag: "Todos os dias",
        image: "/images/cardapio/almoco/segunda/tropeiroCompleto.jpeg",
        icon: "mdi-silverware-fork-knife",
      },
    ),
    plate(
      "seg-tropeirobovino",
      "Tropeiro com bife bovino",
      "Arroz, torresmo, ovo, fritas e couve.",
      {
        tag: "Todos os dias",
        image: "",
        icon: "mdi-silverware-fork-knife",
      },
    ),
    plate(
      "tropeirofrangoempanado",
      "Tropeiro com filé de frango empanado",
      "Arroz, torresmo, ovo, fritas e couve.",
      {
        tag: "Todos os dias",
        image: "",
        icon: "mdi-silverware-fork-knife",
      },
    ),
    plate(
      "seg-omelete",
      "Omelete com fritas",
      "Arroz, feijão e salada.",

      {
        tag: "Todos os dias",
        image: "",
        icon: "mdi-silverware-fork-knife",
      },
    ),
    plate(
      "sab-parmboi",
      "Parmegiana de boi",
      "Arroz, fritas e salada",

      {
        tag: "Aos sábados",
        image: "",
        icon: "mdi-silverware-fork-knife",
      },
    ),
    plate(
      "sab-parmfrango",
      "Parmegiana de frango",
      "Arroz, fritas e salada",

      {
        tag: "Aos sábados",
        badge: "Mais vendido",
        featured: true,
        image: "/images/cardapio/almoco/segunda/parmegianaDeFrango.png",
        icon: "mdi-silverware-fork-knife",
      },
    ),
    plate(
      "sab-parmtilapia",
      "Parmegiana de tilapia",
      "Arroz, fritas e salada",

      {
        badge: "Novidade",
        tag: "Aos sábados",
        image: "",
        icon: "mdi-silverware-fork-knife",
      },
    ),
    plate(
      "filetilapiapuredebatata",
      "Filé de tilápia com purê de batata",
      "Arroz, feijão e salada.",
      {
        featured: true,
        tag: "Especial de sexta-feira",
        image: "/images/cardapio/almoco/segunda/tilapiaPure.png",
        icon: "mdi-silverware-fork-knife",
      },
    ),
    plate("pernilsalpicao", "Pernil com salpicão", "Arroz, feijão e salada.", 
      {
      featured: true,
      tag: "Especial de sexta-feira",
      image: "/images/cardapio/almoco/segunda/pernilComSalpicao.png",
      icon: "mdi-silverware-fork-knife",
    }),
    plate(
      "arrozcostelinha",
      "Arroz com costelinha",
      "Arroz, feijão, couve refogada, ovo, farofa, angu e salada.",
      {
        tag: "Terça ou quinta",
        badge: "Prato variado",
        image: "/images/cardapio/almoco/segunda/arrozComCostelinha.png",
        icon: "mdi-silverware-fork-knife",
      },
    ),
    plate(
      "carneporcofrita",
      "Carne de porco frita",
      "Arroz, feijão, couve refogada, angu e salada.",
      {
        tag: "Terça ou quinta",
        badge: "Prato variado",
        image: "/images/cardapio/almoco/segunda/carneDePorcoFrita.png",
        icon: "mdi-silverware-fork-knife",
      },
    ),
    plate(
      "sobrecoxamacarronada",
      "Sobre coxa com macarronada",
      "Arroz, feijão, e salada.",
      {
        tag: "Terça ou quinta",
        badge: "Prato variado",
        image: "/images/cardapio/almoco/segunda/sobrecoxaMacarronada.png",
        icon: "mdi-silverware-fork-knife",
      },
    ),
    plate(
      "carnecozidalegumes",
      "Carne cozida com legumes",
      "Arroz, feijão, farofa, batata frita e salada.",
      {
        tag: "Terça ou quinta",
        badge: "Prato variado",
        image: "/images/cardapio/almoco/segunda/carneCozida.png",
        icon: "mdi-silverware-fork-knife",
      },
    ),
    plate(
      "strogonofffrango",
      "Strogonoff de frango",
      "Arroz, batata palha, batata frita e salada.",
      {
        tag: "Terça ou quinta",
        badge: "Prato variado",
        image: "/images/cardapio/almoco/segunda/strogonoffDeFrando.png",
        icon: "mdi-silverware-fork-knife",
      },
    ),
    plate(
      "strogonoffboi",
      "Strogonoff de boi",
      "Arroz, batata palha ou frita e salada.",
      {
        tag: "Terça ou quinta",
        badge: "Prato variado",
        image: "/images/cardapio/almoco/segunda/strogonoffBoi.png",
        icon: "mdi-silverware-fork-knife",
      },
    ),
    plate(
      "lasanhabolonhesa",
      "Lasanha à bolonhesa",
      "Arroz, feijão, batata frita e salada.",
      {
        tag: "Terça ou quinta",
        badge: "Prato variado",
        image: "/images/cardapio/almoco/segunda/lasanhabolonhesa.png",
        icon: "mdi-silverware-fork-knife",
      },
    ),
    plate(
      "cremedemilho",
      "Creme de milho",
      "Arroz, feijão, frango empanado, batata frita e salada.",
      {
        tag: "Terça ou quinta",
        badge: "Prato variado",
        image: "/images/cardapio/almoco/segunda/cremeDeMilho.png",
        icon: "mdi-silverware-fork-knife",
      },
    ),
    plate(
      "baroacomfrango",
      "Batata baroa com frango",
      "Arroz, feijão e salada.",
      {
        tag: "Terça ou quinta",
        badge: "Prato variado",
        image: "/images/cardapio/almoco/segunda/batataBaroaComFrango.png",
        icon: "mdi-silverware-fork-knife",
      },
    ),
    plate(
      "largatomolhomadeira",
      "Largato ao molho madeira",
      "Arroz, feijão, maionese e salada.",
      {
        tag: "Terça ou quinta",
        badge: "Prato variado",
        image: "/images/cardapio/almoco/segunda/largatoAoMolhoMadeira.png",
        icon: "mdi-silverware-fork-knife",
      },
    ),
    plate(
      "costelinhamolhobarbecue",
      "Costelinha ao molho barbecue",
      "Arroz, feijão, farofa e salada.",
      {
        tag: "Terça ou quinta",
        badge: "Prato variado",
        image: "/images/cardapio/almoco/segunda/costelinhaAoMolhoBarbe.png",
        icon: "mdi-silverware-fork-knife",
      },
    ),
    plate(
      "frangoempanado",
      "Filé de frango empanado",
      "Arroz, feijão, fritas e salada.",
      {
        tag: "Terça ou quinta",
        badge: "Prato variado",
        image: "/images/cardapio/almoco/segunda/filedeFrangoMilanesa.png",
        icon: "mdi-silverware-fork-knife",
      },
    ),
    plate(
      "sobrecoxamacarraochapa",
      "Sobre coxa com macarrão na chapa",
      "Arroz, feijão, e salada.",
      {
        tag: "Terça ou quinta",
        badge: "Prato variado",
        image: "/images/cardapio/almoco/segunda/macarraoNaChapa.png",
        icon: "mdi-silverware-fork-knife",
      },
    ),
    plate(
      "bifefigadoacebolado",
      "Bife de figado acebolado",
      "Arroz, feijão, ovo, batata frita e salada.",
      {
        tag: "Terça ou quinta",
        badge: "Prato variado",
        image: "/images/cardapio/almoco/segunda/bidedefigadoAcebolado.png",
        icon: "mdi-silverware-fork-knife",
      },
    ),
  ],
  segunda: [
    plate(
      "seg-frangocomquiabo",
      "Frango com quiabo",
      "Arroz, feijão, angu e salada.",
      {
        badge: "Mais vendido",
        tag: "Especial de segunda-feira",
        featured: true,
        image: "/images/cardapio/almoco/segunda/frangoComQuiabo.jpeg",
        imagePosition: "28% 42%",
        icon: "mdi-pot-steam",
      },
    ),
    plate(
      "seg-tilapiabatatagratinada",
      "Filé de tilápia com batata gratinada",
      "Arroz, feijão e salada.",
      {
        tag: "Especial de segunda-feira",
        featured: true,
        image:
          "/images/cardapio/almoco/segunda/fileDeTilapiaComBatataGratinada.jpeg",
        icon: "mdi-fish",
      },
    ),
    plate(
      "seg-tilapiaefritas",
      "Filé de tilápia com fritas",
      "Arroz, feijão e salada.",
      {
        tag: "Especial de segunda-feira",
        featured: true,
        image: "/images/cardapio/almoco/segunda/fileDeTilapiaComFritas.jpeg",
        icon: "mdi-silverware-fork-knife",
      },
    ),
    plate(
      "seg-tropeirocompleto",
      "Tropeiro Completo",
      "Arroz, torresmo, bife suíno, ovo, fritas e couve.",
      {
        badge: "Mais vendido",
        featured: true,
        tag: "Todos os dias",
        image: "/images/cardapio/almoco/segunda/tropeiroCompleto.jpeg",
        icon: "mdi-silverware-fork-knife",
      },
    ),
    plate(
      "seg-tropeirobovino",
      "Tropeiro com bife bovino",
      "Arroz, torresmo, ovo, fritas e couve.",
      {
        tag: "Todos os dias",
        image: "",
        icon: "mdi-silverware-fork-knife",
      },
    ),
    plate(
      "tropeirofrangomila",
      "Tropeiro com filé de frango empanado",
      "Arroz, torresmo, ovo, fritas e couve.",
      {
        tag: "Todos os dias",
        image: "",
        icon: "mdi-silverware-fork-knife",
      },
    ),
    plate(
      "seg-bifeboiacebolado",
      "Bifé de boi acebolado",
      "Arroz, feijão, ovo, fritas e salada.",
      {
        tag: "Todos os dias",
        image: "/images/cardapio/almoco/segunda/bifeBovinoAcebolado.jpeg",
        icon: "mdi-silverware-fork-knife",
      },
    ),
    plate(
      "seg-suinoacebolado",
      "Bifé suíno acebolado",
      "Arroz, feijão, ovo, fritas e salada.",
      {
        tag: "Todos os dias",
        image: "/images/cardapio/almoco/segunda/bifeSuinoAcebolado.jpeg",
        icon: "mdi-silverware-fork-knife",
      },
    ),

    plate("seg-omelete", "Omelete com fritas", "Arroz, feijão e salada.", {
      tag: "Todos os dias",
      image: "",
      icon: "mdi-silverware-fork-knife",
    }),
  ],
  terca: [
    plate(
      "seg-tropeirocompleto",
      "Tropeiro Completo",
      "Arroz, torresmo, bife suíno, ovo, fritas e couve.",
      {
        badge: "Mais vendido",
        featured: true,
        tag: "Todos os dias",
        image: "/images/cardapio/almoco/segunda/tropeiroCompleto.jpeg",
        icon: "mdi-silverware-fork-knife",
      },
    ),
    plate(
      "seg-tropeirobovino",
      "Tropeiro com bife bovino",
      "Arroz, torresmo, ovo, fritas e couve.",
      {
        tag: "Todos os dias",
        image: "",
        icon: "mdi-silverware-fork-knife",
      },
    ),
    plate(
      "tropeirofrangomila",
      "Tropeiro com filé de frango empanado",
      "Arroz, torresmo, ovo, fritas e couve.",
      {
        tag: "Todos os dias",
        image: "",
        icon: "mdi-silverware-fork-knife",
      },
    ),
    plate(
      "seg-bifeboiacebolado",
      "Bifé de boi acebolado",
      "Arroz, feijão, ovo, fritas e salada.",
      {
        tag: "Todos os dias",
        image: "/images/cardapio/almoco/segunda/bifeBovinoAcebolado.jpeg",
        icon: "mdi-silverware-fork-knife",
      },
    ),
    plate(
      "seg-suinoacebolado",
      "Bifé suíno acebolado",
      "Arroz, feijão, ovo, fritas e salada.",
      {
        tag: "Todos os dias",
        image: "/images/cardapio/almoco/segunda/bifeSuinoAcebolado.jpeg",
        icon: "mdi-silverware-fork-knife",
      },
    ),

    plate("seg-omelete", "Omelete com fritas", "Arroz, feijão e salada.", {
      tag: "Todos os dias",
      image: "",
      icon: "mdi-silverware-fork-knife",
    }),
  ],
  quarta: [
    plate(
      "todos-feijoada",
      "Feijoada",
      "O prato mais vendido do almoço. Panela caprichada, do jeito que a freguesia pede de novo.",
      {
        badge: "Mais vendido",
        tag: "Quartas e sábados",
        featured: true,
        image: "/images/cardapio/almoco/quarta/feijoadaparada.png",
        imagePosition: "28% 42%",
        icon: "mdi-pot-steam",
      },
    ),
    plate(
      "seg-tropeirocompleto",
      "Tropeiro Completo",
      "Arroz, torresmo, bife suíno, ovo, fritas e couve.",
      {
        badge: "Mais vendido",
        featured: true,
        tag: "Todos os dias",
        image: "/images/cardapio/almoco/segunda/tropeiroCompleto.jpeg",
        icon: "mdi-silverware-fork-knife",
      },
    ),
    plate(
      "seg-tropeirobovino",
      "Tropeiro com bife bovino",
      "Arroz, torresmo, ovo, fritas e couve.",
      {
        tag: "Todos os dias",
        image: "",
        icon: "mdi-silverware-fork-knife",
      },
    ),
    plate(
      "tropeirofrangomila",
      "Tropeiro com filé de frango empanado",
      "Arroz, torresmo, ovo, fritas e couve.",
      {
        tag: "Todos os dias",
        image: "",
        icon: "mdi-silverware-fork-knife",
      },
    ),
    plate(
      "seg-bifeboiacebolado",
      "Bifé de boi acebolado",
      "Arroz, feijão, ovo, fritas e salada.",
      {
        tag: "Todos os dias",
        image: "/images/cardapio/almoco/segunda/bifeBovinoAcebolado.jpeg",
        icon: "mdi-silverware-fork-knife",
      },
    ),
    plate(
      "seg-suinoacebolado",
      "Bifé suíno acebolado",
      "Arroz, feijão, ovo, fritas e salada.",
      {
        tag: "Todos os dias",
        image: "/images/cardapio/almoco/segunda/bifeSuinoAcebolado.jpeg",
        icon: "mdi-silverware-fork-knife",
      },
    ),

    plate("seg-omelete", "Omelete com fritas", "Arroz, feijão e salada.", {
      tag: "Todos os dias",
      image: "",
      icon: "mdi-silverware-fork-knife",
    }),
  ],
  quinta: [
    plate(
      "seg-tropeirocompleto",
      "Tropeiro Completo",
      "Arroz, torresmo, bife suíno, ovo, fritas e couve.",
      {
        badge: "Mais vendido",
        featured: true,
        tag: "Todos os dias",
        image: "/images/cardapio/almoco/segunda/tropeiroCompleto.jpeg",
        icon: "mdi-silverware-fork-knife",
      },
    ),
    plate(
      "seg-tropeirobovino",
      "Tropeiro com bife bovino",
      "Arroz, torresmo, ovo, fritas e couve.",
      {
        tag: "Todos os dias",
        image: "",
        icon: "mdi-silverware-fork-knife",
      },
    ),
    plate(
      "tropeirofrangomila",
      "Tropeiro com filé de frango empanado",
      "Arroz, torresmo, ovo, fritas e couve.",
      {
        tag: "Todos os dias",
        image: "",
        icon: "mdi-silverware-fork-knife",
      },
    ),
    plate(
      "seg-bifeboiacebolado",
      "Bifé de boi acebolado",
      "Arroz, feijão, ovo, fritas e salada.",
      {
        tag: "Todos os dias",
        image: "/images/cardapio/almoco/segunda/bifeBovinoAcebolado.jpeg",
        icon: "mdi-silverware-fork-knife",
      },
    ),
    plate(
      "seg-suinoacebolado",
      "Bifé suíno acebolado",
      "Arroz, feijão, ovo, fritas e salada.",
      {
        tag: "Todos os dias",
        image: "/images/cardapio/almoco/segunda/bifeSuinoAcebolado.jpeg",
        icon: "mdi-silverware-fork-knife",
      },
    ),

    plate("seg-omelete", "Omelete com fritas", "Arroz, feijão e salada.", {
      tag: "Todos os dias",
      image: "",
      icon: "mdi-silverware-fork-knife",
    }),
  ],
  sexta: [
    plate("pernilsalpicao", "Pernil com salpicão", "Arroz, feijão e salada.", {
      tag: "Especial de sexta-feira",
      featured: true,
      image: "/images/cardapio/almoco/segunda/pernilComSalpicao.png",
      icon: "mdi-silverware-fork-knife",
    }),
    plate(
      "filetilapiapuredebatata",
      "Filé de tilápia com purê de batata",
      "Arroz, feijão e salada.",
      {
        tag: "Especial de sexta-feira",
        featured: true,
        image: "/images/cardapio/almoco/segunda/tilapiaPure.png",
        icon: "mdi-silverware-fork-knife",
      },
    ),

    plate(
      "seg-tropeirocompleto",
      "Tropeiro Completo",
      "Arroz, torresmo, bife suíno, ovo, fritas e couve.",
      {
        badge: "Mais vendido",
        featured: true,
        tag: "Todos os dias",
        image: "/images/cardapio/almoco/segunda/tropeiroCompleto.jpeg",
        icon: "mdi-silverware-fork-knife",
      },
    ),
    plate(
      "seg-tropeirobovino",
      "Tropeiro com bife bovino",
      "Arroz, torresmo, ovo, fritas e couve.",
      {
        tag: "Todos os dias",
        image: "",
        icon: "mdi-silverware-fork-knife",
      },
    ),
    plate(
      "tropeirofrangomila",
      "Tropeiro com filé de frango empanado",
      "Arroz, torresmo, ovo, fritas e couve.",
      {
        tag: "Todos os dias",
        image: "",
        icon: "mdi-silverware-fork-knife",
      },
    ),
    plate(
      "seg-bifeboiacebolado",
      "Bifé de boi acebolado",
      "Arroz, feijão, ovo, fritas e salada.",
      {
        tag: "Todos os dias",
        image: "/images/cardapio/almoco/segunda/bifeBovinoAcebolado.jpeg",
        icon: "mdi-silverware-fork-knife",
      },
    ),
    plate(
      "seg-suinoacebolado",
      "Bifé suíno acebolado",
      "Arroz, feijão, ovo, fritas e salada.",
      {
        tag: "Todos os dias",
        image: "/images/cardapio/almoco/segunda/bifeSuinoAcebolado.jpeg",
        icon: "mdi-silverware-fork-knife",
      },
    ),

    plate("seg-omelete", "Omelete com fritas", "Arroz, feijão e salada.", {
      tag: "Todos os dias",
      image: "",
      icon: "mdi-silverware-fork-knife",
    }),
  ],
  sabado: [
    plate("sab-parmboi", "Parmegiana de boi", "Arroz, fritas e salada", {
      image: "",
      icon: "mdi-silverware-fork-knife",
    }),
    plate(
      "sab-parmboiduas",
      "Parmegiana de boi - Duas pessoas",
      "Arroz, fritas e salada EM DOBRO - Adicional parmegiana de boi: R$9,90",
      {
        image: "",
        icon: "mdi-silverware-fork-knife",
      },
    ),
    plate("sab-parmfrango", "Parmegiana de frango", "Arroz, fritas e salada", {
      image: "",
      icon: "mdi-silverware-fork-knife",
    }),
    plate("sab-parmfrango", "Parmegiana de frango", "Arroz, fritas e salada", {
      image: "",
      icon: "mdi-silverware-fork-knife",
    }),
    plate(
      "sab-parmfrangoduas",
      "Parmegiana de frango - Serve duas pessoas.",
      "Arroz, fritas e salada EM DOBRO - Adicional parmegiana de frango: R$7,90",
      {
        image: "",
        icon: "mdi-silverware-fork-knife",
      },
    ),
    plate(
      "sab-feijoada",
      "Feijoada individual",
      "Arroz, couve, laranja, vinagrete e farofa",
      {
        image: "",
        icon: "mdi-silverware-fork-knife",
      },
    ),
    plate(
      "sab-feijoadaduas",
      "Feijoada",
      "Arroz, couve, laranja, vinagrete e farofa e bisteca - Serve duas pessoas",
      {
        image: "",
        icon: "mdi-silverware-fork-knife",
      },
    ),
    plate(
      "seg-tropeirocompleto",
      "Tropeiro Completo",
      "Arroz, torresmo, bife suíno, ovo, fritas e couve.",
      {
        badge: "Mais vendido",
        featured: true,
        tag: "Todos os dias",
        image: "/images/cardapio/almoco/segunda/tropeiroCompleto.jpeg",
        icon: "mdi-silverware-fork-knife",
      },
    ),
  ],
};

export const portions = [
  plate(
    "pao",
    "Pão com linguiça",
    "O mais famoso de Teixeiras. Pão macio, linguiça e queijo no ponto.",
    {
      tag: "Lanche",
      badge: "O famoso",
      featured: true,
      image: "/images/paoComLinguicaParada.jpg",
      imagePosition: "center",
      icon: "mdi-baguette",
    },
  ),
  plate(
    "filetilapia",
    "Filé de tilápia",
    "Para a mesa inteira. A noite da Parada é feita de porção e conversa.",
    { tag: "Porção", 
      icon: "mdi-food-steak", 
      image:"/images/cardapio/porcao/porcaotilapia.png",
    },
  ),
  plate(
    "fritasbacon",
    "Fritas com queijo e bacon",
    "Para a mesa inteira. A noite da Parada é feita de porção e conversa.",
    { tag: "Porção", icon: "mdi-food-steak",image:"/images/cardapio/porcao/fritasbacon.png", },
  ),
  plate(
    "alcatrafritas",
    "Alcatra com fritas",
    "Para a mesa inteira. A noite da Parada é feita de porção e conversa.",
    { tag: "Porção", icon: "mdi-food-steak",image:"/images/cardapio/porcao/alcatrafritas.png", },
  ),
  plate(
    "hamburguer",
    "X-Tudo",
    "Lanche para quem chega com fome de verdade. Peça no salão ou no delivery.",
    { tag: "Lanche", icon: "mdi-hamburger",image:"/images/cardapio/porcao/xtudo.png", },
  ),
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

export const reviews = {
  kicker: "EXPERIÊNCIAS REAIS",
  title: "Nossos clientes",
  note: "Avaliações",
  items: [
    {
      name: "Marcella Magalhães",
      date: "12 ago. 2026",
      rating: 5,
      text: "O melhor e mais famoso pão com linguiça da região! Excelente atendimento, produtos de qualidade e um ambiente muito agradável. Recomendo de olhos fechados!",
      photo: "/images/avaliacoes/user01.jpg",
    },
    {
      name: "Natália Tavares",
      date: "03 set. 2026",
      rating: 5,
      text: "Um achado nessa rodovia. Passamos sempre e parávamos nos mesmos locais e tivemos a grata surpresa com esse restaurante. Atendimento excelente, comida saborosa e farta!",
      photo: "/images/avaliacoes/user02.png",
    },
    {
      name: "MC Guariba",
      date: "28 set. 2026",
      rating: 5,
      text: "Ambiente muito agradável , já rodei por muitos estados e nessa parada a comida é diferenciada , além do ótimo atendimento , de toda equipe , o dono Vinicius muito carismático e atencioso sempre , sempre que posso almoço",
      photo: "/images/avaliacoes/user03.png",
    },
    {
      name: "Kauan GAMER",
      date: "19 jul. 2026",
      rating: 5,
      text: "LUGAR MARAVILHOSO,EXCELENTE ATENDIMENTO,CERVEJA GELADA E COMIDA MINEIRA NO CAPRICHO...",
      photo: "/images/avaliacoes/user04.png",
    },
    {
      name: "Francine Silveira",
      date: "08 jul. 2026",
      rating: 5,
      text: "Comida deliciosa, ótimo atendimento, ambiente agradável para ir com a família.",
      photo: "/images/avaliacoes/user05.png",
    },
    {
      name: "Patricia Mol",
      date: "22 jun. 2026",
      rating: 5,
      text: "Um ambiente famíliar agradável, uma comida deliciosa, e um atendimento exemplar.",
      photo: "/images/avaliacoes/user06.png",
    },
  ],
};

// export const partners = [
//   { name: "Parceiro 1", logo: "" },
//   { name: "Parceiro 2", logo: "" },
//   { name: "Parceiro 3", logo: "" },
//   { name: "Parceiro 4", logo: "" },
//   { name: "Parceiro 5", logo: "" },
//   { name: "Parceiro 6", logo: "" },
// ];
