'use client';
// pages/contact.tsx
import React from 'react'
import NavBar from '@/components/NavBar';
import GetInTouch from '@/components/GetInTouch';

export default function ContactPage() {
  return (
    <main className="w-screen min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b] transition duration-300 overflow-x-hidden">
      <div className="NavBar">
        <NavBar />
      </div>

      <section className="Contact mt-20 px-5 sm:px-10">
        <div className="text-white">
          <GetInTouch />

        </div>
      </section>
    </main>
  );
}
