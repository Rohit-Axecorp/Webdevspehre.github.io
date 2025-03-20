"use client"
import React from 'react';
import Header from '@/app/Components/Header';
import Footer from '@/app/Components/Footer';
import Hero from '@/app/Components/Home/Hero';
import Counter from '@/app/Components/Home/Counter';
// import SocialIcons from '@/app/Components/Home/SocialIcons';
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
import GlobalPresenceSlider from '@/app/Components/About/GlobalPresenceSlider'

export default function Homepage() {
    return (
        <>
            <Header key="header" />
            <Hero />
            <Counter />
            {/* <SocialIcons /> */}
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
            <GlobalPresenceSlider />
            <CTAsection />
            <Footer />
        </>
    );
}
