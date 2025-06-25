'use client';
import React from 'react'
// pages/skills.tsx
import NavBar from '@/components/NavBar';
import Card from '@/components/cards';

export default function SkillsPage() {
  const techStacks = [
    {
      Job: "Frontend Development",
      stat1: "React & Next.js",
      stat2: "TypeScript",
      stat3: "Tailwind CSS",
      stat4: "Redux / Context API",
      stat5: "Responsive Design"
    },
    {
      Job: "Backend Development",
      stat1: "Node.js & Express",
      stat2: "MongoDB / PostgreSQL",
      stat3: "RESTful APIs",
      stat4: "Authentication",
      stat5: "Security Best Practices"
    },
    {
      Job: "DevOps & Deployment",
      stat1: "Docker & Kubernetes",
      stat2: "CI/CD Pipelines",
      stat3: "AWS / Vercel",
      stat4: "Performance Monitoring",
      stat5: "Version Control (Git)"
    }
  ];

  return (
    <main className="w-screen min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b] transition duration-300 overflow-x-hidden text-white">
      
      {/* NavBar */}
      <NavBar />

      {/* Skills Title */}
      <section className="px-5 sm:px-10 mt-20 mb-10 text-center">
        <h1 className="text-xl sm:text-3xl font-bold text-[#9333ea]">{"<Skills />"}</h1>
      </section>

      {/* Grid Layout */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-5 sm:px-10">
        
        {/* Left: Skills Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
          {techStacks.map((stack, idx) => (
            <Card key={idx} {...stack} />
          ))}
        </div>

        {/* Right: Toolbox Section */}
        <div className="bg-[#1e293b] p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-[#9333ea] mb-2">Toolbox</h2>
          <p className="text-sm text-gray-300 mb-4">
            Technologies and tools I regularly work with:
          </p>
          <div className="flex flex-wrap gap-3">
            {[ // Code Editors & IDEs
  "VS Code", "WebStorm", "Neovim",

  // Version Control & Collaboration
  "Git", "GitHub", "GitLab",

  // API & Backend Testing
  "Postman", "Thunder Client", "Insomnia",

  // Containerization & Deployment
  "Docker", "Kubernetes", "Vercel", "Netlify",

  // Design & Prototyping
  "Figma", "Adobe XD", "Canva",

  // OS & Terminal Tools
  "Linux", "WSL", "Oh My Zsh", "Tmux",

  // Code Quality
  "ESLint", "Prettier", "Husky", "Lint-Staged",

  // Performance & Monitoring
  "Chrome DevTools", "Lighthouse", "LogRocket",

  // Productivity
  "Notion", "Trello", "Slack", "Raycast"].map((tool, idx) => (
              <span key={idx} className="bg-[#334155] text-xs text-white font-semibold px-3 py-1 rounded-full shadow">
                {tool}
              </span>
            ))}
          </div>
        </div>
        
      </section>
    </main>
  );
}
