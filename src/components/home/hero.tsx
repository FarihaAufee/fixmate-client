"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BadgeCheck, BellRing, CircleCheck, Star, Wrench } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const highlights = [
  "Verified local technicians",
  "Transparent, upfront estimates",
  "Pay only after completion",
]

export function Hero() {
  const reduceMotion = useReducedMotion()

  const initial = reduceMotion ? false : { opacity: 0, y: 22 }
  const animate = reduceMotion ? undefined : { opacity: 1, y: 0 }
  const transition = (delay: number) =>
    reduceMotion ? undefined : { duration: 0.6, ease: "easeOut" as const, delay }

  return (
    <section className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 right-[-10%] h-96 w-96 rounded-full bg-mint/70 blur-3xl" />
        <div className="absolute bottom-[-10rem] left-[-8rem] h-96 w-96 rounded-full bg-surface-muted blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="container-page grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-28">
        <div className="max-w-2xl">
          <motion.span
            initial={initial}
            animate={animate}
            transition={transition(0)}
            className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white/70 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary shadow-sm backdrop-blur"
          >
            <BadgeCheck className="size-3.5" />
            Trusted repairs, made effortless
          </motion.span>

          <motion.h1
            initial={initial}
            animate={animate}
            transition={transition(0.05)}
            className="mt-6 font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Broken Device?
            <br />
            <span className="relative inline-block text-primary">
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-1 -z-10 h-3 rounded-full bg-mint sm:h-4"
              />
              Let&apos;s Make It Work Again.
            </span>
          </motion.h1>

          <motion.p
            initial={initial}
            animate={animate}
            transition={transition(0.12)}
            className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg"
          >
            Book verified technicians for smartphones, laptops, home appliances and
            electrical fixes. Get transparent pricing, reliable service and pay only after
            the job is done.
          </motion.p>

          <motion.div
            initial={initial}
            animate={animate}
            transition={transition(0.18)}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href="/services"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-12 rounded-full px-6 text-sm shadow-lg shadow-primary/20"
              )}
            >
              Explore Services
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/#how-it-works"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-12 rounded-full border-primary/15 bg-white/70 px-6 text-sm backdrop-blur hover:bg-white"
              )}
            >
              How It Works
            </Link>
          </motion.div>

          <motion.ul
            initial={initial}
            animate={animate}
            transition={transition(0.24)}
            className="mt-8 grid gap-3 sm:grid-cols-3"
            aria-label="Key benefits"
          >
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm font-medium text-muted-foreground"
              >
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-mint text-primary">
                  <CircleCheck className="size-3.5" />
                </span>
                {item}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={initial}
          animate={animate}
          transition={transition(0.15)}
          className="relative mx-auto w-full max-w-xl lg:max-w-none"
        >
          <div
            aria-hidden="true"
            className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-mint/80 via-background to-white opacity-80 blur-2xl"
          />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/70 p-3 shadow-2xl shadow-primary/10 backdrop-blur-xl sm:p-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-mint/40 sm:aspect-[5/6]">
              <Image
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80"
                alt="Technician repairing electronic devices at a workbench"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/45 via-primary/5 to-transparent" />

              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={
                  reduceMotion
                    ? undefined
                    : { duration: 0.5, delay: 0.35, ease: "easeOut" as const }
                }
                className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/30 bg-white/90 p-4 shadow-lg backdrop-blur"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <Wrench className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-foreground">Repair in progress</p>
                    <p className="text-xs text-muted-foreground">Laptop diagnostics &amp; thermal check</p>
                  </div>
                  <span className="ml-auto rounded-full bg-mint px-2.5 py-1 text-[11px] font-semibold text-primary">
                    Live
                  </span>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, x: 16, y: -8 }}
              animate={reduceMotion ? undefined : { opacity: 1, x: 0, y: 0 }}
              transition={
                reduceMotion
                  ? undefined
                  : { duration: 0.5, delay: 0.45, ease: "easeOut" as const }
              }
              className="absolute -right-2 top-8 hidden w-48 rounded-2xl border border-white/70 bg-white/95 p-3 shadow-xl shadow-primary/10 sm:block"
            >
              <div className="flex items-start gap-2.5">
                <span className="mt-0.5 flex size-8 items-center justify-center rounded-lg bg-mint text-primary">
                  <BellRing className="size-4" />
                </span>
                <div>
                  <p className="text-xs font-semibold text-foreground">Technician assigned</p>
                  <p className="mt-0.5 text-[11px] leading-4 text-muted-foreground">
                    Verified expert arriving in 25 min
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, x: -16, y: 8 }}
              animate={reduceMotion ? undefined : { opacity: 1, x: 0, y: 0 }}
              transition={
                reduceMotion
                  ? undefined
                  : { duration: 0.5, delay: 0.5, ease: "easeOut" as const }
              }
              className="absolute -left-2 bottom-28 hidden items-center gap-2 rounded-full border border-white/70 bg-white/95 px-3 py-2 shadow-xl shadow-primary/10 sm:flex"
            >
              <Star className="size-4 fill-primary text-primary" />
              <span className="text-xs font-semibold text-foreground">4.9/5 customer rating</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
