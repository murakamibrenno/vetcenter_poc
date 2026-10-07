import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";

export function NotFoundPage() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="text-6xl font-semibold text-brand-green">404</h1>
      <p className="mt-4 text-xl text-brand-charcoal/70">Página não encontrada</p>
      <div className="mt-8">
        <Button href="/">Voltar ao início</Button>
      </div>
      <Link to="/" className="sr-only">
        Início
      </Link>
    </section>
  );
}
