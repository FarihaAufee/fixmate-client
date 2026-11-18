import { Suspense } from "react"

import { ServicesMarketplace } from "@/components/services/services-marketplace"
import { ServicesPageHeader } from "@/components/services/services-page-header"
import { ServicesGridSkeleton } from "@/components/services/services-grid-skeleton"

function MarketplaceFallback() {
  return (
    <section className="section-y pt-8 sm:pt-10 lg:pt-12" aria-busy="true">
      <div className="container-page">
        <div className="rounded-2xl border border-border/70 bg-white/80 p-4 shadow-sm sm:p-5 lg:p-6">
          <div className="h-5 w-40 animate-pulse rounded bg-muted" />
          <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(0,1fr))_auto]">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-11 animate-pulse rounded-xl bg-muted" />
            ))}
          </div>
        </div>
        <div className="mt-8 h-5 w-48 animate-pulse rounded bg-muted" />
        <div className="mt-6">
          <ServicesGridSkeleton />
        </div>
      </div>
    </section>
  )
}

export default function ServicesPage() {
  return (
    <>
      <ServicesPageHeader />
      <Suspense fallback={<MarketplaceFallback />}>
        <ServicesMarketplace />
      </Suspense>
    </>
  )
}
