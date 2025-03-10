'use client'
import React from 'react'
// import { VscAccount } from "react-icons/vsc";
// import { FaLaptopCode } from "react-icons/fa6";
import { FaArrowRightFromBracket } from "react-icons/fa6";
// import { FaReact } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';
// import { useTheme } from 'next-themes';

const About = () => {
    // Remove unused theme variable
    // const { theme } = useTheme();
    
    return (
        <div id='about'>
            <section className="text-gray-600 dark:text-gray-300 body-font -mb-24 -mt-14">
                <div className="container px-5 py-24 mx-auto" >

                    <h1 className="flex-grow sm:pr-16 text-6xl font-bold title-font mb-4 text-gray-900 dark:text-white text-center m-10 mb-12">
                        About Me
                    </h1>

                    <div
                        className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto"
                    >

                        <p className='text-gray-500 dark:text-gray-400 ml-10 '>
                            Matric in science (Biology)
                            from Al-Ghazali High School. <br />
                            Hifz-e-Quran From Mahad
                            Usman bin Affan .
                            (RZ) <br />
                            Inter in Pre-Engineering from
                            D.J science College. <br />
                            Graphic Designing and Digital Literacy course
                            from Virtual University. <br />
                            AI, Metaverse, Web 3.0 and
                            block chain courses from
                            Governor Sindh Initiative
                            Onsite (I am doing it now).
                        </p>

                        <Link href={"/assests/CV/my-cv.pdf"} target='_blank'>
                            <button className="inline-flex items-center bg-[#ffc107] hover:bg-black dark:hover:bg-gray-700 border-0 py-1 px-3 focus:outline-none rounded-xl font-bold text-white md:mt-0 text-lg m-16 mt-20 shadow-xl hover:shadow-2xl transition-shadow duration-500">
                                <span className='mr-2'>View CV</span>
                                <Image
                                src={require("../../public/assests/pictures/bg-remove-CV.gif")}
                                alt='CV'
                                className='w-28'/>
                                {/* <VscAccount className='w-14 h-6' /> */}
                            </button>
                        </Link>
                    </div>
                </div>
            </section>



            <section className="text-gray-600 dark:text-gray-300 body-font">
                <div
                    className="container px-5 py-24 mx-auto flex flex-wrap"
                >
                    <div className="flex flex-wrap -m-4" >
                        <div className="p-4 lg:w-1/2 md:w-full" >
                            <div
                                className="bg-slate-100 dark:bg-gray-800 flex border-2 rounded-lg cursor-pointer border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 border-opacity-50 p-8 sm:flex-row flex-col shadow-md hover:shadow-xl dark:shadow-gray-900 transition-shadow duration-300"
                            >
                                <div
                                    className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-yellow-100 dark:bg-yellow-900 text-yellow-500 flex-shrink-0 "
                                >
                                    {/* <FaLaptopCode className='text-4xl'/> */}
                                    <Image src={require("../../public/assests/pictures/bg-remove-icon.gif")}
                                        alt="Animation"
                                        className="w-16" />

                                </div>
                                <div className="flex-grow" >
                                    <h2 className="text-gray-900 dark:text-gray-100 text-lg title-font font-medium mb-3">
                                        Abdul Rafay Khan
                                    </h2>
                                    <p className="leading-relaxed text-base line-clamp-2 hover:line-clamp-6 text-gray-700 dark:text-gray-300">
                                        Currently pursuing my intermediate degree in engineering at D. J. Sindh Government Science College, and I have completed my matriculation in science at Al Ghazali High School.
                                    </p>
                                    <a className="mt-3 text-yellow-500 inline-flex items-center cursor-pointer hover:text-black dark:hover:text-white hover:font-semibold" href='https://www.linkedin.com/in/abdul-rafay-khan-2780b12b5/' target='_blank'>
                                        Learn More
                                        <FaArrowRightFromBracket className='ml-3' />

                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/2 md:w-full w-full" >
                            <div
                                className="bg-slate-100 dark:bg-gray-800 flex border-2 rounded-lg border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 cursor-pointer border-opacity-50 p-8 sm:flex-row flex-col shadow-md hover:shadow-xl transition-shadow duration-300"
                            >
                                <div
                                    className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-yellow-100 dark:bg-yellow-900 text-yellow-500 flex-shrink-0"
                                >
                                    {/* <FaReact className='text-4xl font-bold' /> */}
                                    <Image src={require("../../public/assests/pictures/bg-remove-programmer.gif")}
                                    alt='Programmer'
                                    className='w-14'/>

                                </div>
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 dark:text-white text-lg title-font font-medium mb-3">
                                        The Coder
                                    </h2>
                                    <p className="leading-relaxed text-base line-clamp-2 hover:line-clamp-6 dark:text-gray-300">
                                        A pasionate UI/UX Designer <br />
                                        Full Stack Developer <br />
                                        Gen AI Engineer
                                    </p>
                                    <a className="mt-3 text-yellow-500 inline-flex items-center cursor-pointer hover:text-black dark:hover:text-white hover:font-semibold" href='https://www.linkedin.com/in/abdul-rafay-khan-2780b12b5/' target='_blank'>
                                        Learn More
                                        <FaArrowRightFromBracket className='ml-3' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default About