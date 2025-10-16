import React, { useState } from 'react';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
export const Projects = () => {
  const [filter, setFilter] = useState('all');
  const projects = [{
    id: 1,
    title: 'E-commerce Website',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
    description: 'A full-featured e-commerce platform with product catalog, shopping cart, and payment integration.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com'
  }, {
    id: 2,
    title: 'Task Management App',
    category: 'app',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1939&q=80',
    description: 'A task management application with drag-and-drop functionality, task prioritization, and team collaboration features.',
    technologies: ['React', 'Redux', 'Firebase', 'Material UI'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com'
  }, {
    id: 3,
    title: 'Portfolio Website',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    description: 'A responsive portfolio website showcasing skills and projects with a modern design.',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com'
  }, {
    id: 4,
    title: 'Travel Companion App',
    category: 'app',
    image: 'https://images.unsplash.com/photo-1476900543704-4312b78632f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80',
    description: 'A travel companion app that helps users plan trips, find attractions, and track expenses.',
    technologies: ['React Native', 'Express', 'MongoDB', 'Google Maps API'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com'
  }, {
    id: 5,
    title: 'Real-time Chat Application',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80',
    description: 'A real-time chat application with private messaging, group chats, and file sharing capabilities.',
    technologies: ['React', 'Socket.io', 'Express', 'MongoDB'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com'
  }, {
    id: 6,
    title: 'Weather Dashboard',
    category: 'app',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    description: 'A weather dashboard that displays current conditions and forecasts for multiple locations.',
    technologies: ['React', 'OpenWeather API', 'Chart.js', 'Tailwind CSS'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com'
  }];
  const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.category === filter);
  return <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
        </div>
        <div className="flex justify-center mb-10">
          <div className="flex space-x-2">
            <button onClick={() => setFilter('all')} className={`px-4 py-2 rounded-md transition-colors ${filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
              All
            </button>
            <button onClick={() => setFilter('web')} className={`px-4 py-2 rounded-md transition-colors ${filter === 'web' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
              Web
            </button>
            <button onClick={() => setFilter('app')} className={`px-4 py-2 rounded-md transition-colors ${filter === 'app' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
              App
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => <div key={project.id} className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => <span key={tech} className="px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded">
                      {tech}
                    </span>)}
                </div>
                <div className="flex justify-between">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-primary-600 hover:text-primary-800 font-medium">
                    Live Demo
                    <ExternalLinkIcon size={16} className="ml-1" />
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-gray-900 font-medium">
                    Code
                    <GithubIcon size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};