import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

export function ServicesPageHeader() {
  return (
    <section className="border-b border-border/60 bg-gradient-to-b from-white to-background">
      <div className="container-page py-10 sm:py-14 lg:py-16">
        <nav aria-label="Breadcrumb" className="mb-5">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
            <li>
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 rounded-md transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
              >
                <Home className="size-4" />
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="size-4 text-muted-foreground/60" />
            </li>
            <li aria-current="page" className="font-medium text-foreground">
              Services
            </li>
          </ol>
        </nav>

        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary/80">
            Services marketplace
          </p>
          <h1 className="mt-3 font-heading text-3xl font-extrabold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Find the Right Expert for Your Device
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Browse trusted repair professionals by category, service mode and price. Compare
            options, choose with confidence and book the right help for your device or home
            appliance.
          </p>
        </div>
      </div>
    </section>
  )
}
