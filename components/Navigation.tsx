'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const services = [
  { label: 'Osteopatia', href: '/osteopata-saronno' },
  { label: 'Pavimento Pelvico', href: '/riabilitazione-pavimento-pelvico-saronno' },
  { label: 'Psicoterapia', href: '/psicoterapeuta-saronno' },
  { label: 'Logopedia', href: '/logopedista-saronno' },
  { label: 'Ortopedia', href: '/ortopedico-saronno' },
  { label: 'Ecografia', href: '/ecografia-saronno' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-luxury ${
          scrolled
            ? 'bg-crema/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(201,187,159,0.4)]'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Clinica S. Egidio"
              width={140}
              height={56}
              className={`h-10 w-auto object-contain transition-all duration-500 ${
                scrolled ? 'opacity-100' : 'opacity-90 brightness-0'
              }`}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-10">
            <li>
              <Link
                href="/#clinica"
                className={`font-sans text-xs tracking-widest uppercase transition-colors duration-300 ${
                  scrolled ? 'text-stone-700 hover:text-smeraldo' : 'text-crema/80 hover:text-crema'
                }`}
              >
                La Clinica
              </Link>
            </li>
            <li className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <button
                className={`font-sans text-xs tracking-widest uppercase transition-colors duration-300 flex items-center gap-1 ${
                  scrolled ? 'text-stone-700 hover:text-smeraldo' : 'text-crema/80 hover:text-crema'
                }`}
              >
                Servizi
                <svg className="w-3 h-3 mt-px" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.25 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-60 bg-crema border border-sabbia/40 shadow-[0_20px_60px_rgba(29,61,47,0.12)] py-3"
                  >
                    {services.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="block px-6 py-3 font-sans text-xs tracking-wider uppercase text-stone-600 hover:text-smeraldo hover:bg-travertino transition-colors duration-200"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
            <li>
              <Link
                href="/#team"
                className={`font-sans text-xs tracking-widest uppercase transition-colors duration-300 ${
                  scrolled ? 'text-stone-700 hover:text-smeraldo' : 'text-crema/80 hover:text-crema'
                }`}
              >
                Il Team
              </Link>
            </li>
            <li>
              <Link
                href="/#approfondimenti"
                className={`font-sans text-xs tracking-widest uppercase transition-colors duration-300 ${
                  scrolled ? 'text-stone-700 hover:text-smeraldo' : 'text-crema/80 hover:text-crema'
                }`}
              >
                Approfondimenti
              </Link>
            </li>
          </ul>

          {/* CTA */}
          <div className="hidden lg:block">
            <a
              href="#prenota"
              className={`font-sans text-xs tracking-ultra uppercase px-6 py-3 transition-all duration-500 ease-luxury ${
                scrolled
                  ? 'bg-smeraldo text-crema hover:bg-smeraldo-dark'
                  : 'bg-crema/10 border border-crema/40 text-crema hover:bg-crema hover:text-smeraldo'
              }`}
            >
              Prenota
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <span className={`block w-6 h-px transition-all duration-300 ${scrolled ? 'bg-smeraldo' : 'bg-crema'} ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-px transition-all duration-300 ${scrolled ? 'bg-smeraldo' : 'bg-crema'} ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-px transition-all duration-300 ${scrolled ? 'bg-smeraldo' : 'bg-crema'} ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-40 bg-smeraldo flex flex-col"
          >
            <div className="flex items-center justify-between px-6 h-20">
              <Image src="/images/logo.png" alt="Clinica S. Egidio" width={120} height={48} className="h-9 w-auto brightness-0 invert" />
              <button onClick={() => setMenuOpen(false)} className="text-crema p-2" aria-label="Chiudi">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-1 flex flex-col justify-center px-10 gap-8">
              {[
                { label: 'La Clinica', href: '/#clinica' },
                ...services,
                { label: 'Il Team', href: '/#team' },
                { label: 'Approfondimenti', href: '/#approfondimenti' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-serif text-2xl text-crema/80 hover:text-crema transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="#prenota"
                onClick={() => setMenuOpen(false)}
                className="mt-4 btn-outline-light self-start"
              >
                Prenota una visita
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
