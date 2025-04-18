import React from 'react';
import Image from 'next/image';
import '../About/AboutAchievements.css';


export default function AboutAchievements() {
  return (
    <div className="container mx-auto px-5 py-12">
      {/* Row 1: Two Columns (Same Size) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="p-6">
          <h3 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold mb-4">Achievements And Awards
          </h3>
        </div>
        <div className="bg-gray-100 rounded-xl p-6 text-center">
          <div className="flex justify-center space-x-8">
            <div className="w-1/3">
              <Image
                src="/Images/aa1.png"
                alt="Digital Marketing Award"
                width={200} // Original width for responsive rendering
                height={30} // Original height for responsive rendering
                className=" object-contain" // Make the image take full width and auto height
              />
            </div>
            <div className="w-1/3">
              <Image
                src="/Images/aa2.png"
                alt="Digital Marketing Award"
                width={200}
                height={30}
                className=" object-contain"
              />
            </div>
            <div className="w-1/3">
              <Image
                src="/Images/aa3.png"
                alt="Digital Marketing Award"
                width={200}
                height={30}
                className=" object-contain"
              />
            </div>
          </div>
          <p className="mt-4">Recognition from Cyber News, Medium and Pro News Report.</p>
        </div>
      </div>

      {/* Row 2: Three Columns (Images, Same Size) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-gray-100 rounded-xl p-6 text-center">
          <div className="flex justify-center space-x-4">
            <div className="w-1/2">
              <Image
                src="/Images/clutchnew (1).png"
                alt="Digital Marketing Award"
                width={200}
                height={30}
                className=" object-contain"
              />
            </div>
            <div className="w-1/2">
              <Image
                src="/Images/top-web-design-company-in-dubainew (1).png"
                alt="Digital Marketing Award"
                width={200}
                height={30}
                className=" object-contain"
              />
            </div>
          </div>
          <p className="mt-4">Awarded as the Top Web Design & Development Company by Clutch and Goodfirms
          </p>
        </div>
        <div className="bg-gray-100 rounded-xl p-6 text-center">
          <div className="flex justify-center space-x-4">
            <div className="w-1/2">
              <Image
                src="/Images/bestdigitalmarketingnew (1).png"
                alt="Digital Marketing Award"
                width={200}
                height={30}
                className=" object-contain"
              />
            </div>
            <div className="w-1/2">
              <Image
                src="/Images/uaebusinessnew.png"
                alt="Digital Marketing Award"
                width={200}
                height={30}
                className=" object-contain"
              />
            </div>
          </div>
          <p className="mt-4">Recognized as the Top Digital Agency by Design Rush and Mea Markets
          </p>
        </div>
        <div className="bg-gray-100 rounded-xl p-6 text-center">
          <div className="flex flex-row justify-center items-center">
            <div className="">
              <Image
                src="/Images/google-rating.png"
                alt="Digital Marketing Award"
                width={200}
                height={30}
                className=" object-contain"
              />
            </div>

          </div>
          <p className="mt-4">Rated 4.9/5 by 800+ Clients
          </p>
        </div>
      </div>

      {/* Row 3: Three Columns (Images, 1st & 3rd Same, Middle Smaller) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* First Column (Same width as Third) */}
        <div className="bg-gray-100 rounded-xl p-6 text-center">
          <div className="overflow-hidden relative w-full">
            {/* Container for animated translation */}
            <div className="flex translate-x-0 animate-slide space-x-4">
              {[...Array(9)].map((_, index) => (
                <div key={index} className="w-1/2 flex-none">
                  <Image
                    src={`/Images/t${index + 1}.png`}
                    alt={`Digital Marketing Award ${index + 1}`}
                    width={200}
                    height={30}
                    className=" object-contain rounded-sm"
                  />
                </div>
              ))}
            </div>
          </div>
          <p className="mt-4">
            Endorsed by Microsoft Certificates for Outstanding Proficiency
          </p>
        </div>

        {/* Middle Column (Smaller) */}
        <div className="bg-gray-100 rounded-xl p-6 text-center">
          <div className="flex justify-center space-x-4">
            <div className="w-1/2">
              <Image
                src="/Images/businessOfApps (1).png"
                alt="Digital Marketing Award"
                width={200}
                height={30}
                className=" object-contain"
              />
            </div>
          </div>
          <p className="mt-4">Featured On Business of Apps</p>
        </div>

        {/* Third Column (Same width as First) */}
        <div className="bg-gray-100 rounded-xl p-6 text-center">
          <div className="flex justify-center space-x-4">
            <div className="w-1/2">
              <Image
                src="/Images/t8.png"
                alt="Digital Marketing Award"
                width={200}
                height={30}
                className=" object-contain"
              />
            </div>
            <div className="w-1/2">
              <Image
                src="/Images/t2.png"
                alt="Digital Marketing Award"
                width={200}
                height={30}
                className=" object-contain"
              />
            </div>
          </div>
          <p className="mt-4">Proud Partner of industry-leading technology providers</p>
        </div>
      </div>
    </div>
  );
}
