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
            className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f6faff_55%,#eef5ff_100%)] px-6 pt-8 pb-10 md:px-10 lg:px-10"
        >
            <div className="pointer-events-none absolute bottom-8 left-0 h-28 w-64 opacity-30 [background-image:radial-gradient(#77a7ff_1.4px,transparent_1.4px)] [background-size:13px_13px]" />
            <div className="pointer-events-none absolute bottom-8 right-0 h-28 w-64 opacity-30 [background-image:radial-gradient(#77a7ff_1.4px,transparent_1.4px)] [background-size:13px_13px]" />

            <div className="mx-auto max-w-[1450px]">
                <div className="mb-10 text-center">
                    <h2 className="text-4xl font-black uppercase leading-[0.9] tracking-[-0.05em] text-[#04113A] md:text-6xl lg:text-[76px]">
                        Você escolhe como vender.
                    </h2>

                    <p className="mx-auto mt-4 max-w-5xl text-lg text-slate-700 md:text-2xl">
                        Do seu jeito de sempre ou com a{" "}
                        <span className="font-bold text-[#1457F5]">experiência</span> que o{" "}
                        <span className="font-bold text-[#1457F5]">cliente merece.</span>
                    </p>
                </div>

                <div className="relative grid items-end gap-5 lg:grid-cols-[0.92fr_1.12fr_0.92fr]">
                    <ArrowLeft />
                    <ArrowRight />

                    <article className="relative">
                        <div className="mb-5 lg:pl-16">
                            <div className="mb-2 flex items-center gap-4">
                                <CircleIcon>
                                    <UserRound size={28} />
                                </CircleIcon>

                                <Badge>Caminho 1</Badge>
                            </div>

                            <h3 className="text-2xl font-black uppercase tracking-[-0.03em] text-[#04113A] md:text-2xl">
                                Fluxo tradicional
                            </h3>

                            <p className="mt-1 text-lg text-slate-700">
                                Como você já conhece
                            </p>
                        </div>

                        <ScreenCard className="lg:rotate-[4deg]">
                            <Image
                                src={images.tradicional}
                                alt="Fluxo Tradicional"
                                width={760}
                                height={540}
                                className="h-auto w-full object-cover"
                                unoptimized
                                priority
                            />
                        </ScreenCard>
                    </article>

                    <article className="relative z-10 lg:-translate-y-4">
                        <div className="mb-4 text-center">
                            <Badge>Novo</Badge>

                            <h3 className="mt-3 text-3xl font-black uppercase tracking-[-0.03em] text-[#1457F5] md:text-4xl">
                                Negociação Mobi
                            </h3>

                            <p className="mt-1 text-lg text-slate-700">
                                Nova experiência de venda
                            </p>
                        </div>

                        <div className="overflow-hidden rounded-[28px] border-[5px] border-[#1D62F3] bg-white shadow-[0_34px_80px_rgba(20,87,245,0.25),0_0_0_8px_rgba(29,98,243,0.08)]">
                            <Image
                                src={images.negociacao}
                                alt="Negociação Mobi"
                                width={1450}
                                height={900}
                                className="h-auto w-full object-cover"
                                unoptimized
                                priority
                            />
                        </div>
                    </article>

                    <article className="relative">
                        <div className="mb-5 lg:pl-24">
                            <div className="mb-2 flex items-center gap-4">
                                <CircleIcon>
                                    <CheckCircle2 size={40} />
                                </CircleIcon>

                                <Badge>Caminho 2</Badge>
                            </div>

                            <h3 className="text-2xl font-black uppercase tracking-[-0.03em] text-[#04113A] md:text-3xl">
                                Pedido de venda
                            </h3>

                            <p className="mt-1 text-lg font-bold leading-7 text-[#18A53A]">
                                Mesmo processo.
                                <br />
                                Mesmas regras.
                            </p>
                        </div>

                        <ScreenCard className="lg:-rotate-[4deg]">
                            <Image
                                src={images.pedido}
                                alt="Pedido de Venda"
                                width={760}
                                height={540}
                                className="h-auto w-full object-cover"
                                unoptimized
                                priority
                            />
                        </ScreenCard>
                    </article>
                </div>

                <div className="mx-auto mt-6 grid max-w-6xl gap-6 pt-2 md:grid-cols-3">
                    <Benefit
                        icon={<Zap size={34} />}
                        title="Mais agilidade"
                        text="Menos etapas, mais fechamento"
                        border
                    />

                    <Benefit
                        icon={<ShieldCheck size={34} />}
                        title="Experiência completa"
                        text="Tudo que você precisa no lugar certo"
                        border
                    />

                    <Benefit
                        icon={<CheckCircle2 size={34} />}
                        title="Processo padrão"
                        text="Segurança e controle que já confia"
                    />
                </div>
            </div>
        </section>
    );
}

function ScreenCard({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div
            className={`overflow-hidden rounded-[20px] border-2 border-[#6EA3FF] bg-white shadow-[0_24px_60px_rgba(15,23,42,0.12)] ${className}`}
        >
            {children}
        </div>
    );
}

function CircleIcon({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-[14px] w-[14px] items-center justify-center rounded-full border-2 border-blue-100 bg-white text-[#1457F5] shadow-[0_10px_30px_rgba(20,87,245,0.15)]">
            {children}
        </div>
    );
}

function Badge({ children }: { children: React.ReactNode }) {
    return (
        <span className="inline-flex rounded-full bg-[#1457F5] px-5 py-2 text-sm font-extrabold uppercase tracking-wide text-white shadow-lg md:text-base">
            {children}
        </span>
    );
}

function Benefit({
    icon,
    title,
    text,
    border = false,
}: {
    icon: React.ReactNode;
    title: string;
    text: string;
    border?: boolean;
}) {
    return (
        <div
            className={`flex items-center justify-center gap-4 border-slate-200 ${border ? "md:border-r" : ""
                }`}
        >
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-blue-100 bg-white text-[#1457F5] shadow-md">
                {icon}
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

function ArrowLeft() {
  return (
    <div className="pointer-events-none absolute left-[23%] top-[155px] z-20 hidden lg:block">
      <svg width="210" height="150" viewBox="0 0 210 150" fill="none">
        <defs>
          <linearGradient id="leftGradient" x1="0" y1="150" x2="210" y2="0">
            <stop offset="0%" stopColor="#9CC4FF" />
            <stop offset="55%" stopColor="#2871FF" />
            <stop offset="100%" stopColor="#0A4BDB" />
          </linearGradient>
        </defs>
        <path
          d="M20 122 C58 45 120 20 176 48"
          stroke="url(#leftGradient)"
          strokeWidth="24"
          strokeLinecap="round"
        />
        <path d="M165 15 L203 62 L142 68 Z" fill="url(#leftGradient)" />
      </svg>
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="pointer-events-none absolute right-[23%] top-[180px] z-20 hidden lg:block">
      <svg width="210" height="150" viewBox="0 0 210 150" fill="none">
        <defs>
          <linearGradient id="rightGradient" x1="0" y1="0" x2="210" y2="150">
            <stop offset="0%" stopColor="#A8CEFF" />
            <stop offset="55%" stopColor="#2871FF" />
            <stop offset="100%" stopColor="#0A4BDB" />
          </linearGradient>
        </defs>
        <path
          d="M22 45 C85 20 150 52 180 115"
          stroke="url(#rightGradient)"
          strokeWidth="24"
          strokeLinecap="round"
        />
        <path d="M146 112 L203 135 L172 80 Z" fill="url(#rightGradient)" />
      </svg>
    </div>
  );
}