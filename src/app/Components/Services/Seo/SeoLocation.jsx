import React from 'react'

export default function SeoLocation() {

    const googleMapEmbed = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093037!2d-122.3969491846816!3d37.78802297975756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809e1f82aef1%3A0xe9c04eaa90cc6337!2s548%20Market%20St.%20%2341895%2C%20San%20Francisco%2C%20CA%2094104%2C%20USA!5e0!3m2!1sen!2sus!4v1693935898978!5m2!1sen!2sus";
  return (
    <>
      <section className="py-12">
      <div className="flex flex-col md:flex-row items-center pt-6 ps-6 container mx-auto gap-20">
        {/* Left Column */}
        <div className="md:w-1/2 flex flex-col p-4">
          <h2 className="text-5xl font-semibold mb-4">Where We Are</h2>
          <p className="mb-4 text-xl font-medium">
            Victorious is a fully distributed organization headquartered in San Francisco:
          </p>
          <p className="">
            <a href="https://www.google.com/maps?q=548+Market+St.+%2341895+San+Francisco%2C+CA+94104" className="text-red-500 text-xl">
              548 Market St. #41895
            </a>
          </p>
          <p className="mb-4">
            <a href="https://www.google.com/maps?q=548+Market+St.+%2341895+San+Francisco%2C+CA+94104" className="text-red-500 text-xl">
              San Francisco, CA 94104
            </a>
          </p>
          <p className="mb-4 text-xl font-medium">
            Our employees live and work in every time zone in the country, and we&apos;re always looking to grow our ranks.
          </p>
          <p className="mb-4">
            <a href="/join-us" className="text-red-500 font-semibold text-xl flex items-center ">
              Join our team!
            </a>
          </p>
        </div>

        {/* Right Column - Google Map Embed */}
        <div className="md:w-1/2">
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
    
    </>
  )
}
