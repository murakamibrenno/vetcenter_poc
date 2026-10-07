import { FadeIn } from "@/components/motion/FadeIn";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const maxW = align === "center" ? "max-w-2xl" : "max-w-xl";

  return (
    <FadeIn className={`mb-12 ${alignClass} ${maxW}`}>
      {eyebrow && (
        <span
          className={`mb-3 inline-block text-sm font-semibold uppercase tracking-[0.2em] ${
            light ? "text-brand-green-light" : "text-brand-green"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-balance text-4xl md:text-5xl lg:text-6xl ${
          light ? "text-white" : "text-brand-charcoal"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? "text-white/80" : "text-brand-charcoal/70"
          }`}
        >
          {description}
        </p>
      )}
    </FadeIn>
  );
}
