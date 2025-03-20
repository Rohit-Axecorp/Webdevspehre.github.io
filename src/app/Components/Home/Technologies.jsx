"use client";

import React, { useState } from "react";

const tabsData = {
  Android: [
    { name: "Java", imgSrc: "/Images/java.webp" },
    { name: "Gradle", imgSrc: "/Images/gradle.webp" },
    { name: "Kotlin", imgSrc: "/Images/kotlin.webp" },
    { name: "Fastlane", imgSrc: "/Images/fastlane.webp" },
    { name: "Coroutines", imgSrc: "/Images/coroutines.webp" },
  ],
  iOS: [
    { name: "Swift", imgSrc: "/Images/circleci.webp" },
    { name: "Xcode", imgSrc: "/Images/cocoapods.webp" },
    { name: "Objective-C", imgSrc: "/Images/objective-C.webp" },
    { name: "RxSwift", imgSrc: "/Images/rxswift.webp" },
    { name: "SwiftLint", imgSrc: "/Images/swiftlint.webp" },
    { name: "SwiftUI", imgSrc: "/Images/swiftui.webp" },
  ],
  Backend: [
    { name: "Node.js", imgSrc: "/Images/firebase.webp" },
    { name: "Express", imgSrc: "/Images/nodeJs.webp" },
    { name: "Python", imgSrc: "/Images/python.webp" },
    { name: "Ruby on Rails", imgSrc: "/Images/ruby_on_rail.webp" },
  ],
  "Cross Platform": [
    { name: "React Native", imgSrc: "/Images/react_native.webp" },
    { name: "Flutter", imgSrc: "/Images/flutter.webp" },
    { name: "JavaScript", imgSrc: "/Images/javascript.webp" },
    { name: "Native Script", imgSrc: "/Images/native_script.webp" },
    { name: "TypeScript", imgSrc: "/Images/type_script.webp" },
  ],
};

export default function Technologies() {
  const [activeTab, setActiveTab] = useState("Android");

  return (
    <section className="2xl:py-12 py-10 bg-black">
      <section>
        <div className="container mx-auto px-4 flex flex-col md:flex-row lg:gap-10">
          <div className="content md:w-2/5 mb-8">
            <h3 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold mb-4 text-white">
              <span className='text-[#ED1E3A]'> Innovating with an Advanced
              </span> Tech Suite for London Web Development
            </h3>
          </div>

          <div className="image md:w-3/5 flex md:justify-end">
            <p className="2xl:text-lg lg:text-base text-sm text-white mb-8">
              Being a modern web development company we use a variety of latest-generation technologies to provide uniquely designed, innovative solutions for businesses. We bring the best web development in London, helping your projects operate using the best tools, frameworks, and methodologies for exceptional performance and scalability.
            </p>
          </div>
        </div>
      </section>

      <section className="pt-8">
        <div className="container bg-black">
          {/* Tabs Navigation */}
          <div className="flex border-b border-gray-200 flex-wrap" role="tablist">
            {Object.keys(tabsData).map((tab) => (
              <button
                key={tab}
                role="tab"
                aria-selected={activeTab === tab}
                className={`2xl:text-lg lg:text-base text-sm font-semibold px-2 lg:px-4 py-2 focus:outline-none transition duration-200 ease-in-out ${activeTab === tab
                  ? "border-b-2 border-[#ED1E3A] text-[#ED1E3A]"
                  : "text-gray-400 hover:text-[#ED1E3A]"
                  }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-4 flex flex-wrap gap-7">
            {tabsData[activeTab]?.map((item) => (
              <div key={item.name} className="2xl:text-lg lg:text-base text-sm text-center">
                <img
                  src={item.imgSrc}
                  alt={item.name}
                  className="mx-auto h-10 w-10 md:h-20 md:w-20 2xl:h-24 2xl:w-24"
                  onError={(e) => (e.target.src = '/Images/default.png')} // Fallback image
                />
                <p className="mt-2 text-white text-sm md:text-base">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
