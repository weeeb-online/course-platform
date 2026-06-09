export function Footer() {
  return (
    <footer className="bg-[#0D0D0D] text-white/40 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded bg-primary flex items-center justify-center">
                <svg width="13" height="13" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                    stroke="#0D0D0D"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span className="font-display font-bold text-white text-base">
                Learn<span className="text-primary">Hub</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              A maior plataforma de educação digital do Brasil.
            </p>
          </div>
          <div>
            <p className="text-white font-semibold text-sm mb-3">Plataforma</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white/80 transition-colors">
                  Cursos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white/80 transition-colors">
                  Ebooks
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white/80 transition-colors">
                  Planos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white/80 transition-colors">
                  Certificados
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-white font-semibold text-sm mb-3">Empresa</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white/80 transition-colors">
                  Sobre nós
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white/80 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white/80 transition-colors">
                  Parceiros
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white/80 transition-colors">
                  Seja um instrutor
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-white font-semibold text-sm mb-3">Suporte</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white/80 transition-colors">
                  Central de ajuda
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white/80 transition-colors">
                  Fale conosco
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white/80 transition-colors">
                  Política de privacidade
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white/80 transition-colors">
                  Termos de uso
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs">
          <p>© 2025 LearnHub. Todos os direitos reservados.</p>
          <p>Feito com ❤️ no Brasil</p>
        </div>
      </div>
    </footer>
  );
}
