import { ImageIcon, PlayCircle, Video } from "lucide-react";

type MediaSlotProps = {
  type: "video" | "image";
  label: string;
  title: string;
  description: string;
  duration?: string;
  dark?: boolean;
  tall?: boolean;
};

export function MediaSlot({ type, label, title, description, duration, dark, tall }: MediaSlotProps) {
  const Icon = type === "video" ? PlayCircle : ImageIcon;

  return (
    <div className={`relative overflow-hidden rounded-[32px] border ${dark ? "border-white/10 bg-white/5" : "border-slate-200 bg-slate-50"} mock-shadow`}>
      <div className={`absolute inset-0 ${dark ? "bg-[radial-gradient(circle_at_25%_10%,rgba(50,88,232,.45),transparent_35%)]" : "bg-[radial-gradient(circle_at_25%_10%,rgba(50,88,232,.16),transparent_35%)]"}`} />
      <div className={`relative flex ${tall ? "min-h-[520px]" : "aspect-video"} flex-col items-center justify-center p-8 text-center`}>
        <div className={`mb-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.18em] ${dark ? "bg-white/10 text-blue-100" : "bg-blue-600/10 text-blue-600"}`}>
          <Video size={14} /> {label}
        </div>
        <div className={`mb-6 flex h-20 w-20 items-center justify-center rounded-3xl ${dark ? "bg-white/10 text-white" : "bg-white text-blue-600 shadow-xl shadow-blue-600/10"}`}>
          <Icon size={42} strokeWidth={1.7} />
        </div>
        <h3 className={`max-w-2xl text-2xl font-black tracking-tight ${dark ? "text-white" : "text-slate-950"}`}>{title}</h3>
        <p className={`mt-4 max-w-2xl text-sm leading-7 ${dark ? "text-slate-300" : "text-slate-500"}`}>{description}</p>
        {duration && <span className={`mt-6 rounded-full px-4 py-2 text-xs font-bold ${dark ? "bg-white/10 text-blue-100" : "bg-white text-slate-500 shadow-sm"}`}>Duração sugerida: {duration}</span>}
      </div>
    </div>
  );
}
