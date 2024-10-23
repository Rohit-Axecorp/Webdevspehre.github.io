"use client";

import React from 'react';
export default function Process() {
  const steps = [
    {
      title: 'Planning',
      imgSrc: '/Images/card1.svg',
      tasks: [
        'Business analysis',
        'Document specifications',
        'Preparing wireframes',
        'Getting client approval',
      ],
    },
    {
      title: 'Development',
      imgSrc: '/Images/card2.svg',
      tasks: [
        'Coding',
        'Mockup & page layout creation',
        'Review',
        'Approval cycle',
      ],
    },
    {
      title: 'Testing',
      imgSrc: '/Images/card3.svg',
      tasks: [
        'Preparing test cases',
        'Testing',
        'Review by the QA team',
        'Approval cycle',
      ],
    },
    {
      title: 'Deployment',
      imgSrc: '/Images/card4.svg',
      tasks: [
        'Launch',
        'Opinion monitoring',
        'Maintenance',
        'Post-deployment support',
      ],
    },
  ];

  return (
    <>
      {/* Main Section */}
      <section className="py-12 bg-gray-100">
  <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
    <div className="content md:w-1/2 mb-8">
      <h2 className="text-2xl md:text-5xl font-bold mb-4">
        Elevate Your Web Experience With Our Seamless Process
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8">
        Our process involves in-depth business analysis, documenting specifications, creating wireframes, and obtaining your approval before moving forward. Our seasoned web experts guide you through every step of the journey, right till the end, ensuring your website aligns with your brand’s objectives. Your vision deserves nothing less than perfection, and that&apos;s exactly what our process is designed to achieve.
      </p>
    </div>

    <div className="image md:w-1/2 flex md:justify-end ">
      <img
        src="/Images/who.jpg"
        alt="Process Image"
        className="rounded-lg shadow-lg md:w-4/5 w-full"
      />
    </div>
  </div>
</section>


      {/* Process Steps Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="p-6 rounded-lg shadow-lg hover:bg-gray-200 transition-all duration-300 group"
              >
                {/* Image Container */}
                <div className="text-left mb-4 flex">
                  <div className="transition-all duration-300 transform group-hover:scale-110 bg-gray-300 p-4 rounded-lg group-hover:bg-red-500">
                    <img
                      src={step.imgSrc}
                      alt={step.title}
                      className="filter grayscale transition-all duration-300 w-12 h-12 md:w-16 md:h-16"
                    />
                  </div>
                </div>
                {/* Step Title */}
                <h3 className="text-black text-xl lg:text-2xl font-bold text-left mb-4">
                  {step.title}
                </h3>
                {/* Task List */}
                <ul className="pl-5 text-left text-lg lg:text-xl">
                  {step.tasks.map((task, taskIndex) => (
                    <li
                      key={taskIndex}
                      className="text-gray-900 mb-2 relative pl-6 before:content-['▶'] before:absolute before:left-0 before:text-gray-300 transition-all duration-300 group-hover:before:text-red-500"
                    >
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
