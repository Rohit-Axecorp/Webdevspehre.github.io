"use client";

import React, { useState } from 'react';

export default function Packages() {
    // State for toggling details visibility
    const [showDetails, setShowDetails] = useState({
        basic: false,
        standard: false,
        premium: false,
    });

    // Toggle function for package details
    const toggleDetails = (packageName) => {
        setShowDetails((prevState) => ({
            ...prevState,
            [packageName]: !prevState[packageName],
        }));
    };

    return (
        <section className='container py-12'>
            <div className='flex flex-col items-center'>
                <h2 className="text-6xl font-bold mb-12 text-center">
                    <p className="text-red-500">All in One</p>
                    <p className="text-black">Website Maintenance Packages</p>
                </h2>
            </div>

            <div className="flex justify-center space-x-4">
                {/* Basic Package */}
                <div className="border rounded-3xl shadow-lg p-10 w-1/3 bg-white border-black">
                    <h2 className="text-4xl font-bold mb-2">Business Web Maintenance Plan</h2>
                    <ul className="list-disc list-inside my-6 text-xl">
                        <li>12 hours per Month</li>
                        <li>2 hours of Web Development Per Month</li>
                        <li>Content Updates</li>
                        <li>Image Resizing - Editing - Retouching</li>
                        <li>Version & Plugin Upgrade</li>
                    </ul>
                    {/* Toggle Details for Basic Package */}
                    {showDetails.basic && (
                        <p className="text-gray-700 mb-4">
                            This is the Business Web Maintenance Plan package with all the features included:
                            <ul className="list-disc list-inside my-4">
                                <li>24/7 Support</li>
                                <li>Custom Development Projects</li>
                                <li>Performance Optimization</li>
                            </ul>
                        </p>
                    )}
                    <button
                        className="text-black px-4 py-2 rounded border-black hover:bg-gray-300"
                        onClick={() => toggleDetails('basic')}
                    >
                        {showDetails.basic ? 'See Full Package Details' : 'See Full Package Details '}
                    </button>
                    <button className="mt-4 w-full bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                        Get Quote
                    </button>
                </div>

                {/* Standard Package */}
                <div className="border rounded-3xl shadow-lg p-10 w-1/3 bg-black text-white">
                    <h2 className="text-4xl font-bold mb-2">eCommerce Website Maintenance Plan</h2>
                    <ul className="list-disc list-inside my-6 text-xl">
                        <li>24 hours per Month</li>
                        <li>4 Hours of Web Development Per Month</li>
                        <li>Content Updates</li>
                        <li>Image Resizing - Editing - Retouching</li>
                        <li>Full Catalog Management</li>
                    </ul>
                    {/* Toggle Details for Standard Package */}
                    {showDetails.standard && (
                        <p className="text-gray-300 mb-4">
                            This is the eCommerce Website Maintenance Plan package that includes additional services such as:
                            <ul className="list-disc list-inside my-4">
                                <li>Email Support</li>
                                <li>Inventory Management</li>
                                <li>Promotional Material Creation</li>
                            </ul>
                        </p>
                    )}
                    <button
                        className="text-white px-4 py-2 rounded border-black hover:bg-gray-300 hover:text-black"
                        onClick={() => toggleDetails('standard')} 
                    >
                        {showDetails.standard ? 'See Full Package Details' : 'See Full Package Details '}
                    </button>
                    <button className="mt-4 w-full bg-white text-black px-4 py-2 rounded hover:bg-gray-300">
                        Get Quote
                    </button>
                </div>

                {/* Premium Package */}
                <div className="border rounded-3xl shadow-lg p-10 w-1/3 bg-white border-black">
                    <h2 className="text-4xl font-bold mb-2">One Time Website Maintenance Plan</h2>
                    <ul className="list-disc list-inside my-6 text-xl">
                        <li>Hire Designer & Developers per Hour</li>
                        <li>Theme & Plugin Updates</li>
                        <li>Web Development & Data Migration</li>
                        <li>Payment Gateway Integration</li>
                        <li>Domain Name & Website Hosting Support</li>
                    </ul>
                    {/* Toggle Details for Premium Package */}
                    {showDetails.premium && (
                        <p className="text-gray-700 mb-4">
                            This is the One Time Website Maintenance Plan package with all the features included:
                            <ul className="list-disc list-inside my-4">
                                <li>24/7 Support</li>
                                <li>Custom Development Projects</li>
                                <li>Performance Optimization</li>
                            </ul>
                        </p>
                    )}
                    <button
                        className="text-black px-4 py-2 rounded border-black hover:bg-gray-300"
                        onClick={() => toggleDetails('premium')} 
                    >
                        {showDetails.premium ? 'See Full Package Details' : 'See Full Package Details '}
                    </button>
                    <button className="mt-4 w-full bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                        Get Quote
                    </button>
                </div>
            </div>
        </section>
    );
}