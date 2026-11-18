export const siteConfig = {
  name: "FixMate",
  description:
    "FixMate connects you with verified technicians for fast, reliable device and appliance repairs with transparent pricing and pay-after-service peace of mind.",
  contact: {
    email: "support@fixmate.com",
    phone: "+1 (555) 013-2048",
    address: "120 Market Street, San Francisco, CA",
  },
} as const

export const navLinks = [
  { label: "Services", href: "/services" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Why FixMate", href: "/#why-fixmate" },
  { label: "Testimonials", href: "/#testimonials" },
] as const

export const footerLinks = [
  {
    title: "Navigation",
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "How It Works", href: "/#how-it-works" },
      { label: "Why FixMate", href: "/#why-fixmate" },
      { label: "Testimonials", href: "/#testimonials" },
    ],
  },
  {
    title: "Popular Categories",
    links: [
      { label: "Smartphone", href: "/services?category=Smartphone" },
      { label: "Laptop & PC", href: "/services?category=Laptop%20%26%20PC" },
      { label: "AC", href: "/services?category=AC" },
      { label: "Refrigerator", href: "/services?category=Refrigerator" },
      { label: "TV", href: "/services?category=TV" },
      { label: "Washing Machine", href: "/services?category=Washing%20Machine" },
      { label: "Electrical", href: "/services?category=Electrical" },
    ],
  },
] as const
