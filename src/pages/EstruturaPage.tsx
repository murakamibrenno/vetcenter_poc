import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

const gallery = [
  {
    src: "/images/team/equipe-recepcao.png",
    title: "Recepção",
    description: "Ambiente acolhedor para pets e tutores",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/exames/raio-x-digital.png",
    title: "Diagnóstico por imagem",
    description: "Raio-X digital e equipamentos integrados",
    span: "md:col-span-2",
  },
  {
    src: "/images/clinica/consulta-estetoscopio.png",
    title: "Consultório",
    description: "Atendimento clínico com calma e atenção",
    span: "",
  },
  {
    src: "/images/team/equipe-fachada-8anos.png",
    title: "Fachada",
    description: "No Centro de Presidente Epitácio",
    span: "",
  },
];

export function EstruturaPage() {
  return (
    <>
      <section className="relative flex min-h-[50vh] items-end overflow-hidden grain-overlay bg-brand-charcoal">
        <div className="absolute inset-0 opacity-40">
          <img
            src="/images/team/equipe-recepcao.png"
            alt="Estrutura Vet Center"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="hero-gradient absolute inset-0" />
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-14 pt-28 sm:px-6 sm:pb-16 sm:pt-32 lg:px-8">
          <FadeIn>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
              Nossa estrutura
            </span>
            <h1 className="mt-3 max-w-2xl text-3xl font-semibold text-white sm:text-4xl md:text-6xl">
              Um espaço pensado para cuidar
            </h1>
            <p className="mt-4 max-w-lg text-lg text-white/75">
              Da recepção ao centro de diagnóstico — conheça os ambientes da Vet
              Center em {SITE.city}.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid auto-rows-[200px] grid-cols-1 gap-4 sm:auto-rows-[240px] sm:gap-5 md:grid-cols-4">
            {gallery.map((item, i) => (
              <FadeIn
                key={item.title}
                delay={i * 0.08}
                className={`group relative overflow-hidden rounded-3xl ${item.span}`}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="ambient-card-gradient absolute inset-0" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-white/70">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mt-12 rounded-2xl bg-brand-green p-6 text-center sm:mt-16 sm:rounded-3xl sm:p-8 md:p-12">
            <h2 className="text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
              Diagnóstico integrado na clínica
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/80">
              Raio-X digital, ultrassom e exames de sangue — equipamentos que
              agilizam o atendimento e trazem mais conforto para o seu pet, sem
              precisar buscar resultado em outra cidade.
            </p>
            <div className="mt-8">
              <Button href="/servicos/exames" variant="light" className="w-full sm:w-auto">
                Conhecer exames
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
