import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

export function HomeHero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden grain-overlay">
      <div className="absolute inset-0">
        <img
          src="/images/team/equipe-recepcao-hero.webp"
          alt="Equipe Vet Center na recepção"
          className="h-full w-full object-cover object-[center_40%]"
          decoding="async"
          fetchPriority="high"
        />
        <div className="hero-gradient absolute inset-0" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-20 pt-36 sm:px-6 sm:pb-24 sm:pt-40 lg:px-8 lg:pb-32">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-4 inline-block max-w-full rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/90 backdrop-blur-sm sm:px-4 sm:text-xs sm:tracking-[0.2em]"
        >
          {SITE.city} · {SITE.years} anos de cuidado
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="max-w-4xl text-balance text-3xl font-semibold leading-[1.08] text-white sm:text-4xl md:text-5xl lg:text-7xl"
        >
          Onde saúde, carinho e bem-estar se encontram
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-white/80"
        >
          Clínica veterinária, pet shop e banho e tosa no Centro de {SITE.city}.
          Diagnóstico integrado com raio-X, ultrassom e exames de sangue.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4"
        >
          <Button
            href={`https://wa.me/${SITE.whatsapp}`}
            external
            size="lg"
            className="w-full sm:w-auto"
          >
            Agendar atendimento
          </Button>
          <Button
            href={SITE.googleMaps}
            external
            variant="outline"
            size="lg"
            className="w-full border-white/40 text-white hover:bg-white hover:text-brand-green sm:w-auto"
          >
            Como chegar
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 space-y-1 text-sm text-white/60 sm:mt-8"
        >
          <p>{SITE.address}</p>
          <p>{SITE.phone}</p>
        </motion.div>
      </div>
    </section>
  );
}
