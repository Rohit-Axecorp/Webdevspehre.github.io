"use client";
import React, { useState } from "react";
import Head from 'next/head';
import Footer from '@/app/Components/Footer';
import Header from '@/app/Components/Header';
import CTAsection from '@/app/Components/Home/CTAsection';
import emailjs from "@emailjs/browser";

export default function GetToKnow() {
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
        <>
            <Head>
                <meta name="robots" content="noindex, nofollow" />
            </Head>
            <Header />
            <section className="flex flex-col items-center justify-center 2xl:py-12 py-10 px-4 container mx-auto">
                {/* Page Heading */}
                <div className="text-center mb-8">
                    <h2 className="text-5xl font-bold text-red-600 mb-4">Join Us</h2>
                    <p className="text-lg text-gray-600 mx-auto max-w-xl">
                        We're always looking for talented individuals to join our growing team. If you have a passion for technology and innovation, come work with us and help shape the future.
                    </p>
                </div>

                {/* Content */}
                <div className="flex flex-col lg:flex-row items-start justify-between w-full">
                    {/* Left Section */}
                    <div className="w-full lg:w-1/2 mb-10 lg:mb-0 px-4">
                        <h3 className="text-3xl font-semibold text-red-600 mb-4">Why Work With Us?</h3>
                        <p className="text-lg text-gray-700 mb-4">
                            We foster an environment of collaboration, growth, and creativity. Our team members are at the heart of everything we do. With opportunities for personal and professional development, you'll thrive in a culture that values innovation and inclusivity.
                        </p>
                        <ul className="list-disc list-inside space-y-2">
                            <li className="text-gray-700">Competitive salaries and benefits</li>
                            <li className="text-gray-700">Flexible working hours</li>
                            <li className="text-gray-700">Opportunities for growth and learning</li>
                        </ul>
                    </div>

                    {/* Right Section */}
                    <div className="w-full lg:w-1/2 px-4">
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
                    </div>
                </div>
            </section>

            <CTAsection />
            <Footer />
        </>
    );
}
