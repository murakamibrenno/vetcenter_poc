import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

export function CtaSection() {
  return (
    <section className="py-16 pb-24 sm:py-20 md:py-32 md:pb-32">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-balance text-3xl font-semibold text-brand-charcoal sm:text-4xl md:text-5xl">
            Agende o atendimento do seu pet
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-brand-charcoal/70">
            Consultas, exames, banho e tosa e muito mais — entre em contato com a
            Vet Center em {SITE.city}.
          </p>
          <div className="mt-8 flex flex-col items-stretch gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
            <Button href={`tel:+${SITE.phoneRaw}`} size="lg" className="w-full sm:w-auto">
              {SITE.phone}
            </Button>
            <Button
              href={`https://wa.me/${SITE.whatsapp}`}
              external
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              WhatsApp
            </Button>
          </div>
          <p className="mt-6 text-sm text-brand-charcoal/50">
            Emergência: {SITE.emergency}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
