import React from 'react';
import { GithubIcon, LinkedinIcon, Twitter, Facebook, Instagram, Phone, HeartIcon } from 'lucide-react';
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold text-primary-500">
              LG
            </a>
            <p className="mt-2 text-gray-400 max-w-xs">
              Creating beautiful digital experiences through code and design.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-500 transition-colors" aria-label="GitHub">
                <GithubIcon size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-500 transition-colors" aria-label="LinkedIn">
                <LinkedinIcon size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-500 transition-colors" aria-label="X (Twitter)">
                <Twitter size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-500 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-500 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://wa.me/254705221297" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-500 transition-colors" aria-label="WhatsApp">
                <Phone size={20} />
              </a>
            </div>
            <div className="flex items-center">
              <span className="text-gray-400">Made with</span>
              <HeartIcon size={16} className="text-primary-500 mx-1" />
              <span className="text-gray-400">by Mangar Lual Giir</span>
            </div>
            <div className="mt-2 text-gray-500 text-sm">
              &copy; {currentYear} All Rights Reserved
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#home" className="hover:text-primary-500 transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-primary-500 transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-primary-500 transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-primary-500 transition-colors">
              Projects
            </a>
            <a href="#testimonials" className="hover:text-primary-500 transition-colors">
              Testimonials
            </a>
            <a href="#blog" className="hover:text-primary-500 transition-colors">
              Blog
            </a>
            <a href="#contact" className="hover:text-primary-500 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>;
};