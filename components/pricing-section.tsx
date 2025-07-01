"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

const pricingTiers = [
  {
    name: "Freemium",
    price: "Free",
    features: ["Onboard up to 5 farmers via WhatsApp", "Weekly voice tips"],
    description: "Perfect for small-scale farmers getting started.",
  },
  {
    name: "Pro",
    price: "Paid",
    features: ["Unlimited farmers", "Full satellite + carbon access", "Insights dashboard", "Priority support"],
    description: "For growing co-ops and serious farmers.",
  },
  {
    name: "Enterprise",
    price: "Talk to us",
    features: [
      "Custom solutions for co-ops & government",
      "Dedicated account manager",
      "Advanced API integrations",
      "On-site training",
    ],
    description: "Tailored for large organizations and agencies.",
  },
]

export function PricingSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 dark:text-gray-50">
            {"💵 Simple Pricing"}
          </h2>
          <p className="max-w-[900px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-300">
            Choose the plan that fits your needs. Onboarding available through WhatsApp, voice notes, or AI calls across
            all tiers.
          </p>
        </div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="mx-auto grid gap-8 lg:grid-cols-3 md:grid-cols-2"
        >
          {pricingTiers.map((tier, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="flex flex-col h-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-gray-900 dark:text-gray-50">{tier.name}</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400">{tier.description}</CardDescription>
                  <div className="text-4xl font-extrabold text-green-700 dark:text-green-300 mt-4">{tier.price}</div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    {tier.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-6">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white dark:bg-green-500 dark:hover:bg-green-600">
                    {tier.name === "Enterprise" ? "Contact Sales" : "Choose Plan"}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
