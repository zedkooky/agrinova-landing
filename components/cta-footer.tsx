"use client"

import { Button } from "@/components/ui/button"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { motion } from "framer-motion"

export function CtaFooter() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950 dark:to-emerald-900 text-center">
      <div className="container px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-gray-50"
        >
          {"📲 Let’s Get Started"}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto max-w-[700px] text-gray-700 md:text-xl dark:text-gray-300 mt-4"
        >
          {"“Don’t have an app? No problem.”"}
          <br />
          Message us or send a voice note now.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 mt-8 justify-center"
        >
          <WhatsAppButton />
          <Button
            variant="outline"
            size="lg"
            className="text-green-700 border-green-700 hover:bg-green-100 dark:text-green-300 dark:border-green-300 dark:hover:bg-green-900 bg-transparent"
          >
            📞 Request a Demo
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-green-700 border-green-700 hover:bg-green-100 dark:text-green-300 dark:border-green-300 dark:hover:bg-green-900 bg-transparent"
          >
            📘 Learn More
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
