import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { Button } from "@/components/ui/Button";
import { REVIEWS, SITE } from "@/lib/constants";

export function EquipePage() {
  return (
    <>
      <section className="relative min-h-[60vh] overflow-hidden grain-overlay">
        <img
          src="/images/team/equipe-recepcao.png"
          alt="Equipe Vet Center na recepção"
          className="absolute inset-0 h-full w-full object-cover object-[center_35%]"
        />
        <div className="hero-gradient absolute inset-0" />
        <div className="relative mx-auto flex min-h-[60vh] max-w-7xl flex-col justify-end px-4 pb-14 pt-28 sm:px-6 sm:pb-16 sm:pt-32 lg:px-8">
          <FadeIn>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
              Nossa equipe
            </span>
            <h1 className="mt-3 max-w-3xl text-3xl font-semibold text-white sm:text-4xl md:text-6xl">
              Conheça quem cuida do seu pet
            </h1>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn>
              <img
                src="/images/team/equipe-fachada-8anos.png"
                alt="Equipe Vet Center — 8 anos"
                className="rounded-3xl shadow-2xl"
              />
            </FadeIn>
            <FadeIn delay={0.15}>
              <span className="inline-block rounded-full bg-brand-green/10 px-4 py-1.5 text-sm font-semibold text-brand-green">
                {SITE.years} anos Vet Center
              </span>
              <h2 className="mt-4 text-3xl font-semibold text-brand-charcoal sm:text-4xl md:text-5xl">
                Dr. Danilo Amaral e equipe
              </h2>
              <p className="mt-2 text-sm font-medium text-brand-green">
                CRMV-SP 41938
              </p>
              <p className="mt-6 text-lg leading-relaxed text-brand-charcoal/70">
                Profissionais dedicados que combinam experiência veterinária com
                carinho genuíno. Da consulta ao banho e tosa, da recepção ao pet
                shop — cada membro da equipe trata o seu pet como único.
              </p>
              <p className="mt-4 text-brand-charcoal/60">
                {SITE.fullAddress}
              </p>
              <div className="mt-8">
                <Button href={`https://wa.me/${SITE.whatsapp}`} external>
                  Falar com a equipe
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-brand-green-light py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="mb-12 text-center">
            <h2 className="text-4xl font-semibold text-brand-charcoal">
              O que dizem sobre nós
            </h2>
          </FadeIn>
          <StaggerChildren className="grid gap-6 md:grid-cols-3">
            {REVIEWS.map((review) => (
              <StaggerItem key={review.author}>
                <blockquote className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
                  <div className="mb-3 text-brand-orange">★★★★★</div>
                  <p className="text-brand-charcoal/80">&ldquo;{review.text}&rdquo;</p>
                  <footer className="mt-4 text-sm font-semibold text-brand-green">
                    {review.author}
                  </footer>
                </blockquote>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
    </>
  );
}
