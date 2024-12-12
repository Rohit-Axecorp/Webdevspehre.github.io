import React from 'react'
import Header from '@/app/Components/Header';
import CTAsection from '@/app/Components/Home/CTAsection';
import Footer from '@/app/Components/Footer';


export default function page() {
    return (
        <>

            <Header />
            <main className="px-6 py-12 container mx-auto">
                <h1 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold text-center mb-6 text-[#ED1E3A]">Privacy Policy</h1>

                <section className="mb-8">
                    <h2 className="text-xl lg:text-2xl 2xl:text-3xl font-semibold mb-4 text-[#ED1E3A]">Introduction</h2>
                    <p className="text-gray-700 leading-relaxed 2xl:text-lg lg:text-base text-sm">
                        This Privacy Policy outlines how we collect, use, and protect your information. We are committed to safeguarding your privacy while providing our services.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl lg:text-2xl 2xl:text-3xl font-semibold mb-4 text-[#ED1E3A]">Information We Collect</h2>
                    <p className="text-gray-700 leading-relaxed 2xl:text-lg lg:text-base text-sm">
                        We may collect personal information such as your name, email address, phone number, and other details you provide when using our services or interacting with our website.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl lg:text-2xl 2xl:text-3xl font-semibold mb-4 text-[#ED1E3A]">How We Use Your Information</h2>
                    <p className="text-gray-700 leading-relaxed 2xl:text-lg lg:text-base text-sm">
                        Your information is used to provide, improve, and personalize our services. We may also use it to communicate with you, respond to inquiries, and send updates.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl lg:text-2xl 2xl:text-3xl font-semibold mb-4 text-[#ED1E3A]">Sharing Your Information</h2>
                    <p className="text-gray-700 leading-relaxed 2xl:text-lg lg:text-base text-sm">
                        We do not share your personal information with third parties without your consent, except as required by law or to protect our rights.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl lg:text-2xl 2xl:text-3xl font-semibold mb-4 text-[#ED1E3A]">Your Rights</h2>
                    <p className="text-gray-700 leading-relaxed 2xl:text-lg lg:text-base text-sm">
                        You have the right to access, update, or delete your personal information. Contact us if you wish to exercise these rights.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl lg:text-2xl 2xl:text-3xl font-semibold mb-4 text-[#ED1E3A]">Contact Us</h2>
                    <p className="text-gray-700 leading-relaxed 2xl:text-lg lg:text-base text-sm">
                        If you have any questions about this Privacy Policy, please contact us at info@webdevsphere.com.
                    </p>
                </section>

            </main>

            <CTAsection />
            <Footer />

        </>
    )
}
