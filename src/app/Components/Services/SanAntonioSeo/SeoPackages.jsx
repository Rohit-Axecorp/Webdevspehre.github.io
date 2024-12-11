"use client"
import React from "react";

export default function SeoPackages() {
  const packages = [
    {
      title: "Startup Plan",
      price: "$350",
      originalPrice: "$700",
      description:
        "Suitable for newly formed organizations or small incubated startups.",
      features: [
        "Campaign Setup And Optimization",
        "Website Audit",
        "Pages Optimized (10 pages)",
        "15 Selected Keywords Targeting",
        "Keyword Research",
        "Technical SEO",
        "Link Building",
        "Content Strategy",
        "On-Page SEO",
        "Monthly Reporting",
        "SEO Strategy Call",
      ],
    },
    {
      title: "Scaling Plan",
      price: "$700",
      originalPrice: "$1400",
      description:
        "For medium-sized stable organizations looking to climb up the corporate ladder.",
      features: [
        "Prior Analysis",
        "Business Analysis",
        "Consumer Analysis",
        "Competitor Analysis",
        "35 Selected Keywords Targeting",
        "Content Creation",
        "Advanced Link Building",
        "Technical SEO",
        "Social Media Strategy",
        "Monthly Reporting",
        "SEO Strategy Call",
      ],
    },
    {
      title: "Venture Plan",
      price: "$1200",
      originalPrice: "$2400",
      description:
        "For pre-established businesses that aim to maintain their presence and claim the crown.",
      features: [
        "Prior Analysis",
        "Business Analysis",
        "Consumer Analysis",
        "Competitor Analysis",
        "60+ Selected Keywords Targeting",
        "Custom Content Creation",
        "Comprehensive Link Building",
        "Advanced Technical SEO",
        "Advanced Social Media Strategy",
        "Custom Reporting & Analytics",
        "SEO Strategy Call",
      ],
    },
  ];

  // Colors defined separately for each package
  const packageColors = {
    "Startup Plan": "blue",
    "Scaling Plan": "green",
    "Venture Plan": "red",
  };

  return (
    <section className="bg-gray-50 2xl:py-12 py-10 mx-5">
      <div className="2xl:w-2/3 w-full mx-auto">
        <h2 className="text-center text-4xl font-bold mb-4 text-gray-800">
          San Antonio SEO Packages
        </h2>
        <p className="2xl:text-lg lg:text-base text-sm text-black leading-7 mb-8">
          Unlock your business's potential with our tailored SEO packages designed to deliver measurable results for businesses in San Antonio.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => {
            const color = packageColors[pkg.title];
            return (
              <div
                key={index}
                className={`bg-white p-8 rounded-lg shadow-lg border-t-8 border-${color}-500 flex flex-col relative`}
              >
                {color === "green" && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white py-2 px-4 text-xs font-bold uppercase rounded-bl-lg">
                    Best Seller
                  </span>
                )}
                <div>
                  <h3 className={`text-3xl font-semibold text-${color}-500 mb-4`}>
                    {pkg.title}
                  </h3>
                  <p className="text-gray-600 mb-8">{pkg.description}</p>
                  <div className="h-64 overflow-y-auto rounded-md border p-4 custom-scrollbar mb-6">
                    <ul className="list-disc ml-6 space-y-3">
                      {pkg.features.map((feature, i) => (
                        <li
                          key={i}
                          className={`feature-item-${color}`} // Custom class to set bullet color
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-gray-400 line-through mb-4">
                    {pkg.originalPrice}
                  </div>
                  {/* Price with dynamic color */}
                  <div className={`text-4xl font-bold text-${color}-500`}>
                    {pkg.price}
                  </div>
                  <p className="text-sm text-gray-500 mt-2">First Month Payment</p>
                </div>
                <button
                  className={`mt-6 bg-${color}-500 text-white font-semibold py-3 px-6 rounded-md hover:bg-${color}-600 transition-all`}
                >
                  Buy Your Plan
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <style jsx>{`
        /* Style to set marker colors */
        .feature-item-blue::marker {
          color: #2563EB;
        }

        .feature-item-green::marker {
          color: #10B981;
        }

        .feature-item-red::marker {
          color: #EF4444;
        }
      `}</style>
    </section>
  );
}
