'use client'
import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id='about' className="py-24 bg-background relative overflow-hidden">
            <div className="container px-4 mx-auto max-w-7xl">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col text-center w-full mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Who <span className="text-yellow-500">I Am</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        My journey from a curious student to a full-stack developer and AI engineer.
                    </p>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <div className="prose prose-lg dark:prose-invert text-muted-foreground leading-relaxed">
                            <p className="mb-4">
                                <span className="text-foreground font-semibold">Educational Journey:</span><br />
                                I completed my matriculation in Biology from Al-Ghazali High School and Hifz-e-Quran from Mahad Usman bin Affan (RZ). Currently, I am pursuing my Intermediate in Pre-Engineering at D.J. Sindh Government Science College.
                            </p>
                            <p className="mb-4">
                                <span className="text-foreground font-semibold">Professional Development:</span><br />
                                I have honed my skills through the Governor Sindh Initiative, focusing on GenAI, Web3, and the Metaverse. My passion lies in building scalable web applications and integrating cutting-edge AI solutions.
                            </p>
                        </div>

                        <div className="mt-8">
                            <Link href="/assests/CV/my-cv.pdf" target='_blank'>
                                <button className="flex items-center gap-2 px-8 py-3 bg-yellow-500 text-white font-bold rounded-full hover:bg-yellow-600 transition-colors shadow-lg hover:shadow-xl">
                                    <span>Download CV</span>
                                    <Image
                                        src="/assests/pictures/bg-remove-CV.gif"
                                        alt='CV Icon'
                                        width={24}
                                        height={24}
                                        className="w-6 h-6 invert brightness-0"
                                    />
                                </button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Cards */}
                    <div className="lg:w-1/2 grid sm:grid-cols-2 gap-6 w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-card border border-border p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow group"
                        >
                            <div className="w-14 h-14 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Image
                                    src="/assests/pictures/bg-remove-icon.gif"
                                    alt="Student"
                                    width={40}
                                    height={40}
                                    className="dark:invert"
                                />
                            </div>
                            <h3 className="text-xl font-bold mb-2">The Student</h3>
                            <p className="text-muted-foreground text-sm mb-4">
                                Constantly learning and evolving. Currently focused on engineering and advanced computer science concepts.
                            </p>
                            <Link href="https://www.linkedin.com/in/abdul-rafay-khan-2780b12b5/" target='_blank' className="text-yellow-500 font-medium flex items-center gap-2 hover:gap-3 transition-all">
                                Learn More <FaArrowRight />
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-card border border-border p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow group"
                        >
                            <div className="w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Image
                                    src="/assests/pictures/bg-remove-programmer.gif"
                                    alt="Coder"
                                    width={40}
                                    height={40}
                                    className="dark:invert"
                                />
                            </div>
                            <h3 className="text-xl font-bold mb-2">The Coder</h3>
                            <p className="text-muted-foreground text-sm mb-4">
                                Full Stack Developer & Gen AI Engineer. Building the future of the web with modern frameworks.
                            </p>
                            <Link href="https://www.linkedin.com/in/abdul-rafay-khan-2780b12b5/" target='_blank' className="text-yellow-500 font-medium flex items-center gap-2 hover:gap-3 transition-all">
                                Connect <FaArrowRight />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About