'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background render */}
      <Image
        src="/images/reception-1.png"
        alt="Reception Clinica S. Egidio – Saronno"
        fill
        className="object-cover object-center"
        priority
        quality={90}
      />

      {/* Travertine overlay */}
      <div className="absolute inset-0 bg-travertino/75" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/20" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6 max-w-5xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-10"
        >
          <Image
            src="/images/logo.png"
            alt="Clinica S. Egidio"
            width={280}
            height={112}
            className="mx-auto h-16 md:h-20 lg:h-24 w-auto object-contain"
            priority
          />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-serif text-display text-smeraldo mb-8"
        >
          A cura della salute.
        </motion.h1>

        {/* Subtext */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="space-y-1 mb-12"
        >
          <p className="font-serif italic text-xl md:text-2xl text-stone-600">Ogni persona ha una storia.</p>
          <p className="font-serif italic text-xl md:text-2xl text-stone-600">Ogni sintomo ha un contesto.</p>
          <p className="font-serif italic text-xl md:text-2xl text-stone-600">Ogni percorso merita attenzione.</p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a href="#prenota" className="btn-primary">
            Prenota una visita
          </a>
          <a href="#clinica" className="btn-secondary">
            Scopri la Clinica
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="font-sans text-[10px] tracking-ultra uppercase text-smeraldo/50">Scorri</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-smeraldo/40 to-transparent"
        />
      </motion.div>
    </section>
  )
}
