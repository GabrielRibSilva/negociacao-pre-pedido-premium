import { ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[44px] bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,.28),transparent_35%),linear-gradient(135deg,#3258e8,#1d4ed8)] p-10 text-center shadow-2xl shadow-blue-900/30 md:p-16">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-100">Nova Negociação Mobi</p>
          <h2 className="mx-auto mt-6 max-w-5xl text-4xl font-black tracking-[-0.04em] md:text-6xl">A venda continua sendo feita por pessoas. Agora, com uma experiência à altura.</h2>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-blue-100">Uma forma mais comercial, visual e transparente de conduzir a negociação dentro do MobiGestor.</p>
          <a href="#topo" className="mt-10 inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 font-black text-blue-700 transition hover:scale-105">Voltar ao topo <ArrowRight size={18}/></a>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-slate-500">© 2026 MobiGestor • Grupo Saga</div>
      </div>
    </footer>
  );
}
