"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowRight, Menu } from "lucide-react"

import { Logo } from "@/components/layout/logo"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { navLinks } from "@/lib/site"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [open, setOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70">
      <div className="container-page flex h-16 items-center justify-between gap-4 lg:h-20">
        <Logo />

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 md:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-mint/60 hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Link
            href="/#how-it-works"
            className={cn(
              buttonVariants({ variant: "ghost", size: "lg" }),
              "h-10 rounded-full px-4 text-sm text-muted-foreground hover:bg-mint/60 hover:text-primary"
            )}
          >
            How it works
          </Link>
          <Link
            href="/services"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-10 rounded-full px-5 text-sm shadow-sm shadow-primary/20"
            )}
          >
            Explore Services
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon-lg"
                className="rounded-full md:hidden"
                aria-label="Open navigation menu"
              />
            }
          >
            <Menu />
          </SheetTrigger>
          <SheetContent side="right" className="w-[86%] max-w-sm p-0">
            <SheetHeader className="border-b px-5 py-4 pr-14">
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <SheetDescription className="sr-only">
                Browse FixMate sections and explore services.
              </SheetDescription>
              <Logo />
            </SheetHeader>

            <nav
              aria-label="Mobile navigation"
              className="flex flex-col gap-1 px-4 py-4"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-mint/60 hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto flex flex-col gap-2 border-t px-4 py-4">
              <Link
                href="/services"
                onClick={() => setOpen(false)}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-11 w-full rounded-full text-sm shadow-sm shadow-primary/20"
                )}
              >
                Explore Services
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/#how-it-works"
                onClick={() => setOpen(false)}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-11 w-full rounded-full border-primary/15 bg-white/70 text-sm"
                )}
              >
                How It Works
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
