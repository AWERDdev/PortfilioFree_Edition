'use client';
// pages/projects.tsx
import React from 'react'
import NavBar from '@/components/NavBar';
import ProjectCard from '@/components/ProjectCard';

export default function ProjectsPage() {
  return (
    <main className="w-screen min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b] transition duration-300 overflow-x-hidden">
      <div className="NavBar">
        <NavBar />
      </div>

      <section className="Featured_Projects w-full px-5 sm:px-10 mt-20">
        <div className="Title text-white text-center">
          <h1 className="text-[1rem] sm:text-[2rem] font-bold text-[#9333ea]">Featured Projects</h1>
        </div>

        <div className="Projects grid justify-center md:flex md:justify-evenly mt-10">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-10">
          <a href="#" className="text-[#9333ea] text-sm underline-none hover:text-purple-400">View more on GitHub</a>
        </div>
      </section>
    </main>
  );
}
