import { motion } from "framer-motion";
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

  const isHome = location.pathname === "/";
  const transparent = isHome && !scrolled;

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        transparent ? "bg-transparent" : "glass border-b border-brand-green/10 shadow-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link to="/" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-green text-lg font-bold text-white shadow-md">
            V+
          </div>
          <div>
            <span
              className={`block font-display text-lg font-semibold leading-tight ${
                transparent ? "text-white" : "text-brand-charcoal"
              }`}
            >
              {SITE.name}
            </span>
            <span
              className={`block text-[10px] uppercase tracking-wider ${
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
          onClick={() => setMenuOpen(!menuOpen)}
          className={`flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden ${
            transparent ? "text-white" : "text-brand-charcoal"
          }`}
          aria-label="Menu"
        >
          <span
            className={`block h-0.5 w-6 bg-current transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span className={`block h-0.5 w-6 bg-current transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span
            className={`block h-0.5 w-6 bg-current transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass border-t border-brand-green/10 px-6 py-6 lg:hidden"
        >
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-lg font-medium text-brand-charcoal"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-brand-green px-5 py-3 text-center font-semibold text-white"
            >
              Agendar via WhatsApp
            </a>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
