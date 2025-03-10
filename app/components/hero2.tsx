"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowUpRightFromSquare } from "react-icons/fa6"
import Typewriter from 'typewriter-effect'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Lumiflex   } from "uvcanvas"
// Lumiflex , Novatrix, Zenitho, Velustro, Tranquiluxe, Opulento, Xenon


const Hero2 = () => {
  const { theme } = useTheme()

  return (
    <div id='home' className={`relative min-h-screen w-full overflow-hidden ${theme === 'dark' ? 'bg-gray-900' : 'bg-[#f5f5f5]'} -mt-14`}>
      {/* UV Canvas Background */}
      <div className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
        <Lumiflex  />
      </div>

      <section className="relative text-gray-600 dark:text-gray-300 body-font w-full">
        <div className="container mx-auto flex px-4 py-24 md:flex-row flex-col items-center max-w-6xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0"
          >
            <Image
              className="object-cover object-center rounded w-full h-auto"
              alt="hero"
              src="/assests/pictures/heroIMG.webp"
              width={600}
              height={400}
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:flex-grow md:w-[50%] lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center relative z-10"
          >
            <h1 className={`title-font sm:text-5xl text-5xl mb-4 font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Hey there, I am 
              <br className="lg:inline-block" />
              <Typewriter
                options={{
                  strings: ['Abdul Rafay Khan', 'Web Developer', 'UI/UX Designer', 'Gen AI Engineer'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "140px" }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className='h-[2px] bg-[#ffc107] mb-1'
            />

            <p className="mb-8 leading-relaxed">
              I am a generative AI engineer at Governor Sindh Initiative for GenAI, Web3, and Metaverse, 
              where I create innovative and immersive solutions for the digital economy. 
              Alongside a team of talented and passionate engineers, researchers, and designers.
            </p>

            <div className="flex justify-center">
              <Link href={"https://www.linkedin.com/in/abdul-rafay-khan-2780b12b5/"} target='_' className='font-bold'>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-purple-500 hover:to-pink-500 border-0 py-2 px-6 focus:outline-none rounded-xl text-lg shadow-md hover:shadow-xl transition-all duration-300"
                >
                  Hire Me
                  <FaArrowUpRightFromSquare className='m-1 text-[17px] ml-3'/>
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Hero2