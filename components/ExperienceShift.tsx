import { MessageCircle, Monitor, Sparkles } from "lucide-react";

export function ExperienceShift() {
  return (
    <section id="experiencia" className="bg-slate-950 py-28 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-blue-300">A mudança principal</p>
            <h2 className="text-4xl font-black tracking-[-0.04em] md:text-6xl">A venda continua sendo a mesma. A apresentação mudou.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">O Módulo Negociação não cria uma rotina complicada. Ele transforma em tela aquilo que o vendedor já conversa com o cliente todos os dias.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Card icon={MessageCircle} title="Conversa" text="A negociação continua sendo conduzida pelo vendedor." />
            <Card icon={Monitor} title="Visual" text="Agora o cliente acompanha carro, itens e valores." />
            <Card icon={Sparkles} title="Decisão" text="A proposta ganha clareza antes de virar pedido." />
          </div>
        </div>
      </div>
    </section>
  );
}
function Card({ icon: Icon, title, text }: { icon: any; title: string; text: string }) {
  return <div className="rounded-[32px] border border-white/10 bg-white/5 p-7 backdrop-blur"><div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-200"><Icon size={28}/></div><h3 className="text-2xl font-black">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-300">{text}</p></div>;
}
