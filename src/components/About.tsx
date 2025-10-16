import React from 'react';
import { CodeIcon, PenToolIcon, UsersIcon } from 'lucide-react';
export const About = () => {
  return <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
        </div>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img src="/background_%281%29.jpg" alt="Mangar Lual Giir" className="w-full h-auto object-cover" />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-gray-600 mb-6 text-lg">
              Hello! I'm Mangar, a passionate Full Stack Developer and UI/UX
              Designer with over 5 years of experience creating digital
              experiences that users love.
            </p>
            <p className="text-gray-600 mb-6">
              I specialize in building responsive web applications using modern
              technologies like React, Node.js, and TypeScript. My approach
              combines technical expertise with design thinking to create
              solutions that are both functional and beautiful.
            </p>
            <p className="text-gray-600 mb-6">
              When I'm not coding, you can find me exploring new design trends,
              contributing to open source projects, or hiking in the mountains.
              I believe in continuous learning and am always expanding my skill
              set.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Name:</h3>
                <p className="text-gray-600">Mangar Lual Giir</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Email:</h3>
                <p className="text-gray-600">mangarlualgir@gmail.com</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Phone:</h3>
                <p className="text-gray-600">+254705221297</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Experience:
                </h3>
                <p className="text-gray-600">5+ Years</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <CodeIcon className="text-primary-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Web Development
            </h3>
            <p className="text-gray-600">
              Building responsive and performant web applications with modern
              technologies.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <PenToolIcon className="text-primary-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              UI/UX Design
            </h3>
            <p className="text-gray-600">
              Creating intuitive and visually appealing user interfaces.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <UsersIcon className="text-primary-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Collaboration
            </h3>
            <p className="text-gray-600">
              Working effectively with teams to deliver outstanding results.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600">
                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                <path d="M2 17l10 5 10-5"></path>
                <path d="M2 12l10 5 10-5"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Problem Solving
            </h3>
            <p className="text-gray-600">
              Finding elegant solutions to complex technical challenges.
            </p>
          </div>
        </div>
      </div>
    </section>;
};