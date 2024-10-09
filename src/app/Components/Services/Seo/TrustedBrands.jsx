"use client";

import React from 'react';

export default function TrustedBrands() {
    return (
        <div className="py-12">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-gray-800">
                    Trusted by top brands for page one results.
                </h2>
                <div className="flex justify-between items-center pt-8">
                    {/* Logo 1 */}
                    <div className="flex justify-center items-center">
                        <img src="/Images/BMarko.svg" alt="IBM" className="w-32 h-16" />
                    </div>

                    {/* Logo 2 */}
                    <div className="flex justify-center items-center">
                        <img src="/Images/Lime.svg" alt="Lime" className="w-32 h-16" />
                    </div>

                    {/* Logo 3 */}
                    <div className="flex justify-center items-center">
                        <img src="/Images/Flipboard.svg" alt="Flipboard" className="w-32 h-16" />
                    </div>

                    {/* Logo 4 */}
                    <div className="flex justify-center items-center">
                        <img src="/Images/Salesforce.svg" alt="Salesforce" className="w-32 h-16" />
                    </div>

                    {/* Logo 5 */}
                    <div className="flex justify-center items-center">
                        <img src="/Images/Couchbase.svg" alt="Couchbase" className="w-32 h-16" />
                    </div>

                    {/* Logo 6 */}
                    <div className="flex justify-center items-center">
                        <img src="/Images/Topgolf.svg" alt="TopGolf" className="w-32 h-16" />
                    </div>
                </div>
            </div>
        </div>
    );
}
