"use client";
import React, { useState } from "react";
import "../Home/ContactForm.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, website } = formData;
    const subject = "Contact Form Submission";
    const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nWebsite: ${website}`;
    const mailtoLink = `mailto:singhaniarohitram77@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open the user's email client
    window.location.href = mailtoLink;
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col lg:flex-row bg-[#ED1E3A] p-6 shadow-lg relative container sm:p-8  w-full lg:w-auto">
        {/* Form Section */}
        <div className="bg-white p-6 shadow-md w-full lg:w-2/5 h-auto sm:p-8">
          <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
            {/* Name Field */}
            <div>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Name*"
                value={formData.name}
                onChange={handleChange}
                className="w-full border-b border-gray-300 py-3 sm:py-4 px-4 focus:ring-0 focus:border-b-[#ED1E3A] text-black text-base sm:text-lg"
              />
            </div>

            {/* Email Field */}
            <div>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Email*"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-b border-gray-300 py-3 sm:py-4 px-4 focus:ring-0 focus:border-b-[#ED1E3A] text-black text-base sm:text-lg"
              />
            </div>

            {/* Phone Field */}
            <div>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                placeholder="Phone*"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border-b border-gray-300 py-3 sm:py-4 px-4 focus:ring-0 focus:border-b-[#ED1E3A] text-black text-base sm:text-lg"
              />
            </div>

            {/* Website Field */}
            <div>
              <input
                type="url"
                id="website"
                name="website"
                placeholder="Website"
                value={formData.website}
                onChange={handleChange}
                className="w-full border-b border-gray-300 py-3 sm:py-4 px-4 focus:ring-0 focus:border-b-[#ED1E3A] text-black text-base sm:text-lg"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center lg:justify-start">
              <button
                type="submit"
                className="w-3/4 2xl:w-2/5 bg-[#ED1E3A] 2xl:text-lg lg:text-base text-sm rounded-md text-white font-semibold py-3 px-2 hover:bg-red-600 transition"
              >
                Get A Free Quote
              </button>
            </div>
          </form>
          <p className="mt-4 2xl:text-lg lg:text-base text-sm text-gray-500 text-center lg:text-left">
            We respect your privacy.
          </p>
        </div>

        {/* Text and Image Section */}
        <div className="relative w-full lg:w-3/5 flex flex-col lg:flex-row items-start lg:items-center">
          <div className="text-white w-full lg:w-2/3 p-4 sm:p-6">
            <p className="2xl:text-lg lg:text-base text-sm font-light">
              <b>No empty promises. Just real results</b>
            </p>
            <p className="2xl:text-lg lg:text-base text-sm font-light">

              Our clients see an impressive 2-3x ROI when they partner with us for digital marketing services - and you can, too.
            </p>
            <ul className="list-disc ml-6 mt-4">
              <li className="2xl:text-lg lg:text-base text-sm font-light mb-2">
                Maximize your online visibility
              </li>
              <li className="2xl:text-lg lg:text-base text-sm font-light mb-2">
                Outperform the competition effortlessly
              </li>
              <li className="2xl:text-lg lg:text-base text-sm font-light mb-2">
                Drive up conversion rates
              </li>
              <li className="2xl:text-lg lg:text-base text-sm font-light mb-2">
                Monitor and optimize with precision
              </li>
              <li className="2xl:text-lg lg:text-base text-sm font-light mb-2">
                Lower acquisition costs effectively
              </li>
            </ul>
          </div>

          {/* Girl Image */}
          <div className="relative w-full lg:w-1/3 mt-0">
            <img
              src="/Images/model1.webp" // Use the correct path to your image
              alt="Woman pointing"
              className="h-auto max-w-full lg:block hidden" // Ensure responsive behavior
            />
          </div>
        </div>
      </div>
    </div>
  );
}
