'use client';
// pages/about.tsx
import React from 'react'
import NavBar from '@/components/NavBar';
import AboutMe from '@/components/AboutMe';

export default function AboutPage() {
  return (
    <main className="w-screen min-h-screen bg-gradient-to-r from-black to-gray-900 text-gray-200 transition duration-300 overflow-x-hidden">
      
      {/* NavBar Section */}
      <NavBar />

      {/* Grid Layout for Timeline and AboutMe */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-5 sm:px-10 mt-16 mb-20">
        
        {/* Timeline Section */}
        <div className="Timeline">
          <h2 className="text-2xl sm:text-3xl font-bold text-green-500 mb-8">
            My Journey
          </h2>
          <ol className="relative border-l-4 border-green-600 ml-4">
            {/* Timeline Item 1 */}
            <li className="mb-12 ml-6">
              <span className="absolute -left-4 w-8 h-8 bg-green-600 rounded-full ring-8 ring-gray-900 animate-pulse flex items-center justify-center" />
              <h3 className="text-lg font-semibold mb-1">
                2023 - Started Learning Programming
              </h3>
              <p className="text-sm text-gray-400">
                Began with HTML, CSS, and JavaScript, exploring the basics of web development.
              </p>
            </li>
            {/* Timeline Item 2 */}
            <li className="mb-12 ml-6">
              <span className="absolute -left-4 w-8 h-8 bg-green-600 rounded-full ring-8 ring-gray-900 animate-pulse flex items-center justify-center" />
              <h3 className="text-lg font-semibold mb-1">
                2024 - Full Stack Exploration
              </h3>
              <p className="text-sm text-gray-400">
                Built full stack projects with React, Node.js, MongoDB, and learned version control with Git.
              </p>
            </li>
            {/* Timeline Item 3 */}
            <li className="ml-6">
              <span className="absolute -left-4 w-8 h-8 bg-green-600 rounded-full ring-8 ring-gray-900 animate-pulse flex items-center justify-center" />
              <h3 className="text-lg font-semibold mb-1">
                Now - Building and Learning
              </h3>
              <p className="text-sm text-gray-400">
                Working on personal projects, expanding into DevOps, and improving skills in algorithms and system design.
              </p>
            </li>
          </ol>
        </div>

        {/* About Me Section */}
        <div className="AboutMe">
          <AboutMe />
        </div>
      </section>
    </main>
  );
}
