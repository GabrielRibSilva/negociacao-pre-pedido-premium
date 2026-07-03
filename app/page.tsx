import {
  ArrowRight,
  BadgeDollarSign,
  Car,
  CheckCircle2,
  CreditCard,
  FileSignature,
  FolderUp,
  Gift,
  ImageIcon,
  PlayCircle,
  ShieldCheck,
  Sparkles,
  Star,
  UserRound,
  Wrench,
} from "lucide-react";
import { MediaBlock } from "@/components/MediaBlock";

const sellingCards = [
  { icon: Car, title: "Veículo", text: "O carro fica no centro da conversa, com fotos e detalhes que ajudam o cliente a visualizar a compra." },
  { icon: Gift, title: "Pacotes", text: "Combinações prontas para apresentar valor rapidamente e facilitar a escolha durante o atendimento." },
  { icon: Wrench, title: "Acessórios", text: "Itens compatíveis aparecem de forma simples, visual e fácil de adicionar à negociação." },
  { icon: Sparkles, title: "Personalização", text: "Películas, embelezamento e proteções ajudam o cliente a imaginar o veículo pronto para uso." },
  { icon: BadgeDollarSign, title: "Financiamento", text: "Simulações e possibilidades financeiras podem ser apresentadas sem interromper a conversa." },
  { icon: ShieldCheck, title: "Seguro", text: "Planos e cotações entram na negociação como parte da experiência de compra." },
  { icon: Star, title: "Avaliação", text: "A avaliação do usado entra como apoio para a decisão e continuidade da negociação." },
];

const current = [
  "A venda acontece na conversa entre vendedor e cliente.",
  "O vendedor registra informações em etapas diferentes do sistema.",
  "A apresentação de acessórios e serviços depende muito do momento da negociação.",
];

const adds = [
  "Uma experiência visual para apresentar veículo, acessórios, serviços e possibilidades.",
  "Mais oportunidade para agregar valor durante o atendimento.",
  "Cliente acompanhando as escolhas e o impacto no valor em tempo real.",
];

const standard = [
  "O fluxo tradicional continua garantindo a formalização da venda.",
  "Pagamentos, valores, dados do cliente, assinatura e documentos seguem sendo preenchidos no pedido.",
  "A segurança operacional do MobiGestor permanece no processo.",
];

function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-white/80 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="text-3xl font-black tracking-[-0.08em] text-slate-950">mobi</div>
        <nav className="hidden items-center gap-9 text-sm font-bold text-slate-600 md:flex">
          <a href="#experiencia" className="hover:text-blue-600">Experiência</a>
          <a href="#valor" className="hover:text-blue-600">Valor</a>
          <a href="#continuidade" className="hover:text-blue-600">Continuidade</a>
          <a href="#demo" className="hover:text-blue-600">Demonstração</a>
        </nav>
        <a href="#demo" className="rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white transition hover:bg-blue-600">Ver demonstração</a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-28">
      <div className="absolute left-1/2 top-24 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-20 text-center">
        <span className="inline-flex rounded-full bg-blue-600 px-5 py-2 text-xs font-black uppercase tracking-[0.24em] text-white shadow-xl shadow-blue-600/25">Novidade</span>
        <h1 className="mx-auto mt-9 max-w-5xl text-6xl font-black tracking-[-0.06em] text-slate-950 md:text-8xl">
          O carro vai para a mesa.
          <span className="block text-blue-600">A experiência do cliente evolui.</span>
        </h1>
        <p className="mx-auto mt-8 max-w-3xl text-xl font-semibold leading-9 text-slate-700">
          Uma nova forma de apresentar, negociar e agregar valor dentro do MobiGestor.
        </p>
        <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-500">
          O Módulo Negociação torna a venda mais moderna, dinâmica e visual, aproximando vendedor e cliente durante toda a construção da proposta.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href="#experiencia" className="inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 font-black text-white shadow-2xl shadow-blue-600/25 transition hover:-translate-y-1 hover:bg-blue-700">
            Conhecer experiência <ArrowRight size={18} />
          </a>
          <a href="#demo" className="inline-flex items-center gap-3 rounded-full bg-slate-100 px-8 py-4 font-black text-slate-950 transition hover:bg-slate-200">
            <PlayCircle size={18} /> Ver demonstração
          </a>
        </div>
        <div className="mt-16">
          <MediaBlock
            large
            type="video"
            title="ANEXAR VÍDEO — Demonstração comercial do Módulo Negociação"
            description="Pode ser um vídeo gravado no showroom, com o vendedor conduzindo o atendimento ao lado do cliente, ou uma simulação com IA mostrando a plataforma em uso. O foco deve ser a experiência: veículo na tela, seleção de itens e painel de valores atualizando."
            note="Sugestão: 1 a 2 minutos"
          />
        </div>
      </div>
    </section>
  );
}

function ValueStrip() {
  return (
    <section className="bg-slate-950 py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-3">
        {[
          ["Mais experiência", "Uma apresentação mais moderna para o cliente dentro da loja."],
          ["Mais valor", "Acessórios, serviços e possibilidades entram no momento certo da conversa."],
          ["Mais clareza", "O cliente acompanha escolhas e valores sem perder o contexto da negociação."],
        ].map(([title, text]) => (
          <div key={title} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white"><Sparkles size={22} /></div>
            <h3 className="text-2xl font-black tracking-tight">{title}</h3>
            <p className="mt-3 leading-7 text-slate-300">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experiencia" className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-blue-600">A nova experiência</p>
          <h2 className="mt-5 text-5xl font-black tracking-[-0.05em] text-slate-950 md:text-7xl">Uma tela feita para encantar.</h2>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-9 text-slate-500">
            Mais do que registrar informações, o Módulo Negociação transforma a apresentação da venda em uma experiência visual. O cliente vê o veículo, acompanha acessórios e personalizações, entende os serviços e participa melhor da construção da proposta.
          </p>
        </div>
        <MediaBlock
          large
          type="image"
          title="ANEXAR IMAGEM — Tela completa do Módulo Negociação"
          description="Utilize uma captura ampla no estilo Mobato, evidenciando o veículo, as categorias inferiores e o painel lateral de valores. A imagem deve transmitir modernidade, clareza e sensação de vitrine digital."
        />
      </div>
    </section>
  );
}

function Carousel() {
  return (
    <section className="overflow-hidden bg-slate-50 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-blue-600">Agregue valor</p>
          <h2 className="mt-5 text-5xl font-black tracking-[-0.05em] text-slate-950 md:text-6xl">Cada interação cria uma nova oportunidade.</h2>
          <p className="mt-6 text-lg leading-8 text-slate-500">
            O vendedor apresenta possibilidades no momento em que elas fazem sentido. A conversa deixa de ser apenas preenchimento e passa a explorar o que melhora a experiência do cliente na compra.
          </p>
        </div>
        <div className="flex snap-x gap-6 overflow-x-auto pb-6 [scrollbar-width:thin]">
          {sellingCards.map((item) => (
            <article key={item.title} className="min-w-[310px] snap-start rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-600/10">
              <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-3xl bg-blue-600/10 text-blue-600">
                <item.icon size={30} strokeWidth={1.6} />
              </div>
              <h3 className="text-2xl font-black tracking-tight text-slate-950">{item.title}</h3>
              <p className="mt-4 leading-7 text-slate-500">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function RealTimeValue() {
  return (
    <section id="valor" className="bg-white py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.24em] text-blue-600">Transparência</p>
          <h2 className="mt-5 text-5xl font-black tracking-[-0.05em] text-slate-950 md:text-6xl">O valor acompanha cada escolha.</h2>
          <p className="mt-7 text-lg leading-9 text-slate-500">
            Cada item adicionado aparece imediatamente no resumo da negociação. O cliente acompanha o veículo, os acessórios, os serviços, a entrada e o valor restante com mais clareza para tomar decisão.
          </p>
          <div className="mt-9 space-y-4">
            {["Resumo financeiro sempre visível", "Itens escolhidos organizados em tempo real", "Entrada e valor restante apoiando a decisão", "Mais confiança durante a negociação"].map((item) => (
              <div key={item} className="flex items-center gap-3 font-bold text-slate-700"><CheckCircle2 className="text-blue-600" size={20}/>{item}</div>
            ))}
          </div>
        </div>
        <MediaBlock
          type="video"
          title="ANEXAR VÍDEO — Painel lateral atualizando"
          description="Grave apenas o lado direito da tela. Adicione pacote, acessórios, serviços e entrada para mostrar o valor total mudando em tempo real. Esse vídeo deve reforçar transparência e apoio à decisão."
          note="Sugestão: 20 a 30 segundos"
        />
      </div>
    </section>
  );
}

function ThreeColumns() {
  return (
    <section id="continuidade" className="bg-slate-950 py-28 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-blue-300">Continuidade</p>
          <h2 className="mt-5 text-5xl font-black tracking-[-0.05em] md:text-6xl">A negociação evolui. A formalização permanece segura.</h2>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-300">
            O módulo melhora a apresentação da venda, mas não elimina as etapas necessárias para concluir a proposta corretamente.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          <Column icon={UserRound} title="Como é atualmente" items={current} />
          <Column highlight icon={Sparkles} title="O que o Módulo Negociação acrescenta" items={adds} />
          <Column icon={FileSignature} title="O que continua no fluxo padrão" items={standard} />
        </div>
        <div className="mt-12 rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 text-center text-slate-300">
          Ao avançar para o Pedido, seguem o veículo de interesse e os itens selecionados. O vendedor continua preenchendo formas de pagamento, valores, dados do cliente, assinatura digital e documentos.
        </div>
      </div>
    </section>
  );
}

function Column({ icon: Icon, title, items, highlight = false }: { icon: typeof Sparkles; title: string; items: string[]; highlight?: boolean }) {
  return (
    <div className={`rounded-[2rem] p-8 ${highlight ? "bg-blue-600 text-white shadow-2xl shadow-blue-600/30" : "border border-white/10 bg-white/[0.04]"}`}>
      <div className={`mb-7 flex h-14 w-14 items-center justify-center rounded-2xl ${highlight ? "bg-white/20" : "bg-white/10"}`}><Icon size={26}/></div>
      <h3 className="text-2xl font-black tracking-tight">{title}</h3>
      <div className="mt-6 space-y-4">
        {items.map((item) => <p key={item} className={`${highlight ? "text-blue-50" : "text-slate-300"} leading-7`}>{item}</p>)}
      </div>
    </div>
  );
}

function Demo() {
  return (
    <section id="demo" className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-blue-600">Veja na prática</p>
          <h2 className="mt-5 text-5xl font-black tracking-[-0.05em] text-slate-950 md:text-6xl">A melhor forma de entender é ver acontecendo.</h2>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-500">
            A demonstração deve mostrar a realidade da plataforma: abrir o Lead, acessar Negociação, apresentar o veículo, adicionar itens, acompanhar o resumo e avançar para o Pedido.
          </p>
        </div>
        <MediaBlock
          large
          type="video"
          title="ANEXAR VÍDEO — Demonstração real da plataforma"
          description="Grave a tela do MobiGestor em uso real ou ambiente de homologação. O vídeo deve ser direto, comercial e sem parecer treinamento longo. Mostre a experiência do cliente e a agilidade para o vendedor."
          note="Sugestão: 3 a 5 minutos"
        />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[3rem] bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.22),transparent_28%),linear-gradient(135deg,#2563eb,#1d4ed8)] p-10 text-center shadow-2xl shadow-blue-600/25 md:p-16">
        <p className="text-xs font-black uppercase tracking-[0.28em] text-blue-100">Nova Negociação Mobi</p>
        <h2 className="mx-auto mt-6 max-w-5xl text-5xl font-black tracking-[-0.05em] md:text-7xl">A evolução da experiência do cliente começa aqui.</h2>
        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-blue-100">
          Mais interação. Mais transparência. Mais oportunidades para agregar valor em cada atendimento.
        </p>
        <a href="#demo" className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-9 py-5 font-black text-blue-700 transition hover:scale-105">
          Assistir demonstração <PlayCircle size={20}/>
        </a>
      </div>
      <div className="mx-auto mt-14 max-w-7xl border-t border-white/10 pt-8 text-center text-sm text-slate-500">© 2026 MobiGestor • Grupo Saga</div>
    </footer>
  );
}

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ValueStrip />
        <Experience />
        <Carousel />
        <RealTimeValue />
        <ThreeColumns />
        <Demo />
      </main>
      <Footer />
    </>
  );
}
