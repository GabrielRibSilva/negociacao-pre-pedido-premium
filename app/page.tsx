import type { ElementType } from "react";
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
  {
    icon: Car,
    title: "Veículo",
    text: "O carro ganha destaque durante a conversa, com fotos e informações que ajudam o cliente a visualizar melhor a compra.",
  },
  {
    icon: Gift,
    title: "Pacotes",
    text: "Combinações prontas para apresentar valor com mais facilidade no momento da negociação.",
  },
  {
    icon: Wrench,
    title: "Acessórios",
    text: "Itens compatíveis aparecem de forma visual, facilitando a personalização do veículo.",
  },
  {
    icon: Sparkles,
    title: "Personalização",
    text: "Películas, embelezamento e proteções ajudam o cliente a imaginar o veículo pronto para uso.",
  },
  {
    icon: BadgeDollarSign,
    title: "Financiamento",
    text: "Simulações e possibilidades financeiras podem ser apresentadas sem quebrar o ritmo da conversa.",
  },
  {
    icon: ShieldCheck,
    title: "Seguro",
    text: "Planos e cotações entram na negociação como parte da experiência de compra.",
  },
  {
    icon: Star,
    title: "Avaliação",
    text: "A avaliação do usado apoia a tomada de decisão e facilita a continuidade da negociação.",
  },
];

const benefits = [
  {
    title: "Mais experiência",
    text: "Uma apresentação mais moderna, clara e dinâmica para o cliente dentro da loja.",
  },
  {
    title: "Mais valor",
    text: "Acessórios, serviços e personalizações entram no momento certo da conversa.",
  },
  {
    title: "Mais clareza",
    text: "O cliente acompanha escolhas, valores e possibilidades durante a negociação.",
  },
];

const current = [
  "A venda acontece na conversa entre vendedor e cliente.",
  "O vendedor registra as informações nas etapas do sistema.",
  "A apresentação de acessórios e serviços depende do momento da negociação.",
];

const adds = [
  "Uma experiência visual para apresentar veículo, acessórios, serviços e possibilidades.",
  "Mais oportunidades para agregar valor durante o atendimento.",
  "Cliente acompanhando escolhas e valores em tempo real.",
];

const standard = [
  "O fluxo tradicional continua garantindo a formalização da venda.",
  "Pagamentos, dados do cliente, assinatura e documentos seguem sendo preenchidos no pedido.",
  "A segurança operacional do MobiGestor permanece no processo.",
];

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div className="text-3xl font-black tracking-[-0.08em] text-slate-950">
          mobi
        </div>

        <nav className="hidden items-center gap-9 text-sm font-semibold text-slate-600 md:flex">
          <a href="#experiencia" className="transition hover:text-blue-600">
            Experiência
          </a>
          <a href="#valor" className="transition hover:text-blue-600">
            Valor
          </a>
          <a href="#continuidade" className="transition hover:text-blue-600">
            Continuidade
          </a>
          <a href="#demo" className="transition hover:text-blue-600">
            Demonstração
          </a>
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
            Uma nova forma de apresentar, negociar e agregar valor dentro do
            MobiGestor.
          </p>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-500">
            O Módulo Negociação torna a venda mais moderna, dinâmica e visual,
            aproximando vendedor e cliente durante a construção da proposta.
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
          <MediaBlock
            type="video"
            title="ANEXAR VÍDEO — Demonstração comercial"
            description="Sugestão: gravar no showroom ou simular com IA um vendedor apresentando a plataforma ao cliente. Mostrar o Lead, o botão Negociação, a escolha do veículo, a seleção de itens e o resumo lateral."
            note="Vídeo sugerido: 1 a 2 minutos"
          />

          <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-5 text-center shadow-sm shadow-slate-950/5"
              >
                <h3 className="text-base font-black text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {item.text}
                </p>
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
    <section id="experiencia" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-600">
          A nova experiência
        </p>

        <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
          Uma tela feita para encantar.
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-500">
          Mais do que registrar informações, o Módulo Negociação transforma a
          apresentação da venda. O cliente visualiza o veículo, acompanha
          acessórios, personalizações e serviços, e entende melhor cada escolha
          durante a negociação.
        </p>

        <div className="mt-10">
          <MediaBlock
            type="image"
            title="ANEXAR IMAGEM — Tela completa do Módulo Negociação"
            description="Inserir uma imagem semelhante ao modelo do Mobato: tela ampla, veículo em destaque, categorias inferiores e painel financeiro no lado direito."
            large
          />
        </div>
      </div>
    </section>
  );
}

function Carousel() {
  return (
    <section id="valor" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-600">
          Agregue valor
        </p>

        <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
          Cada interação cria uma nova oportunidade.
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-500">
          O vendedor apresenta possibilidades no momento em que elas fazem
          sentido. A conversa deixa de ser apenas preenchimento e passa a
          mostrar o que melhora a experiência do cliente na compra.
        </p>

        <div className="mt-10 flex gap-5 overflow-x-auto pb-5 [scrollbar-width:thin]">
          {sellingCards.map((item) => (
            <div
              key={item.title}
              className="min-w-[270px] rounded-[2rem] border border-slate-200 bg-white p-7 text-left shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-600/10"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600/10 text-blue-600">
                <item.icon size={28} strokeWidth={1.7} />
              </div>

              <h3 className="text-xl font-black text-slate-950">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RealTimeValue() {
  return (
    <section className="bg-slate-950 py-16 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="text-center lg:text-left">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-300">
            Transparência
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
            O valor acompanha cada escolha.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            Cada item adicionado aparece imediatamente no resumo da negociação.
            O cliente acompanha o veículo, os acessórios, os serviços, a entrada
            e o valor restante com mais clareza para tomar decisão.
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

        <MediaBlock
          type="video"
          title="ANEXAR VÍDEO — Resumo financeiro"
          description="Mostrar o painel lateral atualizando enquanto o vendedor adiciona acessórios, serviços, entrada e outras opções da negociação."
          note="Vídeo sugerido: 20 a 30 segundos"
          dark
        />
      </div>
    </section>
  );
}

function ThreeColumns() {
  return (
    <section id="continuidade" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-600">
          Continuidade
        </p>

        <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
          A negociação evolui. A formalização permanece segura.
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-500">
          O módulo melhora a apresentação da venda, mas mantém o processo
          necessário para concluir a proposta corretamente.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3">
          <Column
            icon={ImageIcon}
            title="Como é atualmente"
            items={current}
          />

          <Column
            icon={Sparkles}
            title="O que o módulo acrescenta"
            items={adds}
            highlight
          />

          <Column
            icon={CreditCard}
            title="O que continua no pedido"
            items={standard}
          />
        </div>

        <p className="mx-auto mt-8 max-w-4xl rounded-3xl bg-slate-50 p-6 text-base leading-8 text-slate-600">
          Ao avançar para o Pedido, seguem o veículo de interesse e os itens
          selecionados. O vendedor continua preenchendo formas de pagamento,
          valores, dados do cliente, assinatura digital e documentos.
        </p>
      </div>
    </section>
  );
}

function Column({
  icon: Icon,
  title,
  items,
  highlight = false,
}: {
  icon: ElementType;
  title: string;
  items: string[];
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-[2rem] p-7 text-left ${
        highlight
          ? "bg-blue-600 text-white shadow-2xl shadow-blue-600/20"
          : "border border-slate-200 bg-white text-slate-950 shadow-sm"
      }`}
    >
      <div
        className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${
          highlight ? "bg-white/20 text-white" : "bg-blue-600/10 text-blue-600"
        }`}
      >
        <Icon size={28} strokeWidth={1.7} />
      </div>

      <h3 className="text-xl font-black">{title}</h3>

      <div className="mt-5 space-y-4">
        {items.map((item) => (
          <div key={item} className="flex gap-3">
            <CheckCircle2
              size={18}
              className={`mt-1 shrink-0 ${
                highlight ? "text-white" : "text-blue-600"
              }`}
            />
            <p
              className={`text-sm leading-7 ${
                highlight ? "text-blue-50" : "text-slate-500"
              }`}
            >
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Demo() {
  return (
    <section id="demo" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-600">
          Veja na prática
        </p>

        <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
          A melhor forma de entender é ver acontecendo.
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-500">
          A demonstração deve mostrar a realidade da plataforma: abrir o Lead,
          acessar Negociação, apresentar o veículo, adicionar itens, acompanhar
          o resumo e avançar para o Pedido.
        </p>

        <div className="mt-10">
          <MediaBlock
            type="video"
            title="ANEXAR VÍDEO — Demonstração completa da plataforma"
            description="Gravar o fluxo real do MobiGestor, mostrando como o vendedor acessa o módulo, conduz a negociação e segue para o Pedido de Venda."
            note="Vídeo sugerido: 3 a 5 minutos"
            large
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
          Mais interação. Mais transparência. Mais oportunidades para agregar
          valor em cada atendimento.
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
        <Carousel />
        <RealTimeValue />
        <ThreeColumns />
        <Demo />
      </main>

      <Footer />
    </>
  );
}