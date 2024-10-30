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
    <section className="py-12 bg-black">
      <section>
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-10">
          <div className="content md:w-2/5 mb-8">
            <h3 className="text-2xl md:text-5xl font-bold mb-4 text-white">
              Technologies TekRevol Uses for Mobile App Development in San Francisco
            </h3>
          </div>

          <div className="image md:w-3/5 flex md:justify-end">
            <p className="text-base sm:text-lg md:text-xl text-white mb-8">
              As a leading mobile app development company, we employ a diverse
              set of powerful technologies to cater to your unique requirements.
              In Android development, we utilize Java, Kotlin, Fastlane, Gradle,
              Coroutines, Dagger2, and JetPack. On the iOS side, we leverage
              SwiftLint, Objective-C, RxSwift, CircleCI, Swift, SwiftUI, and
              CocoaPods. For the creation of hybrid apps, our toolkit includes
              TypeScript, React Native, Javascript, Flutter, and Native Script.
              When it comes to backend development, we harness the capabilities
              of Node.js, Ruby on Rails (RoR), Python, and Firebase.
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
                className={`text-lg font-semibold px-4 py-2 focus:outline-none transition duration-200 ease-in-out ${
                  activeTab === tab
                    ? "border-b-2 border-red-500 text-red-500"
                    : "text-gray-400 hover:text-red-500"
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
              <div key={item.name} className="text-center">
                <img
                  src={item.imgSrc}
                  alt={item.name}
                  className="mx-auto h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24"
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
