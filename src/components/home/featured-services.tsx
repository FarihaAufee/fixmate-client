import Image from "next/image"
import { ArrowRight, Clock3 } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { featuredServices } from "@/lib/home-data"

import { Reveal, Stagger, StaggerItem } from "./motion"
import { SectionHeading } from "./section-heading"

export function FeaturedServices() {
  return (
    <section id="services" className="section-y scroll-mt-24 bg-surface-muted/40">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Featured services"
            title="Popular repair services, presented clearly"
            description="Mock service listings shown for layout and discovery. These cards are structured to be replaced with real API data."
            actions={
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/10 bg-white px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-sm">
                Placeholder data
                <ArrowRight className="size-3.5 text-primary" />
              </span>
            }
          />
        </Reveal>

        <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3" delayChildren={0.06}>
          {featuredServices.map((service) => (
            <StaggerItem key={service.id}>
              <Card className="group h-full overflow-hidden border-border/70 bg-card py-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5">
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute left-3 top-3">
                    <Badge className="border border-white/40 bg-white/90 text-primary shadow-sm backdrop-blur">
                      {service.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="flex h-full flex-col gap-4 p-5">
                  <div>
                    <h3 className="font-heading text-xl font-bold leading-snug text-foreground">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                  <div className="mt-auto flex items-center justify-between gap-3 border-t border-border/70 pt-4 text-sm">
                    <span className="font-semibold text-primary">{service.price}</span>
                    <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                      <Clock3 className="size-4" />
                      {service.duration}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
