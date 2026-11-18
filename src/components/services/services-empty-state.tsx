import { SearchX } from "lucide-react"

import { Button } from "@/components/ui/button"

type ServicesEmptyStateProps = {
  onClear: () => void
  hasActiveFilters: boolean
}

export function ServicesEmptyState({ onClear, hasActiveFilters }: ServicesEmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-white/60 px-6 py-14 text-center sm:py-16">
      <span className="flex size-14 items-center justify-center rounded-2xl bg-mint text-primary">
        <SearchX className="size-7" />
      </span>
      <h2 className="mt-5 font-heading text-2xl font-bold text-foreground">
        No services match your search
      </h2>
      <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground sm:text-base">
        Try adjusting your search terms or filters to discover available repair experts and
        services in this category.
      </p>
      {hasActiveFilters ? (
        <Button
          type="button"
          variant="outline"
          size="lg"
          className="mt-6 h-11 rounded-full border-primary/15 bg-white px-6"
          onClick={onClear}
        >
          Clear search &amp; filters
        </Button>
      ) : null}
    </div>
  )
}
