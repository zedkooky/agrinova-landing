"use client"

import { motion } from "framer-motion"
import { User, Mic, Satellite, Leaf, Smartphone, MessageCircle } from "lucide-react"

const features = [
  {
    icon: MessageCircle,
    title: "WhatsApp Onboarding",
    description:
      "Sign up with a simple message or voice note. No app downloads, no complex forms - just send a WhatsApp message and you're ready to go.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Mic,
    title: "AI Voice Assistant",
    description:
      "Our multilingual AI can call you directly to guide through onboarding and provide personalized farming advice in your local language.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Satellite,
    title: "Satellite Insights",
    description:
      "Receive real-time updates on crop health (NDVI), rainfall predictions, soil moisture, and optimal planting times via voice or WhatsApp.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: User,
    title: "Smart Farmer Profiles",
    description:
      "We create comprehensive farmer profiles from your voice inputs - crop types, land size, water access, and fertilizer usage patterns.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Leaf,
    title: "Carbon Credit Program",
    description:
      "Earn extra income through sustainable farming practices. We guide you through the Toucan Protocol carbon credit process via WhatsApp.",
    gradient: "from-teal-500 to-green-500",
  },
  {
    icon: Smartphone,
    title: "Multi-Channel Access",
    description:
      "Access through WhatsApp, voice calls, or our web dashboard. Choose the method that works best for you and your connectivity.",
    gradient: "from-indigo-500 to-purple-500",
  },
]

export function FeaturesSection() {
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
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <section id="features" className="py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4 dark:bg-green-900/30 dark:text-green-300"
          >
            ⚡ Powerful Features
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Everything You Need to Succeed
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            AgriNova brings cutting-edge agricultural technology directly to your phone, breaking down barriers and
            empowering farmers worldwide.
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants} className="group relative">
              <div className="relative h-full p-8 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.gradient} mb-6`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
