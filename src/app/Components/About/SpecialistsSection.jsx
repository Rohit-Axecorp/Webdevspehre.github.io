import React from 'react';
import '../About/SpecialistsSection.css';

export default function SpecialistsSection() {
  return (
    <div className="bg-black py-12">
      <div className="container mx-auto px-5">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-red-500">
            80+ In-House Digital Experts
          </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-7 items-center">
          {/* Senior Specialists */}
          <div className="flex flex-col items-center relative">
            <span className="bg-blue-200 text-black px-3 py-1 text-md font-semibold rounded-md mb-1 animate-around-box animate-senior">
            Hours of Training

            </span>
            <div className="border border-white h-40 w-60 flex items-center justify-center transition-transform transform hover:scale-105">
              <span className="text-white text-5xl font-extrabold">1000+
              </span>
            </div>
          </div>

          {/* Middle Specialists */}
          <div className="flex flex-col items-center relative">
            <span className="bg-teal-300 text-black px-3 py-1 text-md font-semibold rounded-md mb-1 animate-around-box animate-middle">
            Tools & Tech Mastered
            </span>
            <div className="border border-white h-40 w-60 flex items-center justify-center transition-transform transform hover:scale-105">
              <span className="text-white text-5xl font-extrabold">15+</span>
            </div>
          </div>

          {/* Junior Specialists */}
          <div className="flex flex-col items-center relative">
            <span className="bg-red-300 text-black px-3 py-1 text-md font-semibold rounded-md mb-1 animate-around-box animate-junior">
            Certifications Held

            </span>
            <div className="border border-white h-40 w-60 flex items-center justify-center transition-transform transform hover:scale-105">
              <span className="text-white text-5xl font-extrabold">30+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
