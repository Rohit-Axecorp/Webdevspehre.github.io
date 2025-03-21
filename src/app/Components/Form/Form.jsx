"use client"
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Form() {
    const [status, setStatus] = useState(''); // State for form submission status

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('Submitting...');

        const form = e.target; // Get the form element from the event

        // EmailJS sendForm function
        emailjs
            .sendForm(
                'service_eurk8zb', // Replace with your EmailJS Service ID
                'template_w3r9t2m', // Replace with your EmailJS Template ID
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
            < div className="md:w-2/5 w-full lg:p-6 p-4 bg-white shadow-lg rounded-lg" >
                <form onSubmit={handleSubmit} className="lg:p-6 p-4 border-2 rounded-lg space-y-6 border-[#ED1E3A]">
                    <p className="text-2xl font-bold text-center text-[#ED1E3A]">Get Free Consultation</p>
                    {/* Input Fields */}
                    <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                        <input
                            type="text"
                            name="name"
                            className="w-full md:w-1/2 p-3 border rounded-md placeholder-gray-400 focus:border-[#ED1E3A] focus:ring-2 focus:ring-red-200 transition"
                            placeholder="Enter your name"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            className="w-full md:w-1/2 p-3 border rounded-md placeholder-gray-400 focus:border-[#ED1E3A] focus:ring-2 focus:ring-red-200 transition"
                            placeholder="Enter email here"
                            required
                        />
                    </div>
                    <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                        <div className="flex items-center w-full md:w-1/2 space-x-2 border rounded-md p-3">

                            <input
                                type="tel"
                                name="phone"
                                className="w-full placeholder-gray-400 focus:outline-none"
                                placeholder="Phone Number"
                                required
                            />
                        </div>
                        <select
                            name="service"
                            className="w-full md:w-1/2 p-3 border rounded-md placeholder-gray-400 focus:border-[#ED1E3A] focus:ring-2 focus:ring-red-200 transition"
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
            </div >
        </>
    )
}
