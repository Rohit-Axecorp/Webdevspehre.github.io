"use client"
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Form2() {
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('Submitting...');

        const form = e.target;

        emailjs
            .sendForm(
                'service_wstrjk5',
                'template_uxn7v4x',
                form,
                'nx-asW557WNnER_pT'
            )
            .then(
                (response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    setStatus('');
                    form.reset();
                    window.location.href = '/thankyou';
                },
                (err) => {
                    console.error('FAILED...', err);
                    setStatus('Failed to submit the form. Please try again.');
                }
            );
    };

    return (
        <div className="max-w-sm mx-auto rounded-[1.5rem] overflow-hidden shadow-lg bg-[#080B16]">
            {/* Banner as an image element */}
            <img
                src="/Images/Banner-1.png"
                alt="Connect with Investors"
                className="w-full h-auto"
            />

            {/* Form Section */}
            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              

                <input
                    type="email"
                    name="email"
                    className="w-full bg-transparent border-b border-white text-white placeholder-gray-300 focus:outline-none focus:border-red-400 transition"
                    placeholder="Enter email here"
                    required
                />

                <input
                    type="tel"
                    name="phone"
                    className="w-full bg-transparent border-b border-white text-white placeholder-gray-300 focus:outline-none focus:border-red-400 transition"
                    placeholder="Phone Number"
                    required
                />

             

           

                <textarea
                    name="message"
                    className="w-full bg-transparent border-b border-white text-white placeholder-gray-300 focus:outline-none focus:border-red-400 transition"
                    placeholder="Enter message here"
                    rows="4"
                    required
                ></textarea>

                <label className="flex items-start space-x-2 text-white text-sm">
                    <input
                        type="checkbox"
                        name="agreement"
                        className="mt-1 h-4 w-4 border border-gray-500 rounded focus:ring-white"
                        required
                    />
                    <span>
                        Please check the box to communicate via SMS or Email (
                        <a href="/terms-and-conditions" className="text-blue-400 underline">Terms & Conditions</a> &{' '}
                        <a href="/privacy-policy" className="text-blue-400 underline">Privacy Policy</a>)
                    </span>
                </label>

                <button
                    type="submit"
                    className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-full transition"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
