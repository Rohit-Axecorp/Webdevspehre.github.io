// components/PopupModal.js
"use client";
import React, { useEffect, useState } from "react";
import PopupForm from "./PopupForm/PopupForm";

export default function PopupModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Select all buttons with class "open-popup"
    const buttons = document.querySelectorAll(".open-popup");

    const handleClick = () => setIsOpen(true);

    // Attach event listeners to each button
    buttons.forEach((btn) => {
      btn.addEventListener("click", handleClick);
    });

    // Cleanup event listeners on unmount
    return () => {
      buttons.forEach((btn) => {
        btn.removeEventListener("click", handleClick);
      });
    };
  }, []);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl p-6 relative">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
            >
              ✕
            </button>

            {/* Inject Your Form Component */}
            <PopupForm />
          </div>
        </div>
      )}
    </>
  );
}
