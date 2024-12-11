"use client";

import React from 'react';

export default function TrustedBrands() {
    return (
        <div className="py-12">
            <div className="container mx-auto text-center">
            <h4 className="text-2xl lg:text-[#ED1E3A] 2xl:text-4xl font-bold mb-6 text-gray-800">
                    Trusted by Enterprises and Fortune 500 Companies
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 pt-8">
                    {/* Logo 1 */}
                    <div className="flex justify-center items-center">
                        <img src="/Images/BMarko.svg" alt="IBM" className="2xl:w-32 2xl:h-16 w-24 h-16" />
                    </div>

                    {/* Logo 2 */}
                    <div className="flex justify-center items-center">
                        <img src="/Images/Lime.svg" alt="Lime" className="2xl:w-32 2xl:h-16 w-24 h-16" />
                    </div>

                    {/* Logo 3 */}
                    <div className="flex justify-center items-center">
                        <img src="/Images/Flipboard.svg" alt="Flipboard" className="2xl:w-32 2xl:h-16 w-24 h-16" />
                    </div>

                    {/* Logo 4 */}
                    <div className="flex justify-center items-center">
                        <img src="/Images/Salesforce.svg" alt="Salesforce" className="2xl:w-32 2xl:h-16 w-24 h-16" />
                    </div>

                    {/* Logo 5 */}
                    <div className="flex justify-center items-center">
                        <img src="/Images/Couchbase.svg" alt="Couchbase" className="2xl:w-32 2xl:h-16 w-24 h-16" />
                    </div>

                    {/* Logo 6 */}
                    <div className="flex justify-center items-center">
                        <img src="/Images/Topgolf.svg" alt="TopGolf" className="2xl:w-32 2xl:h-16 w-24 h-16" />
                    </div>
                </div>
            </div>
        </div>
    );
}
