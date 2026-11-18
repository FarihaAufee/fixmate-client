import Link from "next/link"
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react"
import { FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6"

import { Logo } from "@/components/layout/logo"
import { footerLinks, siteConfig } from "@/lib/site"

const socialLinks = [
  { label: "FixMate on X", href: "https://x.com", icon: FaXTwitter },
  {
    label: "FixMate on Instagram",
    href: "https://instagram.com",
    icon: FaInstagram,
  },
  {
    label: "FixMate on LinkedIn",
    href: "https://linkedin.com",
    icon: FaLinkedinIn,
  },
]

export function Footer() {
  const [navigation, popularCategories] = footerLinks

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-page py-14 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          <div className="max-w-sm">
            <Logo inverted />
            <p className="mt-5 text-sm leading-6 text-primary-foreground/70">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex items-center gap-2">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex size-9 items-center justify-center rounded-full border border-primary-foreground/15 text-primary-foreground/70 transition-colors hover:border-mint hover:bg-mint hover:text-mint-foreground"
                >
                  <Icon className="size-4" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-[0.16em] text-primary-foreground/50">
              {navigation.title}
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {navigation.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-primary-foreground/75 transition-colors hover:text-mint"
                  >
                    {link.label}
                    <ArrowUpRight className="size-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-[0.16em] text-primary-foreground/50">
              {popularCategories.title}
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {popularCategories.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/75 transition-colors hover:text-mint"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-[0.16em] text-primary-foreground/50">
              Contact
            </h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-primary-foreground/75">
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 size-4 shrink-0 text-mint" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="transition-colors hover:text-mint"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 size-4 shrink-0 text-mint" />
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/[^\d+]/g, "")}`}
                  className="transition-colors hover:text-mint"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-mint" />
                <span>{siteConfig.contact.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 {siteConfig.name}. All rights reserved.</p>
          <p>Pay after service. Trusted repairs, simplified.</p>
        </div>
      </div>
    </footer>
  )
}
