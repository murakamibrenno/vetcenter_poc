import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

export function CtaSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <FadeIn>
          <h2 className="text-balance text-4xl font-semibold text-brand-charcoal md:text-5xl">
            Agende o atendimento do seu pet
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-brand-charcoal/70">
            Consultas, exames, banho e tosa e muito mais — entre em contato com a
            Vet Center em {SITE.city}.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href={`tel:+${SITE.phoneRaw}`} size="lg">
              {SITE.phone}
            </Button>
            <Button
              href={`https://wa.me/${SITE.whatsapp}`}
              external
              variant="secondary"
              size="lg"
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
