import Head from 'next/head'; // Import the Head component
import Footer from '@/app/Components/Footer';
import Header from '@/app/Components/Header';
import AccordiansFAQ from '@/app/Components/Home/AccordiansFAQ';
import CTAsection from '@/app/Components/Home/CTAsection';
import Roadmap from '@/app/Components/Services/Plano/Roadmap';
import SeoAudit from '@/app/Components/Services/Plano/SeoAudit';
import SeoBusinessSolutions from '@/app/Components/Services/Plano/SeoBusinessSolutions';
import SeoCaseStudies from '@/app/Components/Services/Plano/SeoCaseStudies';
import SeoCompany from '@/app/Components/Services/Plano/SeoCompany';
import SeoContact from '@/app/Components/Services/Plano/SeoContact';
import SeoCTA from '@/app/Components/Services/Plano/SeoCTA';
import SeoLocation from '@/app/Components/Services/Plano/SeoLocation';
import SeoPackages from '@/app/Components/Services/Plano/SeoPackages';
import SeoQuote from '@/app/Components/Services/Plano/SeoQuote';
import SeoRecognition from '@/app/Components/Services/Plano/SeoRecognition';
import SeoReviews from '@/app/Components/Services/Plano/SeoReviews';
import SeoServices from '@/app/Components/Services/Plano/SeoServices';
import SeoServicesIncludes from '@/app/Components/Services/Plano/SeoServicesIncludes';
import SeoSolution from '@/app/Components/Services/Plano/SeoSolution';
import TrustedBrands from '@/app/Components/Services/Plano/TrustedBrands';
import React from 'react';

export default function Page() {
    return (
        <>
            <Head>
                <title>Leading Austin SEO Company | Web Dev Sphere</title>
                <meta name="description" content="Web Dev Sphere is an award-winning Austin SEO company specializing in top-tier SEO solutions. Partner with us today to make your mark in the industry." />
            </Head>
            <Header />
            <SeoContact />
            <TrustedBrands />
            <SeoCompany />
            <SeoServices />
            <SeoServicesIncludes />
            <SeoAudit />
            <Roadmap />
            <SeoCaseStudies />
            <SeoReviews />
            <SeoPackages />
            <SeoSolution />
            <SeoRecognition />
            <SeoBusinessSolutions />
            <SeoCTA />
            <SeoLocation />
            <SeoQuote />
            <AccordiansFAQ />
            <CTAsection />
            <Footer />
        </>
    );
}
