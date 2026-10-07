import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";

export function TeamPreview() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 overflow-hidden rounded-[2.5rem] bg-brand-green-light lg:grid-cols-2">
          <FadeIn className="relative h-80 lg:h-[520px]">
            <img
              src="/images/team/equipe-fachada-8anos.png"
              alt="Equipe Vet Center na fachada"
              className="absolute inset-0 h-full w-full object-cover object-[center_30%]"
            />
          </FadeIn>

          <FadeIn delay={0.15} className="p-8 lg:p-12">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">
              Nossa equipe
            </span>
            <h2 className="mt-3 text-balance text-4xl font-semibold text-brand-charcoal md:text-5xl">
              Quem cuida, conhece pelo nome
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-brand-charcoal/70">
              Dr. Danilo Amaral e toda a equipe da Vet Center tratam cada pet com
              atenção e carinho — do consultório à recepção, do banho e tosa ao
              pet shop.
            </p>
            <div className="mt-8">
              <Button href="/equipe" variant="primary">
                Conhecer a equipe
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
