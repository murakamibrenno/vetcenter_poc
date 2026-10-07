export const SITE = {
  name: "Vet Center",
  tagline: "Pet Shop e Clínica Veterinária",
  city: "Presidente Epitácio",
  state: "SP",
  address: "Rua Fortaleza, 10-51",
  fullAddress: "Rua Fortaleza, 10-51, Centro, Presidente Epitácio, SP",
  phone: "(18) 3281-1035",
  phoneRaw: "551832811035",
  emergency: "(18) 98174-5375",
  emergencyRaw: "5518981745375",
  whatsapp: "551832811035",
  instagram: "https://instagram.com/vetcenter_epi",
  googleMaps:
    "https://www.google.com/maps/search/?api=1&query=Rua+Fortaleza+1051+Presidente+Epitacio+SP",
  googleReviews:
    "https://www.google.com/maps/search/?api=1&query=Vet+Center+Presidente+Epitacio",
  rating: 4.8,
  reviewCount: 70,
  years: 8,
} as const;

export const NAV_LINKS = [
  { label: "Ambientes", href: "/#ambientes" },
  { label: "Exames", href: "/servicos/exames" },
  { label: "Equipe", href: "/equipe" },
  { label: "Estrutura", href: "/estrutura" },
  { label: "Contato", href: "/contato" },
] as const;

export const DIAGNOSTIC_BENEFITS = [
  {
    title: "Resultado ágil",
    description:
      "Exames processados na clínica, para o veterinário avaliar e orientar o tratamento com mais rapidez.",
  },
  {
    title: "Menos deslocamento",
    description:
      "Consulta e diagnóstico no mesmo endereço — sem precisar ir a outra cidade para obter resultado.",
  },
  {
    title: "Decisão mais rápida",
    description:
      "Raio-X, ultrassom e exames de sangue integrados ao atendimento, no mesmo fluxo de cuidado.",
  },
  {
    title: "Mais conforto para o pet",
    description:
      "Menos viagens, menos espera e menos estresse para quem você mais cuida.",
  },
] as const;

export const REVIEWS = [
  {
    text: "Ótimo atendimento, e recepção dos pets nota ótimo veterinário.",
    author: "Rogerio Quirino",
  },
  {
    text: "Excelentes profissionais, Dr Danilo e toda equipe sempre muito atenciosos.",
    author: "Thiago Ferreira",
  },
  {
    text: "Todos meus animais quando precisam do banho/tosa ou atendimento veterinário levo.",
    author: "Heidi Christine Brand de Castro",
  },
] as const;
