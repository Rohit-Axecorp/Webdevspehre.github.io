import Head from 'next/head';

import Footer from '@/app/Components/Footer'
import Header from '@/app/Components/Header'
import CTAsection from '@/app/Components/Home/CTAsection'
import React from 'react'
import RootLayout from '../layout';
import PortfolioSection01 from '../Components/Portfolio/PortfolioSection01';
import PortfolioSection02 from '../Components/Portfolio/PortfolioSection02';
import PortfolioSection03 from '../Components/Portfolio/PortfolioSection03';
import PortfolioSection04 from '../Components/Portfolio/PortfolioSection04';
import PortfolioSection05 from '../Components/Portfolio/PortfolioSection05';

export const metadata = {
    title: "Portfolio | Web Dev Sphere",
    description: "Web Dev Sphere is the leading digital agency that offers all-inclusive solutions to grow your business online. Visit us to learn more about our services."
};
export default function about() {
    const canonicalUrl = "https://webdevsphere.com/portfolio";
    return (
        <>

            <RootLayout canonicalUrl={canonicalUrl} />
            <Head>
                <title>Who We Are | Web Dev Sphere</title>
                <meta name="description" content="Web Dev Sphere is the leading digital agency that offers all-inclusive solutions to grow your business online. Visit us to learn more about our services!" />
            </Head>
            <Header />
            <PortfolioSection01 />
            <PortfolioSection02 />
            <PortfolioSection03 />
            <PortfolioSection04 />
            <PortfolioSection05 />
            <CTAsection />
            <Footer />

        </>
    )
}
