import React from 'react';

export default function PPCSection03() {
    return (
        <>
            <section className="2xl:py-12 py-10 bg-gray-100">
                <div className="container mx-auto px-4 text-center">

                    {/* Centered Image Wrapper */}
                    <div className="flex justify-center mb-6">
                        <img
                            src="/Images/ppcimage.png"
                            alt="Process Image"
                            className="rounded-lg w-3/5 md:w-1/6"
                        />
                    </div>

                    <h3 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold mb-4">
                        Want to Get a PPC Management Proposal from Vital
                    </h3>
                    <p className="2xl:text-xl lg:text-base text-sm text-black leading-10 my-8">
                        Think we might be a good fit? Let’s talk about it. Fill out the form on this page and we’ll set up a call to see if we can help.

                    </p>
                </div>
            </section>
        </>
    );
}
