"use client";


import React from 'react'

export default function TestimonialsCard({ text, name, position, color }) {
  return (
    <div className={`p-6 rounded-2xl shadow-lg ${color} text-white`}>
    <div className="flex items-center mb-4">
      <div className="flex gap-1">
        {/* Five star icons */}
        <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
      </div>
    </div>
    <p className="mb-4 border-b pb-2">{text}</p>
    <div className="flex items-center mt-4">
      <img
        src="/Images/profile1.png"
        alt="profile"
        className="rounded-full mr-4 w-10 h-10"
      />
      <div>
        <h5 className="font-bold">{name}</h5>
        <p>{position}</p>
      </div>
    </div>
  </div>
  )
}
