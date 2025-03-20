import React from "react";

const features = [
    {
        id: "01",
        title: "Specialized Development Solutions",
        description:
            "Your business goals are taken into consideration in every project, thus making it precise and having the maximum impact.",
    },
    {
        id: "02",
        title: "Experience with Modern Frameworks",
        description:
            "We specialize especially in the cutting side of basic and process technologies like Laravel, WordPress, and more ensuring high and strong web solutions.",
    },
    {
        id: "03",
        title: "Expert Team of Developers",
        description:
            "We have great developers on our team with the latest technologies making sure your website has a solid technical base inside it.",
    },
    {
        id: "04",
        title: "SEO-Optimized Websites",
        description:
            "We offer SEO best practices for our web development services to rank higher on search engines and get your site more organic traffic.",
    },
    {
        id: "05",
        title: "Responsive Design for all Devices",
        description:
            "We design websites that work on every device — your audience should be able to view your content from any location and at any time.",
    },
    {
        id: "06",
        title: "Data-Driven Results",
        description:
            "With analytics, we use it to breed our strategies which also ensure that our web development services translate into a real improvement in engagement and conversions.",
    },
];

export default function WebDevelopmentFeatures() {
    return (
        <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-12">
            <div className="container mx-auto">
                <div className="mb-10 xl:flex items-start justify-end gap-10">
                    <h2 className="text-5xl font-bold text-gray-900">
                        Why Choose WebDev Sphere for
                        <span className="text-[#ED1E3A]"> Web Development</span> in london?
                    </h2>
                    <p className=" text-gray-700 max-w-3xl text-xl">
                        WebDev Sphere is a proactive web development company in London, focusing on delivering quality web development services based on a unique mix of technical tickings and innovative approaches. We foster excellence in our approach to providing your business with the best digital transformation with better quality engagements and scalable solutions that trigger measurable results.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature) => (
                        <div key={feature.id} className="bg-[#1f2f46] text-white py-8 px-6 shadow-md">
                            <div className="text-[#ED1E3A] text-xl font-semibold mb-2">{feature.id}</div>
                            <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                            <p className="text-lg text-white/90">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
