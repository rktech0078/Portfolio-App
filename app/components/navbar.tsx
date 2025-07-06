"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { AiOutlineCloudDownload } from "react-icons/ai"
import { RiMenu3Fill  } from "react-icons/ri"
import { FiSettings, FiSun, FiMoon } from "react-icons/fi"
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // After mounting, we can show the theme toggle
  useEffect(() => setMounted(true), [])

  function showNav() {
    setNav(!nav)
  }

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  const menuItemVariants = {
    closed: { x: -20, opacity: 0 },
    open: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
      },
    }),
  };

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#skills", label: "Skills" },
    { href: "/#projects", label: "Projects" },
    { href: "/#contact", label: "Contact" },
    { href: "/reviews", label: "Review", target: "_blank"},
    { href: "/admin", label: "Admin", isHighlighted: true },
  ];

  return (
    <div className={`${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-600'} z-50 sticky top-0 transition-all duration-300 ${scrolled ? 'shadow-md' : ''}`}>
      <header className="body-font">
        <div className="container mx-auto flex flex-wrap p-2 justify-between items-center">
          <Link href={"#/"} className="flex title-font font-medium items-center mb-4 md:mb-0">
            <Image
              src={require("../../public/assests/pictures/logo.png")}
              alt='Logo'
              width={100}
              height={100}
              className='w-[50px] hover:animate-rotate-y'
            />
            <span className={`ml-3 text-xl hover:text-[#ffc107] font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              My Portfolio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="md:ml-auto md:mr-auto flex-wrap items-center text-base justify-center space-x-10 hidden md:flex">
            {menuItems.slice(0, -1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-[#ffc107] font-bold hover:underline text-shadow hover:text-shadow-lg transition duration-300"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            {mounted && (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <FiSun className="text-2xl text-yellow-400" />
                ) : (
                  <FiMoon className="text-2xl text-gray-600" />
                )}
              </motion.button>
            )}

            {/* Admin Link - Desktop */}
            <Link
              href="/admin"
              className="hidden md:flex items-center text-gray-600 dark:text-gray-300 hover:text-[#ffc107] dark:hover:text-[#ffc107]"
            >
              <FiSettings className="text-xl mr-1" />
              <span className="font-medium">Admin</span>
            </Link>

            {/* CV Download Button */}
            <a href="/assests/CV/my-cv.pdf" target='_blank' className="hidden sm:block">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-[#ffc107] border-0 py-1 px-3 focus:outline-none rounded-xl text-base font-bold text-white shadow-md hover:shadow-xl transition-all duration-300"
              >
                Download CV
                <AiOutlineCloudDownload className='text-[23px] ml-2 text-white font-bold' />
              </motion.button>
            </a>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={showNav}
              className="text-3xl md:hidden cursor-pointer"
            >
              <RiMenu3Fill  className="hover:text-[#ffc107] transition-colors" />
            </motion.button>
          </div>
        </div>
        <div className='w-full h-[2px] bg-[#ffc107]'></div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {nav && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setNav(false)}
              className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            />
            <motion.nav
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed right-0 top-0 bottom-0 w-[250px] bg-white dark:bg-gray-900 z-50 md:hidden shadow-xl"
            >
              <div className="p-5">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-xl font-bold text-gray-800 dark:text-white">Menu</h2>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setNav(false)}
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </div>

                <div className="space-y-4">
                  {menuItems.map((item, i) => (
                    <motion.div
                      key={item.href}
                      custom={i}
                      variants={menuItemVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                    >
                      <Link
                        href={item.href}
                        onClick={() => setNav(false)}
                        className={`block py-2 px-4 rounded-lg transition-colors ${
                          item.isHighlighted
                            ? 'text-[#ffc107] font-semibold'
                            : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                        }`}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}

                  {/* Mobile CV Download */}
                  <motion.div
                    variants={menuItemVariants}
                    custom={menuItems.length}
                    className="pt-4"
                  >
                    <a href="/assests/CV/my-cv.pdf" target='_blank' className="block">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full inline-flex justify-center items-center bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-[#ffc107] border-0 py-2 px-3 focus:outline-none rounded-xl text-base font-bold text-white shadow-md hover:shadow-xl transition-all duration-300"
                      >
                        Download CV
                        <AiOutlineCloudDownload className='text-[23px] ml-2 text-white font-bold' />
                      </motion.button>
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Navbar