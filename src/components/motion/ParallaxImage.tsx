import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  objectPosition?: string;
  speed?: number;
}

export function ParallaxImage({
  src,
  alt,
  className = "",
  objectPosition = "center",
  speed = 0.25,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [`-${speed * 100}%`, `${speed * 100}%`]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y, objectPosition }}
        className="absolute inset-0 h-[120%] w-full object-cover"
      />
    </div>
  );
}
