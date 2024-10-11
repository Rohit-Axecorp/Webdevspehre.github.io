import React from 'react';
import '../About/SpecialistsSection.css'

export default function SpecialistsSection() {
  return (
    <>
    <div className="bg-black py-12">
  <div className="container">
    <div className="text-center mb-10">
      <h2 className="text-6xl font-bold text-red-500">
        70+ In-House Specialists
      </h2>
    </div>

    <div className="flex justify-center gap-7 items-center">
      {/* Senior Specialists */}
      <div className="flex flex-col items-center relative">
        <span className="bg-blue-200 text-black px-3 py-1 text-md font-semibold rounded-md mb-1 animate-around-box animate-senior">SENIOR</span>
        <div className="border border-white h-32 w-36 flex items-center justify-center">
          <span className="text-white text-5xl font-extrabold">55%</span>
        </div>
      </div>

      {/* Middle Specialists */}
      <div className="flex flex-col items-center relative">
        <span className="bg-teal-300 text-black px-3 py-1 text-md font-semibold rounded-md mb-1 animate-around-box animate-middle">MIDDLE</span>
        <div className="border border-white h-32 w-36 flex items-center justify-center">
          <span className="text-white text-5xl font-extrabold">30%</span>
        </div>
      </div>

      {/* Junior Specialists */}
      <div className="flex flex-col items-center relative">
        <span className="bg-red-300 text-black px-3 py-1 text-md font-semibold rounded-md mb-1 animate-around-box animate-junior">JUNIOR</span>
        <div className="border border-white h-32 w-36 flex items-center justify-center">
          <span className="text-white text-5xl font-extrabold">15%</span>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  );
}
