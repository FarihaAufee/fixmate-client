"use client"

import { useEffect, useMemo, useState } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { RotateCcw, Search, SlidersHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { marketplaceServices, serviceCategories, serviceModes } from "@/lib/services-data"
import {
  filtersToSearchParams,
  getFilteredMarketplaceServices,
  hasActiveFilters,
  isServiceCategory,
  isServiceMode,
  isServiceSort,
  parseServiceFilters,
  type ServiceFilters,
} from "@/lib/services-filters"
import { cn } from "@/lib/utils"

import { MarketplaceServiceCard } from "./marketplace-service-card"
import { ServicesEmptyState } from "./services-empty-state"

const controlClassName =
  "h-11 w-full rounded-xl border border-input bg-white px-3.5 text-sm text-foreground shadow-sm outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"

function SearchField({
  initialQuery,
  onCommit,
}: {
  initialQuery: string
  onCommit: (query: string) => void
}) {
  const [draft, setDraft] = useState(initialQuery)

  useEffect(() => {
    const trimmed = draft.trim()
    if (trimmed === initialQuery) return
    const timeout = setTimeout(() => onCommit(trimmed), 350)
    return () => clearTimeout(timeout)
  }, [draft, initialQuery, onCommit])

  return (
    <label className="relative block md:col-span-2 xl:col-span-1">
      <span className="sr-only">Search by service title</span>
      <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        type="search"
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        placeholder="Search by service title"
        className="h-11 rounded-xl border-input bg-white pl-10 pr-3.5 shadow-sm"
        aria-label="Search by service title"
      />
    </label>
  )
}

export function ServicesMarketplace() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const filters = useMemo(() => parseServiceFilters(searchParams), [searchParams])

  const applyFilters = (next: ServiceFilters) => {
    const params = filtersToSearchParams(next)
    const query = params.toString()
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false })
  }

  const updateFilter = <K extends keyof ServiceFilters>(key: K, value: ServiceFilters[K]) => {
    applyFilters({ ...filters, [key]: value })
  }

  const results = useMemo(() => getFilteredMarketplaceServices(filters), [filters])
  const active = hasActiveFilters(filters)

  const clearAll = () => {
    router.replace(pathname, { scroll: false })
  }

  return (
    <section className="section-y pt-8 sm:pt-10 lg:pt-12">
      <div className="container-page">
        <div className="rounded-2xl border border-border/70 bg-white/80 p-4 shadow-sm backdrop-blur sm:p-5 lg:p-6">
          <div className="mb-4 flex items-center gap-2 text-sm font-medium text-foreground">
            <SlidersHorizontal className="size-4 text-primary" />
            Search &amp; filters
          </div>

          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(0,1fr))_auto]">
            <SearchField
              key={filters.q}
              initialQuery={filters.q}
              onCommit={(q) => applyFilters({ ...filters, q })}
            />

            <label className="block">
              <span className="sr-only">Category filter</span>
              <select
                value={filters.category}
                onChange={(e) => {
                  const value = e.target.value
                  updateFilter("category", isServiceCategory(value) ? value : "all")
                }}
                className={cn(controlClassName, "pr-9")}
                aria-label="Filter by category"
              >
                <option value="all">All categories</option>
                {serviceCategories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="sr-only">Service mode filter</span>
              <select
                value={filters.mode}
                onChange={(e) => {
                  const value = e.target.value
                  updateFilter("mode", isServiceMode(value) ? value : "all")
                }}
                className={cn(controlClassName, "pr-9")}
                aria-label="Filter by service mode"
              >
                <option value="all">All service modes</option>
                {serviceModes.map((mode) => (
                  <option key={mode} value={mode}>
                    {mode}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="sr-only">Sort services</span>
              <select
                value={filters.sort}
                onChange={(e) => {
                  const value = e.target.value
                  updateFilter("sort", isServiceSort(value) ? value : "newest")
                }}
                className={cn(controlClassName, "pr-9")}
                aria-label="Sort services"
              >
                <option value="newest">Newest</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </label>

            <div className="flex md:col-span-2 xl:col-span-1">
              <Button
                type="button"
                variant="outline"
                className="h-11 w-full rounded-xl border-primary/15 bg-white px-4 text-sm font-medium hover:bg-mint/40"
                onClick={clearAll}
                disabled={!active}
              >
                <RotateCcw className="size-4" />
                Clear filters
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium text-foreground" aria-live="polite">
              {`${results.length} ${results.length === 1 ? "service" : "services"} found`}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Showing results from temporary mock listings for this phase.
            </p>
          </div>
          {active ? (
            <p className="text-xs text-muted-foreground">
              Filters are synced to the URL for easy sharing and reloads.
            </p>
          ) : null}
        </div>

        <div className="mt-6">
          {results.length === 0 ? (
            <ServicesEmptyState onClear={clearAll} hasActiveFilters={active} />
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {results.map((service) => (
                <MarketplaceServiceCard key={service.id} service={service} />
              ))}
            </div>
          )}
        </div>

        <p className="sr-only">Total available mock services: {marketplaceServices.length}</p>
      </div>
    </section>
  )
}
