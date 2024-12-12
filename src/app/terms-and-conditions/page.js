import React from 'react'
import Header from '@/app/Components/Header';
import CTAsection from '@/app/Components/Home/CTAsection';
import Footer from '@/app/Components/Footer';


export default function page() {
    return (
        <>

            <Header />
            <main className="px-6 py-12 container mx-auto">
                <h1 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold text-center mb-6 text-[#ED1E3A]">Terms and Conditions</h1>

                <section className="mb-8">
                    <h2 className="text-xl lg:text-2xl 2xl:text-3xl font-semibold mb-4 text-[#ED1E3A]">Introduction </h2>
                    <p className="text-gray-700 leading-relaxed 2xl:text-lg lg:text-base text-sm">
                        These Terms and Conditions govern your use of our website and services. By accessing or using our website, you agree to comply with and be bound by these terms.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl lg:text-2xl 2xl:text-3xl font-semibold mb-4 text-[#ED1E3A]">Use of Services</h2>
                    <p className="text-gray-700 leading-relaxed 2xl:text-lg lg:text-base text-sm">
                        You agree to use our services only for lawful purposes and in compliance with all applicable laws and regulations. Unauthorized use of our services is prohibited.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl lg:text-2xl 2xl:text-3xl font-semibold mb-4 text-[#ED1E3A]">Intellectual Property</h2>
                    <p className="text-gray-700 leading-relaxed 2xl:text-lg lg:text-base text-sm">
                        All content, trademarks, and other intellectual property on this website are owned by us or our licensors. You may not reproduce or distribute any content without prior permission.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl lg:text-2xl 2xl:text-3xl font-semibold mb-4 text-[#ED1E3A]">Limitation of Liability</h2>
                    <p className="text-gray-700 leading-relaxed 2xl:text-lg lg:text-base text-sm">
                        We are not liable for any damages resulting from the use or inability to use our services. This includes but is not limited to indirect, incidental, or consequential damages.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl lg:text-2xl 2xl:text-3xl font-semibold mb-4 text-[#ED1E3A]">Changes to Terms</h2>
                    <p className="text-gray-700 leading-relaxed 2xl:text-lg lg:text-base text-sm">
                        We reserve the right to update or modify these Terms and Conditions at any time. Your continued use of our website after changes are made constitutes acceptance of the new terms.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl lg:text-2xl 2xl:text-3xl font-semibold mb-4 text-[#ED1E3A]">Contact Us</h2>
                    <p className="text-gray-700 leading-relaxed 2xl:text-lg lg:text-base text-sm">
                        If you have any questions about these Terms and Conditions, please contact us at info@webdevsphere.com.
                    </p>
                </section>

            </main>

            <CTAsection />
            <Footer />

        </>
    )
}
