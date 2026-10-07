import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { REVIEWS, SITE } from "@/lib/constants";

export function ReviewsSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Avaliações"
          title="Quem cuida, recomenda"
          description="Avaliações reais de tutores que confiam na Vet Center."
          align="center"
        />

        <StaggerChildren className="grid gap-6 md:grid-cols-3">
          {REVIEWS.map((review) => (
            <StaggerItem key={review.author}>
              <blockquote className="flex h-full flex-col rounded-3xl border border-brand-green/10 bg-brand-cream p-8">
                <div className="mb-4 text-brand-orange">★★★★★</div>
                <p className="flex-1 text-brand-charcoal/80 leading-relaxed">
                  &ldquo;{review.text}&rdquo;
                </p>
                <footer className="mt-6 text-sm font-semibold text-brand-green">
                  {review.author} · Google
                </footer>
              </blockquote>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <FadeIn className="mt-12 text-center">
          <Button href={SITE.googleReviews} external variant="outline">
            Ver avaliações no Google
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
