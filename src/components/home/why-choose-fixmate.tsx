import { whyChooseFeatures } from "@/lib/home-data"

import { Reveal, Stagger, StaggerItem } from "./motion"
import { SectionHeading } from "./section-heading"

export function WhyChooseFixMate() {
  return (
    <section id="why-fixmate" className="section-y scroll-mt-24 bg-primary text-primary-foreground">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Why choose FixMate"
            title="Built for trust, transparency and peace of mind"
            description="A service experience designed around verified expertise, clear communication and payment confidence."
            align="center"
            className="[&_p]:text-primary-foreground/70 [&_h2]:text-primary-foreground"
          />
        </Reveal>

        <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" delayChildren={0.06}>
          {whyChooseFeatures.map((feature) => {
            const Icon = feature.icon
            return (
              <StaggerItem key={feature.title}>
                <article className="h-full rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-mint/30 hover:bg-primary-foreground/10">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-mint text-mint-foreground">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-4 font-heading text-xl font-bold text-primary-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-primary-foreground/75">
                    {feature.description}
                  </p>
                </article>
              </StaggerItem>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
