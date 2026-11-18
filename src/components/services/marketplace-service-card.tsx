"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, MapPin, Store, UserRound, Wrench } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import type { MarketplaceService } from "@/lib/services-data"
import { cn } from "@/lib/utils"

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80"

export function formatStartingPrice(price: number): string {
  return `$${price}`
}

export function MarketplaceServiceCard({ service }: { service: MarketplaceService }) {
  const [imgSrc, setImgSrc] = useState(service.image)

  return (
    <Card className="group flex h-full flex-col overflow-hidden border-border/70 bg-card py-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5">
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <Image
          src={imgSrc}
          alt={service.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          onError={() => setImgSrc(FALLBACK_IMAGE)}
        />
        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          <Badge className="border border-white/40 bg-white/90 text-primary shadow-sm backdrop-blur">
            {service.category}
          </Badge>
        </div>
      </div>

      <CardContent className="flex flex-1 flex-col gap-4 p-5">
        <div>
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <span
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold",
                service.serviceMode === "Home Visit"
                  ? "bg-mint text-primary"
                  : "bg-surface-muted text-foreground"
              )}
            >
              {service.serviceMode === "Home Visit" ? (
                <Wrench className="size-3.5" />
              ) : (
                <Store className="size-3.5" />
              )}
              {service.serviceMode}
            </span>
          </div>
          <h3 className="font-heading text-xl font-bold leading-snug text-foreground">
            {service.title}
          </h3>
        </div>

        <dl className="grid gap-2 text-sm">
          <div className="flex items-start gap-2 text-muted-foreground">
            <MapPin className="mt-0.5 size-4 shrink-0 text-primary/70" />
            <div>
              <dt className="sr-only">Area</dt>
              <dd>{service.area}</dd>
            </div>
          </div>
          <div className="flex items-start gap-2 text-muted-foreground">
            <UserRound className="mt-0.5 size-4 shrink-0 text-primary/70" />
            <div>
              <dt className="sr-only">Technician</dt>
              <dd>
                <span className="font-medium text-foreground">{service.technicianName}</span>
                <span className="text-muted-foreground"> · Technician</span>
              </dd>
            </div>
          </div>
        </dl>

        <div className="mt-auto flex items-center justify-between gap-3 border-t border-border/70 pt-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
              Starting at
            </p>
            <p className="font-heading text-lg font-bold text-primary">
              {formatStartingPrice(service.startingPrice)}
            </p>
          </div>
          <Link
            href={`/services/${service.id}`}
            className="inline-flex items-center gap-1.5 rounded-full border border-primary/15 bg-white px-3.5 py-2 text-sm font-semibold text-primary transition-colors hover:bg-mint/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
            aria-label={`View details for ${service.title}`}
          >
            View Details
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
