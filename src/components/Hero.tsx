'use client'

import Image from 'next/image'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-32 bg-white"
    >
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
        {/* Left side - Image */}
        <div className="flex justify-center">
          <Image
            src="/Matura Orginal - Copy.JPG"
            alt="Developer working"
            width={400}
            height={400}
            className="rounded-2xl shadow-lg"
          />
        </div>

        {/* Right side - Text */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Damjan Stojchev
          </h1>
          <h1 className="text-5xl md:text-6xl font-bold text-cyan-900 mb-4">
            Full Stack Developer
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Passionate about building scalable web applications with React, Spring Boot, 
            and seamless API integrations. Specialized in creating efficient, user-centric solutions.
          </p>

          {/* Tech stack pills */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
            {['React', 'Spring Boot', 'SnapLogic', 'TypeScript', 'Java'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
            <a
              href="#projects"
              className="px-6 py-3 bg-cyan-600 text-white rounded-md hover:bg-cyan-900 transition"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-100 transition"
            >
              Get In Touch
            </a>
          </div>

          {/* Social links */}
          <div className="flex justify-center md:justify-start space-x-6 text-gray-600 text-xl">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:you@example.com">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
