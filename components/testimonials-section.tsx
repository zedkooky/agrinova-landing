"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

const testimonials = [
  {
    quote: "I signed up with a voice note and got a planting tip two days later. My harvest doubled!",
    author: "Juma, Zambia",
  },
  {
    quote: "I didn’t need a smartphone. I just answered a call, and they helped me track my crops.",
    author: "Grace, Malawi",
  },
  {
    quote:
      "AgriNova has transformed how we communicate with our farmers. The voice-first approach is a game-changer for rural communities.",
    author: "Dr. Anya Sharma, Agricultural NGO Director",
  },
]

export function TestimonialsSection() {
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
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 dark:text-gray-50">
            {"💬 Real Farmer Experiences"}
          </h2>
          <p className="max-w-[900px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-300">
            Hear directly from the farmers and partners who are thriving with AgriNova.
          </p>
        </div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md h-full flex flex-col justify-between">
                <CardContent className="p-6">
                  <p className="text-lg italic text-gray-800 dark:text-gray-200">{`"${testimonial.quote}"`}</p>
                </CardContent>
                <div className="p-6 pt-0 text-right">
                  <p className="text-sm font-semibold text-green-700 dark:text-green-300">- {testimonial.author}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
