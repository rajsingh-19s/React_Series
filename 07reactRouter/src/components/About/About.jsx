import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-4 text-gray-600 md:px-8 xl:px-4">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12 pr-6">
                      <img
                          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                          React development is carried out by passionate developers
                      </h2>
                      <p className="mt-6 text-gray-600">
                      React development is carried out by passionate developers who build dynamic and efficient user interfaces. With React’s component-based architecture, developers create reusable UI elements, making applications more scalable and maintainable. Its virtual DOM enhances performance by minimizing direct updates to the actual DOM. Passionate React developers leverage hooks, state management libraries, and modern tools like Next.js for server-side rendering. 
                      </p>
                      <p className="mt-4 text-gray-600">
                      They continuously explore best practices, optimize performance, and ensure smooth user experiences. React’s strong community support, vast ecosystem, and flexibility empower developers to craft innovative, high-performing applications, making it a preferred choice for modern web and mobile development.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}