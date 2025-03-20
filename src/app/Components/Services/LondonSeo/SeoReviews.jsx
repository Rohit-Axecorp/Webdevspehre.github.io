import React from "react";
import Image from "next/image";

const steps = [
  {
    id: "01",
    title: "Ideation",
    description: "Conducting Product Discovery and Product Research",
    icon: "/Images/ideation.svg",
  },
  {
    id: "02",
    title: "Design",
    description: "Creating the UX Design, UI Design, and Branding",
    icon: "/Images/design.svg",

  },
  {
    id: "03",
    title: "Development",
    description: "Coding the web courtesy of our veteran engineers",
    icon: "/Images/development.svg",

  },
  {
    id: "04",
    title: "Quality Assurance",
    description: "Testing the web and making sure that everything works well",
    icon: "/Images/QA.svg",

  },
  {
    id: "05",
    title: "Deployment",
    description: "Launching the web smoothly with expert rollout strategies and support.",
    icon: "/Images/Deployment.svg",

  },
  {
    id: "06",
    title: "Maintenance & Support",
    description: "Co-managing the web with your technology team.",
    icon: "/Images/mainsupport.svg",

  },
];



export default function SeoReviews() {
  return (
    <section className="container mx-auto px-6 py-16">
      {/* Header Section */}
      <div className="text-center md:text-left xl:flex d-col gap-10">
        <h2 className="text-5xl font-bold text-gray-900">
          Step Into Excellence with Our Strategic
          {" "}
          <span className="text-[#ED1E3A]">Process for Web Development in London</span>{" "}

        </h2>
        <p className="mt-4 text-gray-600 max-w-3xl text-xl">
          We have a simplified approach to web development at our web development company London, creating modern web solutions that are specifically designed to meet your needs. Our expertise is in providing outstanding web development services, which carry innovation, quality, and measured growth for your business with every project.

        </p>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {steps.map((step) => (
          <div
            key={step.id}
            className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col space-y-3"
          >
            <div className="flex flex-col ">
              <div className="flex items-center gap-3">
                <span className="text-gray-400 text-2xl font-semibold">{step.id}</span>
                {/* <Image src={step.icon} alt={step.title} width={40} height={40} /> */}
              </div>
            </div>


            <h3 className="text-3xl font-medium text-black">{step.title}</h3>
            <p className="text-gray-400 font-normal">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
