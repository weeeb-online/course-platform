import { Badge } from "@/components/badge";

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Badge className="bg-[#ed254e1a] text-[#ED254E]">Depoimentos</Badge>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
            O que nossos alunos dizem
          </h2>
          <div className="w-12 h-1 bg-[#F9DC5C] rounded-xs mt-4 mb-6 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 border border-[#ECECEC] border-t-4 border-t-[#ED254E] transition-[transform_shadow] hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#F9DC5C] flex items-center justify-center font-display font-bold text-gray-900 text-sm">
                LM
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">
                  Lucas Martins
                </p>
                <p className="text-gray-400 text-xs">
                  Desenvolvedor Full-Stack
                </p>
              </div>
            </div>
            <div className="text-[#F9DC5C] text-sm mb-3">★★★★★</div>
            <p className="text-gray-600 text-sm leading-relaxed">
              "Consegui meu primeiro emprego como dev três meses depois de
              terminar o curso de Python. O conteúdo é absurdamente bom e os
              professores são super didáticos."
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 border border-[#ECECEC] border-t-4 border-t-[#ED254E] transition-[transform_shadow] hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#ED254E] flex items-center justify-center font-display font-bold text-white text-sm">
                FO
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">
                  Fernanda Oliveira
                </p>
                <p className="text-gray-400 text-xs">Designer UX</p>
              </div>
            </div>
            <div className="text-[#F9DC5C] text-sm mb-3">★★★★★</div>
            <p className="text-gray-600 text-sm leading-relaxed">
              "O curso de UI/UX mudou completamente minha carreira. Em 4 meses
              já estava trabalhando como designer freelancer. Melhor
              investimento que já fiz."
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 border border-[#ECECEC] border-t-4 border-t-[#ED254E] transition-[transform_shadow] hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center font-display font-bold text-[#F9DC5C] text-sm">
                RS
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">
                  Ricardo Silva
                </p>
                <p className="text-gray-400 text-xs">Analista de Dados</p>
              </div>
            </div>
            <div className="text-[#F9DC5C] text-sm mb-3">★★★★★</div>
            <p className="text-gray-600 text-sm leading-relaxed">
              "Assino o plano Pro há 6 meses. Já terminei 5 cursos e li 8
              ebooks. O custo-benefício é imbatível. Recomendo a todos que
              querem crescer profissionalmente."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
