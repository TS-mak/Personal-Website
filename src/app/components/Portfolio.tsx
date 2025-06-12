"use client";

import Image from 'next/image';
import React, { useState } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Github, Linkedin, ExternalLink } from "lucide-react";
import { FaJava, FaAws, FaDatabase, FaGitAlt, FaNode, FaShoppingCart, FaComments } from "react-icons/fa";
import { BiNote } from "react-icons/bi";


const Portfolio: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const projectsData = [
    {
      title: "Social Media App",
      description: "A collaborative note-taking app with markdown support and real-time updates.",
      icon: <BiNote className="w-6 h-6 text-white" />,
      iconBg: "bg-blue-500",
      technologies: [
        { name: "React.js", bgColor: "bg-blue-100", textColor: "text-blue-700" },
        { name: "Tailwind CSS", bgColor: "bg-blue-100", textColor: "text-blue-700" },
        { name: "Prisma", bgColor: "bg-blue-100", textColor: "text-blue-700" },
        { name: "PostgreSQL", bgColor: "bg-blue-100", textColor: "text-blue-700" }
      ],
      github: "https://github.com/your-repo/social-media-app",
      demo: "https://social-media-app.demo"
    },
    {
      title: "StackOverflow Scraper",
      description: "A powerful tool for scraping and analyzing StackOverflow data with advanced analytics.",
      icon: <FaNode className="w-6 h-6 text-white" />,
      iconBg: "bg-green-500",
      technologies: [
        { name: "Node.js", bgColor: "bg-green-100", textColor: "text-green-700" },
        { name: "Puppeteer", bgColor: "bg-green-100", textColor: "text-green-700" },
        { name: "PostgreSQL", bgColor: "bg-green-100", textColor: "text-green-700" }
      ],
      github: "https://github.com/your-repo/stackoverflow-scraper",
      demo: "https://stackoverflow-scraper.demo"
    },
    {
      title: "Task Management System",
      description: "A full-stack task management system with team sharing capabilities and REST API.",
      icon: <FaDatabase className="w-6 h-6 text-white" />,
      iconBg: "bg-purple-500",
      technologies: [
        { name: "Node.js", bgColor: "bg-purple-100", textColor: "text-purple-700" },
        { name: "React", bgColor: "bg-purple-100", textColor: "text-purple-700" },
        { name: "MongoDB", bgColor: "bg-purple-100", textColor: "text-purple-700" }
      ],
      github: "https://github.com/your-repo/task-management-system",
      demo: "https://taskmanagementsystem.demo"
    },
    {
      title: "E-commerce Platform",
      description: "A robust e-commerce platform with product catalog, Stripe integration, and admin dashboard.",
      icon: <FaShoppingCart className="w-6 h-6 text-white" />,
      iconBg: "bg-yellow-500",
      technologies: [
        { name: "Next.js", bgColor: "bg-yellow-100", textColor: "text-yellow-700" },
        { name: "Stripe API", bgColor: "bg-yellow-100", textColor: "text-yellow-700" },
        { name: "PostgreSQL", bgColor: "bg-yellow-100", textColor: "text-yellow-700" }
      ],
      github: "https://github.com/your-repo/e-commerce-platform",
      demo: "https://ecommerce-platform.demo"
    },
    {
      title: "Real-Time Chat Application",
      description: "A real-time chat app featuring group chat, read receipts, and push notifications.",
      icon: <FaComments className="w-6 h-6 text-white" />,
      iconBg: "bg-red-500",
      technologies: [
        { name: "WebSockets", bgColor: "bg-red-100", textColor: "text-red-700" },
        { name: "Node.js", bgColor: "bg-red-100", textColor: "text-red-700" },
        { name: "MongoDB", bgColor: "bg-red-100", textColor: "text-red-700" }
      ],
      github: "https://github.com/your-repo/chat-app",
      demo: "https://chat-app.demo"
    }
  ];

  return (
    <div className={`h-full w-full font-[Poppins] ${darkMode ? "bg-gray-900 text-gray-200" : "bg-gray-100 text-gray-800"}`}>
      {/* Navigation Bar */}
      <header className={`sticky top-0 z-50 w-full bg-gradient-to-r ${darkMode ? "from-gray-800 to-gray-700" : "from-blue-600 to-blue-400"} text-white py-3 px-6 shadow-lg`}>
        <div className="w-full flex justify-between items-center">
          <h1 className="text-3xl font-extrabold">Thembisile</h1>
          <nav>
            <ul className="flex space-x-6 text-lg font-medium">
              {['About', 'Skills', 'Projects', 'Timeline', 'Blog'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="hover:underline focus:underline transition-all duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 bg-gray-700 text-white px-4 py-1 rounded-md hover:bg-gray-600 transition"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full max-w-7xl mx-auto px-8 py-10">
        {/* About Me Section */}
        <section id="about" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">About</h2>
          <div className="flex flex-col md:flex-row items-center space-x-6">
          <Image 
              src="/headshot.jpeg" 
              alt="Professional headshot" 
              width={160}
              height={160}
              className="rounded-full shadow-lg"
            />
              <div>
              <p className="text-lg leading-relaxed">
                Hi there! I am Thembisile Makhubu, a senior Computer Science student passionate about software development. 
                I aspire to be a software engineer and love building innovative solutions. Let us connect!
              </p>
              <p className="mt-4 text-lg">
                <strong>Contact Information:</strong><br />
                Phone: +27 71 450 8754<br />
                Email: <a href="mailto:makhubuts4@gmail.com" className="text-blue-500 hover:underline">makhubuts4@gmail.com</a>
              </p>
              <div className="flex space-x-4 mt-4">
                <a href="https://github.com/TS-mak" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black">
                  <Github size={28} />
                </a>
                <a href="https://www.linkedin.com/in/thembisile-makhubu-seipati" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                  <Linkedin size={28} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Technical", skills: ["Spring Boot", "Django", "AWS Lambda", "RESTful APIs", "SQL", "Git"], icon: <FaAws size={30} /> },
              { title: "Programming Languages", skills: ["Java", "Python", "JavaScript", "SQL", "C", "Assembly"], icon: <FaJava size={30} /> },
              { title: "Soft Skills", skills: ["Collaboration", "Communication", "Problem-Solving", "Leadership"], icon: <FaGitAlt size={30} /> }
            ].map((category, index) => (
              <div key={index} className={`shadow-lg rounded-lg p-6 transition-all duration-200 hover:scale-105 ${darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"}`}>
                <div className="flex items-center space-x-2 mb-4">
                  {category.icon}
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <ul className="list-disc list-inside space-y-2 text-lg">
                  {category.skills.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Enhanced Projects Section */}
        <section id="projects" className="mb-20">
          <h2 className={`text-3xl font-bold mb-8 ${darkMode ? "text-white" : "text-gray-900"}`}>
            Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <div 
                key={index}
                className={`border rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-6 
                  ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}
              >
                {/* Project Image */}
                <div className="mb-6 overflow-hidden rounded-lg">
                <Image
                  src={`/api/placeholder/400/200`}
                  alt={`${project.title} preview`}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
                </div>

                {/* Project Header */}
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`p-3 rounded-full ${project.iconBg}`}>
                    {project.icon}
                  </div>
                  <h3 className={`text-xl font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>
                    {project.title}
                  </h3>
                </div>

                {/* Project Description */}
                <p className={`mb-4 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                  {project.description}
                </p>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className={`${tech.bgColor} ${tech.textColor} text-xs font-semibold px-3 py-1 rounded-full shadow-sm`}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2 ${darkMode ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-700"} transition-colors`}
                  >
                    <Github size={20} />
                    <span>GitHub</span>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="timeline" className="mb-10 max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Timeline</h2>
          <VerticalTimeline>
            <VerticalTimelineElement
              date="2025 - Expected Graduation"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              contentStyle={{
                background: darkMode ? "rgb(31, 41, 55)" : "rgb(255, 255, 255)",
                color: darkMode ? "rgb(209, 213, 219)" : "rgb(17, 24, 39)"
              }}
            >
              <h3 className="text-lg font-semibold">Bachelor of Computer Science</h3>
              <p>Stellenbosch University</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="September 2024"
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              contentStyle={{
                background: darkMode ? "rgb(31, 41, 55)" : "rgb(255, 255, 255)",
                color: darkMode ? "rgb(209, 213, 219)" : "rgb(17, 24, 39)"
              }}
            >
              <h3 className="text-lg font-semibold">Standard Bank Software Engineering Job Simulation</h3>
              <p>Focused on improving the Standard Bank mobile app with Spring Boot, Python, and SQL.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="May 2023"
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              contentStyle={{
                background: darkMode ? "rgb(31, 41, 55)" : "rgb(255, 255, 255)",
                color: darkMode ? "rgb(209, 213, 219)" : "rgb(17, 24, 39)"
              }}
            >
              <h3 className="text-lg font-semibold">Lyft Back-End Engineering Job Simulation</h3>
              <p>Designed and implemented scalable APIs for the Lyft ride-sharing platform.</p>

            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="Present"
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              contentStyle={{
                background: darkMode ? "rgb(31, 41, 55)" : "rgb(255, 255, 255)",
                color: darkMode ? "rgb(209, 213, 219)" : "rgb(17, 24, 39)"
              }}
            >
             <h3 className="text-lg font-semibold">Future Goals</h3>
              <p>
                - Build a collaborative notes platform with real-time markdown editing. <br />
                - Specialize in web and backend technologies.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>

        
        </section>

        <section id="blog" className="mb-10 max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Blog</h2>
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <h3 className="text-xl font-semibold">First Blog Post</h3>
              <p>A short summary of my blog post goes here...</p>
              <a href="/blog/first-post" className="text-blue-500 hover:underline">
                Read More
              </a>
            </div>
          </div>
        </section>
     

      <footer className={`${darkMode ? "bg-gray-800" : "bg-gray-800"} text-white py-4 w-full`}>
        <div className="px-8 text-center">
          <p>&copy; {new Date().getFullYear()} Thembisile. All Rights Reserved.</p>
        </div>
      </footer>
      </main>
    </div>
  );
};

export default Portfolio;