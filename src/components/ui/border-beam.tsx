import { cn } from "@/lib/utils"

interface BorderBeamProps {
  className?: string
  duration?: number
  delay?: number
  borderWidth?: number
}

export function BorderBeam({
  className,
  duration = 15,
  delay = 0,
  borderWidth = 1.5,
}: BorderBeamProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit]",
        className
      )}
      style={{
        background: `linear-gradient(90deg, transparent, currentColor, transparent)`,
        padding: `${borderWidth}px`,
        borderRadius: "inherit",
        mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        maskComposite: "xor",
        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        WebkitMaskComposite: "xor",
      }}
    >
      <div
        className="absolute inset-0 rounded-[inherit]"
        style={{
          background: `conic-gradient(from 0deg, transparent 70%, currentColor 100%)`,
          animation: `border-beam ${duration}s linear infinite`,
          animationDelay: `${delay}s`,
          opacity: 0.8,
        }}
      />
    </div>
  )
}
