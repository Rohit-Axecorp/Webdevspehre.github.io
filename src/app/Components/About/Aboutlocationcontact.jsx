"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function AboutLocationContact() {
  const [status, setStatus] = useState(""); // State for form submission status

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    const form = e.target; // Get the form element from the event

    // EmailJS sendForm function
    emailjs
      .sendForm(
        "service_tkgmq1n", // Replace with your EmailJS Service ID
        "template_w3r9t2m", // Replace with your EmailJS Template ID
        form, // Pass the form directly
        "EPC2a3mKlO9EkFTOz" // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus(""); // Clear status
          form.reset(); // Reset the form fields after submission

          // Redirect to the thank-you page
          window.location.href = "/thankyou"; // Replace with your thank-you page route
        },
        (err) => {
          console.error("FAILED...", err);
          setStatus("Failed to submit the form. Please try again.");
        }
      );
  };

  return (
    <section className="bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row py-12 justify-between">
        <div className="formdiv md:w-2/5 mb-10 md:mb-0 flex flex-col">
          <h2 className=" lg:text-4xl 2xl:text-5xl font-bold text-[#ED1E3A] mb-10">
            Let&apos;s Begin On Your Project
          </h2>
          <div className="p-6 bg-white shadow-lg rounded-lg flex-grow">
            <form onSubmit={handleSubmit} className="p-6 border-2 rounded-lg space-y-6 border-[#ED1E3A]">
              <h2 className="text-2xl font-bold text-center text-[#ED1E3A]">Get Free Consultation</h2>

              {/* Input Fields */}
              <div className="flex space-x-4">
                <input
                  type="text"
                  name="name"
                  className="w-1/2 p-3 border rounded-md placeholder-gray-400 focus:border-[#ED1E3A] focus:ring-2 focus:ring-red-200 transition"
                  placeholder="Enter your name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  className="w-1/2 p-3 border rounded-md placeholder-gray-400 focus:border-[#ED1E3A] focus:ring-2 focus:ring-red-200 transition"
                  placeholder="Enter email here"
                  required
                />
              </div>

              <div className="flex space-x-4">
                <div className="flex items-center w-1/2 space-x-2 border rounded-md p-3">
                  <select
                    name="countryCode"
                    className="border-none focus:outline-none"
                    required
                  >
                    <option value="+92">+92</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                  </select>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full placeholder-gray-400 focus:outline-none"
                    placeholder="Phone Num"
                    required
                  />
                </div>
                <select
                  name="service"
                  className="w-1/2 p-3 border rounded-md placeholder-gray-400 focus:border-[#ED1E3A] focus:ring-2 focus:ring-red-200 transition"
                  required
                >
                  <option disabled selected>
                    Interested In
                  </option>
                  <option value="seo">SEO</option>
                  <option value="smm">SMM</option>
                  <option value="ppc">PPC</option>
                  <option value="local-search-marketing">Local Search Marketing</option>
                  <option value="website-content">Website Content</option>
                  <option value="link-building">Link Building</option>
                  <option value="reseller-program">Reseller Program</option>
                </select>
              </div>

              <input
                type="text"
                name="website"
                className="w-full p-3 border rounded-md placeholder-gray-400 focus:border-[#ED1E3A] focus:ring-2 focus:ring-red-200 transition"
                placeholder="Enter website"
                required
              />

              <textarea
                name="message"
                className="w-full p-3 border rounded-md placeholder-gray-400 focus:border-[#ED1E3A] focus:ring-2 focus:ring-red-200 transition"
                placeholder="Enter message here"
                rows="4"
                required
              ></textarea>

              {/* Checkbox */}
              <div className="text-sm">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="agreement"
                    className="h-4 w-4 border-gray-300 rounded focus:ring-[#ED1E3A]"
                    required
                  />
                  <span>
                    Please check the box to communicate via SMS or Email (<a href="#" className="text-blue-500 underline">Terms & Conditions</a> & <a href="#" className="text-blue-500 underline">Privacy Policy</a>).
                    Carrier charges may apply for SMS. Reply STOP or UNSUBSCRIBE to STOP to unsubscribe anytime.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-[#ED1E3A] text-white p-3 rounded-md hover:bg-[#ED1E3A] focus:outline-none transition"
              >
                Submit
              </button>
            </form>

            {status && <p className="mt-4 text-[#ED1E3A]">{status}</p>}
          </div>
        </div>
        <div className="md:w-1/2 md:ml-10">

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093037!2d-122.3969491846816!3d37.78802297975756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809e1f82aef1%3A0xe9c04eaa90cc6337!2s548%20Market%20St.%20%2341895%2C%20San%20Francisco%2C%20CA%2094104%2C%20USA!5e0!3m2!1sen!2sus!4v1693935898978!5m2!1sen!2sus"
            width="100%"
            height="800"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Google Map of Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
