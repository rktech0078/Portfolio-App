'use client'

import React, { useEffect, useState } from 'react'
import { getSkills } from '@/sanity/lib/client'
import getIconByName from '../utils/iconMapper'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'

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
  const { theme } = useTheme();

  // Fallback skills with display order
  const fallbackSkills = [
    { _id: 'html', title: 'HTML', proficiency: 100, icon: 'FaHtml5', displayOrder: 1 },
    { _id: 'css', title: 'CSS', proficiency: 90, icon: 'FaCss3Alt', displayOrder: 2 },
    { _id: 'js', title: 'Javascript', proficiency: 70, icon: 'IoLogoJavascript', displayOrder: 3 },
    { _id: 'ts', title: 'Typescript', proficiency: 80, icon: 'SiTypescript', displayOrder: 4 },
    { _id: 'nextjs', title: 'Next JS', proficiency: 80, icon: 'SiNextdotjs', displayOrder: 5 },
    { _id: 'vercel', title: 'Vercel Deployment', proficiency: 70, icon: 'SiVercel', displayOrder: 6 },
  ];

  useEffect(() => {
    async function fetchSkills() {
      try {
        const sanitySkills = await getSkills();
        
        // Merge Sanity skills with fallback skills
        const mergedSkills = [...fallbackSkills];
        
        sanitySkills.forEach((sanitySkill: Skill) => {
          const existingIndex = mergedSkills.findIndex(skill => 
            skill.title.toLowerCase() === sanitySkill.title.toLowerCase()
          );
          
          if (existingIndex !== -1) {
            // Update existing skill
            mergedSkills[existingIndex] = {
              ...sanitySkill,
              displayOrder: sanitySkill.displayOrder || mergedSkills[existingIndex].displayOrder
            };
          } else {
            // Add new skill
            mergedSkills.push({
              ...sanitySkill,
              displayOrder: sanitySkill.displayOrder || mergedSkills.length + 1
            });
          }
        });

        // Sort by display order
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
  }, []);

  const displayedSkills = showAll ? skills : skills.slice(0, 6);

  return (
    <div id='skills'>
      <section className="text-gray-600 dark:text-gray-300 body-font">
        <div className="container px-5 py-24 mx-auto" >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col text-center w-full mb-16" 
          >
            <h1 className="sm:text-6xl text-5xl font-bold title-font mb-4 text-gray-900 dark:text-white">
              My Skills
            </h1>
          </motion.div>
          
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#ffc107]"></div>
            </div>
          ) : (
            <>
              <div className="flex flex-wrap -m-4">
                <AnimatePresence>
                  {displayedSkills.map((skill, index) => (
                    <motion.div 
                      key={skill._id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="p-4 w-[100%] md:w-1/3"
                    >
                      <div
                        className="flex rounded-lg h-full bg-gray-100 dark:bg-gray-800 p-8 flex-col shadow-md hover:shadow-xl dark:shadow-gray-900 transition-shadow duration-300"
                      >
                        <div className="flex items-center mb-3">
                          <div
                            className="w-9 h-9 mr-3 inline-flex items-center justify-center rounded-full bg-[#ffc107] text-white flex-shrink-0"
                          >
                            {getIconByName(skill.icon)}
                          </div>
                          <h2 className="text-gray-900 dark:text-gray-100 text-lg title-font font-medium">
                            {skill.title}
                          </h2>
                        </div>
                        <div className="flex-grow">
                          <div className='relative w-full h-1 bg-gray-300 dark:bg-gray-600 rounded-full'>
                            <motion.div 
                              className='absolute bg-[#ffc107] rounded-full h-1'
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.proficiency}%` }}
                              transition={{ duration: 1, delay: 0.2 }}
                            />
                          </div>
                          <p className='text-right font-bold text-gray-700 dark:text-gray-200'>{skill.proficiency}%</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
              
              {skills.length > 6 && (
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

export default Skills