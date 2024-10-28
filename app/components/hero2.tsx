"use client"
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { AiFillAlert } from "react-icons/ai";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Typewriter from 'typewriter-effect';


const Hero2 = () => {
  return (
    <div id='home' className='bg-[#f5f5f5] -mt-14'>
        <section className="text-gray-600 body-font">
  <div
    className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
  >
    <div
      className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0"
    >
      <Image
        className="object-cover object-center rounded"
        alt="hero"
        src={require("../../public/assests/pictures/heroIMG.webp")}
      />
    </div>
    <div
      className="lg:flex-grow md:w-[50%] lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
    >
      <h1 className="title-font sm:text-5xl text-5xl mb-4 font-bold text-gray-900">
        Hey there, I am 
        <br className="lg:inline-block" />
        <Typewriter
        options={{
        strings: ['Abdul Rafay Khan', 'Web Developer','UI/UX Designer','Gen AI Engineer'],
        autoStart: true,
        loop: true,
  }}
/>
      </h1>

        <div className='w-[140px] h-[2px] bg-[#ffc107] mb-1'></div>

      <p className="mb-8 leading-relaxed">
      I am a generative AI engineer at Governor Sindh Initiative for GenAI, Web3, and Metaverse, where I create innovative and immersive solutions for the digital economy. Alongside a team of talented and passionate engineers, researchers, and designers.
      </p>
      <div className="flex justify-center">

        <Link href={"https://www.linkedin.com/in/abdul-rafay-khan-2780b12b5/"} target='_' className='font-bold'>
        <button className="inline-flex text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-purple-500 hover:to-pink-500 border-0 py-2 px-6 focus:outline-none rounded-xl text-lg ">
          Hire Me
          <FaArrowUpRightFromSquare className='m-1 text-[17px] ml-3'/>
        </button>
        </Link>

        {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
          Button
        </button> */}
        
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Hero2