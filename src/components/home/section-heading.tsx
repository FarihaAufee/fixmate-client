import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: "left" | "center"
  className?: string
  actions?: ReactNode
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  actions,
}: SectionHeadingProps) {
  const centered = align === "center"

  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        centered && "items-center text-center",
        !centered && "sm:flex-row sm:items-end sm:justify-between",
        className
      )}
    >
      <div className={cn("max-w-2xl", centered && "mx-auto")}> 
        {eyebrow ? (
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary/80">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="mt-3 font-heading text-3xl font-extrabold leading-tight text-foreground sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
      {actions ? <div className={cn(centered && "mt-2")}>{actions}</div> : null}
    </div>
  )
}
