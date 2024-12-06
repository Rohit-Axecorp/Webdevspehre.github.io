"use client";

import React from 'react';
export default function Process() {
  const steps = [
    {
      title: 'Planning',
      imgSrc: '/Images/card1.svg',
      tasks: [
        'Conducting business analysis',
        'Drafting detailed specifications',
        'Creating wireframes',
        'Securing client approval',
      ],
    },
    {
      title: 'Development',
      imgSrc: '/Images/card2.svg',
      tasks: [
        'Writing code',
        'Designing mockups and page layouts',
        'Iterative review',
        'Final approval cycle',
      ],
    },
    {
      title: 'Testing',
      imgSrc: '/Images/card3.svg',
      tasks: [
        'Developing test cases',
        'Executing tests',
        'QA team review',
        'Approval process',
      ],
    },
    {
      title: 'Deployment',
      imgSrc: '/Images/card4.svg',
      tasks: [
        'Launching the website',
        'Monitoring feedback',
        'Ongoing maintenance',
        'Post-launch support',
      ],
    },
  ];

  return (
    <>
      {/* Main Section */}
      <section className="2xl:py-12 py-10 bg-gray-100">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="content md:w-1/2 mb-8">
            <h3 className="text-[#ED1E3A]xl lg:text-4xl 2xl:text-5xl font-bold mb-4">
            <span className='text-[#ED1E3A]'> Proven Process, Exceptional Results </span>
               Our Web Development Approach
            </h3>
            <p className="2xl:text-lg lg:text-base text-sm text-black leading-7 mb-8">
              We are known as a trusted web design and development company, highly different from other companies because we have a streamlined process. Every stage from in-depth planning to superb execution is meticulously prepared to give you a seamless and impactful solution. We are a top web development company that values transparency and collaboration, and expertise that resonates with your vision and provides an outstanding site. We not only improve efficiency but also reach the feasibility and functionality of your website, and it becomes a powerful tool for your business growth.
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
      <section className="2xl:py-12 py-10">
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
                  <div className="transition-all duration-300 transform group-hover:scale-110 bg-[#ED1E3A] p-4 rounded-lg">
                    <img
                      src={step.imgSrc}
                      alt={step.title}
                      className="filter grayscale transition-all duration-300 w-12 h-12 2xl:w-16 2xl:h-16"
                    />
                  </div>
                </div>
                {/* Step Title */}
                <h3 className="text-black text-xl lg:text-2xl font-bold text-left mb-4">
                  {step.title}
                </h3>
                {/* Task List */}
                <ul className="2xl:pl-5 text-left text-lg lg:text-xl">
                  {step.tasks.map((task, taskIndex) => (
                    <li
                      key={taskIndex}
                      className="2xl:text-lg lg:text-base text-sm text-gray-900 mb-2 relative pl-6 before:content-['▶'] before:absolute before:left-0 before:text-gray-300 transition-all duration-300 group-hover:before:text-[#ED1E3A]"
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
