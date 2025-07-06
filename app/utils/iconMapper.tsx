import React from 'react';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaReact, 
  FaNodeJs, 
  FaDatabase, 
  FaGithub,
  FaAws,
  FaBootstrap,
  FaDocker,
  FaPython,
  FaMagento 
} from "react-icons/fa";

import { 
  SiTypescript, 
  SiNextdotjs, 
  SiVercel, 
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiFirebase,
  SiSupabase,
  SiWeb3Dotjs,
  SiPrisma,
  SiRedux,
  SiDaisyui,
  SiOpenai,
  SiStreamlit  
} from "react-icons/si";

import { TbBrandFramerMotion } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandThreejs } from "react-icons/tb";
import { GiDaisy } from "react-icons/gi";


// Map icon names to their components
const iconMap: { [key: string]: React.ReactElement } = {
  FaHtml5: <FaHtml5 className='text-2xl hover:text-[#000000]' />,
  FaCss3Alt: <FaCss3Alt className='text-2xl hover:text-[#000000]' />,
  IoLogoJavascript: <IoLogoJavascript className='text-xl hover:text-[#000000]' />,
  SiJavascript: <SiJavascript className='text-xl hover:text-[#000000]' />,
  SiTypescript: <SiTypescript className='text-lg hover:text-[#000000]' />,
  SiNextdotjs: <SiNextdotjs className='text-2xl hover:text-[#000000]' />,
  SiVercel: <SiVercel className='text-xl hover:text-[#000000] mb-1' />,
  FaReact: <FaReact className='text-2xl hover:text-[#000000]' />,
  FaNodeJs: <FaNodeJs className='text-2xl hover:text-[#000000]' />,
  FaDatabase: <FaDatabase className='text-2xl hover:text-[#000000]' />,
  FaGithub: <FaGithub className='text-2xl hover:text-[#000000]' />,
  FaAws: <FaAws className='text-2xl hover:text-[#000000]' />,
  FaBootstrap: <FaBootstrap className='text-2xl hover:text-[#000000]' />,
  FaDocker: <FaDocker className='text-2xl hover:text-[#000000]' />,
  FaPython: <FaPython className='text-2xl hover:text-[#000000]' />,
  SiMongodb: <SiMongodb className='text-2xl hover:text-[#000000]' />,
  SiPostgresql: <SiPostgresql className='text-2xl hover:text-[#000000]' />,
  SiTailwindcss: <SiTailwindcss className='text-2xl hover:text-[#000000]' />,
  SiFirebase: <SiFirebase className='text-2xl hover:text-[#000000]' />, 
  SiSupabase: <SiSupabase className='text-2xl hover:text-[#000000]' />,
  SiPrisma: <SiPrisma className='text-2xl hover:text-[#000000]' />,
  SiRedux: <SiRedux className='text-2xl hover:text-[#000000]' />,
  TbBrandThreejs: <TbBrandThreejs className='text-2xl hover:text-[#000000]' />,
  SiWeb3Dotjs : <SiWeb3Dotjs className='text-2xl hover:text-[#000000]' />,
  SiDaisyui : <SiDaisyui className='text-2xl hover:text-[#000000]' />,
  SiOpenai : <SiOpenai className='text-2xl hover:text-[#000000]' />,
  SiStreamlit : <SiStreamlit className='text-2xl hover:text-[#000000]' />,
  GiDaisy  : <GiDaisy  className='text-2xl hover:text-[#000000]' />,
  FaMagento: <FaMagento className='text-2xl hover:text-[#000000]' />,
  TbBrandFramerMotion : <TbBrandFramerMotion  className='text-2xl hover:text-[#000000]' />,
};

const getIconByName = (name: string) => {
  if (!name) {
    console.warn('No icon name provided');
    return <FaDatabase className='text-2xl hover:text-[#000000]' />;
  }
  
  const icon = iconMap[name];
  if (!icon) {
    console.warn(`Icon "${name}" not found in iconMap`);
    return <FaDatabase className='text-2xl hover:text-[#000000]' />;
  }
  
  return icon;
};

export default getIconByName; 