export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/60 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#topo" className="text-3xl font-black tracking-[-0.08em] text-slate-950">mobi</a>
        <nav className="hidden items-center gap-8 text-sm font-bold text-slate-600 md:flex">
          <a className="transition hover:text-blue-600" href="#experiencia">Experiência</a>
          <a className="transition hover:text-blue-600" href="#tela">Tela</a>
          <a className="transition hover:text-blue-600" href="#tempo-real">Tempo real</a>
          <a className="transition hover:text-blue-600" href="#pedido">Pedido</a>
        </nav>
        <a href="#demo" className="rounded-2xl bg-blue-600 px-5 py-3 text-sm font-black text-white shadow-lg shadow-blue-600/25 transition hover:-translate-y-0.5 hover:bg-blue-700">Ver demonstração</a>
      </div>
    </header>
  );
}
