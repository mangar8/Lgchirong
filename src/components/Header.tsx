import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navItems = [{
    name: 'Home',
    href: '#home'
  }, {
    name: 'About',
    href: '#about'
  }, {
    name: 'Skills',
    href: '#skills'
  }, {
    name: 'Projects',
    href: '#projects'
  }, {
    name: 'Testimonials',
    href: '#testimonials'
  }, {
    name: 'Blog',
    href: '#blog'
  }, {
    name: 'Contact',
    href: '#contact'
  }];
  return <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-primary-600">
          LG
        </a>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map(item => <a key={item.name} href={item.href} className="text-gray-600 hover:text-primary-600 font-medium transition-colors">
              {item.name}
            </a>)}
        </nav>
        {/* Mobile Navigation Toggle */}
        <button className="md:hidden text-gray-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile Navigation Menu */}
      {isMenuOpen && <div className="md:hidden bg-white w-full py-4 px-6 shadow-md">
          <nav className="flex flex-col space-y-4">
            {navItems.map(item => <a key={item.name} href={item.href} className="text-gray-600 hover:text-primary-600 font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>
                {item.name}
              </a>)}
          </nav>
        </div>}
    </header>;
};