'use client'

import React, { useEffect, useState, useMemo } from 'react'
import { getSkills } from '@/sanity/lib/client'
import getIconByName from '../utils/iconMapper'
import { motion, AnimatePresence } from 'framer-motion'

type Skill = {
  _id: string;
  title: string;
  proficiency: number;
  icon: string;
  displayOrder?: number;
}

const Skills = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  // Memoize fallback skills
  const fallbackSkills = useMemo(() => [
    { _id: 'html', title: 'HTML', proficiency: 100, icon: 'FaHtml5', displayOrder: 1 },
    { _id: 'css', title: 'CSS', proficiency: 90, icon: 'FaCss3Alt', displayOrder: 2 },
    { _id: 'js', title: 'Javascript', proficiency: 70, icon: 'IoLogoJavascript', displayOrder: 3 },
    { _id: 'ts', title: 'Typescript', proficiency: 80, icon: 'SiTypescript', displayOrder: 4 },
    { _id: 'nextjs', title: 'Next JS', proficiency: 80, icon: 'SiNextdotjs', displayOrder: 5 },
    { _id: 'vercel', title: 'Vercel', proficiency: 70, icon: 'SiVercel', displayOrder: 6 },
    { _id: 'node', title: 'Node JS', proficiency: 65, icon: 'FaNodeJs', displayOrder: 7 },
    { _id: 'react', title: 'React', proficiency: 75, icon: 'FaReact', displayOrder: 8 },
  ], []);

  useEffect(() => {
    async function fetchSkills() {
      try {
        const sanitySkills = await getSkills();

        const mergedSkills = [...fallbackSkills];

        sanitySkills.forEach((sanitySkill: Skill) => {
          const existingIndex = mergedSkills.findIndex(skill =>
            skill.title.toLowerCase() === sanitySkill.title.toLowerCase()
          );

          if (existingIndex !== -1) {
            mergedSkills[existingIndex] = {
              ...sanitySkill,
              displayOrder: sanitySkill.displayOrder || mergedSkills[existingIndex].displayOrder
            };
          } else {
            mergedSkills.push({
              ...sanitySkill,
              displayOrder: sanitySkill.displayOrder || mergedSkills.length + 1
            });
          }
        });

        const sortedSkills = mergedSkills.sort((a, b) =>
          (a.displayOrder || 999) - (b.displayOrder || 999)
        );

        setSkills(sortedSkills);
      } catch (error) {
        console.error('Error fetching skills:', error);
        setSkills(fallbackSkills);
      } finally {
        setLoading(false);
      }
    }

    fetchSkills();
  }, [fallbackSkills]);

  const displayedSkills = showAll ? skills : skills.slice(0, 8);

  return (
    <section id='skills' className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container px-4 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Technical <span className="text-yellow-500">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A comprehensive suite of tools and technologies I use to build scalable digital solutions.
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"></div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <AnimatePresence>
                {displayedSkills.map((skill, index) => (
                  <motion.div
                    key={skill._id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="h-full bg-card hover:bg-card/80 border border-border/50 hover:border-yellow-500/50 p-6 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-yellow-500/10 group">
                      <div className="flex flex-col items-center text-center gap-4">
                        <div className="w-16 h-16 rounded-2xl bg-secondary/50 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300 text-foreground group-hover:text-yellow-500">
                          {getIconByName(skill.icon)}
                        </div>

                        <div className="w-full">
                          <h3 className="font-bold text-lg mb-2">{skill.title}</h3>

                          {/* Minimal Progress Bar */}
                          <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.proficiency}%` }}
                              transition={{ duration: 1, delay: 0.2 }}
                              className="h-full bg-yellow-500 rounded-full"
                            />
                          </div>
                          <div className="mt-2 text-xs text-muted-foreground font-medium text-right">
                            {skill.proficiency}%
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {skills.length > 8 && (
              <motion.div
                className="flex justify-center mt-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
              >
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="px-8 py-3 rounded-full border border-border bg-background hover:bg-secondary transition-colors font-medium flex items-center gap-2"
                >
                  {showAll ? 'Show Less' : 'View All Skills'}
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </motion.div>
            )}
          </>
        )}
      </div>
    </section>
  )
}

export default Skills