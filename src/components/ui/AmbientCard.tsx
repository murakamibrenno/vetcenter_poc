import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface AmbientCardProps {
  title: string;
  subtitle: string;
  image: string;
  href: string;
  span: string;
  index: number;
}

export function AmbientCard({
  title,
  subtitle,
  image,
  href,
  span,
  index,
}: AmbientCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative isolate min-h-[220px] shrink-0 overflow-hidden rounded-2xl sm:min-h-[220px] sm:rounded-3xl md:h-full md:min-h-0 ${span}`}
    >
      <Link to={href} className="absolute inset-0 block">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="ambient-card-gradient absolute inset-0" />
        <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 md:p-8">
          <span className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-white/70 sm:text-xs">
            {subtitle}
          </span>
          <h3 className="text-xl font-semibold text-white sm:text-2xl md:text-3xl">{title}</h3>
          <span className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-white/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Explorar ambiente
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
