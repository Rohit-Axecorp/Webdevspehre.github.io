import Image from 'next/image';
import React from 'react';
import Form from '../../Form/Form';

export default function SeoAudit() {
    return (
        <>
            <section className="bg-black py-12">
                <div className='container'>
                    <h4 className="text-white md:text-center text-3xl lg:text-4xl 2xl:text-5xl font-bold">
                        Start Your Journey by Claiming Your
                        <span className="text-[#ED1E3A]  font-semibold"> Free SEO Audit Report Today!</span>
                    </h4>
                    <div className="container mx-auto pt-12 flex flex-col md:flex-row justify-center items-center"> {/* Stack on small screens */}

                        <Form />

                        {/* Right Column: Image 2/5 */}
                        <div className="w-full md:w-2/4 max-w-lg p-6">
                            <Image
                                src="/Images/result-img.webp"
                                alt="SEO Audit Report"
                                width={500}
                                height={500}
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
