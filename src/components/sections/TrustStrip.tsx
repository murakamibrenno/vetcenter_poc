import { FadeIn } from "@/components/motion/FadeIn";
import { SITE } from "@/lib/constants";

const stats = [
  { value: `${SITE.rating}`, label: "no Google", suffix: "★★★★★" },
  { value: `+${SITE.reviewCount}`, label: "avaliações", suffix: "" },
  { value: `${SITE.years}`, label: "anos em", suffix: SITE.city },
];

export function TrustStrip() {
  return (
    <section className="relative -mt-8 z-10 mx-auto max-w-5xl px-6 lg:px-8">
      <FadeIn>
        <div className="grid grid-cols-1 gap-4 rounded-3xl bg-white p-6 shadow-xl shadow-brand-green/10 md:grid-cols-3 md:gap-0 md:divide-x md:divide-brand-green/10 md:p-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center md:px-6">
              <p className="font-display text-4xl font-semibold text-brand-green">
                {stat.value}
                {stat.suffix && (
                  <span className="ml-2 text-sm text-brand-orange">{stat.suffix}</span>
                )}
              </p>
              <p className="mt-1 text-sm text-brand-charcoal/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
