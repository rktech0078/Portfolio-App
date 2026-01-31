'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { getProjects } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
import { motion, AnimatePresence } from 'framer-motion'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { FiExternalLink, FiGithub } from "react-icons/fi"

type Project = {
  _id: string;
  title: string;
  subtitle: string;
  description: string;
  projectLink: string;
  image: SanityImageSource;
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

        const sortedProjects = sanityProjects.sort((a: Project, b: Project) => {
          if (a.displayOrder && b.displayOrder) {
            return a.displayOrder - b.displayOrder;
          }
          if (a.displayOrder) return -1;
          if (b.displayOrder) return 1;
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
    <section id='projects' className="py-24 bg-background relative">
      <div className="container px-4 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:flex md:justify-between md:items-end"
        >
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Featured <span className="text-yellow-500">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              A collection of applications that demonstrate my ability to solve complex problems.
            </p>
          </div>

          <div className="hidden md:block">
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-sm font-bold uppercase tracking-wider hover:text-yellow-500 transition-colors"
            >
              {showAll ? 'View Less' : 'View All Projects'}
            </button>
          </div>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"></div>
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {displayedProjects.map((project, index) => (
                  <motion.div
                    key={project._id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="group h-full bg-card border border-border/50 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-yellow-500/5 transition-all duration-500 flex flex-col">
                      {/* Image Container */}
                      <div className="relative aspect-video overflow-hidden">
                        {project.image && (
                          <Image
                            alt={project.title}
                            src={urlForImage(project.image).toString()}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        )}
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                          <Link href={project.projectLink} target='_blank' className="p-3 bg-white rounded-full text-black hover:scale-110 transition-transform">
                            <FiExternalLink className="text-xl" />
                          </Link>
                          {/* Add Github link if available in schema, for now just using projectLink or placeholder */}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="mb-4">
                          <span className="text-xs font-bold tracking-wider text-yellow-500 uppercase mb-2 block">
                            {project.subtitle}
                          </span>
                          <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-500 transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
                            {project.description}
                          </p>
                        </div>

                        <div className="mt-auto pt-4 border-t border-border/50">
                          <div className="flex flex-wrap gap-2">
                            {project.tags && project.tags.map((tag, i) => (
                              <span key={i} className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground uppercase tracking-wide">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Mobile View More Button */}
            <div className="mt-12 text-center md:hidden">
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-8 py-3 rounded-full border border-border bg-background hover:bg-secondary transition-colors font-bold"
              >
                {showAll ? 'View Less' : 'View All Projects'}
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default Project
