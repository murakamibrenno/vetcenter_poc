import { FadeIn } from "@/components/motion/FadeIn";
import { SITE } from "@/lib/constants";

const stats = [
  { value: `${SITE.rating}`, label: "no Google", stars: "★★★★★" },
  { value: `+${SITE.reviewCount}`, label: "avaliações no Google", stars: "" },
  { value: `${SITE.years}`, label: `anos em ${SITE.city}`, stars: "" },
];

export function TrustStrip() {
  return (
    <section className="relative z-10 mx-auto max-w-5xl px-4 sm:-mt-6 sm:px-6 md:-mt-8 lg:px-8">
      <FadeIn>
        <div className="grid grid-cols-1 gap-4 rounded-2xl bg-white p-5 shadow-xl shadow-brand-green/10 sm:rounded-3xl sm:p-6 md:grid-cols-3 md:gap-0 md:divide-x md:divide-brand-green/10 md:p-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center md:px-6">
              <p className="font-display text-3xl font-semibold text-brand-green sm:text-4xl">
                {stat.value}
              </p>
              {stat.stars && (
                <p className="mt-1 text-sm text-brand-orange">{stat.stars}</p>
              )}
              <p className="mt-1 text-sm text-brand-charcoal/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
