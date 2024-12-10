import Footer from '@/app/Components/Footer';
import Header from '@/app/Components/Header';
import CTAsection from '@/app/Components/Home/CTAsection';
import Roadmap from '@/app/Components/Services/AustinSeo/Roadmap';
import SeoAudit from '@/app/Components/Services/AustinSeo/SeoAudit';
import SeoBusinessSolutions from '@/app/Components/Services/AustinSeo/SeoBusinessSolutions';
import SeoCaseStudies from '@/app/Components/Services/AustinSeo/SeoCaseStudies';
import SeoCompany from '@/app/Components/Services/AustinSeo/SeoCompany';
import SeoContact from '@/app/Components/Services/AustinSeo/SeoContact';
import SeoCTA from '@/app/Components/Services/AustinSeo/SeoCTA';
import SeoLocation from '@/app/Components/Services/AustinSeo/SeoLocation';
import SeoPackages from '@/app/Components/Services/AustinSeo/SeoPackages';
import SeoQuote from '@/app/Components/Services/AustinSeo/SeoQuote';
import SeoRecognition from '@/app/Components/Services/AustinSeo/SeoRecognition';
import SeoReviews from '@/app/Components/Services/AustinSeo/SeoReviews';
import SeoServices from '@/app/Components/Services/AustinSeo/SeoServices';
import SeoServicesIncludes from '@/app/Components/Services/AustinSeo/SeoServicesIncludes';
import SeoSolution from '@/app/Components/Services/AustinSeo/SeoSolution';
import TrustedBrands from '@/app/Components/Services/AustinSeo/TrustedBrands';
import React from 'react';
import AccordiansFAQ from '@/app/Components/Services/AustinSeo/AccordiansFAQ';
import RootLayout from '../layout';


export const metadata = {
    title: "Leading Austin SEO Company",
    description: "Web Dev Sphere is an award-winning Austin SEO company specializing in top-tier SEO solutions. Partner with us today to make your mark in the industry." // Dynamic description
};

export default function Page() {
    const canonicalUrl = "https://webdevsphere.com/austin-seo-company";

    return (
        <>
            <RootLayout canonicalUrl={canonicalUrl} />
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
