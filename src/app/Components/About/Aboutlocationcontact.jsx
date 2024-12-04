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
          <h2 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold text-[#ED1E3A] mb-10">
            Let&apos;s Begin On Your Project
          </h2>
          <div className="p-6 bg-white shadow-lg rounded-lg flex-grow">
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                {/* Input Fields */}
                <div className="flex space-x-4">
                  <div className="w-1/2">
                    <input
                      type="text"
                      name="firstName"
                      className="w-full p-3 border rounded-md placeholder-gray-400 focus:border-[#ED1E3A] focus:ring-2 focus:ring-red-200 transition"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div className="w-1/2">
                    <input
                      type="text"
                      name="lastName"
                      className="w-full p-3 border rounded-md placeholder-gray-400 focus:border-[#ED1E3A] focus:ring-2 focus:ring-red-200 transition"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    className="w-full p-3 border rounded-md placeholder-gray-400 focus:border-[#ED1E3A] focus:ring-2 focus:ring-red-200 transition"
                    placeholder="Email"
                    required
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full p-3 border rounded-md placeholder-gray-400 focus:border-[#ED1E3A] focus:ring-2 focus:ring-red-200 transition"
                    placeholder="Phone"
                    required
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="budget"
                    className="w-full p-3 border rounded-md placeholder-gray-400 focus:border-[#ED1E3A] focus:ring-2 focus:ring-red-200 transition"
                    placeholder="Select Your Budget"
                    required
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    className="w-full p-3 border rounded-md placeholder-gray-400 focus:border-[#ED1E3A] focus:ring-2 focus:ring-red-200 transition"
                    placeholder="Your Message"
                    rows="5"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#ED1E3A] text-white p-3 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600 transition mt-6"
                >
                  Submit Your Request
                </button>
              </div>
            </form>
            {status && <p className="mt-4 text-green-600">{status}</p>}
          </div>
        </div>
        <div className="md:w-1/2 md:ml-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093037!2d-122.3969491846816!3d37.78802297975756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809e1f82aef1%3A0xe9c04eaa90cc6337!2s548%20Market%20St.%20%2341895%2C%20San%20Francisco%2C%20CA%2094104%2C%20USA!5e0!3m2!1sen!2sus!4v1693935898978!5m2!1sen!2sus"
            width="100%"
            height="570"
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
