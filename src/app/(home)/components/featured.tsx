import { Badge } from "@/components/badge";
import { Pill } from "@/components/pill";
import { Button } from "@/components/ui/button";
import { Fragment } from "react/jsx-runtime";

export function Featured() {
  return (
    <Fragment>
      <section id="courses" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <Badge className="bg-[#ed254e1a] text-[#ED254E]">
                Cursos em destaque
              </Badge>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
                Aprenda com os melhores
              </h2>
              <div className="w-12 h-1 bg-[#F9DC5C] rounded-xs mt-4 mb-6"></div>
            </div>
            <a
              href="#"
              className="text-[#ED254E] font-semibold text-sm hover:underline mt-4 md:mt-0"
            >
              Ver todos os cursos →
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border-2 border-[#ECECEC] rounded-lg overflow-hidden transition-[transform_shadow] hover:-translate-y-1 hover:shadow-lg">
              <div className="h-44 flex items-center justify-center text-6xl bg-[#F9DC5C]/20">
                💻
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Pill className="bg-gray-100 text-gray-500">Programação</Pill>
                  <Pill className="bg-[#F9DC5C] text-gray-900">
                    Mais Vendido
                  </Pill>
                </div>
                <h3 className="font-display font-bold text-gray-900 mb-1">
                  Python do Zero ao Pro
                </h3>
                <p className="text-gray-400 text-sm mb-3">por Rafael Torres</p>
                <div className="flex items-center gap-1 mb-4">
                  <span className="text-[#F9DC5C] text-sm">★★★★★</span>
                  <span className="text-xs text-gray-400">(3.210)</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-gray-400 line-through">
                      R$397
                    </span>
                    <span className="font-display font-bold text-gray-900 text-lg ml-1">
                      R$127
                    </span>
                  </div>
                  <Button
                    className="bg-[#ED254E] hover:bg-[#d4183d] text-white"
                    asChild
                  >
                    <a href="#">Comprar</a>
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-[#ED254E] rounded-lg overflow-hidden transition-[transform_shadow] hover:-translate-y-1 hover:shadow-lg">
              <div className="absolute top-3 right-3 z-10">
                <Pill className="bg-[#ED254E] text-white">🔥 Em alta</Pill>
              </div>
              <div className="h-44 flex items-center justify-center text-6xl bg-[#ED254E]/10">
                🎨
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Pill className="bg-gray-100 text-gray-500">Design</Pill>
                </div>
                <h3 className="font-display font-bold text-gray-900 mb-1">
                  UI/UX Design Completo
                </h3>
                <p className="text-gray-400 text-sm mb-3">por Ana Lima</p>
                <div className="flex items-center gap-1 mb-4">
                  <span className="text-[#F9DC5C] text-sm">★★★★★</span>
                  <span className="text-xs text-gray-400">(2.877)</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-gray-400 line-through">
                      R$297
                    </span>
                    <span className="font-display font-bold text-gray-900 text-lg ml-1">
                      R$99
                    </span>
                  </div>
                  <Button
                    className="bg-[#ED254E] hover:bg-[#d4183d] text-white"
                    asChild
                  >
                    <a href="#">Comprar</a>
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-[#ECECEC] rounded-lg overflow-hidden transition-[transform_shadow] hover:-translate-y-1 hover:shadow-lg">
              <div className="h-44 flex items-center justify-center text-6xl bg-green-50">
                📊
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Pill className="bg-gray-100 text-gray-500">Negócios</Pill>
                </div>
                <h3 className="font-display font-bold text-gray-900 mb-1">
                  Excel para Analistas
                </h3>
                <p className="text-gray-400 text-sm mb-3">
                  por Marcos Oliveira
                </p>
                <div className="flex items-center gap-1 mb-4">
                  <span className="text-[#F9DC5C] text-sm">★★★★☆</span>
                  <span className="text-xs text-gray-400">(1.540)</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-gray-400 line-through">
                      R$247
                    </span>
                    <span className="font-display font-bold text-gray-900 text-lg ml-1">
                      R$79
                    </span>
                  </div>
                  <Button
                    className="bg-[#ED254E] hover:bg-[#d4183d] text-white"
                    asChild
                  >
                    <a href="#">Comprar</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="ebooks" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <Badge className="bg-[#ed254e1a] text-[#ED254E]">Ebooks</Badge>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
                Leitura que transforma
              </h2>
              <div className="w-12 h-1 bg-[#F9DC5C] rounded-xs mt-4 mb-6"></div>
            </div>
            <a
              href="#"
              className="text-[#ED254E] font-semibold text-sm hover:underline mt-4 md:mt-0"
            >
              Ver todos os ebooks →
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex bg-white rounded-lg overflow-hidden border border-[#ECECEC] transition-[transform_shadow] hover:-translate-y-1 hover:shadow-lg">
              <div className="w-2.5 shrink-0 bg-[#F9DC5C]"></div>
              <div className="p-5 flex flex-col flex-1">
                <div className="w-12 h-16 rounded bg-[#F9DC5C]/20 flex items-center justify-center text-2xl mb-4">
                  📘
                </div>
                <h3 className="font-display font-bold text-gray-900 text-sm mb-1">
                  A Mente do Empreendedor
                </h3>
                <p className="text-gray-400 text-xs mb-3">Carla Mendes</p>
                <div className="flex items-center gap-1 mb-3">
                  <span className="text-[#F9DC5C] text-xs">★★★★★</span>
                </div>
                <div className="mt-auto flex items-center justify-between">
                  <span className="font-display font-bold text-gray-900">
                    R$29
                  </span>
                  <a
                    href="#"
                    className="text-[#ED254E] text-xs font-bold hover:underline"
                  >
                    Comprar →
                  </a>
                </div>
              </div>
            </div>
            <div className="flex bg-white rounded-lg overflow-hidden border border-[#ECECEC] transition-[transform_shadow] hover:-translate-y-1 hover:shadow-lg">
              <div className="w-2.5 shrink-0 bg-[#ED254E]"></div>
              <div className="p-5 flex flex-col flex-1">
                <div className="w-12 h-16 rounded bg-[#ED254E]/20 flex items-center justify-center text-2xl mb-4">
                  🧠
                </div>
                <h3 className="font-display font-bold text-gray-900 text-sm mb-1">
                  IA para não Programadores
                </h3>
                <p className="text-gray-400 text-xs mb-3">Bruno Costa</p>
                <div className="flex items-center gap-1 mb-3">
                  <span className="text-[#F9DC5C] text-xs">★★★★★</span>
                </div>
                <div className="mt-auto flex items-center justify-between">
                  <span className="font-display font-bold text-gray-900">
                    R$29
                  </span>
                  <a
                    href="#"
                    className="text-[#ED254E] text-xs font-bold hover:underline"
                  >
                    Comprar →
                  </a>
                </div>
              </div>
            </div>
            <div className="flex bg-white rounded-lg overflow-hidden border border-[#ECECEC] transition-[transform_shadow] hover:-translate-y-1 hover:shadow-lg">
              <div className="w-2.5 shrink-0 bg-blue-400"></div>
              <div className="p-5 flex flex-col flex-1">
                <div className="w-12 h-16 rounded bg-blue-50 flex items-center justify-center text-2xl mb-4">
                  💰
                </div>
                <h3 className="font-display font-bold text-gray-900 text-sm mb-1">
                  Finanças Pessoais na Prática
                </h3>
                <p className="text-gray-400 text-xs mb-3">Juliana Faria</p>
                <div className="flex items-center gap-1 mb-3">
                  <span className="text-[#F9DC5C] text-xs">★★★★★</span>
                </div>
                <div className="mt-auto flex items-center justify-between">
                  <span className="font-display font-bold text-gray-900">
                    R$29
                  </span>
                  <a
                    href="#"
                    className="text-[#ED254E] text-xs font-bold hover:underline"
                  >
                    Comprar →
                  </a>
                </div>
              </div>
            </div>
            <div className="flex bg-white rounded-lg overflow-hidden border border-[#ECECEC] transition-[transform_shadow] hover:-translate-y-1 hover:shadow-lg">
              <div className="w-2.5 shrink-0 bg-green-400"></div>
              <div className="p-5 flex flex-col flex-1">
                <div className="w-12 h-16 rounded bg-green-50 flex items-center justify-center text-2xl mb-4">
                  🌱
                </div>
                <h3 className="font-display font-bold text-gray-900 text-sm mb-1">
                  Produtividade Sem Limite
                </h3>
                <p className="text-gray-400 text-xs mb-3">Pedro Alves</p>
                <div className="flex items-center gap-1 mb-3">
                  <span className="text-[#F9DC5C] text-xs">★★★★★</span>
                </div>
                <div className="mt-auto flex items-center justify-between">
                  <span className="font-display font-bold text-gray-900">
                    R$29
                  </span>
                  <a
                    href="#"
                    className="text-[#ED254E] text-xs font-bold hover:underline"
                  >
                    Comprar →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
