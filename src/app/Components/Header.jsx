"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [locationDropdownOpen, setLocationDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const locationDropdownRef = useRef(null);

  const handleDropdownToggle = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleLocationDropdownToggle = () => {
    setLocationDropdownOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target)
    ) {
      setDropdownOpen(false);
    }
    if (
      locationDropdownRef.current &&
      !locationDropdownRef.current.contains(event.target)
    ) {
      setLocationDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="border-b border-red-500 bg-white sticky top-0 z-50 py-4">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 container">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/Images/21.png" alt="Logo" className="w-36"/>
        </Link>

        <button
          className="inline-flex items-center p-2 text-xl text-red-500 rounded-lg lg:hidden focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>

        <div
          id="mega-menu"
          className={`lg:flex items-center justify-between ${mobileMenuOpen ? "block" : "hidden"} w-full lg:w-auto`}
        >
          <ul className="flex flex-col mt-4 lg:flex-row lg:mt-0 lg:space-x-4">
            <li>
              <Link href="/" className="block py-2 lg:px-2 text-red-600 hover:text-red-600 xl:text-lg text-md font-semibold">
                Home
              </Link>
            </li>

            <li className="relative">
              <button
                onClick={handleDropdownToggle}
                className="flex items-center xl:text-lg text-md justify-between w-full py-2 lg:px-2 font-normal text-gray-900 hover:bg-gray-50 md:hover:bg-transparent md:hover:text-red-600"
              >
                Services
                <svg className="w-4 h-4 md:ml-4 mr-4 lg:mr-0" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l4 4 4-4" />
                </svg>
              </button>
              {dropdownOpen && (
                <div ref={dropdownRef} className="absolute top-full mt-1 w-48 bg-white shadow-lg rounded-lg z-20">
                  <ul className="py-2 text-sm text-gray-700">
                    <li>
                      <Link href="/seo" className="block px-4 py-2 hover:bg-gray-100">
                        SEO
                      </Link>
                    </li>
                    <li>
                      <Link href="/webdesign" className="block px-4 py-2 hover:bg-gray-100">
                        Web Design
                      </Link>
                    </li>
                    <li>
                      <Link href="/websitemaintenance" className="block px-4 py-2 hover:bg-gray-100">
                        Website Maintenance
                      </Link>
                    </li>
                    <li>
                      <Link href="/digitalmarketing" className="block px-4 py-2 hover:bg-gray-100">
                        Digital Marketing
                      </Link>
                    </li>
                    <li>
                      <Link href="/socialmedia" className="block px-4 py-2 hover:bg-gray-100">
                        Social Media
                      </Link>
                    </li>
                    <li>
                      <Link href="/logodesign" className="block px-4 py-2 hover:bg-gray-100">
                        Logo Design
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            <li className="relative">
              <button
                onClick={handleLocationDropdownToggle}
                className="flex items-center xl:text-lg text-md justify-between w-full py-2 lg:px-2 font-normal text-gray-900 hover:bg-gray-50 md:hover:bg-transparent md:hover:text-red-600"
              >
                Location
                <svg className="w-4 h-4 md:ml-4 mr-4 lg:mr-0" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l4 4 4-4" />
                </svg>
              </button>
              {locationDropdownOpen && (
                <div ref={locationDropdownRef} className="absolute top-full mt-1 w-48 bg-white shadow-lg rounded-lg z-20">
                  <ul className="py-2 text-sm text-gray-700">
                    <li>
                      <Link href="/austin" className="block px-4 py-2 hover:bg-gray-100">
                        Austin
                      </Link>
                    </li>
                    <li>
                      <Link href="/fortworth" className="block px-4 py-2 hover:bg-gray-100">
                        Fort Worth
                      </Link>
                    </li>
                    <li>
                      <Link href="/plano" className="block px-4 py-2 hover:bg-gray-100">
                        Plano
                      </Link>
                    </li>
                    <li>
                      <Link href="/dallas" className="block px-4 py-2 hover:bg-gray-100">
                        Dallas
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            <li>
              <Link href="/about" className="block py-2 lg:px-2 text-black hover:text-black xl:text-lg text-md font-normal">
                About
              </Link>
            </li>
            <li>
              <Link href="/" className="block py-2 lg:px-2 text-black hover:text-black xl:text-lg text-md font-normal">
                Case Studies
              </Link>
            </li>
            <li>
              <Link href="/" className="block py-2 lg:px-2 text-black hover:text-black xl:text-lg text-md font-normal">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block py-2 lg:px-2 text-black hover:text-black xl:text-lg text-md font-normal">
                Contact
              </Link>
            </li>

            <div className="hidden md:flex items-center">
              <button className="px-6 py-2 text-lg font-normal border text-red-500 border-red-500 rounded-full hover:bg-red-500 hover:text-white">
                Let&apos;s Talk
              </button>
            </div>
          </ul>

          <div className="mt-4 md:hidden">
            <button className="px-6 py-2 w-full text-lg font-normal border text-red-500 border-red-500 rounded-full hover:bg-red-500 hover:text-white">
              Let&apos;s Talk
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
