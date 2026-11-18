import { trustStats } from "@/lib/home-data"

import { Reveal, Stagger, StaggerItem } from "./motion"
import { SectionHeading } from "./section-heading"

export function TrustStats() {
  return (
    <section className="section-y border-y border-border/60 bg-white/50">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Trusted at scale"
            title="Reliable repair service numbers you can count on"
            description="Clearly presented platform highlights to build confidence before you book."
            align="center"
          />
        </Reveal>

        <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" delayChildren={0.08}>
          {trustStats.map((stat) => {
            const Icon = stat.icon
            return (
              <StaggerItem key={stat.label}>
                <article className="group h-full rounded-2xl border border-border/70 bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5">
                  <div className="flex items-start justify-between gap-3">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-mint text-primary ring-1 ring-primary/10">
                      <Icon className="size-5" />
                    </span>
                  </div>
                  <p className="mt-5 font-heading text-3xl font-extrabold tracking-tight text-foreground">
                    {stat.value}
                  </p>
                  <h3 className="mt-1 font-heading text-base font-bold text-foreground">
                    {stat.label}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{stat.detail}</p>
                </article>
              </StaggerItem>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
