import { howItWorksSteps } from "@/lib/home-data"

import { Reveal, Stagger, StaggerItem } from "./motion"
import { SectionHeading } from "./section-heading"

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-y scroll-mt-24">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="How it works"
            title="A simple repair journey from request to completion"
            description="Book with clarity in four straightforward steps designed for speed, trust and convenience."
            align="center"
          />
        </Reveal>

        <Stagger className="relative mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4" delayChildren={0.07}>
          {howItWorksSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <StaggerItem key={step.title} className="relative">
                <article className="relative h-full overflow-hidden rounded-2xl border border-border/70 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="flex size-12 items-center justify-center rounded-xl bg-mint text-primary ring-1 ring-primary/10">
                      <Icon className="size-5" />
                    </span>
                    <span className="font-heading text-4xl font-extrabold text-primary/10">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-5 font-heading text-xl font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {step.description}
                  </p>
                  {index < howItWorksSteps.length - 1 ? (
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute right-[-2.5rem] top-10 hidden h-px w-20 bg-gradient-to-r from-primary/25 to-transparent lg:block"
                    />
                  ) : null}
                </article>
              </StaggerItem>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
