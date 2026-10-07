import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NAV_LINKS, SITE } from "@/lib/constants";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isHome = location.pathname === "/";
  const transparent = isHome && !scrolled && !menuOpen;
  const solidBar = scrolled || menuOpen || !isHome;

  return (
    <>
      <header className="fixed top-0 right-0 left-0 z-50">
        <div
          className={`transition-all duration-500 ${
            solidBar
              ? "glass border-b border-brand-green/10 shadow-sm"
              : "bg-transparent"
          }`}
        >
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:h-16 sm:px-6 lg:px-8"
          >
            <Link to="/" className="group flex min-w-0 items-center gap-2 sm:gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-green text-base font-bold text-white shadow-md sm:h-10 sm:w-10 sm:text-lg">
                V+
              </div>
              <div className="min-w-0">
                <span
                  className={`block truncate font-display text-base font-semibold leading-tight sm:text-lg ${
                    transparent ? "text-white" : "text-brand-charcoal"
                  }`}
                >
                  {SITE.name}
                </span>
                <span
                  className={`hidden truncate text-[10px] uppercase tracking-wider sm:block ${
                    transparent ? "text-white/70" : "text-brand-charcoal/50"
                  }`}
                >
                  {SITE.tagline}
                </span>
              </div>
            </Link>

            <nav className="hidden items-center gap-8 lg:flex">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-sm font-medium transition-colors hover:text-brand-green ${
                    transparent ? "text-white/90 hover:text-white" : "text-brand-charcoal/80"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={`https://wa.me/${SITE.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-brand-green px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-brand-green-dark"
              >
                Agendar
              </a>
            </nav>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className={`relative z-[60] flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden ${
                transparent ? "text-white" : "text-brand-charcoal"
              }`}
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
            >
              <span
                className={`block h-0.5 w-6 bg-current transition-transform duration-200 ${
                  menuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-current transition-opacity duration-200 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-current transition-transform duration-200 ${
                  menuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </button>
          </motion.div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[55] bg-brand-charcoal/50 lg:hidden"
              aria-label="Fechar menu"
              onClick={() => setMenuOpen(false)}
            />

            <motion.nav
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-14 right-0 left-0 z-[58] max-h-[calc(100dvh-3.5rem)] overflow-y-auto border-b border-brand-green/10 bg-brand-cream shadow-xl sm:top-16 lg:hidden"
            >
              <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6 sm:py-6">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-xl px-3 py-3 text-lg font-medium text-brand-charcoal transition-colors hover:bg-brand-green/10 hover:text-brand-green"
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href={`https://wa.me/${SITE.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 rounded-full bg-brand-green px-5 py-3 text-center font-semibold text-white shadow-md"
                >
                  Agendar via WhatsApp
                </a>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
