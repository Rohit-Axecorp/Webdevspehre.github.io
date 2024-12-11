import React from 'react'

export default function ServicesLondon() {
  return (
    <>
      <section className="2xl:py-12 py-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="image md:w-1/2  ">
            <img
              src="/Images/LONDON-SEO-SERVICES-1-1024x576-1.png"
              alt="Process Image"
              className="rounded-lg md:w-4/5 w-full"
            />
          </div>
          <div className="content md:w-1/2 mb-8 md:justify-end items-center">
            <h3 className="text-[#ED1E3A]  xl lg:text-4xl 2xl:text-5xl font-bold mb-8">
              London SEO Services
            </h3>
            <p className="2xl:text-lg lg:text-base text-sm text-black leading-7 mb-4">
              We understand that getting your search engine optimisation right is vital to your success. We are an SEO Company London clients can trust – check out our core values.

            </p>
            <p className="2xl:text-lg lg:text-base text-sm text-black leading-7 mb-4">
              Our leading SEO services are what London businesses need to boost their online presence and increase their visibility in the search engines. Check out our case studies to see how our SEO agency in London has helped businesses like yours succeed.
            </p>
            <p className="2xl:text-lg lg:text-base text-sm text-black leading-7 mb-8">
              Here at Pearl Lemon, all of our results-driven campaigns are bespoke to suit our clients’ individual needs. We essentially provide affordable SEO services London businesses require to stand out amongst the competition. As a top-notch SEO agency London, we ensure your online success with tailored strategies– get a free SEO audit.
            </p>
            <button className="group relative px-8 py-2 sm:px-5 sm:py-3 2xl:px-10 2xl:py-4 border text-white border-[#ED1E3A] bg-red-600 rounded-full text-base 2xl:text-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:text-white hover:border-transparent">
              Book a call
            </button>
          </div>
        </div>
      </section>

    </>
  )
}