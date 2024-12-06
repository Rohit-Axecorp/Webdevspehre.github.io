import React from 'react';

export default function SeoLocation() {
  const googleMapEmbed =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093037!2d-122.3969491846816!3d37.78802297975756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809e1f82aef1%3A0xe9c04eaa90cc6337!2s548%20Market%20St.%20%2341895%2C%20San%20Francisco%2C%20CA%2094104%2C%20USA!5e0!3m2!1sen!2sus!4v1693935898978!5m2!1sen!2sus';

  return (
    <section className="py-12">
      <div className="flex flex-col md:flex-row items-start md:items-center container mx-auto gap-y-10 md:gap-x-20 px-4 md:px-8">
        {/* Left Column */}
        <div className="md:w-1/2 flex flex-col space-y-4 md:space-y-6">
          <h5 className="text-[#ED1E3A]xl md:text-5xl font-bold text-[#ED1E3A]">Our Location
          </h5>
          <p className="text-lg md:text-xl font-medium">
            WebDev Sphere: Local Expertise with a Global Reach
          </p>
          <p>
            <a
              href="https://www.google.com/maps?q=548+Market+St.+%2341895+San+Francisco%2C+CA+94104"
              className="text-[#ED1E3A] text-lg md:text-xl"
            >
              548 Market St. #41895
            </a>
          </p>
          <p>
            <a
              href="https://www.google.com/maps?q=548+Market+St.+%2341895+San+Francisco%2C+CA+94104"
              className="text-[#ED1E3A] text-lg md:text-xl"
            >
              San Francisco, CA 94104
            </a>
          </p>
          <p className="text-lg md:text-xl font-medium">
            Backed by a talented team spanning multiple time zones, we bring a seamless blend of innovation and strategy to businesses worldwide. As we help your business flourish, we continue to expand our footprint, staying ahead of trends and delivering transformative solutions tailored to your goals.
          </p>
          <p>
            <a href="/join-us" className="text-[#ED1E3A] font-semibold text-lg md:text-xl flex items-center">
              Let’s Connect!
            </a>
          </p>
        </div>

        {/* Right Column - Google Map Embed */}
        <div className="md:w-1/2 w-full">
          <iframe
            src={googleMapEmbed}
            width="100%"
            height="450"
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
