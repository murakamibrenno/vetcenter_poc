import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { Button } from "@/components/ui/Button";
import type { Service } from "@/lib/services";
import { SITE } from "@/lib/constants";
import { Link } from "react-router-dom";

interface ServicePageContentProps {
  service: Service;
}

export function ServiceHero({ service }: ServicePageContentProps) {
  return (
    <section className="relative flex min-h-[70vh] items-end overflow-hidden grain-overlay">
      <div className="absolute inset-0">
        <img
          src={service.heroImage}
          alt={service.title}
          className="h-full w-full object-cover"
          style={{ objectPosition: service.heroObjectPosition ?? "center" }}
        />
        <div className="hero-gradient absolute inset-0" />
      </div>
      <div className="relative mx-auto w-full max-w-7xl px-4 pb-14 pt-36 sm:px-6 sm:pb-16 sm:pt-32 lg:px-8 lg:pb-24">
        <FadeIn>
          <span className="mb-3 inline-block text-[10px] font-semibold uppercase tracking-[0.15em] text-white/70 sm:text-xs sm:tracking-[0.25em]">
            {service.subtitle}
          </span>
          <h1 className="max-w-3xl text-3xl font-semibold text-white sm:text-4xl md:text-5xl lg:text-7xl">
            {service.title}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/80">{service.description}</p>
        </FadeIn>
      </div>
    </section>
  );
}

export function ServiceBody({ service }: ServicePageContentProps) {
  return (
    <>
      <section className={`bg-gradient-to-b ${service.atmosphere} py-16 sm:py-20 md:py-32`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <FadeIn>
              <h2 className="text-balance text-3xl font-semibold text-brand-charcoal sm:text-4xl md:text-5xl">
                {service.narrative.heading}
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-brand-charcoal/70">
                {service.narrative.body}
              </p>
              {service.slug === "clinica" && (
                <Link
                  to="/servicos/exames"
                  className="mt-6 inline-flex max-w-full items-center gap-2 break-words font-semibold text-brand-green hover:underline"
                >
                  Precisa de exames? Conheça nosso diagnóstico integrado →
                </Link>
              )}
            </FadeIn>

            <FadeIn direction="left" delay={0.15}>
              <div className="relative">
                <div className="absolute -inset-3 rounded-3xl bg-brand-green/20 blur-xl" />
                <img
                  src={service.gallery[0]}
                  alt={service.title}
                  className="relative rounded-3xl shadow-2xl"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12 text-center">
            <h2 className="text-3xl font-semibold text-brand-charcoal sm:text-4xl md:text-5xl">
              O que você encontra aqui
            </h2>
          </FadeIn>

          <StaggerChildren className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.benefits.map((benefit) => (
              <StaggerItem key={benefit.title}>
                <div className="group h-full rounded-3xl border border-brand-green/10 bg-white p-6 transition-all hover:-translate-y-1 hover:border-brand-green/30 hover:shadow-lg hover:shadow-brand-green/10">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green transition-colors group-hover:bg-brand-green group-hover:text-white">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <ellipse cx="12" cy="18" rx="4" ry="3" />
                      <circle cx="7" cy="11" r="2.5" />
                      <circle cx="17" cy="11" r="2.5" />
                      <circle cx="12" cy="7" r="2.5" />
                    </svg>
                  </div>
                  <h3 className={`font-display text-xl font-semibold ${service.accentColor}`}>
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-charcoal/65">
                    {benefit.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <section className="overflow-hidden bg-brand-charcoal py-12 sm:py-16">
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-4 px-4 pb-4 sm:scroll-px-6 sm:px-6 lg:px-8">
          {service.gallery.map((img, i) => (
            <img
              key={img}
              src={img}
              alt={`${service.title} ${i + 1}`}
              className="h-56 w-[85vw] max-w-sm flex-shrink-0 snap-center rounded-2xl object-cover sm:h-64 sm:w-80 md:w-96"
            />
          ))}
        </div>
      </section>

      <section className="py-16 pb-24 text-center sm:py-24 sm:pb-28">
        <FadeIn className="mx-auto max-w-xl px-4 sm:px-6">
          <h2 className="text-2xl font-semibold text-brand-charcoal sm:text-3xl md:text-4xl">
            Pronto para agendar?
          </h2>
          <p className="mt-4 text-brand-charcoal/70">
            Fale com a Vet Center e agende {service.title.toLowerCase()} para o seu pet.
          </p>
          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
            <Button href={`https://wa.me/${SITE.whatsapp}?text=Olá! Gostaria de agendar ${service.title}.`} external size="lg" className="w-full sm:w-auto">
              {service.ctaLabel}
            </Button>
            <Button href={`tel:+${SITE.phoneRaw}`} variant="outline" size="lg" className="w-full sm:w-auto">
              {SITE.phone}
            </Button>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
