import React from 'react';
import Form from '../Form/Form';

export default function PPCSection02() {
    return (
        <>
            <section>


                {/* Section 2 - Reverse order */}
                <section className="2xl:py-12 py-10 bg-white">
                    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                        <div className="image md:w-1/2 flex md:justify-start order-2 md:order-1">
                            <img
                                src="/Images/ppc-ecommerce2.png"
                                alt="Process Image"
                                className="rounded-lg md:w-4/5 w-full"
                            />
                        </div>

                        <div className="content md:w-1/2 mb-8 order-1 md:order-2">
                            <h3 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold mb-4">
                                Google Shopping Ads
                            </h3>
                            <p className="2xl:text-xl lg:text-base text-sm text-black leading-10 my-8">
                                Our Paid Search E-commerce Experts will get your products featured in the shopping section of Google. Our PPC strategies for e-commerce turn online browsing into online buying. With Google Shopping PPC campaigns, you reach the shoppers who matter most: the ones searching for what you sell.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section 3 */}
                <section className="2xl:py-12 py-10 bg-gray-100">
                    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                        <div className="content md:w-1/2 mb-8">
                            <h3 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold mb-4">
                                Google free & fast Shipping
                            </h3>
                            <p className="2xl:text-xl lg:text-base text-sm text-black leading-10 my-8">

                                Google’s new free and fast program aims to improve the purchasing journey by prominently displaying the Free 2-day shipping annotation on qualifying Shopping ads. For consumers, this will greatly reduce the friction caused by hidden shipping details that are often slow and costly. For businesses, this means more conversions.
                                <br />
                                <br />
                                Today’s online shoppers expect to know if their purchase includes affordable shipping and quick delivery. Google’s new Shopping ads feature immediately shows your customers they can get what they want, free and fast!
                            </p>

                        </div>

                        <div className="image md:w-1/2 flex md:justify-end">
                            <img
                                src="/Images/ppc-ecommerce3.png"
                                alt="Process Image"
                                className="rounded-lg md:w-4/5 w-full"
                            />
                        </div>
                    </div>
                </section>


                {/* Section 2 - Reverse order */}
                <section className="2xl:py-12 py-10 bg-white">
                    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                        <div className="image md:w-1/2 flex md:justify-start order-2 md:order-1">
                            <img
                                src="/Images/ppc-ecommerce2.png"
                                alt="Process Image"
                                className="rounded-lg md:w-4/5 w-full"
                            />
                        </div>

                        <div className="content md:w-1/2 mb-8 order-1 md:order-2">
                            <h3 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold mb-4">
                                Award Winning Management
                            </h3>
                            <p className="2xl:text-xl lg:text-base text-sm text-black leading-10 my-8">
                                Your e-commerce PPC campaigns will be managed by the best in class! Logical Position is a Google Ads Premier Partner. What does that mean? That we have achieved a higher level of screening, certification, training and product knowledge than other Google Partners. Schedule a free PPC review and see for yourself! We also manage Microsoft Advertising through the Microsoft Search network!                            </p>
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
}
