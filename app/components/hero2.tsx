"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from "react-icons/fa6"
import Typewriter from 'typewriter-effect'
import { motion } from 'framer-motion'

const Hero2 = () => {
  // const { theme } = useTheme()

  return (
    <section id='home' className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] dark:bg-purple-900/20" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] dark:bg-blue-900/20" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center max-w-7xl">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1 text-center md:text-left"
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-500 text-sm font-medium">
            Available for new projects
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight">
            Building the <br />
            <span className="gradient-text">Digital Future</span>
          </h1>

          <div className="text-xl md:text-2xl text-muted-foreground mb-8 h-[60px]">
            <span className="mr-2">I am a</span>
            <span className="text-foreground font-semibold">
              <Typewriter
                options={{
                  strings: ['Web Developer', 'UI/UX Designer', 'Gen AI Engineer'],
                  autoStart: true,
                  loop: true,
                  wrapperClassName: "inline-block",
                  cursorClassName: "text-yellow-500"
                }}
              />
            </span>
          </div>

          <p className="text-lg text-muted-foreground mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed">
            I craft immersive digital experiences at the intersection of creativity and technology.
            Specializing in Next.js, AI integration, and enterprise-grade UI systems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link href="#contact" className="group">
              <button className="w-full sm:w-auto px-8 py-3.5 bg-foreground text-background rounded-full font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-xl shadow-foreground/20">
                Hire Me
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>

            <Link href="#projects">
              <button className="w-full sm:w-auto px-8 py-3.5 border border-border bg-background/50 backdrop-blur-sm rounded-full font-bold hover:bg-secondary transition-all">
                View Work
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 md:order-2 relative"
        >
          <div className="relative w-full aspect-square max-w-[500px] mx-auto">
            {/* Abstract shape background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />

            <div className="relative z-10 w-full h-full rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl glass-card rotate-3 hover:rotate-0 transition-all duration-500">
              <Image
                src="/assests/pictures/heroIMG.webp"
                alt="Abdul Rafay - Developer"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>

            {/* Floating cards */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 z-20 glass p-4 rounded-2xl flex items-center gap-3 shadow-xl"
            >
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">AI</div>
              <div>
                <div className="text-xs text-muted-foreground">Certified</div>
                <div className="font-bold text-sm">AI Engineer</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
              className="absolute top-10 -right-6 z-20 glass p-4 rounded-2xl flex items-center gap-3 shadow-xl"
            >
              <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold">UI</div>
              <div>
                <div className="text-xs text-muted-foreground">Expert</div>
                <div className="font-bold text-sm">Designer</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero2
