import React, { useEffect, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from 'lucide-react';
export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = [{
    id: 1,
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    company: 'TechCorp',
    content: 'Working with Mangar was an absolute pleasure. He understood our requirements perfectly and delivered a website that exceeded our expectations. His attention to detail and creative solutions helped us increase our conversion rate by 40%.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80',
    rating: 5
  }, {
    id: 2,
    name: 'Michael Chen',
    role: 'Founder & CEO',
    company: 'StartupX',
    content: 'Mangar brought our vision to life with his exceptional development skills. The website he built for us is not only visually stunning but also performs brilliantly. His technical expertise and problem-solving abilities are truly impressive.',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80',
    rating: 5
  }, {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Product Manager',
    company: 'InnovateTech',
    content: "I've worked with many developers, but Mangar stands out for his professionalism and dedication. He doesn't just code; he contributes valuable insights that improved our product significantly. I wouldn't hesitate to work with him again.",
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80',
    rating: 5
  }];
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(current => (current + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [testimonials.length]);
  const handlePrev = () => {
    setActiveIndex(current => (current - 1 + testimonials.length) % testimonials.length);
  };
  const handleNext = () => {
    setActiveIndex(current => (current + 1) % testimonials.length);
  };
  return <section id="testimonials" className="py-20 bg-primary-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Testimonials
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Here's what some of my clients have to say about working with me.
          </p>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" style={{
            transform: `translateX(-${activeIndex * 100}%)`
          }}>
              {testimonials.map(testimonial => <div key={testimonial.id} className="min-w-full px-4">
                  <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => <StarIcon key={i} className="text-yellow-400 w-6 h-6 fill-current" />)}
                    </div>
                    <blockquote className="text-gray-600 text-center text-lg md:text-xl italic mb-8">
                      "{testimonial.content}"
                    </blockquote>
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                        <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="text-center">
                        <h4 className="font-semibold text-gray-900">
                          {testimonial.name}
                        </h4>
                        <p className="text-primary-600">
                          {testimonial.role} at {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
          <button onClick={handlePrev} className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-3 md:-translate-x-6 bg-white rounded-full p-2 shadow-md text-primary-600 hover:text-primary-800 focus:outline-none" aria-label="Previous testimonial">
            <ChevronLeftIcon size={24} />
          </button>
          <button onClick={handleNext} className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-3 md:translate-x-6 bg-white rounded-full p-2 shadow-md text-primary-600 hover:text-primary-800 focus:outline-none" aria-label="Next testimonial">
            <ChevronRightIcon size={24} />
          </button>
          <div className="flex justify-center mt-8">
            {testimonials.map((_, i) => <button key={i} onClick={() => setActiveIndex(i)} className={`w-3 h-3 mx-1 rounded-full ${activeIndex === i ? 'bg-primary-600' : 'bg-gray-300'}`} aria-label={`Go to testimonial ${i + 1}`} />)}
          </div>
        </div>
      </div>
    </section>;
};