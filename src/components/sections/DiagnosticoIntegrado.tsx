import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DIAGNOSTIC_BENEFITS } from "@/lib/constants";

export function DiagnosticoIntegrado() {
  return (
    <section className="relative overflow-hidden bg-brand-charcoal py-24 text-white grain-overlay md:py-32">
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-brand-green/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-brand-red/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Diagnóstico integrado"
              title="Diagnóstico completo, sem sair da cidade"
              description="Raio-X digital, ultrassom e exames de sangue integrados à clínica — para o veterinário investigar e orientar o tratamento com mais agilidade."
              light
            />

            <StaggerChildren className="mt-8 grid gap-4 sm:grid-cols-2">
              {DIAGNOSTIC_BENEFITS.map((benefit) => (
                <StaggerItem key={benefit.title}>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-colors hover:border-brand-green/40 hover:bg-white/10">
                    <h3 className="font-display text-lg font-semibold text-brand-green-light">
                      {benefit.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/65">
                      {benefit.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>

            <FadeIn delay={0.3} className="mt-10">
              <Button href="/servicos/exames" variant="primary" size="lg">
                Conhecer exames e diagnóstico
              </Button>
            </FadeIn>
          </div>

          <FadeIn direction="left" delay={0.2}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand-green/30 to-brand-red/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="/images/exames/raio-x-digital.png"
                  alt="Raio-X digital na Vet Center com resultado na tela"
                  className="aspect-[4/5] w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-charcoal/90 to-transparent p-6">
                  <p className="text-sm font-medium text-brand-green-light">
                    Raio-X digital
                  </p>
                  <p className="text-xs text-white/60">
                    Resultado disponível com agilidade para avaliação veterinária
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
