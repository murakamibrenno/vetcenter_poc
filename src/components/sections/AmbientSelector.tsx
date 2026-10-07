import { AmbientCard } from "@/components/ui/AmbientCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AMBIENTS } from "@/lib/services";

export function AmbientSelector() {
  return (
    <section id="ambientes" className="py-16 sm:py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Ambientes"
          title="Cada espaço, um cuidado diferente"
          description="Explore a clínica por ambientes — da consulta ao diagnóstico, do banho e tosa ao pet shop."
          align="center"
        />

        <div className="flex flex-col gap-7 sm:grid sm:grid-cols-2 sm:gap-5 md:grid-cols-4 md:auto-rows-[220px] md:gap-x-5 md:gap-y-6">
          {AMBIENTS.map((ambient, i) => (
            <AmbientCard
              key={ambient.slug}
              title={ambient.title}
              subtitle={ambient.subtitle}
              image={ambient.image}
              href={ambient.href}
              span={ambient.span}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
