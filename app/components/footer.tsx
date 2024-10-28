import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";




const Footer = () => {
    return (
        <div className='bg-white'>
            <footer className="text-gray-600 body-font">
                <div
                    className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col "
                >
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <Image
                            src={require("../../public/assests/pictures/logo2.png")}        
                            alt='Logo'
                            width={100}
                            height={100}
                            className='w-[100px] hover:animate-rotate-x'
                        />
                        <span className="ml-3 text-xl hover:text-[#ffc107]">Abdul Rafay Khan</span>
                    </a>
                    <p className="text-sm text-gray-900 hover:text-[#ffc107]  sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-300 sm:py-2 sm:mt-0 mt-4">
                        © 2024. All right reserved <br/>
                        Designed by: Abdul Rafay Khan
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <Link href={"https://www.facebook.com/profile.php?id=100051895934107"} target='_blank' className="text-gray-500">
                            <FaFacebook className='w-6 h-6 hover:text-[#1877F2]' />
                        </Link>
                        <Link href={'https://github.com/rktech0078'} target='_blank' className="ml-3 text-gray-500">
                            <FaGithub className='w-6 h-6 hover:text-[#a956d0]' />
                        </Link>
                        <Link href={"https://www.linkedin.com/in/abdul-rafay-khan-2780b12b5/"} target='_target' className="ml-3 text-gray-500">
                            <FaLinkedin className='w-6 h-6 hover:text-[#0A66C2]' />
                        </Link>
                        <Link href={'https://www.youtube.com/@RKTECH-hf6yz'} target='_' className="ml-3 text-gray-500">
                            <FaYoutube className='w-6 h-6 hover:text-[#FF0000]' />
                        </Link>
                
                    </span>
                </div>
            </footer>

        </div>
    )
}

export default Footer