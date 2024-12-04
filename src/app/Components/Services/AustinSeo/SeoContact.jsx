"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import emailjs from '@emailjs/browser';

export default function SeoContact() {
  const [status, setStatus] = useState(''); // State for form submission status

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Submitting...');

    const form = e.target; // Get the form element from the event

    // EmailJS sendForm function
    emailjs
      .sendForm(
        'service_tkgmq1n', // Replace with your EmailJS Service ID
        'template_8ropllh', // Replace with your EmailJS Template ID
        form, // Pass the form directly
        'EPC2a3mKlO9EkFTOz' // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setStatus(''); // Clear status
          form.reset(); // Reset the form fields after submission

          // Redirect to the thank-you page
          window.location.href = '/thankyou'; // Replace with your thank-you page route
        },
        (err) => {
          console.error('FAILED...', err);
          setStatus('Failed to submit the form. Please try again.');
        }
      );
  };

  return (
    <>
      <section className="bg-gray-100">
        <div className="container mx-auto flex flex-col md:flex-row md:gap-10 items-center justify-between py-12 px-4">
          {/* Left Section */}
          <div className="md:w-1/2 w-full mb-8 md:mb-0">
            <h1 className="text-xl font-bold text-red-600 mb-2">AUSTIN SEO COMPANY</h1>
            <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Increase Organic Traffic with Expert Austin SEO Services
            </p>
            <p className="mb-6 text-base md:text-lg text-gray-800">
              Web Dev Sphere is an award-winning{' '}
              <a href="/austin-seo-company">Austin SEO company</a> specializing in personalized SEO
              solutions. Our Austin, Texas, SEO team optimizes your online presence so you can grow
              your traffic and improve your website&apos;s ranking.
            </p>
            <div className="flex items-center my-8">
              <div className="flex items-center mr-4 bg-[#ED1E3A] p-5 rounded-md">
                <Image src="/Images/bannerLogo.webp" alt="Clutch 2021" width={550} height={150} />
              </div>
            </div>
            <button className="group mt-6 relative px-6 py-3 border border-black rounded-full text-base sm:text-lg flex items-center justify-center gap-2 text-[#ED1E3A] transition-all duration-300 hover:bg-[#ED1E3A] hover:text-white hover:border-transparent">
              Free Consultation
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 transform group-hover:translate-x-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </button>
          </div>

          {/* Right Section: Contact Form */}
          <div className="md:w-1/2 w-full p-6 bg-white shadow-lg rounded-lg">
            <h5 className="text-xl font-bold text-gray-800 mb-6 text-center">
              Contact Austin SEO Experts
            </h5>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:space-x-4">
                  <div className="w-full md:w-1/2">
                    <input
                      name="first_name2"
                      type="text"
                      className="w-full p-3 border rounded-md placeholder-gray-400 focus:border-[#ED1E3A] focus:ring-2 focus:ring-red-200 transition"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <input
                      name="last_name2"
                      type="text"
                      className="w-full p-3 border rounded-md placeholder-gray-400 focus:border-[#ED1E3A] focus:ring-2 focus:ring-red-200 transition"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <input
                    name="email2"
                    type="email"
                    className="w-full p-3 border rounded-md placeholder-gray-400 focus:border-[#ED1E3A] focus:ring-2 focus:ring-red-200 transition"
                    placeholder="Email"
                    required
                  />
                </div>

                <div>
                  <input
                    name="phone"
                    type="tel"
                    className="w-full p-3 border rounded-md placeholder-gray-400 focus:border-[#ED1E3A] focus:ring-2 focus:ring-red-200 transition"
                    placeholder="Phone"
                    required
                  />
                </div>

                <div>
                  <input
                    name="company_name"
                    type="text"
                    className="w-full p-3 border rounded-md placeholder-gray-400 focus:border-[#ED1E3A] focus:ring-2 focus:ring-red-200 transition"
                    placeholder="Company Name"
                    required
                  />
                </div>

                <div>
                  <select
                    name="industry"
                    className="w-full p-3 border rounded-md text-gray-500 focus:border-[#ED1E3A] focus:ring-2 focus:ring-red-200 transition"
                  >
                    <option className="text-gray-400">Industry</option>
                    <option>Healthcare</option>
                    <option>Education</option>
                    <option>Finance</option>
                    <option>Technology</option>
                  </select>
                </div>

                <div>
                  <select
                    name="help"
                    className="w-full p-3 border rounded-md text-gray-500 focus:border-[#ED1E3A] focus:ring-2 focus:ring-red-200 transition"
                  >
                    <option className="text-gray-400">What can we help you with?</option>
                    <option>SEO Audit</option>
                    <option>Link Building</option>
                    <option>Content Marketing</option>
                    <option>SEO Strategy</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#ED1E3A] text-white p-3 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600 transition mt-6"
                >
                  Schedule a 30-minute Call Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
