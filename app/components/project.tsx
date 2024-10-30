import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Project = () => {
  return (
    <div id='projects'>
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div
      className="flex flex-col text-center w-full mb-20"
    
    >
      <h1 className="sm:text-5xl text-5xl font-bold title-font mb-4 text-gray-900">
        My Portfolio Projects
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
        ChatGPT said that:  A project is the bridge between vision and reality, built one step at a time with passion, precision, and purpose.
      </p>
    </div>
    <div className="flex flex-wrap -m-4">

      {/* Project 1 */}
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <div className="flex relative ">
          <Image
            alt="projects"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../public/assests/projects/project-2.jpg")}
          />
          <div
            className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100"
        
          >
            <h2 className="tracking-widest text-sm title-font text-[#ffc107] mb-1 font-bold">
              Moon Walk
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              The Animated Web-App
            </h1>
            <p className="leading-relaxed line-clamp-2">
              Moon walk is animated web app that show the creativity of the author.
            </p>

            <Link href={"https://giaic-assignment-3-moonwalk.vercel.app/"} target='_'>
            <p className="leading-relaxed text-[#ffc107] hover:underline font-bold">
              View Project...
            </p>
            </Link>

          </div>
        </div>
      </div>

      {/* Project 2 */}
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <div className="flex relative">
          <Image
            alt="projects"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../public/assests/projects/resume.jpg")}
          />
          <div
            className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100"
        
          >
            <h2 className="tracking-widest text-sm title-font text-[#ffc107] mb-1 font-bold">
              Resume App
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              The Static Resume Web-App
            </h1>
            <p className="leading-relaxed line-clamp-2">
              Resume App is the Static and Customized Resume generator web app that show the creativity of the author.
            </p>

            <Link href={"https://hackathon-01-ten.vercel.app/index.html"} target='_'>
            <p className="leading-relaxed text-[#ffc107] hover:underline font-bold">
              View Project...
            </p>
            </Link>

          </div>
        </div>
      </div>

      {/* Project 3 */}
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <div className="flex relative">
          <Image
            alt="projects"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../public/assests/projects/project-4.jpg")}
          />
          <div
            className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100"
        
          >
            <h2 className="tracking-widest text-sm title-font text-[#ffc107] mb-1 font-bold">
              Simple Web App
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              The Simple Multi-Page Website
            </h1>
            <p className="leading-relaxed line-clamp-2">
            The project involved developing a multi-page website and deploying it on Vercel. It was an amazing learning experience that helped me enhance my web development skills, especially in modern frameworks like Next.js.
            </p>

            <Link href={"https://assignments-8qlq.vercel.app/"} target='_'>
            <p className="leading-relaxed text-[#ffc107] hover:underline font-bold">
              View Project...
            </p>
            </Link>

          </div>
        </div>
      </div>

      {/* Project 4 */}
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <div className="flex relative">
          <Image
            alt="projects"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../public/assests/projects/Nextjs.jpg")}
          />
          <div
            className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100"
        
          >
            <h2 className="tracking-widest text-sm title-font text-[#ffc107] mb-1 font-bold">
              Hello App
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Next.js Hello World
            </h1>
            <p className="leading-relaxed line-clamp-2">
            The Hello world project and the first Next App of my life...
            </p>

            <Link href={"https://www.facebook.com/photo/?fbid=1050577213348800&set=pcb.1050577296682125"} target='_'>
            <p className="leading-relaxed text-[#ffc107] hover:underline font-bold">
              View Project...
            </p>
            </Link>

          </div>
        </div>
      </div>

      {/* Project 5 */}
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <div className="flex relative">
          <Image
            alt="projects"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../public/assests/projects/project-1.jpg")}
          />
          <div
            className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100"
        
          >
            <h2 className="tracking-widest text-sm title-font text-[#ffc107] mb-1 font-bold">
            Object Array
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            Object Array Function Assignment
            </h1>
            <p className="leading-relaxed line-clamp-2">
            🔍 Efficiently manipulated and iterated through arrays of objects.
            🛠️ Utilized various array methods to streamline data processing.
            📊 Implemented functions to sort, filter, and transform data sets dynamically.
            </p>

            <Link href={"https://www.linkedin.com/in/abdul-rafay-khan-2780b12b5/recent-activity/all/"} target='_'>
            <p className="leading-relaxed text-[#ffc107] hover:underline font-bold">
              View Project...
            </p>
            </Link>

          </div>
        </div>
      </div>

      {/* Project 6 */}
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <div className="flex relative">
          <Image
            alt="projects"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../public/assests/projects/system.jpeg")}
          />
          <div
            className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100"
        
          >
            <h2 className="tracking-widest text-sm title-font text-[#ffc107] mb-1 font-bold">
            Student Management System
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            CLI Student Management System 🚀
            </h1>
            <p className="leading-relaxed line-clamp-2">
            Are you tired of managing student records manually? Say hello to my latest project - a powerful Command Line Interface (CLI) Student Management System! 📚✨
            </p>

            <Link href={"https://www.facebook.com/photo/?fbid=1050577213348800&set=pcb.1050577296682125"} target='_'>
            <p className="leading-relaxed text-[#ffc107] hover:underline font-bold">
              View Project...
            </p>
            </Link>

          </div>
        </div>
      </div>
      




    </div>
  </div>
</section>

    </div>
  )
}

export default Project