"use client";
import React from 'react';

export default function Thankyou() {
  return (
    <section className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="text-center bg-white p-12 shadow-xl rounded-lg max-w-lg w-full">
        <h2 className="text-4xl font-bold text-[#ED1E3A]  mb-6">
          Thank You for Your Submission!
        </h2>
        <p className="text-lg text-gray-600 mb-4">
          We appreciate your interest and will get back to you as soon as possible.
        </p>
        <p className="text-sm text-gray-500 mb-8">
          If you need immediate assistance, feel free to contact us at <a href="tel:+1234567890" className="text-[#ED1E3A]">+1 (234) 567-890</a>.
        </p>
        <div className="flex justify-center">
          <a
            href="/"
            className="inline-block bg-red-600 text-white py-3 px-6 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 transition"
          >
            Back to Homepage
          </a>
        </div>
      </div>
    </section>
  );
}
