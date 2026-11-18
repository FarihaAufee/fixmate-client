import { Star } from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { testimonials } from "@/lib/home-data"
import { cn } from "@/lib/utils"

import { Reveal, Stagger, StaggerItem } from "./motion"
import { SectionHeading } from "./section-heading"

export function Testimonials() {
  return (
    <section id="testimonials" className="section-y scroll-mt-24">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Testimonials"
            title="What customers say about FixMate"
            description="Placeholder reviews to represent customer feedback and social proof. Replace with verified testimonials from your API or CMS."
            align="center"
          />
        </Reveal>

        <Stagger className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3" delayChildren={0.06}>
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.name}>
              <Card className="h-full border-border/70 bg-card py-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5">
                <CardContent className="flex h-full flex-col p-6">
                  <div className="flex items-center gap-1" aria-label={`${testimonial.rating} out of 5 stars`}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={`${testimonial.name}-star-${i}`}
                        className={cn(
                          "size-4",
                          i < testimonial.rating
                            ? "fill-primary text-primary"
                            : "fill-muted text-muted"
                        )}
                      />
                    ))}
                  </div>
                  <p className="mt-4 flex-1 text-sm leading-7 text-muted-foreground">
                    &ldquo;{testimonial.review}&rdquo;
                  </p>
                  <div className="mt-6 flex items-center gap-3 border-t border-border/70 pt-4">
                    <Avatar>
                      <AvatarFallback className="bg-mint text-primary font-semibold">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="min-w-0">
                      <p className="truncate font-heading text-sm font-bold text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="truncate text-xs text-muted-foreground">
                        {testimonial.role} · {testimonial.location}
                      </p>
                    </div>
                    <span className="ml-auto rounded-full bg-surface-muted px-2 py-1 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                      Placeholder
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
