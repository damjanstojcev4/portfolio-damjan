import React from "react";

// Use this file as a standalone component.
// It is assumed Tailwind CSS is configured in your Next.js project.

const skills = [
  {
    category: "Frontend Development",
    subtitle: "Modern web interfaces and user experiences",
    icon: (
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
        className="lucide lucide-code-2 text-gray-700"
      >
        <polyline points="18 16 22 12 18 8" />
        <polyline points="6 8 2 12 6 16" />
        <line x1="10" x2="14" y1="4" y2="20" />
      </svg>
    ),
    list: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 95 },
      { name: "JavaScript", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "Tailwind CSS", level: 95 }
    ],
  },
  {
    category: "Backend Development",
    subtitle: "Scalable server-side applications and APIs",
    icon: (
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
        className="lucide lucide-server text-gray-700"
      >
        <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
        <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
        <line x1="6" x2="6" y1="6" y2="6" />
        <line x1="6" x2="6" y1="18" y2="18" />
      </svg>
    ),
    list: [
      { name: "Spring Boot", level: 90 },
      { name: "Java", level: 90 },
      { name: "REST APIs", level: 90 },
      { name: "Microservices", level: 85 },
      { name: "Hibernate", level: 90 },
    ],
  },
  {
    category: "API Integration",
    subtitle: "Seamless third-party service integrations",
    icon: (
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
        className="lucide lucide-cloud-cog text-gray-700"
      >
        <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
        <path d="M12 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
        <path d="M6 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
        <path d="M18 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
        <path d="M12 16v-2.5" />
        <path d="M6 16v-2.5" />
        <path d="M18 16v-2.5" />
      </svg>
    ),
    list: [
      { name: "Snaplogic", level: 90 },
      { name: "Meta", level: 82 },
      { name: "Webhook Processing", level: 85 },
      { name: "Data Transformation", level: 90 },
      { name: "API Documentation", level: 90 },
    ],
  },
  {
    category: "Databases & Tools",
    subtitle: "Data management and development tools",
    icon: (
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
        className="lucide lucide-database text-gray-700"
      >
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5V19A9 3 0 0 0 21 19V5" />
        <path d="M3 12A9 3 0 0 0 21 12" />
      </svg>
    ),
    list: [
      { name: "PostgreSQL", level: 90 },
      { name: "MySQL", level: 85 },
      { name: "Git/GitHub", level: 90 },
      { name: "Docker", level: 82 },
      { name: "Postman", level: 90 },
    ],
  },
];

const tools = [
  {
    name: "VS Code",
    icon: (
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
        className="lucide lucide-code-2 text-gray-700"
      >
        <polyline points="18 16 22 12 18 8" />
        <polyline points="6 8 2 12 6 16" />
        <line x1="10" x2="14" y1="4" y2="20" />
      </svg>
    ),
  },
  {
    name: "IntelliJ IDEA",
    icon: (
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
        className="lucide lucide-lightbulb text-gray-700"
      >
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1.5.5 2.8 1.5 3.5.8.8 1.3 1.5 1.5 2.5" />
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M12 22a2 2 0 0 1-2-2v-1a2 2 0 1 1 4 0v1a2 2 0 0 1-2 2Z" />
      </svg>
    ),
  },
  {
    name: "Git",
    icon: (
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
        className="lucide lucide-git-commit text-gray-700"
      >
        <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
        <path d="M12 3a9 9 0 0 0-9 9m9 9a9 9 0 0 0 9-9" />
      </svg>
    ),
  },
  {
    name: "Snaplogic Designer",
    icon: (
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
        className="lucide lucide-link-2 text-gray-700"
      >
        <path d="M9 17L12 14L15 17L18 20" />
        <path d="M15 7L12 10L9 7L6 4" />
      </svg>
    ),
  },
  {
    name: "Postman",
    icon: (
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
        className="lucide lucide-message-square text-gray-700"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    name: "Docker",
    icon: (
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
        className="lucide lucide-container text-gray-700"
      >
        <rect width="18" height="18" x="3" y="3" rx="4" />
        <line x1="12" x2="12" y1="3" y2="21" />
        <line x1="12" x2="12" y1="3" y2="21" />
        <line x1="3" x2="21" y1="12" y2="12" />
      </svg>
    ),
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 tracking-tight mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
            from frontend to backend with seamless integrations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skills.map((skillCategory, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 flex flex-col items-start space-y-4 transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-gray-100 rounded-full">
                  {skillCategory.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {skillCategory.category}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {skillCategory.subtitle}
                  </p>
                </div>
              </div>
              <div className="w-full space-y-5">
                {skillCategory.list.map((skill, skillIndex) => (
                  <div key={skillIndex} className="w-full">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-base font-medium text-gray-700">
                        {skill.name}
                      </span>
                      <span className="text-sm font-semibold text-gray-600">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                      <div
                        className="bg-cyan-600 h-full rounded-full transition-all duration-700 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Tools & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 bg-white rounded-2xl shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg"
              >
                <div className="text-gray-700 mb-2">{tool.icon}</div>
                <span className="text-sm font-medium text-gray-700">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
