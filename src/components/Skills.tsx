import React, { useEffect, useRef } from 'react';
export const Skills = () => {
  const skillsRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const progressBars = entry.target.querySelectorAll('.progress-bar');
          progressBars.forEach((bar, index) => {
            setTimeout(() => {
              bar.classList.add('w-full');
            }, index * 100);
          });
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }
    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);
  const frontendSkills = [{
    name: 'React',
    level: 90
  }, {
    name: 'JavaScript',
    level: 85
  }, {
    name: 'TypeScript',
    level: 80
  }, {
    name: 'HTML/CSS',
    level: 95
  }, {
    name: 'Tailwind CSS',
    level: 85
  }];
  const backendSkills = [{
    name: 'Node.js',
    level: 75
  }, {
    name: 'Express',
    level: 80
  }, {
    name: 'MongoDB',
    level: 70
  }, {
    name: 'GraphQL',
    level: 65
  }, {
    name: 'REST APIs',
    level: 85
  }];
  const otherSkills = ['Git', 'Figma', 'Adobe XD', 'Responsive Design', 'Performance Optimization', 'Agile Methodology', 'Unit Testing', 'CI/CD', 'Docker', 'AWS'];
  return <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
        </div>
        <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Frontend Development
            </h3>
            <div className="space-y-6">
              {frontendSkills.map(skill => <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary-600 h-2 rounded-full progress-bar transition-all duration-1000 ease-out" style={{
                  width: '0%',
                  transitionProperty: 'width',
                  '--tw-translate-x': '0',
                  '--tw-translate-y': '0',
                  '--tw-rotate': '0',
                  '--tw-skew-x': '0',
                  '--tw-skew-y': '0',
                  '--tw-scale-x': '1',
                  '--tw-scale-y': '1',
                  transform: 'translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))'
                }} data-width={`${skill.level}%`}></div>
                  </div>
                </div>)}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Backend Development
            </h3>
            <div className="space-y-6">
              {backendSkills.map(skill => <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary-600 h-2 rounded-full progress-bar transition-all duration-1000 ease-out" style={{
                  width: '0%',
                  transitionProperty: 'width',
                  '--tw-translate-x': '0',
                  '--tw-translate-y': '0',
                  '--tw-rotate': '0',
                  '--tw-skew-x': '0',
                  '--tw-skew-y': '0',
                  '--tw-scale-x': '1',
                  '--tw-scale-y': '1',
                  transform: 'translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))'
                }} data-width={`${skill.level}%`}></div>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
            Other Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {otherSkills.map(skill => <span key={skill} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-gray-700 shadow-sm hover:bg-primary-50 hover:border-primary-300 transition-all duration-300">
                {skill}
              </span>)}
          </div>
        </div>
      </div>
    </section>;
};