"use client";

import React, { useState } from "react";

export default function WebDesignAgency() {
  const [selectedGoal, setSelectedGoal] = useState("More leads and/or sales");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="bg-white py-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          {/* Left Side: Text and Button */}
          <div className="md:w-1/2 md:text-left mb-6 md:mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Web Design Agency</h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6">
              Our Web Design Services Will Help You Attract More Clients and
              Grow
            </p>
            <div className="mb-4">
              <label className="block text-lg font-medium mb-2" htmlFor="goals">
                Select goals you want to achieve
              </label>
              <select
                id="goals"
                className="block w-full md:w-auto p-3 bg-gray-100 border border-gray-300 rounded-md text-lg"
                value={selectedGoal}
                onChange={(e) => setSelectedGoal(e.target.value)}
              >
                <option value="More leads and/or sales">
                  More leads and/or sales
                </option>
                <option value="Better user experience">
                  Better user experience
                </option>
                <option value="Increased brand awareness">
                  Increased brand awareness
                </option>
              </select>
            </div>
            <button className="bg-red-500 text-white px-6 py-3 rounded-md text-lg">
              Get Free Consultation
            </button>
          </div>

          {/* Right Side: Video Thumbnail with Play Icon and Text */}
          <div className="md:w-1/2 flex flex-col items-center relative">
            <img
              src="/Images/Comrade-Digital-Marketing-Team-of-Experts.webp" // Thumbnail image path
              alt="Video Thumbnail"
              width={600}
              height={350}
              className="rounded-lg cursor-pointer mb-4"
              onClick={handleOpenModal}
            />

            {/* Play Icon and Watch Our Reel Text */}
            <div
  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
  onClick={handleOpenModal}
>
  <div className="flex flex-col items-center">
    <div className="bg-red-500 p-4 rounded-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14.752 11.168l-5.304-3.012A1 1 0 008 9.058v5.884a1 1 0 001.448.894l5.304-3.012a1 1 0 000-1.788z"
        />
      </svg>
    </div>
    <span className="mt-2 text-white text-lg font-medium">
      Watch Our Reel
    </span>
  </div>
</div>


            {/* Lightbox Modal */}
            {isModalOpen && (
              <div
                className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                onClick={handleCloseModal}
              >
                <div className="relative w-full max-w-4xl mx-auto">
                  <iframe
                    id="video"
                    width="100%"
                    height="500px"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" // Placeholder YouTube link with autoplay
                    title="YouTube video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg"
                  ></iframe>
                </div>

                {/* Close Button */}
                <button
                  className="absolute top-0 right-0 p-4 text-white text-2xl"
                  onClick={handleCloseModal}
                >
                  &times;
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
