import React from "react";

export default function WebDesignAgency() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left Side: Text and Button */}
        <div className="md:w-1/2 md:text-left mb-6 md:mb-0">
          <h1 className="text-[#ED1E3A] text-3xl lg:text-4xl 2xl:text-5xl font-bold mb-4">
            Web Design Company in Houston Texas
          </h1>
          <p className="2xl:text-lg lg:text-base text-sm text-gray-700 mb-6">
            Redefining the web experience to magnify your brand image in the
            market leading to the maximum sale opportunities. Working with a
            result-driven{" "}
            <a
              href="/houston-texas-web-design"
              className="text-red-600 underline"
            >
              Houston web design company
            </a>{" "}
            like Webdev Sphere, you can scale up your business with an
            interactive web presence.
          </p>

          <button className="open-popup bg-red-600 text-white px-6 py-3 rounded-md 2xl:text-lg lg:text-base text-sm">
            Get Free Consultation
          </button>
        </div>

        {/* Right Side: Video Thumbnail */}
        <div className="md:w-1/2 flex flex-col items-center relative">
          <img
            src="/Images/Comrade-Digital-Marketing-Team-of-Experts.webp"
            alt="Video Thumbnail"
            width={600}
            height={350}
            className="rounded-lg mb-4"
          />

          {/* Play Icon and Watch Our Reel Text */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="flex flex-col items-center">
              <div className="bg-red-600 p-4 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-5.304-3.012A1 1 0 008 9.058v5.884a1 1 0 001.448.894l5.304-3.012a1 1 0 000-1.788z"
                  />
                </svg>
              </div>
              <span className="mt-2 text-white text-lg font-medium">
                Watch Our Reel
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
