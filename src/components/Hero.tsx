import React, { useEffect } from 'react';
import { ArrowDownIcon, GithubIcon, LinkedinIcon, Facebook, Instagram, Twitter, Phone, MessageSquare } from 'lucide-react';
export const Hero = () => {
  useEffect(() => {
    // Simple animation on load
    const animateElements = () => {
      const elements = document.querySelectorAll('.animate-on-load');
      elements.forEach((element, index) => {
        setTimeout(() => {
          element.classList.add('opacity-100', 'translate-y-0');
          element.classList.remove('opacity-0', 'translate-y-4');
        }, index * 200);
      });
    };
    animateElements();
  }, []);
  return <section id="home" className="w-full bg-gradient-to-b from-primary-50 to-white pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2">
            <p className="text-primary-600 font-medium mb-2 animate-on-load opacity-0 translate-y-4 transition-all duration-500">
              Hello, I'm
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 animate-on-load opacity-0 translate-y-4 transition-all duration-500 delay-100">
              Mangar Lual Giir
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 mb-6 animate-on-load opacity-0 translate-y-4 transition-all duration-500 delay-200">
              Full Stack Developer & UI/UX Designer
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg animate-on-load opacity-0 translate-y-4 transition-all duration-500 delay-300">
              I create beautiful, functional websites and applications with
              focus on user experience and clean code.
            </p>
            <div className="flex flex-wrap gap-4 animate-on-load opacity-0 translate-y-4 transition-all duration-500 delay-400">
              <a href="#contact" className="px-6 py-3 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors">
                Contact Me
              </a>
              <a href="#projects" className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition-colors">
                View My Work
              </a>
            </div>
            <div className="mt-8 flex items-center gap-4 animate-on-load opacity-0 translate-y-4 transition-all duration-500 delay-500">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-600 transition-colors" aria-label="GitHub">
                <GithubIcon size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-600 transition-colors" aria-label="LinkedIn">
                <LinkedinIcon size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-600 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-600 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-600 transition-colors" aria-label="X (Twitter)">
                <Twitter size={20} />
              </a>
              <a href="https://wa.me/254705221297" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-600 transition-colors" aria-label="WhatsApp">
                <Phone size={20} />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-600 transition-colors" aria-label="TikTok">
                <MessageSquare size={20} />
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center animate-on-load opacity-0 translate-y-4 transition-all duration-500 delay-200">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img src="/mangar.jpg" alt="Mangar Lual Giir" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
        <div className="mt-16 flex justify-center animate-on-load opacity-0 translate-y-4 transition-all duration-500 delay-600">
          <a href="#about" className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 text-gray-600 hover:text-primary-600 hover:border-primary-600 transition-colors">
            <ArrowDownIcon size={20} />
          </a>
        </div>
      </div>
    </section>;
};