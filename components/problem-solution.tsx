"use client"

import { motion } from "framer-motion"
import { Mic, CheckCircle, X } from "lucide-react"

const problems = [
  "Low crop yields due to poor timing",
  "Limited access to real-time agricultural data",
  "High barriers to using modern farming apps",
  "Language and literacy gaps in rural areas",
  "Lack of personalized farming guidance",
]

const solutions = [
  "WhatsApp-based onboarding and communication",
  "AI-powered voice assistant in local languages",
  "Real-time satellite data via voice updates",
  "Personalized farming advice through voice calls",
  "Carbon credit opportunities for extra income",
]

export function ProblemSolution() {
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
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-5 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/satellite-fields.jpg)" }}
      />
      <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-800 text-sm font-medium mb-4 dark:bg-red-900/30 dark:text-red-300"
            >
              🚨 The Challenge
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            >
              From Problems to Solutions
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Problems */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
              className="space-y-6"
            >
              <div className="text-center lg:text-left mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Current Challenges</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Rural farmers across Africa face significant barriers to accessing modern agricultural technology.
                </p>
              </div>

              <div className="space-y-4">
                {problems.map((problem, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start space-x-3 p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800/30"
                  >
                    <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{problem}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Solutions */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
              className="space-y-6"
            >
              <div className="text-center lg:text-left mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">AgriNova Solutions</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We've built a voice-first platform that removes barriers and empowers farmers.
                </p>
              </div>

              <div className="space-y-4">
                {solutions.map((solution, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start space-x-3 p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800/30"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{solution}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* WhatsApp Demo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 max-w-2xl mx-auto"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
                See How Easy It Is
              </h4>
              <div className="space-y-3">
                <div className="flex justify-start">
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg max-w-xs">
                    <p className="text-sm text-gray-800 dark:text-gray-200">
                      Hi, I want to learn about farming tips for maize
                    </p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-green-500 p-3 rounded-lg max-w-xs">
                    <p className="text-sm text-white">
                      Great! I can help you with that. What's your location and current crop stage?
                    </p>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg max-w-xs flex items-center space-x-2">
                    <Mic className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    <p className="text-sm text-gray-800 dark:text-gray-200">
                      Voice message: "I'm in Lusaka, just planted last week"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
