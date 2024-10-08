import React from 'react'

export default function ProWebStory() {
  return (
    <>
      <section className="py-12 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            {/* Column for Heading */}
            <div className="md:w-1/2">
              <h2 className="text-6xl font-extrabold text-black">
                The <span className="text-red-500">Pro Web</span> Story
              </h2>
            </div>
            {/* Column for Paragraph */}
            <div className="md:w-1/2">
              <p className="mt-4 font-medium text-black">
                Pro Web is a team of 70+ highly qualified and experienced professionals offering technological solutions by industry standards from the year 2012. We&apos;ve accomplished business & technology objectives for both medium-sized and larger-scale corporations to meet their demands of long-term growth & success in several domains including Web Design, Web Development, Mobile App Development, E-commerce Development, Web Maintenance, SEO, Google Ads Management, Web Hosting Domain & Dedicated Hiring.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
