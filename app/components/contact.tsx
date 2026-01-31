'use client'
import React from 'react'

const Contact = () => {
  return (
    <section id='contact' className="py-24 bg-secondary/20 relative">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Get in <span className="text-yellow-500">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 bg-card border border-border rounded-3xl overflow-hidden shadow-2xl">
          {/* Map Section */}
          <div className="lg:w-2/3 h-[400px] lg:h-auto relative bg-secondary">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0 grayscale contrast-[1.1] opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              frameBorder={0}
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d905.1440609020921!2d67.1742275771322!3d24.844161277889963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33b5244d2a8b9%3A0xaeb3fff1431a2ee2!2sYameen%20Kiryana%20shop!5e0!3m2!1sen!2s!4v1730558653322!5m2!1sen!2s"
            />
            <div className="absolute bottom-6 left-6 bg-background/90 backdrop-blur-md p-6 rounded-2xl shadow-lg max-w-xs border border-border">
              <h3 className="font-bold text-foreground mb-2">My Studio</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Street 35, House 39, Landhi 36-B, Karachi, Sindh, Pakistan
              </p>
              <p className="text-sm font-medium">
                <span className="text-yellow-500 block mb-1">rk8466995@gmail.com</span>
                <span className="text-foreground">0313-2317606</span>
              </p>
            </div>
          </div>

          {/* Form Section */}
          <div className="lg:w-1/3 p-8 lg:p-12 bg-background flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-2">Send a Message</h3>
            <p className="text-muted-foreground mb-8 text-sm">
              I usually respond within 24 hours.
            </p>

            <form action="https://formspree.io/f/mpwpzwjl" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-muted-foreground">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-secondary/50 border border-transparent focus:border-yellow-500 focus:bg-background rounded-xl px-4 py-3 outline-none transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-muted-foreground">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-secondary/50 border border-transparent focus:border-yellow-500 focus:bg-background rounded-xl px-4 py-3 outline-none transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-muted-foreground">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full bg-secondary/50 border border-transparent focus:border-yellow-500 focus:bg-background rounded-xl px-4 py-3 outline-none resize-none transition-all duration-300"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-foreground text-background font-bold py-4 rounded-xl hover:opacity-90 transition-opacity shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact