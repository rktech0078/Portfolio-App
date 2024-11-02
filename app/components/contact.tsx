import Image from 'next/image'
import React from 'react'

const Contact = () => {
  return (
    <div id='contact'>
        <section className="text-gray-600 body-font relative">
  <div
    className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap"
    
  >
    <div
      className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"
      
    >
      <iframe
        width="100%"
        height="100%"
        className="absolute inset-0"
        // frameBorder={0}
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d905.1440609020921!2d67.1742275771322!3d24.844161277889963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33b5244d2a8b9%3A0xaeb3fff1431a2ee2!2sYameen%20Kiryana%20shop!5e0!3m2!1sen!2s!4v1730558653322!5m2!1sen!2s"
        style={{ filter: "contrast(1.2) opacity(0.4)" }}
      />
      <div
        className="bg-white relative flex flex-wrap py-6 rounded shadow-md"
        
      >
        <div className="lg:w-1/2 px-6" >
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
            ADDRESS
          </h2>
          <p className="mt-1">
            Street 35, House 39, Landhi 36-B, Karachi, Sindh, Pakistan
          </p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0" >
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
            EMAIL
          </h2>
          <a className="text-[#ffc107] leading-relaxed">rk8466995@gmail.com</a>
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
            PHONE
          </h2>
          <p className="leading-relaxed">0313-2317606</p>
        </div>
      </div>
    </div>
    <div
      className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
      
    >
      <h2 className="title-font sm:text-5xl text-5xl mb-4 font-bold text-gray-900">
        Contact
      </h2>
      <p className="leading-relaxed mb-5 text-gray-600">
        Feel Free to Contact Us:
      </p>
      <div className="relative mb-4" >
        <label className="leading-7 text-sm text-gray-600">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full bg-white rounded border border-gray-300 focus:border-[#ffc107] focus:ring-2 focus:ring-[#ffc107] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4" >
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-white rounded border border-gray-300 focus:border-[#ffc107] focus:ring-2 focus:ring-[#ffc107] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4" >
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full bg-white rounded border border-gray-300 focus:border-[#ffc107] focus:ring-2 focus:ring-[#ffc107] h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          defaultValue={""}
        />
      </div>
      <button className="text-white font-bold bg-[#ffc107] border-0 py-2 px-6 focus:outline-none hover:bg-black rounded text-lg">
        Send Message
      </button>
      
    </div>
  </div>
</section>

    </div>
  )
}

export default Contact