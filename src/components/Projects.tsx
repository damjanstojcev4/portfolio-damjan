'use client';

import React from 'react';

const projects = [
  {
    image: '/netural-logo.png',
    status: 'Completed',
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce solution with a modern frontend and a robust backend. It includes real-time inventory management, a secure payment gateway, and a comprehensive admin dashboard for sales tracking and order management.',
    technologies: ['React', 'Spring Boot', 'PostgreSQL', 'Stripe API', 'Docker'],
    features: [
      'User authentication & authorization',
      'Product catalog with advanced search & filters',
      'Shopping cart & seamless checkout flow',
      'Order management system with status updates',
      'Dedicated admin dashboard for business analytics',
    ],
    liveDemoLink: '#',
    viewCodeLink: '#',
  },
  {
    image: '/netural-logo.png',
    status: 'In Progress',
    title: 'Social Media Analytics Dashboard',
    description:
      'A data visualization dashboard for monitoring social media campaign performance. It provides insights into audience engagement, reach, and follower growth using interactive charts and graphs.',
    technologies: ['Next.js', 'Chakra UI', 'TypeScript', 'Node.js', 'MongoDB', 'D3.js'],
    features: [
      'Real-time data fetching from social media APIs',
      'Customizable dashboard with drag-and-drop widgets',
      'Interactive charts for visualizing key metrics',
      'User-specific data views and permission controls',
      'Automated report generation and email alerts',
    ],
    liveDemoLink: '#',
    viewCodeLink: '#',
  },
  {
    image: '/netural-logo.png',
    status: 'Completed',
    title: 'Portfolio Website Builder',
    description:
      'A user-friendly web application that allows creators to build and customize their professional portfolios in minutes. The platform offers multiple templates, a drag-and-drop editor, and responsive designs.',
    technologies: ['React', 'Firebase', 'Tailwind CSS', 'Redux', 'AWS S3'],
    features: [
      'Intuitive drag-and-drop interface for content',
      'Multiple modern and responsive templates',
      'Custom domain support and secure hosting',
      'Integrated contact forms and social links',
      'One-click publishing and a built-in CMS',
    ],
    liveDemoLink: '#',
    viewCodeLink: '#',
  },
];

export default function Project() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 tracking-tight mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work in full-stack development, API integrations, and scalable web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 flex flex-col lg:flex-row items-center transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative w-full lg:w-1/2 rounded-2xl overflow-hidden mb-6 lg:mb-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover rounded-2xl"
                />
                <div className="absolute top-4 left-4 bg-green-500 text-white text-xs font-bold py-1 px-3 rounded-full">
                  {project.status}
                </div>
              </div>
              <div className="w-full lg:w-1/2 lg:pl-12 flex flex-col space-y-4">
                <h3 className="text-3xl font-bold text-gray-900">{project.title}</h3>
                <p className="text-gray-600 leading-relaxed">{project.description}</p>
                <div>
                  <span className="text-lg font-semibold text-gray-800 mb-2 block">
                    Technologies Used
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-100 text-gray-800 text-xs font-semibold px-3 py-1.5 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-lg font-semibold text-gray-800 mb-2 block">
                    Key Features
                  </span>
                  <ul className="list-none space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-arrow-right text-cyan-600 mr-2"
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-4 mt-4">
                  <a
                    href={project.liveDemoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-6 py-3 bg-cyan-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-external-link mr-2"
                    >
                      <path d="M15 3h6v6" />
                      <path d="M10 14 21 3" />
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    </svg>
                    Live Demo
                  </a>
                  <a
                    href={project.viewCodeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-6 py-3 bg-gray-800 text-white font-semibold rounded-full shadow-lg hover:bg-gray-900 transition-colors duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-github mr-2"
                    >
                      <path d="M15 22s-4-4-6-6v-2l-2 2c-2 2-4-2-4-2h-2v4c2 0 4 2 6 2l2-2v4c0 2 2 4 4 4s4-2 4-4v-4l2 2s4-2 2-4h-2v-4zM9 9a3 3 0 1 0-6 0 3 3 0 0 0 6 0z" />
                      <path d="M9 12a3 3 0 1 0-6 0 3 3 0 0 0 6 0z" />
                      <path d="M15 12a3 3 0 1 0-6 0 3 3 0 0 0 6 0z" />
                      <path d="M15 9a3 3 0 1 0-6 0 3 3 0 0 0 6 0z" />
                      <path d="M21 9a3 3 0 1 0-6 0 3 3 0 0 0 6 0z" />
                    </svg>
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">Want to see more of my work?</p>
          <a
            href="https://github.com/damjanstojcev4?tab=repositories"
            target='_blank'
            className="inline-flex items-center px-8 py-4 bg-white border border-gray-300 text-gray-800 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-github mr-3"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
