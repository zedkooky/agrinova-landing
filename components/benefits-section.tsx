"use client"

import { motion } from "framer-motion"

const benefits = [
  {
    feature: "WhatsApp Onboarding",
    benefit: "Farmers can sign up via a simple text or voice note, making it incredibly easy to get started.",
  },
  {
    feature: "AI Voice Assistant",
    benefit:
      "Our AI can call farmers to guide onboarding and profile creation, ensuring a smooth, personalized experience.",
  },
  {
    feature: "Multilingual Voice",
    benefit:
      "No literacy barriers — farmers can speak in their local language, and our system understands and responds.",
  },
  {
    feature: "Satellite Insights",
    benefit:
      "Receive visual and voice-summarized updates on crop health, rainfall, and soil conditions directly to your phone.",
  },
  {
    feature: "Carbon Markets",
    benefit:
      "Farmers earn more by practicing sustainability, with guidance and status updates sent through their preferred channel.",
  },
]

export function BenefitsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/organized-fields.jpg)" }}
      />
      <div className="relative z-10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 dark:text-gray-50">
              {"💡 Why AgriNova?"}
            </h2>
            <p className="max-w-[900px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-300">
              AgriNova is designed to empower rural farmers with accessible, impactful technology.
            </p>
          </div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {benefits.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-xl font-semibold text-green-700 dark:text-green-300 mb-2">{item.feature}</h3>
                <p className="text-gray-700 dark:text-gray-300">{item.benefit}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center text-gray-700 dark:text-gray-300 md:text-xl/relaxed"
          >
            <ul className="list-disc list-inside space-y-2 max-w-2xl mx-auto">
              <li>
                <span className="font-semibold">Easy to Use:</span> No apps, no forms. Just voice or WhatsApp.
              </li>
              <li>
                <span className="font-semibold">Data-Driven:</span> Powered by satellite, verified by AI.
              </li>
              <li>
                <span className="font-semibold">Local:</span> Supports local languages and offline onboarding.
              </li>
              <li>
                <span className="font-semibold">Proven:</span> Increases yields, improves sustainability, and opens
                access to global markets.
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
