import React from "react";
import Image from "next/image";

const stats = [
  {
    iconPath: "/Images/output1.webp",
    number: "200+",
    label: "Web Apps Developed",
  },
  {
    iconPath: "/Images/Frame3.svg",
    number: "15+",
    label: "Industries Served",
  },
  {
    iconPath: "/Images/Frame5.svg",
    number: "4.8",
    label: "Rating on Clutch",
  },
  {
    iconPath: "/Images/output2.webp",
    number: "80+",
    label: "Web Development Experts",
  },
];


export default function ServicesLondon() {
  return (
    <div className="bg-[url('/Images/icon-banner.webp')] bg-cover bg-center py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center text-white">
        {stats.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 relative">
              <Image src={item.iconPath} alt={item.label} fill className="object-contain" />
            </div>
            <div className="text-4xl font-extrabold">{item.number}</div>
            <div className="text-lg font-medium">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}