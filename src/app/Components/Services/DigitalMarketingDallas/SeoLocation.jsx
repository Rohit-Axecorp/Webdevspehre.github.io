"use client"

import React, { useState } from 'react';

export default function SeoLocation() {
  const [mapLoaded, setMapLoaded] = useState(false);
  const googleMapEmbed =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093037!2d-122.3969491846816!3d37.78802297975756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809e1f82aef1%3A0xe9c04eaa90cc6337!2s548%20Market%20St.%20%2341895%2C%20San%20Francisco%2C%20CA%2094104%2C%20USA!5e0!3m2!1sen!2sus!4v1693935898978!5m2!1sen!2sus';

  return (
    <section className="py-12">
      <div className="flex flex-col md:flex-row items-start md:items-center container mx-auto gap-y-10 md:gap-x-20 px-4 md:px-8">

        {/* Left Column */}
        <div className="md:w-1/2 flex flex-col space-y-4 md:space-y-6">
          <h2 className="text-[#ED1E3A] text-3xl lg:text-4xl 2xl:text-5xl font-semibold">Our Location
          </h2>
          <p className="2xl:text-lg lg:text-base text-sm md:text-xl font-medium">
            Web Dev Sphere is headquartered in Austin, Texas.
          </p>
          <p>
            <a
              href="https://www.google.com/maps?q=548+Market+St.+%2341895+San+Francisco%2C+CA+94104"
              className="text-[#ED1E3A]  2xl:text-lg lg:text-base text-sm md:text-xl"
            >
              548 Market St. #41895
            </a>
          </p>
          <p>
            <a
              href="https://www.google.com/maps?q=548+Market+St.+%2341895+San+Francisco%2C+CA+94104"
              className="text-[#ED1E3A]  2xl:text-lg lg:text-base text-sm md:text-xl"
            >
              San Francisco, CA 94104
            </a>
          </p>
          <p className="2xl:text-lg lg:text-base text-sm md:text-xl font-medium">
            We cater in every time zone and provide support 24/7.
          </p>
          <p>
            <a href="/join-us" className="text-[#ED1E3A]  font-semibold 2xl:text-lg lg:text-base text-sm md:text-xl flex items-center">
              Join our team!
            </a>
          </p>
        </div>

        {/* Right Column - Google Map Embed with Loading Indicator */}
        <div className="md:w-1/2 w-full relative">
          {!mapLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              {/* Spinner or Placeholder */}
              <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          <iframe
            src={googleMapEmbed}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Google Map of Location"
            onLoad={() => setMapLoaded(true)}  // Set mapLoaded to true once iframe loads
          ></iframe>
        </div>
      </div>
    </section>
  );
}
