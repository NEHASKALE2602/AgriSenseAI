import { ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
};

export default function GlassCard({
  children,
  className = "",
}: GlassCardProps) {
  return (
    <div
      className={`
        relative
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        shadow-[0_8px_40px_rgba(0,0,0,0.35)]
        transition-all
        duration-300
        hover:border-green-400/40
        hover:shadow-[0_0_35px_rgba(34,197,94,0.25)]
        ${className}
      `}
    >
      {children}
    </div>
  );
}