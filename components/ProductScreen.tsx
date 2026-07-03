import { Car, CircleDollarSign, Package, ShieldCheck, Sparkles, Wrench } from "lucide-react";
import { MediaSlot } from "./MediaSlot";

const pins = [
  { icon: Car, title: "Veículo em destaque", text: "O cliente visualiza o carro durante toda a negociação." },
  { icon: Package, title: "Pacotes e acessórios", text: "Itens aparecem como opções comerciais, não apenas campos do sistema." },
  { icon: CircleDollarSign, title: "Resumo financeiro", text: "O valor acompanha cada decisão tomada na conversa." },
  { icon: ShieldCheck, title: "Seguro", text: "Demonstre planos e cotações dentro da experiência." },
  { icon: Sparkles, title: "Embelezamento", text: "Mostre películas, proteções e diferenciais de forma tangível." },
  { icon: Wrench, title: "Serviços", text: "Agregue serviços adicionais sem sair do ritmo da venda." },
];

export function ProductScreen() {
  return (
    <section id="tela" className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-blue-600">A tela que acompanha a venda</p>
          <h2 className="text-4xl font-black tracking-[-0.04em] text-slate-950 md:text-6xl">Uma visão pensada para apresentar, não apenas registrar.</h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-500">A nova tela reúne o que o vendedor precisa para transformar a conversa em uma experiência visual: carro, itens, simulações e resumo financeiro no mesmo ambiente.</p>
        </div>
        <MediaSlot type="image" label="Inserir imagem" title="Imagem principal da tela do Módulo Negociação" description="Use uma captura real em tela cheia, parecida com a imagem enviada: veículo grande à esquerda, categorias na parte inferior e painel financeiro completo à direita." />
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {pins.map((pin) => (
            <div key={pin.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-600/10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600/10 text-blue-600"><pin.icon size={24}/></div>
              <h3 className="text-lg font-black text-slate-950">{pin.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">{pin.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
