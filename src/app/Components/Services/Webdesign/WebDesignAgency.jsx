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
            src="/Images/houston-3.jpg"
            alt="Video Thumbnail"
            width={600}
            height={350}
            className="rounded-lg mb-4"
          />
        </div>
      </div>
    </section>
  );
}
