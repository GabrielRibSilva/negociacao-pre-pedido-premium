import { ImageIcon, PlayCircle } from "lucide-react";

type MediaBlockProps = {
  type: "video" | "image";
  title: string;
  description: string;
  note?: string;
  dark?: boolean;
  large?: boolean;
};

export function MediaBlock({ type, title, description, note, dark = false, large = false }: MediaBlockProps) {
  const Icon = type === "video" ? PlayCircle : ImageIcon;

  return (
    <div className={`group relative overflow-hidden rounded-[2rem] border ${dark ? "border-white/10 bg-white/[0.04]" : "border-slate-200 bg-slate-50"} ${large ? "min-h-[520px]" : ""} shadow-2xl shadow-slate-950/10`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.18),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(14,165,233,0.14),transparent_35%)]" />
      <div className={`relative flex aspect-video ${large ? "min-h-[520px]" : ""} flex-col items-center justify-center p-8 text-center`}>
        <div className={`${dark ? "bg-white/10 text-white" : "bg-blue-600/10 text-blue-600"} mb-6 flex h-20 w-20 items-center justify-center rounded-3xl transition duration-300 group-hover:scale-105`}>
          <Icon size={42} strokeWidth={1.6} />
        </div>
        <h3 className={`${dark ? "text-white" : "text-slate-950"} max-w-5xl text-2xl font-black tracking-tight`}>{title}</h3>
        <p className={`${dark ? "text-slate-300" : "text-slate-500"} mt-4 max-w-5xl text-sm leading-7`}>{description}</p>
        {note && <span className={`${dark ? "bg-white/10 text-blue-100" : "bg-white text-slate-500"} mt-6 rounded-full px-5 py-2 text-xs font-bold shadow-sm`}>{note}</span>}
      </div>
    </div>
  );
}
