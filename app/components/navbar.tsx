"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineCloudDownload } from "react-icons/ai";
import {useState} from "react"
import { CgMenuGridR } from "react-icons/cg";



const Navbar = () => {

  const [nav, setNav] = useState(false)

  function showNav(){
    setNav(!nav)
  }





  return (
    <div className='bg-white bg-opacity-90 z-50 sticky top-0'>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-2 justify-between items-center">
          <Link href={"/"} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image
              src={require("../../public/assests/pictures/logo.png")}
              alt='Logo'
              width={100}
              height={100}
              className='w-[50px] hover:animate-rotate-y'
            />
            <span className="ml-3 text-xl hover:text-[#ffc107] font-bold">My Portfolio</span>
          </Link>
          <nav className="md:ml-auto md:mr-auto flex-wrap items-center text-base justify-center space-x-10 hidden sm:block">
            <Link href={"/"} className="mr-5 hover:text-[#ffc107] font-bold hover:underline text-shadow hover:text-shadow-lg transition duration-300">Home</Link>
            <Link href={"#about"} className="mr-5 hover:text-[#ffc107] font-bold hover:underline text-shadow hover:text-shadow-lg transition duration-300">About</Link>
            <Link href={"#skills"} className="mr-5 hover:text-[#ffc107] font-bold hover:underline text-shadow hover:text-shadow-lg transition duration-300">Skills</Link>
            <Link href={"#projects"} className="mr-5 hover:text-[#ffc107] font-bold hover:underline text-shadow hover:text-shadow-lg transition duration-300">Projects</Link>
            <Link href={"#contact"} className="mr-5 hover:text-[#ffc107] font-bold hover:underline text-shadow hover:text-shadow-lg transition duration-300">Contact</Link>
          </nav>

          <a href="/assests/CV/my-cv.pdf" target='_blank'>
            <button className="inline-flex items-center bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-[#ffc107] ... border-0 py-1 px-3 focus:outline-none rounded-xl text-base font-bold text-white mt-4 md:mt-0 shadow-md hover:shadow-xl transition-shadow duration-300">
              Download CV
              <AiOutlineCloudDownload className='text-[23px] ml-2 text-white font-bold ' />
            </button>
          </a>

      <CgMenuGridR className='text-5xl sm:hidden' onClick={showNav} />

        </div>
        <div className='w-full h-[2px] bg-[#ffc107]'></div>
      </header>

      <nav className={`flex justify-center items-center ${nav  ? 'block' : 'hidden'}`}>
        <ul className='bg-gray-300 m-5 w-[90%] p-5'>
          <li className='hover:bg-black hover:text-white'><Link href={""}>Home</Link></li>
          <li className='hover:bg-black hover:text-white'><Link href={""}>About</Link></li>
          <li className='hover:bg-black hover:text-white'><Link href={""}>Contact</Link></li>
          <li className='hover:bg-black hover:text-white'><Link href={""}>Services</Link></li>
        </ul>
      </nav>



    </div>
  )
}

export default Navbar