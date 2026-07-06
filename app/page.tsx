import type { ElementType } from "react";
import EscolheComoVender from "@/components/EscolheComoVender";
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
  Zap,
} from "lucide-react";

const sellingCards = [
  { icon: Car, title: "Veículo", text: "O carro ganha destaque na conversa, com fotos e informações que ajudam o cliente a visualizar melhor a compra." },
  { icon: Gift, title: "Pacotes", text: "Combinações prontas para apresentar mais valor durante a negociação." },
  { icon: Wrench, title: "Acessórios", text: "Itens compatíveis aparecem de forma visual, facilitando a personalização do veículo." },
  { icon: Sparkles, title: "Personalização", text: "Películas, embelezamento e proteções ajudam o cliente a imaginar o veículo pronto." },
  { icon: BadgeDollarSign, title: "Financiamento", text: "Simulações podem ser apresentadas sem quebrar o ritmo da conversa." },
  { icon: ShieldCheck, title: "Seguro", text: "Planos e cotações entram na negociação como parte da experiência de compra." },
  { icon: Star, title: "Avaliação", text: "A avaliação do usado apoia a decisão e facilita a continuidade da negociação." },
];

const benefits = [
  { icon: Zap, title: "Mais agilidade", text: "Menos etapas, mais foco no fechamento." },
  { icon: ShieldCheck, title: "Experiência completa", text: "Tudo que o cliente precisa no lugar certo." },
  { icon: CheckCircle2, title: "Processo padrão", text: "Segurança e controle que você já confia." },
];

function VimeoVideo({ id, title }: { id: string; title: string }) {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-2xl shadow-slate-950/10">
      <iframe
        src={`https://player.vimeo.com/video/${id}`}
        title={title}
        className="aspect-video w-full"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div className="text-3xl font-black tracking-[-0.08em] text-slate-950">
          mobi
        </div>

        <nav className="hidden items-center gap-9 text-sm font-semibold text-slate-600 md:flex">
          <a href="#experiencia" className="transition hover:text-blue-600">Experiência</a>
          <a href="#valor" className="transition hover:text-blue-600">Valor</a>
          <a href="#escolha" className="transition hover:text-blue-600">Como funciona</a>
          <a href="#demo" className="transition hover:text-blue-600">Demonstração</a>
        </nav>

        <a
          href="#demo"
          className="rounded-2xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/25 transition hover:-translate-y-0.5 hover:bg-blue-700"
        >
          Ver demonstração
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-blue-100/70 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-[0.88fr_1.12fr] lg:py-20">
        <div>
          <span className="mb-7 inline-flex rounded-full bg-blue-600 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-white">
            Novidade
          </span>

          <h1 className="text-5xl font-black tracking-tight text-slate-950 md:text-6xl">
            O carro vai para a mesa.
            <span className="block text-blue-600">
              A experiência do cliente evolui.
            </span>
          </h1>

          <p className="mt-6 text-xl font-semibold leading-8 text-slate-800">
            Uma nova forma de apresentar, negociar e agregar valor dentro do MobiGestor.
          </p>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-500">
            O Módulo Negociação torna a venda mais moderna, dinâmica e visual, aproximando vendedor e cliente durante a construção da proposta.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#experiencia"
              className="rounded-2xl bg-blue-600 px-7 py-4 text-base font-bold text-white shadow-xl shadow-blue-600/25 transition hover:-translate-y-1 hover:bg-blue-700"
            >
              Conhecer experiência
            </a>

            <a
              href="#demo"
              className="inline-flex items-center gap-2 rounded-2xl px-7 py-4 text-base font-bold text-blue-600 transition hover:bg-blue-50"
            >
              <PlayCircle size={19} />
              Ver demonstração
            </a>
          </div>
        </div>

        <div>
          <div className="mx-auto w-full max-w-3xl">
            <VimeoVideo
              id="1207217456"
              title="Demonstração comercial do Módulo Negociação"
            />
          </div>
          <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-5 text-center shadow-sm shadow-slate-950/5"
              >
                <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600/10 text-blue-600">
                  <item.icon size={22} />
                </div>
                <h3 className="text-base font-black text-slate-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experiencia" className="bg-slate-50 py-12">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-600">
          A nova experiência
        </p>

        <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
          Uma tela feita para encantar.
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-500 md:text-lg">
          Mais do que registrar informações, o Módulo Negociação transforma a
          apresentação da venda. O cliente visualiza o veículo, acompanha
          acessórios, personalizações e serviços, e entende melhor cada escolha
          durante a negociação.
        </p>

        <div className="mx-auto mt-8 max-w-5xl overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-xl shadow-slate-950/10">
          <img
            src="https://www.dropbox.com/scl/fi/owtnxa4glajonj3yich1y/imagem-NEGOCIA-O-MOBATO-2.png?rlkey=5spjm39vw0tqglayl3mqn7d49&st=5y85zdsa&raw=1"
            alt="Tela completa do Módulo Negociação"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}

function InfiniteCarousel() {
  const duplicatedCards = [...sellingCards, ...sellingCards];

  return (
    <section id="valor" className="overflow-hidden bg-white py-16">
      <style>{`
        @keyframes mobi-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .mobi-marquee-track {
          animation: mobi-marquee 34s linear infinite;
        }
        .mobi-marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-600">
          Agregue valor
        </p>

        <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
          Cada interação cria uma nova oportunidade.
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-500">
          O vendedor apresenta possibilidades no momento em que elas fazem sentido. A conversa deixa de ser apenas preenchimento e passa a mostrar o que melhora a experiência do cliente na compra.
        </p>
      </div>

      <div className="relative mt-10">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

        <div className="flex w-max gap-5 mobi-marquee-track">
          {duplicatedCards.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className="w-[290px] rounded-[2rem] border border-slate-200 bg-white p-7 text-left shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-600/10"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600/10 text-blue-600">
                <item.icon size={28} strokeWidth={1.7} />
              </div>

              <h3 className="text-xl font-black text-slate-950">{item.title}</h3>

              <p className="mt-3 text-sm leading-7 text-slate-500">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RealTimeValue() {
  return (<section className="bg-slate-950 py-12 text-white">

    <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="text-center lg:text-left">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-300">
          Transparência
        </p>

        <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
          O valor acompanha cada escolha.
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-300">
          Cada item adicionado aparece imediatamente no resumo da negociação. O cliente acompanha o veículo, os acessórios, os serviços, a entrada e o valor restante com mais clareza para tomar decisão.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {[
            "Resumo financeiro sempre visível",
            "Itens escolhidos organizados em tempo real",
            "Entrada e valor restante apoiando a decisão",
            "Mais confiança durante a negociação",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-left text-sm font-semibold text-slate-200"
            >
              <CheckCircle2 size={18} className="shrink-0 text-blue-300" />
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto w-full max-w-3xl">
        <VimeoVideo id="1207215534" title="Valores atualizando em tempo real" />
      </div>      </div>
  </section>
  );
}

function VisualChoice() {
  return (
    <section id="escolha" className="relative overflow-hidden bg-white py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.12),transparent_45%)]" />

      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-4xl font-black uppercase tracking-tight text-[#071147] md:text-6xl">
          Você escolhe como vender.
        </h2>

        <p className="mx-auto mt-4 max-w-4xl text-xl leading-8 text-slate-600">
          Do seu jeito de sempre ou com a <strong className="text-blue-600">experiência</strong> que o <strong className="text-blue-600">cliente merece.</strong>
        </p>

        <div className="mt-12 grid grid-cols-1 items-center gap-6 lg:grid-cols-[0.92fr_1.2fr_0.92fr]">
          <FlowCard
            label="Caminho 1"
            title="Fluxo tradicional"
            subtitle="Como você já conhece"
            tilt="-rotate-3"
            type="lead"
          />

          <div className="relative">
            <div className="absolute -left-10 top-1/2 hidden h-24 w-24 -translate-y-1/2 rotate-12 rounded-full border-[18px] border-blue-600 border-b-transparent border-l-transparent lg:block" />
            <div className="absolute -right-10 top-1/2 hidden h-24 w-24 -translate-y-1/2 rotate-45 rounded-full border-[18px] border-blue-600 border-b-transparent border-l-transparent lg:block" />

            <div className="mb-3 inline-flex rounded-full bg-blue-600 px-5 py-2 text-sm font-black uppercase tracking-wider text-white">
              Novo
            </div>

            <h3 className="text-3xl font-black uppercase tracking-tight text-blue-600">
              Negociação Mobi
            </h3>

            <p className="mb-4 text-lg text-slate-500">
              Nova experiência de venda
            </p>

            <div className="rounded-[2rem] border-[6px] border-blue-600 bg-white p-4 shadow-2xl shadow-blue-600/30">
              <div className="overflow-hidden rounded-2xl bg-slate-100">
                <img
                  src="https://www.dropbox.com/scl/fi/owtnxa4glajonj3yich1y/imagem-NEGOCIA-O-MOBATO-2.png?rlkey=5spjm39vw0tqglayl3mqn7d49&st=5y85zdsa&raw=1"
                  alt="Negociação Mobi"
                  className="h-[330px] w-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          <FlowCard
            label="Caminho 2"
            title="Pedido de venda"
            subtitle="Mesmo processo. Mesmas regras."
            tilt="rotate-3"
            type="order"
          />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {benefits.map((item) => (
            <div key={item.title} className="flex items-center justify-center gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-blue-200 bg-blue-50 text-blue-600 shadow-md shadow-blue-600/10">
                <item.icon size={28} />
              </div>
              <div className="text-left">
                <h4 className="text-lg font-black uppercase text-[#071147]">{item.title}</h4>
                <p className="text-sm text-slate-500">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FlowCard({
  label,
  title,
  subtitle,
  tilt,
  type,
}: {
  label: string;
  title: string;
  subtitle: string;
  tilt: string;
  type: "lead" | "order";
}) {
  return (
    <div className={`relative rounded-[2rem] border border-blue-300 bg-white p-5 text-left shadow-xl shadow-blue-600/10 ${tilt}`}>
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-blue-200 bg-blue-50 text-blue-600">
          {type === "lead" ? <UserRound size={28} /> : <CheckCircle2 size={30} />}
        </div>

        <div>
          <span className="inline-flex rounded-full bg-blue-600 px-4 py-1 text-xs font-black uppercase text-white">
            {label}
          </span>
          <h3 className="mt-2 text-xl font-black uppercase text-[#071147]">{title}</h3>
          <p className="text-sm text-slate-500">{subtitle}</p>
        </div>
      </div>

      {type === "lead" ? <LeadMockup /> : <OrderMockup />}
    </div>
  );
}

function LeadMockup() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <div className="mb-4 flex items-center gap-3 border-b border-slate-200 pb-3">
        <div className="h-8 w-8 rounded-full bg-blue-100" />
        <div>
          <div className="h-3 w-28 rounded bg-slate-300" />
          <div className="mt-2 h-2 w-20 rounded bg-slate-200" />
        </div>
      </div>

      <div className="grid grid-cols-[1fr_0.75fr] gap-3">
        <div className="flex h-52 items-center justify-center rounded-xl bg-white text-center text-xs font-bold text-slate-400">
          Sem histórico de mensagens
        </div>

        <div className="space-y-3 rounded-xl bg-white p-3">
          {["Nome", "Telefone", "E-mail", "Próximo atendimento", "Seguros"].map((item) => (
            <div key={item}>
              <div className="h-2 w-16 rounded bg-slate-200" />
              <div className="mt-1 h-2 w-full rounded bg-slate-100" />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 rounded-xl bg-emerald-500 py-3 text-center text-xs font-black text-white">
        Iniciar conversa por WhatsApp
      </div>
    </div>
  );
}

function OrderMockup() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <div className="mb-4 h-9 w-36 rounded-xl bg-white" />

      <div className="rounded-xl bg-white p-3">
        <div className="grid grid-cols-4 gap-2 border-b border-slate-200 pb-2 text-[10px] font-bold text-slate-500">
          <span>Item</span>
          <span>Valor</span>
          <span>Entrega</span>
          <span>Status</span>
        </div>

        {["Tapete", "Vitrificação", "Emplacamento", "Revisão"].map((item) => (
          <div key={item} className="grid grid-cols-4 gap-2 border-b border-slate-100 py-3 text-[10px] text-slate-500">
            <span>{item}</span>
            <span>R$ 250,00</span>
            <span>06/01</span>
            <span>Sim</span>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-xl bg-white p-4 text-center text-xs text-slate-400">
        Você ainda não adicionou nenhuma fonte de pagamento
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs font-bold">
        <div className="rounded-xl bg-white p-3 text-slate-500">Total R$ 0,00</div>
        <div className="rounded-xl bg-white p-3 text-blue-600">Restante R$ 150.000,00</div>
        <div className="rounded-xl bg-white p-3 text-red-500">Troco R$ -5.060,99</div>
      </div>
    </div>
  );
}

function Demo() {
  return (
    <section id="demo" className="bg-slate-50 py-12">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-600">
          Veja na prática
        </p>

        <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
          A melhor forma de entender é ver acontecendo.
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-500 md:text-lg">
          A demonstração deve mostrar a realidade da plataforma: abrir o Lead,
          acessar Negociação, apresentar o veículo, adicionar itens, acompanhar
          o resumo e avançar para o Pedido.
        </p>

        <div className="mx-auto mt-8 max-w-5xl">
          <VimeoVideo
            id="1207217456"
            title="Demonstração completa da plataforma"
          />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-gradient-to-br from-blue-600 to-blue-700 p-10 text-center shadow-2xl md:p-16">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-100">
          Nova Negociação Mobi
        </p>

        <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
          A evolução da experiência do cliente começa aqui.
        </h2>

        <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-blue-100">
          Mais interação. Mais transparência. Mais oportunidades para agregar valor em cada atendimento.
        </p>

        <a
          href="#demo"
          className="mt-10 inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:scale-105"
        >
          Assistir demonstração
          <ArrowRight size={20} />
        </a>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-8 text-center text-slate-500">
        © 2026 MobiGestor • Grupo Saga
      </div>
    </footer>
  );
}

export default function Page() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Experience />
        <InfiniteCarousel />
        <RealTimeValue />
        <EscolheComoVender />
        <Demo />
      </main>

      <Footer />
    </>
  );
}