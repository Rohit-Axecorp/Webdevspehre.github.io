"use client";
import React from 'react';
import Head from 'next/head';
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


            <section className="flex flex-col items-center justify-center 2xl:py-12 py-10 px-6 container mx-auto">
                {/* Page Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-bold text-red-600 mb-6">Join Us</h2>

                    <p className="text-lg text-gray-600 mx-auto">
                        We're always looking for talented individuals to join our growing team. If you have a passion for technology and innovation, come work with us and help shape the future.
                    </p>
                </div>

                {/* Why Join Us Section */}
                <div className="flex flex-col items-center justify-center mx-auto mb-12 px-6">
                    <h3 className="text-3xl font-semibold text-red-600 mb-6">Why Work With Us?</h3>
                    <p className="text-lg text-gray-700 mb-6 text-center ">
                        We foster an environment of collaboration, growth, and creativity. You will have the chance to work with some of the brightest minds in the industry, and your ideas will directly impact the products and services we offer.
                        We foster an environment of collaboration, growth, and creativity. You will have the chance to work with some of the brightest minds in the industry, and your ideas will directly impact the products and services we offer.
                        We foster an environment of collaboration, growth, and creativity. You will have the chance to work with some of the brightest minds in the industry, and your ideas will directly impact the products and services we offer.
                    </p>
                    <p className="text-lg text-gray-700 mb-6 text-center ">
                        We foster an environment of collaboration, growth, and creativity. You will have the chance to work with some of the brightest minds in the industry, and your ideas will directly impact the products and services we offer.
                        We foster an environment of collaboration, growth, and creativity. You will have the chance to work with some of the brightest minds in the industry, and your ideas will directly impact the products and services we offer.
                        We foster an environment of collaboration, growth, and creativity. You will have the chance to work with some of the brightest minds in the industry, and your ideas will directly impact the products and services we offer.
                    </p>
                    <p className="text-lg text-gray-700 mb-6 text-center ">
                        We foster an environment of collaboration, growth, and creativity. You will have the chance to work with some of the brightest minds in the industry, and your ideas will directly impact the products and services we offer.
                        We foster an environment of collaboration, growth, and creativity. You will have the chance to work with some of the brightest minds in the industry, and your ideas will directly impact the products and services we offer.
                        We foster an environment of collaboration, growth, and creativity. You will have the chance to work with some of the brightest minds in the industry, and your ideas will directly impact the products and services we offer.
                    </p>
                </div>

            </section>


            <CTAsection />
            <Footer />
        </>
    );
}
