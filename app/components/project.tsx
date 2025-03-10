'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { getProjects } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
import { motion, AnimatePresence } from 'framer-motion'

type Project = {
  _id: string;
  title: string;
  subtitle: string;
  description: string;
  projectLink: string;
  image: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
  tags: string[];
  displayOrder?: number;
}

const Project = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const sanityProjects = await getProjects();
        
        // Sort projects by display order
        const sortedProjects = sanityProjects.sort((a: Project, b: Project) => {
          // If both have display order, compare them
          if (a.displayOrder && b.displayOrder) {
            return a.displayOrder - b.displayOrder;
          }
          // If only one has display order, prioritize it
          if (a.displayOrder) return -1;
          if (b.displayOrder) return 1;
          // If neither has display order, maintain their relative position
          return 0;
        });

        setProjects(sortedProjects);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setProjects([]);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <div id='projects'>
      <section className="text-gray-600 dark:text-gray-300 body-font">
        <div className="container px-5 py-24 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col text-center w-full mb-20"
          >
            <h1 className="sm:text-5xl text-5xl font-bold title-font mb-4 text-gray-900 dark:text-white">
              My Portfolio Projects
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base dark:text-gray-300">
              ChatGPT said that: A project is the bridge between vision and reality, built one step at a time with passion, precision, and purpose.
            </p>
          </motion.div>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#ffc107]"></div>
            </div>
          ) : (
            <>
              <div className="flex flex-wrap -m-4">
                <AnimatePresence>
                  {displayedProjects.map((project, index) => (
                    <motion.div 
                      key={project._id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="lg:w-1/3 sm:w-1/2 p-4"
                    >
                      <div className="h-full border-2 border-gray-200 border-opacity-60 dark:border-gray-700 dark:border-opacity-75 rounded-lg overflow-hidden shadow-md hover:shadow-xl dark:shadow-gray-900 dark:bg-gray-800 dark:border-gray-700 transition-all duration-300 hover:-translate-y-1">
                        <div className="relative h-48 overflow-hidden">
                          {project.image && (
                            typeof project.image === 'string' ? (
                              <Image
                                alt={project.title}
                                className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                                src={project.image}
                                width={500}
                                height={300}
                              />
                            ) : (
                              <Image
                                alt={project.title}
                                className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                                src={urlForImage(project.image).url()}
                                width={500}
                                height={300}
                              />
                            )
                          )}
                          <div className="absolute top-0 right-0 bg-[#ffc107] text-white px-2 py-1 m-2 rounded-md text-xs font-bold">
                            Project
                          </div>
                        </div>
                        <div className="p-6">
                          <h2 className="tracking-widest text-xs title-font font-medium text-[#ffc107] mb-1 uppercase">
                            {project.subtitle}
                          </h2>
                          <h1 className="title-font text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 hover:text-[#ffc107] dark:hover:text-[#ffc107] transition-colors duration-300">
                            {project.title}
                          </h1>
                          <p className="leading-relaxed mb-3 text-gray-700 dark:text-gray-300 line-clamp-3">
                            {project.description}
                          </p>
                          
                          {project.tags && project.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-3 mb-3">
                              {project.tags.map((tag, index) => (
                                <span 
                                  key={index} 
                                  className="text-xs inline-block py-1 px-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                                >
                                  #{tag}
                                </span>
                              ))}
                            </div>
                          )}
                          
                          <div className="flex items-center flex-wrap mt-auto pt-3 border-t border-gray-200 dark:border-gray-700">
                            <Link href={project.projectLink} target='_blank' className="text-[#ffc107] inline-flex items-center md:mb-2 lg:mb-0 group">
                              View Project
                              <svg className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {projects.length > 3 && (
                <motion.div 
                  className="flex justify-center mt-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <button
                    onClick={() => setShowAll(!showAll)}
                    className="group relative inline-flex items-center justify-center px-8 py-3 font-bold text-white transition-all duration-300 ease-in-out bg-[#ffc107] rounded-full hover:bg-[#ffcd38] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ffc107]"
                  >
                    <span className="relative">
                      {showAll ? 'View Less' : 'View All'}
                      <motion.span
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform origin-left"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </span>
                    <motion.svg
                      className="w-5 h-5 ml-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      animate={{ rotate: showAll ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </motion.svg>
                  </button>
                </motion.div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  )
}

export default Project