import { Badge } from "@/components/badge";
import { Pill } from "@/components/pill";

export function Hero() {
  return (
    <section className="bg-[#0D0D0D] bg-(image:--bg-hero-glow) pt-24 pb-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 max-w-xl">
            <Badge className="bg-primary/10 text-primary">
              🚀 Plataforma #1 do Brasil
            </Badge>
            <h1 className="font-heading text-white text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6">
              Aprenda.
              <br />
              <span className="text-primary">Evolua.</span>
              <br />
              Conquiste.
            </h1>
            <p className="text-white/60 text-lg mb-10 leading-relaxed">
              Mais de <strong className="text-white/90">800 cursos</strong> e{" "}
              <strong className="text-white/90">1.200 ebooks</strong> criados
              pelos maiores especialistas do mercado. Do zero à fluência, no seu
              ritmo.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <a href="#planos" className="btn-primary">
                Começar agora
              </a>
              <a href="#cursos" className="btn-secondary">
                Ver catálogo
              </a>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="border-s-4 border-primary bg-white/10 py-5 px-6 rounded-e-md">
                <p className="text-primary font-heading font-bold text-2xl">
                  800+
                </p>
                <p className="text-white/50 text-xs mt-1">Cursos</p>
              </div>
              <div className="border-s-4 border-primary bg-white/10 py-5 px-6 rounded-e-md">
                <p className="text-primary font-heading font-bold text-2xl">
                  120k
                </p>
                <p className="text-white/50 text-xs mt-1">Alunos</p>
              </div>
              <div className="border-s-4 border-primary bg-white/10 py-5 px-6 rounded-e-md">
                <p className="text-primary font-heading font-bold text-2xl">
                  4.9 ★
                </p>
                <p className="text-white/50 text-xs mt-1">Avaliação</p>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <div className="relative animate-(--animate-float)">
              <div className="bg-white rounded-2xl shadow-2xl p-5 w-72">
                <div className="bg-primary rounded-xl h-36 flex items-center justify-center text-5xl mb-4">
                  📈
                </div>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">
                  Curso em destaque
                </p>
                <h3 className="font-bold text-gray-900 text-base mb-1">
                  Marketing Digital Avançado
                </h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-primary text-sm">★★★★★</span>
                  <span className="text-xs text-gray-400">(1.842)</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-gray-400 line-through">
                      R$349
                    </span>
                    <span className="font-bold text-gray-900 ml-1">R$147</span>
                  </div>
                  <Pill className="bg-[#ED254E] text-white">-58%</Pill>
                </div>
              </div>
              <div className="absolute -top-4 -right-6 bg-[#ED254E] text-white rounded-xl px-4 py-2 shadow-lg">
                <p className="text-xs font-bold">🔥 12 comprando agora</p>
              </div>
              <div className="absolute -bottom-4 -left-6 bg-white rounded-xl px-4 py-3 shadow-xl border border-gray-100">
                <p className="text-xs text-gray-500 mb-0.5">Progresso</p>
                <div className="flex items-center gap-2">
                  <div className="w-24 h-2 bg-gray-100 rounded-full">
                    <div className="w-3/5 h-2 bg-primary rounded-full"></div>
                  </div>
                  <span className="text-xs font-bold text-gray-700">63%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
