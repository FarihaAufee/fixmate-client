import Link from "next/link"
import { Wrench } from "lucide-react"

import { cn } from "@/lib/utils"

type LogoProps = {
  className?: string
  href?: string
  inverted?: boolean
}

export function Logo({ className, href = "/", inverted = false }: LogoProps) {
  return (
    <Link
      href={href}
      aria-label="FixMate home"
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <span
        className={cn(
          "flex size-9 items-center justify-center rounded-xl shadow-sm transition-transform duration-300 group-hover:-rotate-6",
          inverted
            ? "bg-mint text-mint-foreground"
            : "bg-primary text-primary-foreground"
        )}
      >
        <Wrench className="size-5" strokeWidth={2.4} />
      </span>
      <span
        className={cn(
          "font-heading text-xl font-extrabold tracking-tight",
          inverted ? "text-brand-foreground" : "text-foreground"
        )}
      >
        Fix
        <span className={inverted ? "text-mint" : "text-primary"}>Mate</span>
      </span>
    </Link>
  )
}
