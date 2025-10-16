import React from 'react';
import { ArrowRightIcon, CalendarIcon, UserIcon } from 'lucide-react';
export const Blog = () => {
  const blogPosts = [{
    id: 1,
    title: 'How to Build Responsive Websites with Tailwind CSS',
    excerpt: 'Learn how to create beautiful, responsive websites quickly using Tailwind CSS utility classes and best practices.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    date: 'June 15, 2023',
    author: 'Mangar Lual Giir',
    category: 'Web Development',
    readTime: '5 min read'
  }, {
    id: 2,
    title: 'The Future of JavaScript: What to Expect in 2024',
    excerpt: 'Explore the upcoming features and trends in JavaScript that will shape web development in the coming year.',
    image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    date: 'July 22, 2023',
    author: 'Mangar Lual Giir',
    category: 'JavaScript',
    readTime: '7 min read'
  }, {
    id: 3,
    title: 'Improving UI/UX: Design Principles Every Developer Should Know',
    excerpt: 'Discover essential design principles that will help you create more user-friendly and visually appealing applications.',
    image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    date: 'August 8, 2023',
    author: 'Mangar Lual Giir',
    category: 'UI/UX Design',
    readTime: '6 min read'
  }];
  return <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            My Blog
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Sharing insights, tutorials, and thoughts on web development,
            design, and technology.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => <article key={post.id} className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-48 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                  <span className="flex items-center">
                    <CalendarIcon size={14} className="mr-1" />
                    {post.date}
                  </span>
                  <span className="flex items-center">
                    <UserIcon size={14} className="mr-1" />
                    {post.author}
                  </span>
                </div>
                <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded mb-3 inline-block">
                  {post.category}
                </span>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                  <a href="#" className="flex items-center text-primary-600 hover:text-primary-800 font-medium transition-colors">
                    Read More
                    <ArrowRightIcon size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </article>)}
        </div>
        <div className="text-center mt-12">
          <a href="#" className="inline-flex items-center px-6 py-3 border border-primary-600 text-primary-600 rounded-md hover:bg-primary-600 hover:text-white transition-colors">
            View All Posts
            <ArrowRightIcon size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>;
};