"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { AiOutlineCloudDownload } from "react-icons/ai"
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri"
import { FiSun, FiMoon } from "react-icons/fi"
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#skills", label: "Skills" },
    { href: "/#projects", label: "Projects" },
    { href: "/#contact", label: "Contact" },
    { href: "/reviews", label: "Review", target: "_blank"},
    { href: "/admin", label: "Admin", isHighlighted: true },
  ]

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center max-w-7xl">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 overflow-hidden rounded-xl">
               <Image
                src="/assests/pictures/logo.png"
                alt='Logo'
                fill
                className='object-cover group-hover:scale-110 transition-transform duration-300'
              />
            </div>
            <span className="text-xl font-bold tracking-tight group-hover:text-primary/80 transition-colors">
              Abdul Rafay<span className="text-yellow-500">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.slice(0, -1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                target={item.target}
                className="text-sm font-medium hover:text-yellow-500 transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-full hover:bg-secondary transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <FiSun className="text-xl text-yellow-500" />
                ) : (
                  <FiMoon className="text-xl text-slate-700" />
                )}
              </button>
            )}

             <a href="/assests/CV/my-cv.pdf" target='_blank' className="hidden sm:block">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full font-medium text-sm hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
              >
                <span>Resume</span>
                <AiOutlineCloudDownload className="text-lg" />
              </motion.button>
            </a>

            {/* Mobile Toggle */}
            <button
              onClick={() => setNav(true)}
              className="md:hidden p-2 text-2xl hover:text-yellow-500 transition-colors"
            >
              <RiMenu3Fill />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {nav && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setNav(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden"
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-[280px] bg-background border-l border-border z-50 md:hidden p-6 shadow-2xl"
            >
              <div className="flex justify-between items-center mb-8">
                <span className="text-lg font-bold">Menu</span>
                <button
                  onClick={() => setNav(false)}
                  className="p-2 hover:bg-secondary rounded-full transition-colors"
                >
                  <RiCloseFill className="text-2xl" />
                </button>
              </div>

              <div className="flex flex-col gap-4">
                {menuItems.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setNav(false)}
                      className={`block px-4 py-3 rounded-xl transition-all ${
                        item.isHighlighted
                          ? 'bg-primary text-primary-foreground font-semibold'
                          : 'hover:bg-secondary font-medium'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-4 pt-4 border-t border-border"
                >
                  <a href="/assests/CV/my-cv.pdf" target='_blank' className="block">
                     <button className="w-full flex justify-center items-center gap-2 bg-yellow-500 text-white px-4 py-3 rounded-xl font-bold hover:bg-yellow-600 transition-colors shadow-md">
                        Download CV
                        <AiOutlineCloudDownload className="text-xl" />
                     </button>
                  </a>
                </motion.div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar