'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";
import { useTheme } from 'next-themes';

const Footer = () => {
    // Remove unused theme variable
    // const { theme } = useTheme();
    
    return (
        <div className='bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800'>
            <footer className="text-gray-600 dark:text-gray-400 body-font">
                <div
                    className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col"
                >
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 dark:text-white">
                        <Image
                            src={require("../../public/assests/pictures/logo2.png")}        
                            alt='Logo'
                            width={100}
                            height={100}
                            className='w-[100px] hover:animate-rotate-x'
                        />
                        <span className="ml-3 text-xl text-gray-900 dark:text-white hover:text-[#ffc107] dark:hover:text-[#ffc107] transition-colors">Abdul Rafay Khan</span>
                    </a>
                    <p className="text-sm text-gray-700 dark:text-gray-400 hover:text-[#ffc107] dark:hover:text-[#ffc107] sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-300 dark:sm:border-gray-700 sm:py-2 sm:mt-0 mt-4 transition-colors">
                        © 2024. All right reserved <br/>
                        Designed by: Abdul Rafay Khan
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <Link href={"https://www.facebook.com/profile.php?id=100051895934107"} target='_blank' className="text-gray-500 dark:text-gray-400 hover:text-[#1877F2] transition-colors">
                            <FaFacebook className='w-6 h-6' />
                        </Link>
                        <Link href={'https://github.com/rktech0078'} target='_blank' className="ml-3 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                            <FaGithub className='w-6 h-6' />
                        </Link>
                        <Link href={"https://www.linkedin.com/in/abdul-rafay-khan-2780b12b5/"} target='_target' className="ml-3 text-gray-500 dark:text-gray-400 hover:text-[#0A66C2] transition-colors">
                            <FaLinkedin className='w-6 h-6' />
                        </Link>
                        <Link href={'https://www.youtube.com/@RKTECH-hf6yz'} target='_' className="ml-3 text-gray-500 dark:text-gray-400 hover:text-[#FF0000] transition-colors">
                            <FaYoutube className='w-6 h-6' />
                        </Link>
                        <Link href={'https://www.fiverr.com/sellers/rafay0078/edit'} target='_' className="ml-3 text-gray-500 dark:text-gray-400 hover:text-[#1DBF73] transition-colors">
                            <TbBrandFiverr className='w-6 h-6' />
                        </Link>
                    </span>
                </div>
            </footer>
        </div>
    )
}

export default Footer
