import { MediaSlot } from "./MediaSlot";

export function DemoSection() {
  return (
    <section id="demo" className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-blue-600">Demonstração completa</p>
          <h2 className="text-4xl font-black tracking-[-0.04em] text-slate-950 md:text-6xl">Veja a negociação acontecendo do início ao fim.</h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-500">Este vídeo deve funcionar como uma apresentação geral da novidade, sem tom de treinamento. O objetivo é demonstrar o valor da experiência.</p>
        </div>
        <MediaSlot type="video" label="Inserir vídeo" title="Demonstração completa da Nova Negociação Mobi" description="Grave uma venda simulada sem cortes longos: Lead aberto, botão Negociação, seleção do veículo, apresentação dos itens, resumo financeiro, entrada do cliente e Avançar para Pedido." duration="3 a 5 minutos" />
      </div>
    </section>
  );
}
