import { Car, DollarSign, Gift, ShieldCheck, Sparkles, Star, Wrench } from "lucide-react";

const items = [
  { icon: Car, title: "Veículo", text: "O carro fica no centro da conversa." },
  { icon: Gift, title: "Pacotes", text: "Combinações prontas para apresentar valor." },
  { icon: Wrench, title: "Acessórios", text: "Itens compatíveis em formato de escolha." },
  { icon: Sparkles, title: "Embelezamento", text: "Películas, proteções e diferenciais visuais." },
  { icon: DollarSign, title: "Financiamento", text: "Simule cenários sem travar o atendimento." },
  { icon: ShieldCheck, title: "Seguro", text: "Apresente opções durante a negociação." },
  { icon: Star, title: "Avaliação", text: "Solicite a avaliação do usado do cliente." },
];

export function CommercialCards() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-blue-600">O que dá para apresentar</p>
          <h2 className="text-4xl font-black tracking-[-0.04em] text-slate-950 md:text-6xl">Tudo que já faz parte da venda, agora com cara de negociação.</h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-500">As funcionalidades continuam conectadas ao MobiGestor. O que muda é a forma como elas aparecem durante o atendimento.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <div key={item.title} className={`${index === 0 ? "lg:col-span-2 lg:row-span-2" : ""} group rounded-[32px] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-600/10`}>
              <div className={`${index === 0 ? "h-16 w-16" : "h-12 w-12"} mb-6 flex items-center justify-center rounded-2xl bg-blue-600/10 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white`}><item.icon size={index === 0 ? 34 : 24}/></div>
              <h3 className={`${index === 0 ? "text-3xl" : "text-xl"} font-black text-slate-950`}>{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-500">{item.text}</p>
              <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-4 text-xs leading-5 text-slate-500"><strong className="block text-blue-600">Inserir vídeo opcional</strong>Grave de 10 a 15 segundos demonstrando esta categoria.</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
