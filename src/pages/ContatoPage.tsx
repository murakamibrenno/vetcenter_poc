import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

export function ContatoPage() {
  return (
    <>
      <section className="bg-brand-green py-24 pt-32 text-white md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
              Contato
            </span>
            <h1 className="mt-3 text-5xl font-semibold md:text-6xl">
              Estamos por perto
            </h1>
            <p className="mt-4 max-w-lg text-lg text-white/80">
              Agende consultas, exames, banho e tosa ou tire dúvidas — estamos
              no Centro de {SITE.city}.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <FadeIn>
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-green">
                  Endereço
                </h3>
                <p className="mt-2 text-xl text-brand-charcoal">{SITE.fullAddress}</p>
                <Button
                  href={SITE.googleMaps}
                  external
                  variant="ghost"
                  className="mt-3 px-0"
                >
                  Abrir no Google Maps →
                </Button>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-green">
                  Telefone
                </h3>
                <a
                  href={`tel:+${SITE.phoneRaw}`}
                  className="mt-2 block text-2xl font-semibold text-brand-charcoal hover:text-brand-green"
                >
                  {SITE.phone}
                </a>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-red">
                  Emergência
                </h3>
                <a
                  href={`tel:+${SITE.emergencyRaw}`}
                  className="mt-2 block text-2xl font-semibold text-brand-red hover:text-red-800"
                >
                  {SITE.emergency}
                </a>
                <p className="mt-1 text-sm text-brand-charcoal/50">
                  Verifique a disponibilidade de atendimento
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-green">
                  WhatsApp
                </h3>
                <Button
                  href={`https://wa.me/${SITE.whatsapp}`}
                  external
                  size="lg"
                  className="mt-3"
                >
                  Enviar mensagem
                </Button>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-green">
                  Instagram
                </h3>
                <a
                  href={SITE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block font-semibold text-brand-charcoal hover:text-brand-green"
                >
                  @vetcenter_epi
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.15}>
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <iframe
                title="Localização Vet Center"
                src="https://maps.google.com/maps?q=Rua+Fortaleza+1051+Presidente+Epitacio+SP&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="h-[400px] w-full border-0 md:h-[500px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
