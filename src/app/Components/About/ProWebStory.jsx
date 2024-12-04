import React from 'react'

export default function ProWebStory() {
  return (
    <>
      <section className="py-12 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            {/* Column for Heading */}
            <div className="md:w-1/2">
              <h2 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold text-black">
                Who <span className="text-red-500">We Are</span>
              </h2>
            </div>
            {/* Column for Paragraph */}
            <div className="md:w-1/2">
              <p className="mt-4 2xl:text-lg lg:text-base text-sm">
                Web Dev Sphere is a digital company that puts people first. Our team is driven by the belief that every brand has a story worth sharing, and we’re here to make sure it’s told the right way. Our unique blend of technical skills and a deep understanding of what really resonates with audiences. We specialize in turning complex digital challenges into simple, effective solutions that help you reach your goals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
