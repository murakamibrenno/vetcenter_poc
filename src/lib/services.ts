export type ServiceSlug =
  | "clinica"
  | "cirurgias"
  | "exames"
  | "banho-e-tosa"
  | "pet-shop";

export interface Service {
  slug: ServiceSlug;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  heroObjectPosition?: string;
  atmosphere: string;
  accentColor: string;
  benefits: { title: string; description: string }[];
  narrative: { heading: string; body: string };
  gallery: string[];
  ctaLabel: string;
}

export const AMBIENTS = [
  {
    slug: "clinica" as const,
    title: "Clínica",
    subtitle: "Consultas e prevenção",
    image: "/images/clinica/consulta-estetoscopio.png",
    span: "md:col-span-2 md:row-span-2",
    href: "/servicos/clinica",
  },
  {
    slug: "exames" as const,
    title: "Exames",
    subtitle: "Diagnóstico integrado",
    image: "/images/exames/raio-x-digital.png",
    span: "md:col-span-2 md:row-span-1",
    href: "/servicos/exames",
  },
  {
    slug: "cirurgias" as const,
    title: "Cirurgias",
    subtitle: "Centro cirúrgico",
    image: "/images/exames/raio-x-digital.png",
    span: "md:col-span-1 md:row-span-1",
    href: "/servicos/cirurgias",
  },
  {
    slug: "banho-e-tosa" as const,
    title: "Banho e Tosa",
    subtitle: "Bem-estar e estética",
    image: "/images/clinica/consulta-estetoscopio.png",
    span: "md:col-span-1 md:row-span-1",
    href: "/servicos/banho-e-tosa",
  },
  {
    slug: "pet-shop" as const,
    title: "Pet Shop",
    subtitle: "Produtos e cuidados",
    image: "/images/team/equipe-fachada-8anos.png",
    span: "md:col-span-1 md:row-span-1",
    href: "/servicos/pet-shop",
  },
  {
    slug: "estrutura" as const,
    title: "Estrutura",
    subtitle: "Nossa clínica",
    image: "/images/team/equipe-recepcao.png",
    span: "md:col-span-1 md:row-span-1",
    href: "/estrutura",
  },
];

export const SERVICES: Record<ServiceSlug, Service> = {
  clinica: {
    slug: "clinica",
    title: "Consulta Veterinária",
    subtitle: "Saúde e prevenção para cães e gatos",
    description:
      "Avaliação clínica completa, vacinação e acompanhamento preventivo com uma equipe que trata cada pet pelo nome.",
    heroImage: "/images/clinica/consulta-estetoscopio.png",
    heroObjectPosition: "center 30%",
    atmosphere: "from-brand-green-light via-brand-cream to-white",
    accentColor: "text-brand-green",
    benefits: [
      {
        title: "Consultas presenciais",
        description: "Avaliação detalhada da saúde do seu pet com tempo de escuta.",
      },
      {
        title: "Vacinação",
        description: "Protocolo vacinal atualizado e acompanhamento preventivo.",
      },
      {
        title: "Emergência",
        description: "Orientação rápida quando seu pet precisa de avaliação urgente.",
      },
      {
        title: "Diagnóstico integrado",
        description: "Precisa de exames? Tudo no mesmo lugar — conheça nosso setor de diagnóstico.",
      },
    ],
    narrative: {
      heading: "Cuidado que começa na consulta",
      body: "Na Vet Center, cada consulta é um momento de escuta. Nossa equipe avalia, orienta e, quando necessário, encaminha para exames na própria clínica — raio-X, ultrassom e sangue — sem que você precise buscar resultado em outra cidade.",
    },
    gallery: [
      "/images/clinica/consulta-estetoscopio.png",
      "/images/team/equipe-recepcao.png",
      "/images/team/equipe-fachada-8anos.png",
    ],
    ctaLabel: "Agendar consulta",
  },
  cirurgias: {
    slug: "cirurgias",
    title: "Cirurgias",
    subtitle: "Procedimentos com segurança e precisão",
    description:
      "Centro cirúrgico equipado para procedimentos eletivos e de urgência, com equipe experiente e monitoramento cuidadoso.",
    heroImage: "/images/exames/raio-x-digital.png",
    heroObjectPosition: "center center",
    atmosphere: "from-brand-charcoal via-brand-green-dark to-brand-green",
    accentColor: "text-brand-green-light",
    benefits: [
      {
        title: "Centro cirúrgico",
        description: "Ambiente preparado para procedimentos com protocolos de segurança.",
      },
      {
        title: "Equipe especializada",
        description: "Veterinários com experiência em procedimentos cirúrgicos.",
      },
      {
        title: "Pré e pós-operatório",
        description: "Acompanhamento completo antes, durante e depois do procedimento.",
      },
      {
        title: "Exames pré-cirúrgicos",
        description: "Diagnóstico integrado na clínica para preparar o pet com segurança.",
      },
    ],
    narrative: {
      heading: "Precisão em cada procedimento",
      body: "Realizamos cirurgias com a mesma dedicação que dedicamos a cada consulta. Exames pré-operatórios disponíveis na clínica garantem que seu pet esteja preparado — e você, tranquilo.",
    },
    gallery: [
      "/images/exames/raio-x-digital.png",
      "/images/team/equipe-recepcao.png",
    ],
    ctaLabel: "Falar sobre cirurgia",
  },
  exames: {
    slug: "exames",
    title: "Diagnóstico por Imagem",
    subtitle: "Raio-X digital, ultrassom e exames de sangue",
    description:
      "Equipamentos de diagnóstico integrados à clínica — para investigar, acompanhar e orientar o tratamento com agilidade, sem encaminhar para outra cidade.",
    heroImage: "/images/exames/raio-x-digital.png",
    heroObjectPosition: "center center",
    atmosphere: "from-brand-charcoal via-brand-red/20 to-brand-cream",
    accentColor: "text-brand-red",
    benefits: [
      {
        title: "Raio-X digital",
        description:
          "Investigação por imagem no mesmo atendimento, com resultado disponível com agilidade para o veterinário avaliar.",
      },
      {
        title: "Ultrassom",
        description:
          "Exame de imagem complementar sem deslocamento para outra clínica ou cidade.",
      },
      {
        title: "Exames de sangue",
        description:
          "Coleta e análise na clínica, com resultado ágil — menos espera e menos idas e vindas.",
      },
      {
        title: "Fluxo integrado",
        description:
          "Consulta, exame e orientação de tratamento no mesmo lugar, em Presidente Epitácio.",
      },
    ],
    narrative: {
      heading: "Diagnóstico completo, sem sair da cidade",
      body: "Muitos tutores precisavam encaminhar exames para outras cidades e esperar dias pelo resultado. Na Vet Center, raio-X digital, ultrassom e laboratório de sangue estão integrados ao atendimento — para o veterinário investigar e orientar os próximos passos com mais agilidade e conforto para o seu pet.",
    },
    gallery: [
      "/images/exames/raio-x-digital.png",
      "/images/clinica/consulta-estetoscopio.png",
      "/images/team/equipe-recepcao.png",
    ],
    ctaLabel: "Agendar exame",
  },
  "banho-e-tosa": {
    slug: "banho-e-tosa",
    title: "Banho e Tosa",
    subtitle: "Higiene, pele e pelagem",
    description:
      "Cuidados estéticos e de bem-estar com produtos de qualidade e profissionais que entendem que cada pet é único.",
    heroImage: "/images/clinica/consulta-estetoscopio.png",
    heroObjectPosition: "center 40%",
    atmosphere: "from-sky-50 via-brand-cream to-brand-green-light",
    accentColor: "text-brand-blue",
    benefits: [
      {
        title: "Banho terapêutico",
        description: "Produtos adequados para pele sensível e pelagem saudável.",
      },
      {
        title: "Tosa profissional",
        description: "Corte e acabamento respeitando o conforto do animal.",
      },
      {
        title: "Hidratação",
        description: "Tratamentos para pelagem ressecada ou danificada.",
      },
      {
        title: "Ambiente acolhedor",
        description: "Profissionais pacientes que reduzem o estresse do pet.",
      },
    ],
    narrative: {
      heading: "Bem-estar que se vê e se sente",
      body: "Banho e tosa não são só estética — são cuidado com a pele, a pelagem e o conforto do seu pet. Nossa equipe trata cada animal com calma e atenção, porque sabemos que nem todo pet gosta de água.",
    },
    gallery: [
      "/images/team/equipe-recepcao.png",
      "/images/team/equipe-fachada-8anos.png",
    ],
    ctaLabel: "Agendar banho e tosa",
  },
  "pet-shop": {
    slug: "pet-shop",
    title: "Pet Shop",
    subtitle: "Produtos para o dia a dia",
    description:
      "Rações, acessórios e itens de cuidado selecionados pela nossa equipe — com orientação veterinária quando você precisar.",
    heroImage: "/images/team/equipe-fachada-8anos.png",
    heroObjectPosition: "center 35%",
    atmosphere: "from-brand-orange/10 via-brand-cream to-brand-green-light",
    accentColor: "text-brand-orange",
    benefits: [
      {
        title: "Alimentação",
        description: "Rações premium e orientação sobre a dieta ideal.",
      },
      {
        title: "Acessórios",
        description: "Coleiras, camas, brinquedos e itens de conforto.",
      },
      {
        title: "Higiene",
        description: "Shampoos, condicionadores e produtos de cuidado.",
      },
      {
        title: "Orientação",
        description: "Equipe veterinária por perto para tirar dúvidas na hora da compra.",
      },
    ],
    narrative: {
      heading: "Tudo que seu pet precisa, com quem entende",
      body: "Nosso pet shop não é só loja — é extensão da clínica. Você encontra produtos de qualidade e, se tiver dúvida sobre alimentação ou cuidados, nossa equipe está ao lado para orientar.",
    },
    gallery: [
      "/images/team/equipe-fachada-8anos.png",
      "/images/team/equipe-recepcao.png",
    ],
    ctaLabel: "Falar com a Vet Center",
  },
};

export function getService(slug: string): Service | undefined {
  return SERVICES[slug as ServiceSlug];
}

export function getAllServiceSlugs(): ServiceSlug[] {
  return Object.keys(SERVICES) as ServiceSlug[];
}
