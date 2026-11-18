import type { LucideIcon } from "lucide-react"
import {
  AirVent,
  BadgeCheck,
  CreditCard,
  Laptop,
  Monitor,
  Refrigerator,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TimerReset,
  WashingMachine,
  Wrench,
  Zap,
} from "lucide-react"

export type StatItem = {
  label: string
  value: string
  detail: string
  icon: LucideIcon
}

export type CategoryItem = {
  name: string
  description: string
  icon: LucideIcon
}

export type ServiceItem = {
  id: string
  title: string
  category: string
  description: string
  price: string
  duration: string
  image: string
}

export type StepItem = {
  title: string
  description: string
  icon: LucideIcon
}

export type FeatureItem = {
  title: string
  description: string
  icon: LucideIcon
}

export type TestimonialItem = {
  name: string
  role: string
  location: string
  rating: number
  review: string
  initials: string
}

export const trustStats: StatItem[] = [
  {
    label: "Verified Technicians",
    value: "1,200+",
    detail: "Background-checked experts across major repair categories",
    icon: BadgeCheck,
  },
  {
    label: "Successful Repairs",
    value: "48,000+",
    detail: "Devices and appliances restored with care and precision",
    icon: Wrench,
  },
  {
    label: "Happy Customers",
    value: "32,000+",
    detail: "Households who trust FixMate for reliable service",
    icon: Sparkles,
  },
  {
    label: "Pay After Service",
    value: "100%",
    detail: "Complete payment only when the repair is finished",
    icon: CreditCard,
  },
]

export const categories: CategoryItem[] = [
  {
    name: "Smartphone",
    description: "Screen, battery, charging and software fixes",
    icon: Smartphone,
  },
  {
    name: "Laptop & PC",
    description: "Performance, hardware and setup support",
    icon: Laptop,
  },
  {
    name: "AC",
    description: "Cooling, servicing and seasonal maintenance",
    icon: AirVent,
  },
  {
    name: "Refrigerator",
    description: "Cooling issues, leaks and part replacements",
    icon: Refrigerator,
  },
  {
    name: "TV",
    description: "Display, sound and connectivity repairs",
    icon: Monitor,
  },
  {
    name: "Washing Machine",
    description: "Drainage, drum and power problem fixes",
    icon: WashingMachine,
  },
  {
    name: "Electrical",
    description: "Safe wiring, switches and appliance power checks",
    icon: Zap,
  },
]

export const featuredServices: ServiceItem[] = [
  {
    id: "svc-smartphone-screen",
    title: "Smartphone Screen Replacement",
    category: "Smartphone",
    description:
      "Cracked or unresponsive display repair with quality parts and careful testing.",
    price: "From $49",
    duration: "60-90 min",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "svc-laptop-tuneup",
    title: "Laptop Performance Tune-Up",
    category: "Laptop & PC",
    description:
      "Speed optimization, cleanup, thermal checks and startup issue diagnosis.",
    price: "From $39",
    duration: "45-75 min",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "svc-ac-service",
    title: "AC Cooling Service",
    category: "AC",
    description:
      "Gas, filter and airflow inspection to restore efficient cooling at home.",
    price: "From $59",
    duration: "75-120 min",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "svc-fridge-repair",
    title: "Refrigerator Repair Visit",
    category: "Refrigerator",
    description:
      "Diagnosis for cooling loss, unusual noise, leakage and thermostat issues.",
    price: "From $45",
    duration: "60-120 min",
    image:
      "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "svc-tv-mount",
    title: "TV Setup & Display Fix",
    category: "TV",
    description:
      "Mounting, connectivity troubleshooting and common picture or sound repairs.",
    price: "From $35",
    duration: "45-90 min",
    image:
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "svc-washer-check",
    title: "Washing Machine Checkup",
    category: "Washing Machine",
    description:
      "Inspection for drainage, vibration, drum and electrical performance problems.",
    price: "From $42",
    duration: "60-100 min",
    image:
      "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=900&q=80",
  },
]

export const howItWorksSteps: StepItem[] = [
  {
    title: "Find a Service",
    description:
      "Browse repair categories and choose the service that matches your issue.",
    icon: Smartphone,
  },
  {
    title: "Send a Request",
    description:
      "Share your device or appliance details to connect with the right technician.",
    icon: TimerReset,
  },
  {
    title: "Get Your Device Repaired",
    description:
      "A verified professional arrives, diagnoses the issue and completes the repair.",
    icon: Wrench,
  },
  {
    title: "Pay After Completion",
    description:
      "Review the work and pay only after the service is successfully completed.",
    icon: CreditCard,
  },
]

export const whyChooseFeatures: FeatureItem[] = [
  {
    title: "Verified Professionals",
    description:
      "Every technician is screened so you can book with confidence and safety.",
    icon: BadgeCheck,
  },
  {
    title: "Transparent Pricing",
    description:
      "Clear estimates and upfront service details help you avoid surprises.",
    icon: ShieldCheck,
  },
  {
    title: "Real-time Job Tracking",
    description:
      "Stay informed from request to completion with clear service progress updates.",
    icon: TimerReset,
  },
  {
    title: "Secure Payments",
    description:
      "A trusted payment flow designed to keep your transaction smooth and protected.",
    icon: CreditCard,
  },
  {
    title: "Pay After Completion",
    description:
      "Only release payment once the repair is done to your satisfaction.",
    icon: Sparkles,
  },
]

export const testimonials: TestimonialItem[] = [
  {
    name: "Amina Rahman",
    role: "Homeowner",
    location: "Dhaka",
    rating: 5,
    review:
      "The technician arrived on time, explained the issue clearly, and fixed my washing machine the same day. The whole experience felt premium and stress-free.",
    initials: "AR",
  },
  {
    name: "Daniel Cooper",
    role: "Remote Worker",
    location: "Austin, TX",
    rating: 5,
    review:
      "I booked a laptop tune-up and loved the transparent pricing. Paying after completion made me feel much more comfortable using the service.",
    initials: "DC",
  },
  {
    name: "Sofia Mendes",
    role: "Apartment Resident",
    location: "Miami, FL",
    rating: 4,
    review:
      "FixMate matched me with a verified AC technician quickly. The communication, professionalism, and final repair quality were excellent.",
    initials: "SM",
  },
]
