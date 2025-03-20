import React from 'react';
import Image from "next/image";

export default function SeoRecognition() {
  return (
    <section className="relative w-full">
      <div className="relative text-white w-full h-full py-20">
        {/* Background Image */}
        <Image
          src="/Images/top-tier-web.webp"
          alt="City Skyline Background"
          fill
          className="object-cover object-center z-0"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30 z-10" />

        {/* Content aligned right within a container */}
        <div className="relative z-20 mx-auto px-6 flex flex-col lg:flex-row justify-between items-center gap-10 container">
          <div className="w-full lg:w-1/2" /> {/* Empty spacer on left for image alignment */}

          <div className="w-full lg:w-1/2 flex flex-col justify-center text-left gap-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-loose">
              Prioritizing <span className='text-[#ED1E3A]'>Web Innovation with a Strategic Approach</span> - The Hallmark of Our Web Development Agency in London
            </h1>
            <p className="text-base sm:text-lg text-white">
              When it comes to creating next-gen digital solutions, our approach as a web development agency in London revolves around crafting bespoke websites. We begin with a meticulous, data-driven methodology to design and develop websites that remain intuitive and fully functional. Leveraging frameworks like Laravel web development London, we deliver secure and scalable websites that stand out in functionality and user experience. Since we are a London-based trusted web development company, our priority is mobile responsiveness, SEO optimization, and seamless integration with third-party services/API. We use our web development services London to help companies build a strong digital profile and remain competitive in an increasingly dynamic market. What we aim for is evolving your ideas into operational, high-performing web platforms that create lasting value and growth.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button className="bg-[#ED1E3A] hover:bg-[#ED1E3A] text-white font-semibold px-6 py-3 rounded-full">
                Design Your Custom Website with Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}