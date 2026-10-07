import { Link } from "react-router-dom";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "light";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  external?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  onClick?: () => void;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-green text-white hover:bg-brand-green-dark shadow-lg shadow-brand-green/25",
  secondary:
    "bg-brand-red text-white hover:bg-red-800 shadow-lg shadow-brand-red/25",
  outline:
    "border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white",
  ghost: "text-brand-green hover:bg-brand-green/10",
  light:
    "bg-white text-brand-green-dark hover:bg-brand-cream hover:text-brand-green-dark shadow-lg shadow-black/10 [color:var(--color-brand-green-dark)]",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-6 py-3.5 text-base sm:px-8 sm:py-4 sm:text-lg",
};

export function Button({
  children,
  href,
  external,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
}: ButtonProps) {
  const classes = `inline-flex max-w-full items-center justify-center gap-2 rounded-full text-center font-semibold whitespace-normal transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    if (external || href.startsWith("http") || href.startsWith("tel") || href.startsWith("https://wa")) {
      return (
        <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link to={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
