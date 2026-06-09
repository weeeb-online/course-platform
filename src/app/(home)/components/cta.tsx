import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="bg-[#0D0D0D] bg-(image:--bg-hero-glow) py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white mb-4">
          Sua evolução
          <br />
          começa <span className="text-primary">hoje.</span>
        </h2>
        <p className="text-white/50 text-lg mb-8 max-w-md mx-auto">
          Junte-se a mais de 120.000 alunos que já transformaram suas carreiras
          com a LearnHub.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button className="h-12 px-6" asChild>
            <a href="#planos">Começar gratuitamente</a>
          </Button>
          <Button
            className="h-12 px-6 text-primary bg-transparent hover:bg-primary hover:text-black border-primary"
            asChild
          >
            <a href="#cursos">Explorar catálogo</a>
          </Button>
        </div>
        <p className="text-white/30 text-sm mt-6">
          Sem cartão de crédito nos 7 primeiros dias. Cancele quando quiser.
        </p>
      </div>
    </section>
  );
}
