"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { VideoModal } from "@/components/video-modal"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Play } from "lucide-react"

const backgroundImages = [
  "/images/rice-terraces.jpg",
  "/images/crop-rows.jpg",
  "/images/organized-fields.jpg",
  "/images/aerial-forest.jpg",
  "/images/wetlands.jpg",
  "/images/river-landscape.jpg",
]

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  // Auto-rotate background images
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length)
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image Carousel */}
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
              }}
            />
          </AnimatePresence>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-transparent to-emerald-900/20" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-8 border border-white/20"
            >
              <span className="mr-2">🌾</span>
              WhatsApp-Enabled, Voice-First Agricultural Technology
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6"
            >
              Welcome To
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                AgriNova!
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl sm:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Precision Agriculture with Voice-First Simplicity — Onboard Instantly via WhatsApp. No apps, no literacy
              barriers, just speak your language.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
              <WhatsAppButton />
              <Button
                onClick={() => setIsVideoOpen(true)}
                variant="outline"
                size="lg"
                className="group border-2 border-white/30 hover:border-white hover:bg-white/10 backdrop-blur-sm text-white hover:text-white bg-transparent"
              >
                <Play className="w-5 h-5 mr-2 group-hover:text-white" />
                Watch Demo
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-white">10K+</div>
                <div className="text-sm text-white/70">Farmers Onboarded</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">5+</div>
                <div className="text-sm text-white/70">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">40%</div>
                <div className="text-sm text-white/70">Yield Increase</div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="w-1 h-3 bg-white/50 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
    </>
  )
}
