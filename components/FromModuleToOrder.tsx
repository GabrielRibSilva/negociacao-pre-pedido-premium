import { ArrowRight, Car, CreditCard, FileSignature, FolderUp, UserRound, Wrench } from "lucide-react";
import { MediaSlot } from "./MediaSlot";

export function FromModuleToOrder() {
  return (
    <section id="pedido" className="bg-slate-950 py-28 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-blue-300">Do módulo para o pedido</p>
            <h2 className="text-4xl font-black tracking-[-0.04em] md:text-6xl">Venda primeiro. Formalize depois.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">Depois que o cliente entende a compra, o vendedor clica em <strong>Avançar para Pedido</strong>. O veículo e os itens escolhidos seguem para o fluxo padrão, sem prometer uma PDS totalmente preenchida.</p>
            <p className="mt-4 text-lg leading-8 text-slate-300">Pagamento, dados do cliente, documentos e assinatura continuam sendo preenchidos na formalização já conhecida dentro do MobiGestor.</p>
          </div>
          <MediaSlot dark type="video" label="Inserir vídeo" title="Clique em Avançar para Pedido" description="Grave o momento em que a negociação é concluída e o vendedor avança para o Pedido de Venda, mostrando quais informações chegam carregadas e onde o vendedor continua preenchendo o fluxo padrão." duration="30 a 45 segundos" />
        </div>
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-black">Segue da negociação</h3>
            <div className="mt-6 space-y-4"><DarkItem icon={Car} text="Veículo de interesse"/><DarkItem icon={Wrench} text="Acessórios, pacotes e serviços escolhidos"/></div>
          </div>
          <div className="rounded-[32px] border border-blue-400/20 bg-blue-600 p-8">
            <h3 className="text-2xl font-black">Continua no fluxo padrão</h3>
            <div className="mt-6 grid gap-4 md:grid-cols-2"><BlueItem icon={CreditCard} text="Tipos de pagamento e valores"/><BlueItem icon={UserRound} text="Dados completos do cliente"/><BlueItem icon={FileSignature} text="Assinatura digital"/><BlueItem icon={FolderUp} text="Anexo dos documentos"/></div>
          </div>
        </div>
      </div>
    </section>
  );
}
function DarkItem({ icon: Icon, text }: { icon: any; text: string }) { return <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5"><Icon className="text-blue-300" size={22}/><span className="font-bold text-slate-100">{text}</span></div>; }
function BlueItem({ icon: Icon, text }: { icon: any; text: string }) { return <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-5"><Icon className="text-blue-100" size={22}/><span className="font-bold text-white">{text}</span></div>; }
