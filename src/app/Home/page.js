import React from 'react';
import Header from '@/app/Components/Header'; // Go up one level to reach Components
import Footer from '@/app/Components/Footer'; // Go up one level to reach Components
import Hero from '@/app/Components/Home/Hero'; // Go up one level to reach Components
import Counter from '@/app/Components/Home/Counter'; // Go up one level to reach Components
import SocialIcons from '@/app/Components/Home/SocialIcons'; // Go up one level to reach Components
import Portfolio from '@/app/Components/Home/Portfolio'; // Go up one level to reach Components
import Tabs from '@/app/Components/Home/Tabs'; // Go up one level to reach Components
import Strategies from '@/app/Components/Home/Strategies'; // Go up one level to reach Components
import Publishing from '@/app/Components/Home/Publishing'; // Go up one level to reach Components
import Awards from '@/app/Components/Home/Awards'; // Go up one level to reach Components
import Services from '@/app/Components/Home/Services'; // Go up one level to reach Components
import Testimonials from '@/app/Components/Home/Testmonials'; // Go up one level to reach Components
import ContactForm from '@/app/Components/Home/ContactForm'; // Go up one level to reach Components
import Banner from '@/app/Components/Home/Banner'; // Go up one level to reach Components
import AccordiansFAQ from '@/app/Components/Home/AccordiansFAQ'; // Go up one level to reach Components
import CTAsection from '@/app/Components/Home/CTAsection'; // Go up one level to reach Components
// import Industries from '@/app/Components/Industries'; // Go up one level to reach Components
import Process from '@/app/Components/Home/Process'; // Go up one level to reach Components
import Technologies from '@/app/Components/Home/Technologies';
import Solutions from '@/app/Components/Home/Solutions';

export default function Homepage() {
    return (
        <>
            <Header />
            <Hero />
            <Counter />
            <SocialIcons />
            <Portfolio />
            <Tabs />
            <Strategies />
            <Publishing />
            <Solutions />   
            {/* <Industries /> */}
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
    );
}
