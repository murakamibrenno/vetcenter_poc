import { Link } from "react-router-dom";
import { SITE } from "@/lib/constants";
import { getAllServiceSlugs, SERVICES } from "@/lib/services";

export function Footer() {
  return (
    <footer className="relative bg-brand-charcoal text-white grain-overlay">
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-green font-bold">
                V+
              </div>
              <div>
                <span className="font-display text-lg font-semibold">{SITE.name}</span>
                <span className="block text-xs text-white/50">{SITE.tagline}</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/60">
              {SITE.fullAddress}
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-green-light">
              Ambientes
            </h4>
            <ul className="space-y-2">
              {getAllServiceSlugs().map((slug) => (
                <li key={slug}>
                  <Link
                    to={`/servicos/${slug}`}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {SERVICES[slug].title}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/estrutura" className="text-sm text-white/60 transition-colors hover:text-white">
                  Estrutura
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-green-light">
              Contato
            </h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <a href={`tel:+${SITE.phoneRaw}`} className="hover:text-white">
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a href={`tel:+${SITE.emergencyRaw}`} className="hover:text-white">
                  Emergência: {SITE.emergency}
                </a>
              </li>
              <li>
                <a
                  href={SITE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  @vetcenter_epi
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-green-light">
              Confiança
            </h4>
            <p className="text-3xl font-display font-semibold text-brand-green-light">
              {SITE.rating} ★
            </p>
            <p className="mt-1 text-sm text-white/60">
              +{SITE.reviewCount} avaliações no Google
            </p>
            <p className="mt-3 text-sm text-white/60">
              {SITE.years} anos cuidando de pets em {SITE.city}
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-white/40">
          © {new Date().getFullYear()} {SITE.name}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
