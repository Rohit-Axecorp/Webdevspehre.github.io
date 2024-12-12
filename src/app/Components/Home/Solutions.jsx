"use client";
import React from 'react'
import {
  FaShoppingCart,
  FaRegMoneyBillAlt,
  FaHeartbeat,
  FaGraduationCap,
  FaUsers,
  FaHotel,
  FaMusic,
  FaUniversity,
  FaBuilding,
  FaBriefcase,
  FaTruck,
  FaLaptop,
  FaHandsHelping,
  FaCar,
  FaPlane
} from 'react-icons/fa';

const industries = [
  { name: 'eCommerce', icon: <FaShoppingCart /> },
  { name: 'Fintech', icon: <FaRegMoneyBillAlt /> },
  { name: 'Healthcare', icon: <FaHeartbeat /> },
  { name: 'Education', icon: <FaGraduationCap /> },
  { name: 'Social Networking', icon: <FaUsers /> },
  { name: 'Hospitality', icon: <FaHotel /> },
  { name: 'Entertainment', icon: <FaMusic /> },
  { name: 'Government', icon: <FaUniversity /> },
  { name: 'Real Estate', icon: <FaBuilding /> },
  { name: 'Business', icon: <FaBriefcase /> },
  { name: 'Logistics', icon: <FaTruck /> },
  { name: 'Tech & IT', icon: <FaLaptop /> },
  { name: 'Non-Profit', icon: <FaHandsHelping /> },
  { name: 'Automotive', icon: <FaCar /> },
  { name: 'Travel & Tourism', icon: <FaPlane /> },
];

export default function Solutions() {

  return (
    <>
      <section className='bg-gray-100'>
        <div className="2xl:py-12 py-10 container ">
          <div className="text-center">
            <h3 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold text-black mb-4"><span className='text-[#ED1E3A]'> Offering Versatile Web Solutions </span> Across Diverse Industries
            </h3>
            <p className="2xl:text-lg lg:text-base text-sm text-black leading-7 mb-8">
              Being among the top web development companies, we got the exposure to serve multiple industries across the globe with our innovative web solutions.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 p-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 border rounded-lg text-[#e24156] transition-transform duration-300 hover:text-black hover:scale-105"
              >
                <div className="2xl:text-5xl text-4xl mb-4">{industry.icon}</div>
                <p className="2xl:text-lg lg:text-base text-sm font-medium">{industry.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
