import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header>
      <nav className="bg-[#0D0D0D] sticky top-0 z-50 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between gap-4 h-16">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded bg-primary flex items-center justify-center">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                <path
                  d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                  stroke="#0D0D0D"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="font-display font-800 text-white text-lg tracking-tight">
              Learn<span className="text-primary">Hub</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-white/70 font-medium">
            <a href="#cursos" className="hover:text-white transition-colors">
              Cursos
            </a>
            <a href="#ebooks" className="hover:text-white transition-colors">
              Ebooks
            </a>
            <a href="#planos" className="hover:text-white transition-colors">
              Planos
            </a>
            <a
              href="#depoimentos"
              className="hover:text-white transition-colors"
            >
              Depoimentos
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" asChild>
              <a href="#">Entrar</a>
            </Button>
            <Button asChild>
              <a href="#planos">Começar Grátis</a>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
