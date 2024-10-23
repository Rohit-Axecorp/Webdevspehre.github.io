import React from 'react';
import Image from 'next/image';

export default function AboutAchievements() {
  return (
    <div className="container mx-auto px-5 py-12">
      {/* Row 1: Two Columns (Same Size) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="p-6">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Achievements & Awards</h3>
        </div>
        <div className="bg-gray-100 rounded-xl p-6 text-center">
          <div className="flex justify-center space-x-4">
            <div className="w-1/3">
              <Image
                src="/Images/uaebusinessnew.png"
                alt="Digital Marketing Award"
                width={1000} // Original width for responsive rendering
                height={750} // Original height for responsive rendering
                className="w-full h-auto object-contain" // Make the image take full width and auto height
              />
            </div>
            <div className="w-1/3">
              <Image
                src="/Images/uaebusinessnew.png"
                alt="Digital Marketing Award"
                width={1000}
                height={750}
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="w-1/3">
              <Image
                src="/Images/uaebusinessnew.png"
                alt="Digital Marketing Award"
                width={1000}
                height={750}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          <p className="mt-4">Featured on Cyber News, Medium, Pro News Report.</p>
        </div>
      </div>

      {/* Row 2: Three Columns (Images, Same Size) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-gray-100 rounded-xl p-6 text-center">
          <div className="flex justify-center space-x-4">
            <div className="w-1/2">
              <Image
                src="/Images/uaebusinessnew.png"
                alt="Digital Marketing Award"
                width={1000}
                height={750}
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="w-1/2">
              <Image
                src="/Images/uaebusinessnew.png"
                alt="Digital Marketing Award"
                width={1000}
                height={750}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          <p className="mt-4">Top Web Design & Development Company According to Clutch & Goodfirms</p>
        </div>
        <div className="bg-gray-100 rounded-xl p-6 text-center">
          <div className="flex justify-center space-x-4">
            <div className="w-1/2">
              <Image
                src="/Images/uaebusinessnew.png"
                alt="Digital Marketing Award"
                width={1000}
                height={750}
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="w-1/2">
              <Image
                src="/Images/uaebusinessnew.png"
                alt="Digital Marketing Award"
                width={1000}
                height={750}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          <p className="mt-4">Top Digital Marketing Agency According to Designrush & Mea Markets</p>
        </div>
        <div className="bg-gray-100 rounded-xl p-6 text-center">
          <div className="flex justify-center space-x-4">
            <div className="w-1/2">
              <Image
                src="/Images/uaebusinessnew.png"
                alt="Digital Marketing Award"
                width={1000}
                height={750}
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="w-1/2">
              <Image
                src="/Images/uaebusinessnew.png"
                alt="Digital Marketing Award"
                width={1000}
                height={750}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          <p className="mt-4">Microsoft Certification</p>
        </div>
      </div>

      {/* Row 3: Three Columns (Images, 1st & 3rd Same, Middle Smaller) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* First Column (Same width as Third) */}
        <div className="bg-gray-100 rounded-xl p-6 text-center">
          <div className="flex justify-center space-x-4">
            <div className="w-1/2">
              <Image
                src="/Images/uaebusinessnew.png"
                alt="Digital Marketing Award"
                width={1000}
                height={750}
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="w-1/2">
              <Image
                src="/Images/uaebusinessnew.png"
                alt="Digital Marketing Award"
                width={1000}
                height={750}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          <p className="mt-4">Endorsed by Microsoft Certificates for Outstanding Proficiency</p>
        </div>

        {/* Middle Column (Smaller) */}
        <div className="bg-gray-100 rounded-xl p-6 text-center">
          <div className="flex justify-center space-x-4">
            <div className="w-1/2">
              <Image
                src="/Images/uaebusinessnew.png"
                alt="Digital Marketing Award"
                width={1000}
                height={750}
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="w-1/2">
              <Image
                src="/Images/uaebusinessnew.png"
                alt="Digital Marketing Award"
                width={1000}
                height={750}
                className="w-full h-auto object-contain"
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
                src="/Images/uaebusinessnew.png"
                alt="Digital Marketing Award"
                width={1000}
                height={750}
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="w-1/2">
              <Image
                src="/Images/uaebusinessnew.png"
                alt="Digital Marketing Award"
                width={1000}
                height={750}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          <p className="mt-4">Proud Partner of industry-leading technology providers</p>
        </div>
      </div>
    </div>
  );
}
