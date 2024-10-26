"use client"
import React, { useEffect, useState } from 'react';
import HashLoader from 'react-spinners/HashLoader';
import Header from '@/app/Components/Header';
import Footer from '@/app/Components/Footer';
import Hero from '@/app/Components/Home/Hero';
import Counter from '@/app/Components/Home/Counter';
import SocialIcons from '@/app/Components/Home/SocialIcons';
import Portfolio from '@/app/Components/Home/Portfolio';
import Tabs from '@/app/Components/Home/Tabs';
import Strategies from '@/app/Components/Home/Strategies';
import Publishing from '@/app/Components/Home/Publishing';
import Awards from '@/app/Components/Home/Awards';
import Services from '@/app/Components/Home/Services';
import Testimonials from '@/app/Components/Home/Testmonials';
import ContactForm from '@/app/Components/Home/ContactForm';
import Banner from '@/app/Components/Home/Banner';
import AccordiansFAQ from '@/app/Components/Home/AccordiansFAQ';
import CTAsection from '@/app/Components/Home/CTAsection';
import Process from '@/app/Components/Home/Process';
import Technologies from '@/app/Components/Home/Technologies';
import Solutions from '@/app/Components/Home/Solutions';

export default function Homepage() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading ? (
                <div className="flex justify-center items-center h-screen">
                    <HashLoader color="#ef4444" loading={loading} size={80} speedMultiplier={1} />
                </div>
            ) : (
                <>
                    <Header key="header" />
                    <Hero />
                    <Counter />
                    <SocialIcons />
                    <Portfolio />
                    <Tabs />
                    <Strategies />
                    <Publishing />
                    <Solutions />
                    <Services />
                    <Awards />
                    <Technologies />
                    <Process />
                    <ContactForm />
                    <Testimonials />
                    <Banner />
                    <AccordiansFAQ />
                    <CTAsection />
                    <Footer />
                </>
            )}
        </>
    );
}
