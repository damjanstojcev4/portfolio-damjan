'use client';

import React from 'react';

export default function Contact() {

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 tracking-tight mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Let's discuss your next project or potential collaboration opportunities. I'm always excited to work on interesting challenges.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column */}
          <div className="lg:w-1/2 flex flex-col space-y-12">
            {/* Let's Connect Card */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Let's Connect
              </h3>
              <p className="text-gray-600 mb-6">
                I'm passionate about creating innovative solutions and would love to hear about your project. Whether you're looking for a full-stack developer, need help with API integrations, or want to discuss potential opportunities, feel free to reach out.
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail mr-3 text-cyan-600">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <div>
                    <span className="block font-semibold">Email</span>
                    <a href="mailto:damjan.stojcev4@gmail.com" className="hover:underline">
                      damjan.stojcev4@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone-call mr-3 text-cyan-600">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2.08A19.5 19.5 0 0 1 8 13s-3-3-4-4L2 6.82v-3a2 2 0 0 1 2-2h3.9a2 2 0 0 1 2 2v3.9c0 1.1-.9 2-2 2h-1c1.3.1 3.2.9 5.8 3.5 2.5 2.5 3.3 4.4 3.5 5.8h-1c-1.1 0-2 .9-2 2z" />
                    <path d="M14.5 1.5l-2.8 2.8" />
                    <path d="M22 6.5l-2.8 2.8" />
                  </svg>
                  <div>
                    <span className="block font-semibold">Phone</span>
                    <span>+389 76 242 992</span>
                  </div>
                </div>
                <div className="flex items-center text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin mr-3 text-cyan-600">
                    <path d="M12 21.75s-5-7.5-5-10.5a5 5 0 0 1 10 0c0 3-5 10.5-5 10.5z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <div>
                    <span className="block font-semibold">Location</span>
                    <span>Bitola, North Macedonia</span>
                  </div>
                </div>
              </div>
              <div className="flex mt-6 space-x-4">
                <a href="https://github.com/damjanstojcev4" target='_blank' className="flex items-center text-gray-600 hover:text-cyan-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github mr-2">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                  <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/damjan-stojchev-27201b247/" target="_blank" className="flex items-center text-gray-600 hover:text-cyan-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin mr-2">
                    <path d="M16 8a6 6 0 0 1 6 6v7H18v-5a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* What I Can Help With Card */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                What I Can Help With
              </h3>
              <p className="text-gray-600 mb-6">
                Areas of expertise I can bring to your project:
              </p>
              <ul className="list-none space-y-2 text-gray-600">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right text-cyan-600 mr-2">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                  <span>Full-stack web application development</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right text-cyan-600 mr-2">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                  <span>API integration and data transformation</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right text-cyan-600 mr-2">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                  <span>React frontend development</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right text-cyan-600 mr-2">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                  <span>Spring Boot backend services</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right text-cyan-600 mr-2">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                  <span>Snaplogic integration solutions</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right text-cyan-600 mr-2">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                  <span>Consultations</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:w-1/2">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Send a Message
              </h3>
              <p className="text-gray-600 mb-6">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Name*
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 bg-gray-100 text-gray-900"
                      placeholder=" Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email*
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 bg-gray-100 text-gray-900"
                      placeholder=" your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Subject*
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 bg-gray-100 text-gray-900"
                    placeholder=" What's this about?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message*
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 bg-gray-100 text-gray-900"
                    placeholder=" Tell me about your project or what you'd like to discuss..."
                  ></textarea>
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-white font-semibold rounded-full shadow-lg transition-all duration-300 bg-gray-700 hover:bg-gray-900"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send-horizonal mr-2">
                      <path d="m3 3 3 9-3 9 19-9Z" />
                      <path d="M9 12h13" />
                    </svg>
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
