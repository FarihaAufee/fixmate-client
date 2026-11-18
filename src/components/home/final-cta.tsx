import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

import { Reveal } from "./motion"

export function FinalCta() {
  return (
    <section className="section-y pt-0">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-primary/10 bg-gradient-to-br from-white via-mint/40 to-white p-8 shadow-xl shadow-primary/5 sm:p-10 lg:p-14">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-mint/70 blur-3xl" />
              <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-surface-muted blur-3xl" />
            </div>

            <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white/80 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary shadow-sm">
                <Sparkles className="size-3.5" />
                Ready when you are
              </span>
              <h2 className="mt-5 font-heading text-3xl font-extrabold leading-tight text-foreground sm:text-4xl lg:text-5xl">
                Your Device Deserves Expert Care.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                Connect with verified technicians, get transparent service, and enjoy the
                confidence of paying after completion.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/services"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "h-12 rounded-full px-7 text-sm shadow-lg shadow-primary/20"
                  )}
                >
                  Find a Technician
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/#how-it-works"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "h-12 rounded-full border-primary/15 bg-white/70 px-7 text-sm backdrop-blur hover:bg-white"
                  )}
                >
                  See How It Works
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
