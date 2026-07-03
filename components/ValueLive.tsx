import { ArrowRight, CircleDollarSign, Minus, Plus } from "lucide-react";

const rows = [
  { label: "Veículo", value: "R$ 179.990,00" },
  { label: "+ Kit Parafuso Anti Furto", value: "R$ 450,00" },
  { label: "+ Friso", value: "R$ 790,00" },
  { label: "+ Película Blue e Premium", value: "R$ 2.390,00" },
];

export function ValueLive() {
  return (
    <section id="tempo-real" className="overflow-hidden bg-slate-50 py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-blue-600">Tudo em tempo real</p>
          <h2 className="text-4xl font-black tracking-[-0.04em] text-slate-950 md:text-6xl">O valor muda junto com a negociação.</h2>
          <p className="mt-6 text-lg leading-8 text-slate-500">O painel lateral é o grande apoio da conversa. Cada item escolhido aparece no resumo, e o cliente entende o impacto da decisão antes de seguir para o pedido.</p>
          <div className="mt-8 space-y-4">
            <Bullet text="Itens escolhidos aparecem organizados por categoria" />
            <Bullet text="Entrada e valor restante ajudam na tomada de decisão" />
            <Bullet text="Mais transparência para conversar sobre pagamento" />
          </div>
        </div>
        <div className="rounded-[36px] border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-950/10">
          <div className="mb-6 flex items-center justify-between border-b border-slate-200 pb-5">
            <div className="flex items-center gap-3"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white"><CircleDollarSign size={24}/></div><div><p className="text-xs font-black uppercase tracking-wider text-blue-600">Resumo da negociação</p><h3 className="text-xl font-black text-slate-950">Painel lateral</h3></div></div>
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-600">ao vivo</span>
          </div>
          <div className="space-y-3">
            {rows.map((row) => <div key={row.label} className="flex items-center justify-between rounded-2xl bg-slate-50 px-5 py-4 text-sm"><span className="font-bold text-slate-600">{row.label}</span><span className="font-black text-slate-950">{row.value}</span></div>)}
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <button className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 px-4 py-4 text-sm font-black text-slate-700"><Minus size={16}/> Remover item</button>
            <button className="flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-4 py-4 text-sm font-black text-white"><Plus size={16}/> Adicionar item</button>
          </div>
          <div className="mt-6 rounded-3xl bg-slate-950 p-6 text-white">
            <p className="text-sm font-bold text-slate-400">Valor total</p>
            <div className="mt-2 flex items-end justify-between gap-4"><strong className="text-4xl font-black tracking-tight">R$ 183.620,00</strong><ArrowRight className="text-blue-300"/></div>
          </div>
        </div>
      </div>
    </section>
  );
}
function Bullet({ text }: { text: string }) { return <div className="flex items-center gap-3 text-base font-bold text-slate-700"><span className="h-2.5 w-2.5 rounded-full bg-blue-600"/>{text}</div>; }
