"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const allProjects = [
  { id: 1, category: 'E-Commerce', src: '/Images/ecommerce1.jpg' },
  { id: 2, category: 'E-Commerce', src: '/Images/ecommerce2.jpg' },
  { id: 3, category: 'E-Commerce', src: '/Images/ecommerce3.jpg' },
  { id: 4, category: 'E-Commerce', src: '/Images/ecommerce4.jpeg' },
  { id: 5, category: 'Custom Development', src: '/Images/custom-development1.jpg' },
  { id: 6, category: 'Custom Development', src: '/Images/custom-development2.jpg' },
  { id: 7, category: 'Custom Development', src: '/Images/custom-development3.jpg' },
  { id: 8, category: 'Custom Development', src: '/Images/custom-development4.jpg' },
  { id: 9, category: 'Custom Development', src: '/Images/custom-development5.jpg' },
  { id: 10, category: 'Custom Development', src: '/Images/custom-development6.jpg' },
  { id: 11, category: 'Custom Development', src: '/Images/custom-development7.jpg' },
  { id: 12, category: 'Custom Development', src: '/Images/custom-development8.jpg' },
  { id: 13, category: 'Custom Development', src: '/Images/custom-development9.jpg' },
  { id: 14, category: 'Custom Development', src: '/Images/custom-development10.jpg' },
  { id: 15, category: 'Custom Development', src: '/Images/custom-development11.jpg' },
  { id: 16, category: 'Custom Development', src: '/Images/custom-development12.jpg' },
  { id: 17, category: 'Custom Development', src: '/Images/custom-development13.png' },
  { id: 18, category: 'Custom Development', src: '/Images/custom-development14.jpg' },
  { id: 19, category: 'Custom Development', src: '/Images/custom-development15.png' },
  { id: 20, category: 'Custom Development', src: '/Images/custom-development16.jpg' },
  { id: 21, category: 'Custom Development', src: '/Images/custom-development17.jpg' },
  { id: 22, category: 'Custom Development', src: '/Images/custom-development18.jpg' },
  { id: 23, category: 'Custom Development', src: '/Images/custom-development19.jpg' },
  { id: 24, category: 'Custom Development', src: '/Images/custom-development20.jpg' },
  { id: 25, category: 'Custom Development', src: '/Images/custom-development21.jpg' },
  { id: 26, category: 'Custom Development', src: '/Images/custom-development22.jpg' },
  { id: 27, category: 'Custom Development', src: '/Images/custom-development23.jpg' },
  { id: 28, category: 'Custom Development', src: '/Images/custom-development24.jpg' },
  { id: 29, category: 'Custom Development', src: '/Images/custom-development25.jpg' },
  { id: 30, category: 'Semi-Custom', src: '/Images/semi-custom1.jpg' },
  { id: 31, category: 'Semi-Custom', src: '/Images/semi-custom2.jpg' },
  { id: 32, category: 'Semi-Custom', src: '/Images/semi-custom3.jpg' },
  { id: 33, category: 'Semi-Custom', src: '/Images/semi-custom4.jpeg' },
  { id: 34, category: 'Semi-Custom', src: '/Images/semi-custom5.jpg' },
  { id: 35, category: 'Semi-Custom', src: '/Images/semi-custom6.jpg' },
  { id: 36, category: 'Digital Marketing', src: '/Images/digital-marketing1.jpg' },
  { id: 37, category: 'Digital Marketing', src: '/Images/digital-marketing2.jpg' },
  { id: 38, category: 'Digital Marketing', src: '/Images/digital-marketing3.jpg' },
  { id: 39, category: 'Digital Marketing', src: '/Images/digital-marketing4.jpg' },
  { id: 40, category: 'Digital Marketing', src: '/Images/digital-marketing5.jpg' },
  { id: 41, category: 'Digital Marketing', src: '/Images/digital-marketing6.jpg' },
];

const categories = ['All', 'E-Commerce', 'Custom Development', 'Semi-Custom', 'Digital Marketing'];

export default function PortfolioSection03() {
  const [activeTab, setActiveTab] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 9;

  const filteredProjects = activeTab === 'All'
    ? allProjects
    : allProjects.filter(item => item.category === activeTab);

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const currentItems = filteredProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleTabChange = (cat) => {
    setLoading(true);
    setTimeout(() => {
      setActiveTab(cat);
      setCurrentPage(1);
      setLoading(false);
    }, 500);
  };

  return (
    <section className='py-10 2xl:py-12 bg-gray-100'>
      <div className="pb-10 2xl:pb-12">
        <div className="container mx-auto text-center px-4 md:px-5">
          <h2 className="text-3xl lg:text-4xl 2xl:text-5xl font-extrabold 2xl:mb-4 text-[#ED1E3A] py-4">
            Transforming Ideas into Digital Masterpieces<br />
            <span className="font-medium text-black">
              Our Web Development Company Portfolio
            </span>
          </h2>
          <p className="2xl:text-lg lg:text-base text-sm text-gray-600 leading-7 mx-auto max-w-5xl">
            At WebDev Sphere, we pride ourselves on being a versatile web design and development company, crafting tailor-made digital solutions that stand out in the industry. From dynamic eCommerce platforms to sleek corporate websites, our projects reflect creativity and innovation. As the best <a href='https://webdevsphere.com/' className="underline text-[#ED1E3A]">Web Development Company</a>, we bring your vision to life with a perfect blend of functionality and aesthetic appeal, ensuring every project is unique and impactful.
          </p>
        </div>
      </div>

      <div className="flex justify-center flex-wrap gap-3 mb-10">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => handleTabChange(cat)}
            className={`px-4 py-2 rounded-full border font-semibold uppercase text-xs tracking-wide ${
              activeTab === cat ? 'bg-[#ED1E3A] text-white' : 'bg-[#f1f1f1] text-black'
            } transition duration-200`}
          >
            {cat}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="w-8 h-8 rounded-full border-4 border-t-transparent border-r-transparent border-[#ED1E3A] animate-spin" />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 px-4 container mx-auto">
            {currentItems.map((item) => (
              <div
                key={item.id}
                className="relative group overflow-hidden h-60 2xl:h-80 rounded-xl shadow-sm"
              >
                <Image
                  src={item.src}
                  alt={`Portfolio ${item.id}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-10">
              {[...Array(totalPages)].map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(idx + 1)}
                  className={`w-8 h-8 rounded-full border ${
                    currentPage === idx + 1 ? 'bg-[#ED1E3A] text-white' : 'border-gray-300 text-gray-700'
                  } transition`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
          )}
        </>
      )}
    </section>
  );
}