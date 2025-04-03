"use client";
import React from "react";
import { ArrowRight } from "lucide-react";

const services = [
  { title: "Android App Development", desc: "Web Dev Sphere has a team of experienced Android App Developers that are ready to help you with your app idea." },
  { title: "iOS App Development", desc: "Web Dev Sphere develops next-gen iOS apps for businesses that ensure market disruption, growth, and scalability." },
  { title: "Cross Platform App Development", desc: "Partner with Web Dev Sphere to get the most out of your next app project" },
  { title: "Custom Software Development", desc: "Our custom software development services provide our clients with the freedom to grow and scale" },
  { title: "Startup App Development", desc: "We rely on our modernized core to help startups to bring their app ideas to life" },
  { title: "Flutter App Development", desc: "Web Dev Sphere is a full-scale flutter app development company that builds scalable mobile apps" },
  { title: "Web Development", desc: "Establish a strong digital presence with custom website design and development services." },
  { title: "Game Development", desc: "Web Dev Sphere is a leading mobile game development company that develops high-quality mobile games" },
  { title: "Mobile App Support", desc: "Web Dev Sphere provides result-oriented and efficient application support and maintenance solutions after deployment." },
  { title: "Wearable App Development", desc: "Explore the limitless possibilities with wearable technology and expand your business through smarter, more efficient solutions." },
  { title: "Cloud Native Development", desc: "Creating and delivering an innovative business experience to your stakeholders." },
  { title: "IoT Development", desc: "As a forward-thinking startup or enterprise, working on IoT technology is a wise move." },
  { title: "API Integration", desc: "Scale the capabilities of your business solutions through custom API development and integration services" },
  { title: "E-Commerce Software Development", desc: "Scale your business with powerful custom eCommerce solutions." },
  { title: "Chatbot Development", desc: "Boost customer engagement and communication efforts 10x" },
  { title: "Mobile App Development", desc: "Web Dev Sphere implements a data-driven and disruptive approach to leverage technologies." },
  { title: "Magento Development Services", desc: "As a leading Magento development agency, Web Dev Sphere offers tailored solutions to promote your e-commerce venture." },
  { title: "Enterprise App Development", desc: "Web Dev Sphere is a top-grade enterprise app development company dedicated to business growth through cutting-edge solutions." },
  { title: "WordPress Development", desc: "As a renowned WordPress Development Company, Web Dev Sphere helps you to create an exceptional digital presence for your brand." },
  { title: "Unity Game App Development", desc: "Struggling to find a Unity game development company you can truly rely on? Look no further!" },
  { title: "Unreal Engine Game Development", desc: "Frustrated in your search for a dependable Unreal Engine game development company?" },
  { title: "Web Application Development", desc: "Revitalize your online presence with our leading web app development company." },
  { title: "Web3 Development Company", desc: "We excel in creating interactive web 3.0 solutions using blockchain, AI, and IoT technologies." },
  { title: "SaaS Video Production", desc: "We produce thought-provoking SaaS explainer videos that are engaging and creative." },
  { title: "Hire .Net Developer", desc: "Web Dev Sphere connects you with the industry's top .NET developers and coders." },
  { title: "Hire iOS App Developers", desc: "Transform your business with expert iOS app developers, available for freelance and full-time roles." },
  { title: "Hire Android App Developers", desc: "Upscale your business with highly skilled Android app developers available for full-time and hybrid roles." },
  { title: "Hire ReactJS App Developers", desc: "Web Dev Sphere helps you hire elite React developers for freelance and full-time positions." },
  { title: "Ecommerce Website Development", desc: "Build mobile-ready, user-first shopping solutions with your favorite eCommerce store." },
  { title: "Web3 Game Development", desc: "Web Dev Sphere uses talent and tech to help startups develop and launch Web3 games faster." },
  { title: "Web Portal Development", desc: "Web Dev Sphere transforms visionary concepts into user-friendly web portals." },
  { title: "Digital Marketing Services", desc: "We help businesses with channel selection, communications, and brand building for online success." },
  { title: "Logistic App Development", desc: "Design and build high-end logistics applications with Web Dev Sphere." },
  { title: "Retail App Development", desc: "Upgrade your retail business with custom apps designed to boost operations and sales." },
  { title: "Telecom Software", desc: "Unlock connectivity with telecom software using AI and cloud-native tech." },
  { title: "Construction Software", desc: "Avoid budget overruns and delays with efficient construction software solutions." },
];

export default function PortfolioSection04() {
  return (
    <section className="py-16 relative bg-white">
      <h1 className="absolute top-4 left-5 text-[8rem] font-extrabold text-gray-100 -z-10 hidden lg:block">
        Primary
      </h1>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12">
          Primary Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative cursor-pointer rounded-2xl p-6 min-h-[220px] shadow-sm transition duration-300 bg-[#f1f1f1] text-gray-800 hover:bg-[#ED1E3A] hover:text-white group"
            >
              <h3 className="xl:text-2xl lg:text-xl text-lg font-bold mb-3 group-hover:text-white">
                {service.title}
              </h3>
              <p className="2xl:text-lg lg:text-base text-sm text-gray-800 group-hover:text-white">
                {service.desc}
              </p>
              <div className="absolute bottom-5 right-5">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#ffe6e6] text-[#ED1E3A] group-hover:bg-white group-hover:text-[#ED1E3A] transition-colors duration-300">
                  <ArrowRight size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
