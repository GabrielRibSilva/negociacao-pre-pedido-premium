import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { MediaSlot } from "./MediaSlot";

export function Hero() {
  return (
    <section id="topo" className="hero-grid relative overflow-hidden bg-white pt-28">
      <div className="absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:py-28">
        <div>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-blue-600 shadow-sm">
            <Sparkles size={14} /> Lançamento MobiGestor
          </div>
          <h1 className="text-5xl font-black tracking-[-0.05em] text-slate-950 md:text-7xl">
            A negociação deixou de acontecer atrás da tela.
            <span className="block text-blue-600">Agora acontece ao lado do cliente.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-xl font-semibold leading-9 text-slate-700">
            Uma experiência mais visual para apresentar o carro, construir a proposta e mostrar o valor de cada escolha durante a conversa.
          </p>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-500">
            O vendedor continua fazendo o que já faz no dia a dia. A diferença é que o MobiGestor agora acompanha melhor a forma como a venda realmente acontece.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#experiencia" className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-7 py-4 font-black text-white shadow-xl shadow-blue-600/25 transition hover:-translate-y-1 hover:bg-blue-700">Conhecer experiência <ArrowRight size={18}/></a>
            <a href="#demo" className="inline-flex items-center gap-2 rounded-2xl bg-white px-7 py-4 font-black text-blue-600 shadow-sm ring-1 ring-slate-200 transition hover:bg-blue-50">Ver vídeo de lançamento</a>
          </div>
          <div className="mt-10 flex items-center gap-3 text-sm font-bold text-slate-500"><CheckCircle2 size={20} className="text-blue-600"/> Mesmo fluxo comercial. Apresentação muito mais visual.</div>
        </div>
        <MediaSlot type="video" label="Inserir vídeo" title="Vídeo de lançamento da nova negociação" description="Grave uma apresentação de 1 a 2 minutos mostrando: abertura do Lead, clique no botão Negociação, escolha do veículo, navegação pela tela, seleção de itens e painel lateral atualizando." duration="1 a 2 minutos" />
      </div>
    </section>
  );
}
