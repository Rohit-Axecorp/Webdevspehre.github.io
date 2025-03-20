"use client";

import React from 'react';

export default function TrustedBrands() {
    return (
        <div className="py-12">
            <div className="container mx-auto text-center">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
                    {/* Logo 1 */}
                    <div className="flex justify-center items-center">
                        <img src="/Images/business_com.webp" alt="IBM" />
                    </div>

                    {/* Logo 2 */}
                    <div className="flex justify-center items-center">
                        <img src="/Images/forbes.webp" alt="Lime" />
                    </div>

                    {/* Logo 3 */}
                    <div className="flex justify-center items-center">
                        <img src="/Images/the_sun.webp" alt="Flipboard" />
                    </div>

                    {/* Logo 4 */}
                    <div className="flex justify-center items-center">
                        <img src="/Images/inc.webp" alt="Salesforce" />
                    </div>

                    {/* Logo 5 */}
                    <div className="flex justify-center items-center">
                        <img src="/Images/nbc.webp" alt="Couchbase" />
                    </div>

                    {/* Logo 6 */}
                    <div className="flex justify-center items-center">
                        <img src="/Images/press_wire.webp" alt="TopGolf" />
                    </div>
                </div>
            </div>
        </div>
    );
}
