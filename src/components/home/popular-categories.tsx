import Link from "next/link"

import { categories } from "@/lib/home-data"

import { Reveal, Stagger, StaggerItem } from "./motion"
import { SectionHeading } from "./section-heading"

export function PopularCategories() {
  return (
    <section id="categories" className="section-y scroll-mt-24">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Popular categories"
            title="Find the right repair category in seconds"
            description="From everyday devices to essential home appliances, explore the services customers book most often."
          />
        </Reveal>

        <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" delayChildren={0.06}>
          {categories.map((category) => {
            const Icon = category.icon
            const href = `/services?category=${encodeURIComponent(category.name)}`
            return (
              <StaggerItem key={category.name}>
                <Link
                  href={href}
                  className="group flex h-full items-start gap-4 rounded-2xl border border-border/70 bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:bg-white hover:shadow-lg hover:shadow-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
                >
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-mint text-primary ring-1 ring-primary/10 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-foreground">
                      {category.name}
                    </h3>
                    <p className="mt-1.5 text-sm leading-6 text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                </Link>
              </StaggerItem>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
