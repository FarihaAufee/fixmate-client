import {
  marketplaceServices,
  serviceCategories,
  serviceModes,
  type MarketplaceService,
  type ServiceCategory,
  type ServiceMode,
  type ServiceSort,
} from "./services-data"

export type ServiceFilters = {
  q: string
  category: ServiceCategory | "all"
  mode: ServiceMode | "all"
  sort: ServiceSort
}

export const defaultServiceFilters: ServiceFilters = {
  q: "",
  category: "all",
  mode: "all",
  sort: "newest",
}

export function isServiceCategory(value: string | null): value is ServiceCategory {
  return value !== null && (serviceCategories as readonly string[]).includes(value)
}

export function isServiceMode(value: string | null): value is ServiceMode {
  return value !== null && (serviceModes as readonly string[]).includes(value)
}

export function isServiceSort(value: string | null): value is ServiceSort {
  return value === "newest" || value === "price-asc" || value === "price-desc"
}

export function parseServiceFilters(params: URLSearchParams): ServiceFilters {
  const q = params.get("q")?.trim() ?? ""
  const categoryParam = params.get("category")
  const modeParam = params.get("mode")
  const sortParam = params.get("sort")

  return {
    q,
    category: isServiceCategory(categoryParam) ? categoryParam : "all",
    mode: isServiceMode(modeParam) ? modeParam : "all",
    sort: isServiceSort(sortParam) ? sortParam : "newest",
  }
}

export function filtersToSearchParams(filters: ServiceFilters): URLSearchParams {
  const params = new URLSearchParams()
  const q = filters.q.trim()
  if (q) params.set("q", q)
  if (filters.category !== "all") params.set("category", filters.category)
  if (filters.mode !== "all") params.set("mode", filters.mode)
  if (filters.sort !== "newest") params.set("sort", filters.sort)
  return params
}

export function hasActiveFilters(filters: ServiceFilters): boolean {
  return (
    filters.q.trim().length > 0 ||
    filters.category !== "all" ||
    filters.mode !== "all" ||
    filters.sort !== "newest"
  )
}

export function applyServiceFilters(
  services: MarketplaceService[],
  filters: ServiceFilters
): MarketplaceService[] {
  const query = filters.q.trim().toLowerCase()
  let result = services.filter((service) => {
    const matchesQuery =
      query.length === 0 || service.title.toLowerCase().includes(query)
    const matchesCategory =
      filters.category === "all" || service.category === filters.category
    const matchesMode = filters.mode === "all" || service.serviceMode === filters.mode
    return matchesQuery && matchesCategory && matchesMode
  })

  result = [...result].sort((a, b) => {
    switch (filters.sort) {
      case "price-asc":
        return a.startingPrice - b.startingPrice
      case "price-desc":
        return b.startingPrice - a.startingPrice
      case "newest":
      default:
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    }
  })

  return result
}

export function getFilteredMarketplaceServices(
  filters: ServiceFilters
): MarketplaceService[] {
  return applyServiceFilters(marketplaceServices, filters)
}
