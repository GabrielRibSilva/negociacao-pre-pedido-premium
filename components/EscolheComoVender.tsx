"use client";

import Image from "next/image";
import { CheckCircle2, ShieldCheck, UserRound, Zap } from "lucide-react";

const images = {
  tradicional:
    "https://www.dropbox.com/scl/fi/wzerjv3xylwxxy2fdrooh/imagem-1-fluxo-tradicional.png?rlkey=vzn4ogt327mqgsq0jxsj9durc&st=v4kba7fx&raw=1",

  negociacao:
    "https://www.dropbox.com/scl/fi/n53o5cb2o7srjuzga5t3j/imagem-2-fluxo-modo-negocia-o.png?rlkey=l3a4oap9yofif3eb8dmvbxsiq&st=wibfrdew&raw=1",

  pedido:
    "https://www.dropbox.com/scl/fi/4o53xiqszr7sw1yebnpqo/imagem-3-fluxo-padrao-finaliza-o.png?rlkey=j4oe12oxhieygtbmt2mxhdkax&st=d1q0sfda&raw=1",
};

export default function EscolheComoVender() {
  return (
    <section
      id="escolha"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f6faff_55%,#eef5ff_100%)] px-6 py-10 md:px-10 lg:px-14"
    >
      <div className="pointer-events-none absolute bottom-6 left-0 h-24 w-56 opacity-30 [background-image:radial-gradient(#77a7ff_1.4px,transparent_1.4px)] [background-size:13px_13px]" />
      <div className="pointer-events-none absolute bottom-6 right-0 h-24 w-56 opacity-30 [background-image:radial-gradient(#77a7ff_1.4px,transparent_1.4px)] [background-size:13px_13px]" />

      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-[-0.04em] text-[#04113A] md:text-6xl lg:text-7xl">
            Você escolhe como vender.
          </h2>

          <p className="mx-auto mt-4 max-w-4xl text-lg text-slate-700 md:text-2xl">
            Do seu jeito de sempre ou com a{" "}
            <span className="font-bold text-[#1457F5]">experiência</span> que o{" "}
            <span className="font-bold text-[#1457F5]">cliente merece.</span>
          </p>
        </div>

        <div className="relative grid items-center gap-8 lg:grid-cols-[1fr,1.35fr,1fr]">
          <div className="pointer-events-none absolute left-[28%] top-[90px] hidden -rotate-6 lg:block">
            <svg width="180" height="120" viewBox="0 0 180 120" fill="none">
              <defs>
                <linearGradient id="arrow1" x1="0" y1="120" x2="180" y2="0">
                  <stop stopColor="#9EC5FF" />
                  <stop offset="0.55" stopColor="#2871FF" />
                  <stop offset="1" stopColor="#0A4BDB" />
                </linearGradient>
              </defs>
              <path
                d="M18 102 C40 48 92 18 145 36"
                stroke="url(#arrow1)"
                strokeWidth="20"
                strokeLinecap="round"
              />
              <path d="M138 6 L174 50 L118 58 Z" fill="url(#arrow1)" />
            </svg>
          </div>

          <div className="pointer-events-none absolute right-[28%] top-[150px] hidden rotate-6 lg:block">
            <svg width="180" height="120" viewBox="0 0 180 120" fill="none">
              <defs>
                <linearGradient id="arrow2" x1="0" y1="0" x2="180" y2="120">
                  <stop stopColor="#A8CEFF" />
                  <stop offset="0.55" stopColor="#2871FF" />
                  <stop offset="1" stopColor="#0A4BDB" />
                </linearGradient>
              </defs>
              <path
                d="M18 28 C72 14 124 40 150 88"
                stroke="url(#arrow2)"
                strokeWidth="20"
                strokeLinecap="round"
              />
              <path d="M120 88 L174 108 L144 62 Z" fill="url(#arrow2)" />
            </svg>
          </div>

          <article className="relative">
            <div className="mb-5 lg:pl-16">
              <div className="mb-2 flex items-center gap-4">
                <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full border-2 border-blue-100 bg-white text-[#1457F5] shadow-[0_10px_30px_rgba(20,87,245,0.15)]">
                  <UserRound size={36} />
                </div>

                <span className="rounded-full bg-[#1457F5] px-5 py-2 text-sm font-extrabold uppercase tracking-wide text-white shadow-lg md:text-base">
                  Caminho 1
                </span>
              </div>

              <h3 className="text-3xl font-black uppercase tracking-[-0.03em] text-[#04113A]">
                Fluxo tradicional
              </h3>

              <p className="mt-1 text-lg text-slate-700">
                Como você já conhece
              </p>
            </div>

            <div className="overflow-hidden rounded-[24px] border-2 border-[#6EA3FF] bg-white shadow-[0_24px_60px_rgba(15,23,42,0.12)] lg:rotate-[4deg]">
              <Image
                src={images.tradicional}
                alt="Fluxo Tradicional"
                width={900}
                height={650}
                className="h-auto w-full object-cover"
                unoptimized
              />
            </div>
          </article>

          <article className="relative z-10 lg:-translate-y-3">
            <div className="mb-4 text-center">
              <span className="inline-flex rounded-full bg-[#1457F5] px-5 py-2 text-sm font-extrabold uppercase tracking-wide text-white shadow-lg md:text-base">
                Novo
              </span>

              <h3 className="mt-3 text-3xl font-black uppercase tracking-[-0.03em] text-[#1457F5] md:text-4xl">
                Negociação Mobi
              </h3>

              <p className="mt-1 text-lg text-slate-700">
                Nova experiência de venda
              </p>
            </div>

            <div className="overflow-hidden rounded-[26px] border-[4px] border-[#1D62F3] bg-white shadow-[0_30px_70px_rgba(15,23,42,0.18),0_0_0_8px_rgba(29,98,243,0.08)]">
              <Image
                src={images.negociacao}
                alt="Negociação Mobi"
                width={1200}
                height={800}
                className="h-auto w-full object-cover"
                unoptimized
              />
            </div>
          </article>

          <article className="relative">
            <div className="mb-5 lg:pl-24">
              <div className="mb-2 flex items-center gap-4">
                <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full border-2 border-blue-100 bg-white text-[#1457F5] shadow-[0_10px_30px_rgba(20,87,245,0.15)]">
                  <CheckCircle2 size={40} />
                </div>

                <span className="rounded-full bg-[#1457F5] px-5 py-2 text-sm font-extrabold uppercase tracking-wide text-white shadow-lg md:text-base">
                  Caminho 2
                </span>
              </div>

              <h3 className="text-3xl font-black uppercase tracking-[-0.03em] text-[#04113A]">
                Pedido de venda
              </h3>

              <p className="mt-1 text-lg font-bold leading-7 text-[#18A53A]">
                Mesmo processo.
                <br />
                Mesmas regras.
              </p>
            </div>

            <div className="overflow-hidden rounded-[24px] border-2 border-[#6EA3FF] bg-white shadow-[0_24px_60px_rgba(15,23,42,0.12)] lg:-rotate-[4deg]">
              <Image
                src={images.pedido}
                alt="Pedido de Venda"
                width={900}
                height={650}
                className="h-auto w-full object-cover"
                unoptimized
              />
            </div>
          </article>
        </div>

        <div className="mx-auto mt-10 grid max-w-6xl gap-6 pt-2 md:grid-cols-3">
          <Benefit
            icon={Zap}
            title="Mais agilidade"
            text="Menos etapas, mais fechamento"
            border
          />

          <Benefit
            icon={ShieldCheck}
            title="Experiência completa"
            text="Tudo que você precisa no lugar certo"
            border
          />

          <Benefit
            icon={CheckCircle2}
            title="Processo padrão"
            text="Segurança e controle que já confia"
          />
        </div>
      </div>
    </section>
  );
}

function Benefit({
  icon: Icon,
  title,
  text,
  border = false,
}: {
  icon: typeof Zap;
  title: string;
  text: string;
  border?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-center gap-4 border-slate-200 ${
        border ? "md:border-r" : ""
      }`}
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-blue-100 bg-white text-[#1457F5] shadow-md">
        <Icon size={32} />
      </div>

      <div>
        <h4 className="text-xl font-black uppercase text-[#04113A] md:text-2xl">
          {title}
        </h4>
        <p className="text-sm text-slate-700 md:text-base">{text}</p>
      </div>
    </div>
  );
}