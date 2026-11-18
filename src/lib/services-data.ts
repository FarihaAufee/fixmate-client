/**
 * TEMPORARY MOCK DATA
 * Replace with server-side/API-backed service listings in a future phase.
 * Do not treat these records as production data.
 */

export const serviceCategories = [
  "Smartphone",
  "Laptop & PC",
  "AC",
  "Refrigerator",
  "TV",
  "Washing Machine",
  "Electrical",
] as const

export type ServiceCategory = (typeof serviceCategories)[number]

export const serviceModes = ["Home Visit", "Shop Drop-off"] as const
export type ServiceMode = (typeof serviceModes)[number]

export type ServiceSort = "newest" | "price-asc" | "price-desc"

export type MarketplaceService = {
  id: string
  title: string
  category: ServiceCategory
  serviceMode: ServiceMode
  area: string
  startingPrice: number
  technicianName: string
  image: string
  createdAt: string
}

export const marketplaceServices: MarketplaceService[] = [
  {
    id: "svc-001",
    title: "iPhone Screen & Touch Repair",
    category: "Smartphone",
    serviceMode: "Shop Drop-off",
    area: "Downtown San Francisco",
    startingPrice: 69,
    technicianName: "Ethan Cole",
    image:
      "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=1200&q=80",
    createdAt: "2026-11-15",
  },
  {
    id: "svc-002",
    title: "Android Battery Replacement",
    category: "Smartphone",
    serviceMode: "Home Visit",
    area: "Mission District",
    startingPrice: 45,
    technicianName: "Nadia Karim",
    image:
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=1200&q=80",
    createdAt: "2026-11-12",
  },
  {
    id: "svc-003",
    title: "Laptop SSD Upgrade & Data Setup",
    category: "Laptop & PC",
    serviceMode: "Shop Drop-off",
    area: "SoMa, San Francisco",
    startingPrice: 89,
    technicianName: "Leo Martinez",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=80",
    createdAt: "2026-11-10",
  },
  {
    id: "svc-004",
    title: "Desktop Overheating & Fan Cleaning",
    category: "Laptop & PC",
    serviceMode: "Home Visit",
    area: "Sunset District",
    startingPrice: 55,
    technicianName: "Priya Shah",
    image:
      "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=1200&q=80",
    createdAt: "2026-11-08",
  },
  {
    id: "svc-005",
    title: "Split AC Deep Service & Gas Check",
    category: "AC",
    serviceMode: "Home Visit",
    area: "Noe Valley",
    startingPrice: 79,
    technicianName: "Marcus Hill",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80",
    createdAt: "2026-11-14",
  },
  {
    id: "svc-006",
    title: "Refrigerator Cooling & Thermostat Repair",
    category: "Refrigerator",
    serviceMode: "Home Visit",
    area: "Richmond District",
    startingPrice: 65,
    technicianName: "Hannah Lee",
    image:
      "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&w=1200&q=80",
    createdAt: "2026-11-06",
  },
  {
    id: "svc-007",
    title: "Smart TV Wall Mount & Setup",
    category: "TV",
    serviceMode: "Home Visit",
    area: "Pacific Heights",
    startingPrice: 49,
    technicianName: "Omar Hassan",
    image:
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=1200&q=80",
    createdAt: "2026-11-04",
  },
  {
    id: "svc-008",
    title: "Washing Machine Drain & Spin Fix",
    category: "Washing Machine",
    serviceMode: "Home Visit",
    area: "Bernal Heights",
    startingPrice: 59,
    technicianName: "Sofia Nguyen",
    image:
      "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=1200&q=80",
    createdAt: "2026-11-02",
  },
  {
    id: "svc-009",
    title: "Home Electrical Outlet & Switch Repair",
    category: "Electrical",
    serviceMode: "Home Visit",
    area: "Potrero Hill",
    startingPrice: 39,
    technicianName: "Daniel Brooks",
    image:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1200&q=80",
    createdAt: "2026-11-16",
  },
  {
    id: "svc-010",
    title: "Window AC Installation & Leak Fix",
    category: "AC",
    serviceMode: "Shop Drop-off",
    area: "Hayes Valley",
    startingPrice: 52,
    technicianName: "Ava Thompson",
    image:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80",
    createdAt: "2026-11-01",
  },
]
