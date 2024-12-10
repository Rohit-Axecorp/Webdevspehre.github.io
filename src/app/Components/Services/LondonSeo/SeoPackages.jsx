import React from "react";

export default function SeoPackages() {
  const packages = [
    {
      title: "Startup Plan",
      color: "blue",
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
        "Keyword Grouping",
        "Keyword Mapping",
        "On-Page Optimization",
        "SEO Road Map",
        "Blog Creation",
        "Webpage Copywriting (3 pages, 350 words per page)",
        "Title Tag Optimization (10 titles)",
        "Meta Description Optimization (10 meta description)",
        "Rich Snippet Recommendations",
        "Breadcrumbs",
        "Initial Off-Page SEO",
        "Social Bookmarking",
        "Slide Share Marketing",
        "Forums/FAQ’s",
        "Link Building",
        "Directory Submission",
        "Local Business Listings",
      ],
    },
    {
      title: "Scaling Plan",
      color: "green",
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
        "15 Pages Keyword Targeted",
        "Webpage Optimization",
        "Meta Tags Creation",
        "Keyword Optimization",
        "Image Optimization",
        "Inclusion of anchors",
        "Tracking & Analysis",
        "Google Analytics Installation",
        "Google Webmaster Installation",
        "Call To Action Plan",
        "Creation of Sitemaps",
        "Reporting",
        "Monthly Reporting",
        "Recommendation",
        "Email Support",
        "Phone Support",
        "Off Page Optimization",
        "Social Bookmarking",
        "Slide Share Marketing",
        "Forums/FAQ’s",
        "Link Building",
        "Directory Submission",
        "Local Business Listings",
      ],
    },
    {
      title: "Venture Plan",
      color: "red",
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
        "30 Pages Keyword Targeted",
        "Webpage Optimization",
        "Meta Tags Creation",
        "Keyword Optimization",
        "Image Optimization",
        "Inclusion of anchors Tags",
        "Inclusion of anchors Indexing Modifications",
        "Tracking & Analysis",
        "Google Places Inclusions",
        "Google Analytics Installation",
        "Google Webmaster Installation",
        "Call To Action Plan",
        "Creation of Sitemaps",
        "Reporting",
        "Monthly Reporting",
        "Recommendation",
        "Email Support",
        "Phone Support",
        "Off Page Optimization",
        "Social Bookmarking",
        "Slide Share Marketing",
        "Forums/FAQ’s",
        "Link Building",
        "Directory Submission",
        "Local Business Listings",
      ],
    },
  ];

  return (
    <section className="bg-gray-50 py-16 mx-4">
      <div className="lg:w-2/3 w-full mx-auto ">
        <h2 className="text-center text-4xl font-bold pb-12 text-gray-800">
          Affordable SEO Packages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-lg shadow-md border-t-4 border-${pkg.color}-500 flex flex-col`}
            >
              <div>
                <h3 className={`text-2xl font-bold text-${pkg.color}-500 mb-4`}>
                  {pkg.title}
                </h3>
                <p className="text-gray-600 mb-6">{pkg.description}</p>
                <div
                  className="h-56 overflow-y-scroll rounded-md border p-4 custom-scrollbar"
                  style={{
                    scrollbarWidth: "thin",
                    scrollbarColor: "gray white",
                  }}
                >
                  <ul className="list-disc ml-4">
                    {pkg.features.map((feature, i) => (
                      <li
                        key={i}
                        className={`text-gray-700 marker:text-${pkg.color}-500`}
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-gray-400 line-through mt-6">
                  {pkg.originalPrice}
                </p>
                <p className="text-3xl font-bold text-gray-800">{pkg.price}</p>
                <p className="text-sm text-gray-500">First Month Payment</p>
              </div>
              <button
                className={`mt-6 bg-${pkg.color}-500 text-white font-bold py-3 px-6 rounded-md hover:bg-${pkg.color}-600 transition-all`}
              >
                Buy Your Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
