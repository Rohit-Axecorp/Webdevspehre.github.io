"use client";
import React from 'react';
import Head from 'next/head'; // Import Head from next/head
import Footer from '@/app/Components/Footer';
import Header from '@/app/Components/Header';
import CTAsection from '@/app/Components/Home/CTAsection';

export default function GetToKnow() {
    return (
        <>
            <Head>
                <meta name="robots" content="noindex, nofollow" />
            </Head>
            <Header />
            <section className="flex flex-col items-center justify-center py-12 px-4 container mx-auto">
                {/* Page Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-bold text-red-600 mb-4">Get to Know Us</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Welcome to our world! We are passionate about providing exceptional services and creating lasting relationships with our clients. Let us introduce ourselves and our mission.
                    </p>
                </div>

                {/* Company Overview */}
                <div className="flex flex-col lg:flex-row items-center justify-between mx-auto px-4 gap-12">
                    {/* Text Section */}
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <h3 className="text-3xl font-semibold text-red-600 mb-6">Our Mission</h3>
                        <p className="text-lg text-gray-700 mb-4">
                            At Web Dev Sphere, we strive to innovate and lead in our industry. Our mission is to deliver exceptional quality and bring measurable value to our clients through technology-driven strategies.
                        </p>
                        <p className="text-lg text-gray-700">
                            We believe that progress comes from collaboration and creativity. Every project is an opportunity to break boundaries and achieve greatness.
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="lg:w-1/2 flex justify-center">
                        <img
                            src="/Images/pexels-fauxels-3183150.jpg" // Replace with your own image
                            alt="Our Team"
                            className="rounded-lg shadow-lg w-full max-w-md"
                        />
                    </div>
                </div>
            </section>

            <CTAsection />
            <Footer />
        </>
    );
}
