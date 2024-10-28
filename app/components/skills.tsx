import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiVercel } from "react-icons/si";






const Skills = () => {
  return (
    <div id='skills'>
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto" >
    <div
      className="flex flex-col text-center w-full mb-16" 
    >
      <h1 className="sm:text-6xl text-5xl font-bold title-font text-gray-900">
        My Skills
      </h1>
    </div>
    <div className="flex flex-wrap -m-4 " >

        {/* skill 1 */}
      <div className="p-4 w-[100%] md:w-1/3" >
        <div
          className="flex rounded-lg h-full bg-gray-100 p-8 flex-col "
          
        >
          <div className="flex items-center mb-3 " >
            <div
              className="w-9 h-9 mr-3 inline-flex items-center justify-center rounded-full bg-[#ffc107] text-white flex-shrink-0"
              
            >
              <FaHtml5 className='text-2xl hover:text-[#000000]'/>

            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              HTML
            </h2>
          </div>
          <div className="flex-grow" >
            <div className='relative w-full h-1 bg-gray-300 rounded-full'>
                <div className='absolute bg-[#ffc107] rounded-full h-1 w-[100%]'></div>
            </div>
            <p className='text-right font-bold'>100%</p>
          </div>
        </div>
      </div>


        {/* skill 2 */}
      <div className="p-4 w-[100%] md:w-1/3" >
        <div
          className="flex rounded-lg h-full bg-gray-100 p-8 flex-col"
          
        >
          <div className="flex items-center mb-3" >
            <div
              className="w-9 h-9 mr-3 inline-flex items-center justify-center rounded-full bg-[#ffc107] text-white flex-shrink-0"
              
            >
              <FaCss3Alt className='text-2xl hover:text-[#000000]'/>

            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              CSS
            </h2>
          </div>
          <div className="flex-grow" >
            <div className='relative w-full h-1 bg-gray-300 rounded-full'>
                <div className='absolute bg-[#ffc107] rounded-full h-1 w-[90%]'></div>
            </div>
            <p className='text-right font-bold'>90%</p>
          </div>
        </div>
      </div>


      {/* skill 3 */}
      <div className="p-4 w-[100%] md:w-1/3" >
        <div
          className="flex rounded-lg h-full bg-gray-100 p-8 flex-col"
          
        >
          <div className="flex items-center mb-3" >
            <div
              className="w-9 h-9 mr-3 inline-flex items-center justify-center rounded-full bg-[#ffc107] text-white flex-shrink-0"
              
            >
              <IoLogoJavascript className='text-xl hover:text-[#000000]'/>

            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              Javascript
            </h2>
          </div>
          <div className="flex-grow" >
            <div className='relative w-full h-1 bg-gray-300 rounded-full'>
                <div className='absolute bg-[#ffc107] rounded-full h-1 w-[70%]'></div>
            </div>
            <p className='text-right font-bold'>70%</p>
          </div>
        </div>
      </div>


      {/* skill 4 */}
      <div className="p-4 w-[100%] md:w-1/3" >
        <div
          className="flex rounded-lg h-full bg-gray-100 p-8 flex-col"
          
        >
          <div className="flex items-center mb-3" >
            <div
              className="w-9 h-9 mr-3 inline-flex items-center justify-center rounded-full bg-[#ffc107] text-white flex-shrink-0"
              
            >
              <SiTypescript className='text-lg hover:text-[#000000]'/>

            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              Typescript
            </h2>
          </div>
          <div className="flex-grow" >
            <div className='relative w-full h-1 bg-gray-300 rounded-full'>
                <div className='absolute bg-[#ffc107] rounded-full h-1 w-[80%]'></div>
            </div>
            <p className='text-right font-bold'>80%</p>
          </div>
        </div>
      </div>


        {/* skil 5 */}
      <div className="p-4 w-[100%] md:w-1/3" >
        <div
          className="flex rounded-lg h-full bg-gray-100 p-8 flex-col"
          
        >
          <div className="flex items-center mb-3" >
            <div
              className="w-9 h-9 mr-3 inline-flex items-center justify-center rounded-full bg-[#ffc107] text-white flex-shrink-0"
              
            >
              <SiNextdotjs className='text-2xl hover:text-[#000000]'/>

            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              Next JS
            </h2>
          </div>
          <div className="flex-grow" >
            <div className='relative w-full h-1 bg-gray-300 rounded-full'>
                <div className='absolute bg-[#ffc107] rounded-full h-1 w-[80%]'></div>
            </div>
            <p className='text-right font-bold'>80%</p>
          </div>
        </div>
      </div>


      {/* skil 6 */}
      <div className="p-4 w-[100%] md:w-1/3" >
        <div
          className="flex rounded-lg h-full bg-gray-100 p-8 flex-col"
          
        >
          <div className="flex items-center mb-3" >
            <div
              className="w-9 h-9 mr-3 inline-flex items-center justify-center rounded-full bg-[#ffc107] text-white flex-shrink-0"
              
            >
              <SiVercel className='text-xl hover:text-[#000000] mb-1'/>

            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              Vercel Deployment
            </h2>
          </div>
          <div className="flex-grow" >
            <div className='relative w-full h-1 bg-gray-300 rounded-full'>
                <div className='absolute bg-[#ffc107] rounded-full h-1 w-[70%]'></div>
            </div>
            <p className='text-right font-bold'>70%</p>
          </div>
        </div>
      </div>
      



    </div>
  </div>
</section>

    </div>
  )
}

export default Skills