import Footer from '@/app/Components/Footer';
import Header from '@/app/Components/Header';
import CTAsection from '@/app/Components/Home/CTAsection';
import Roadmap from '@/app/Components/Services/LondonSeo/Roadmap';
import SeoAudit from '@/app/Components/Services/LondonSeo/SeoAudit';
import SeoBusinessSolutions from '@/app/Components/Services/LondonSeo/SeoBusinessSolutions';
import SeoCaseStudies from '@/app/Components/Services/LondonSeo/SeoCaseStudies';
import SeoCompany from '@/app/Components/Services/LondonSeo/SeoCompany';
import SeoContact from '@/app/Components/Services/LondonSeo/SeoContact';
import SeoCTA from '@/app/Components/Services/LondonSeo/SeoCTA';
import SeoLocation from '@/app/Components/Services/LondonSeo/SeoLocation';
import SeoPackages from '@/app/Components/Services/LondonSeo/SeoPackages';
import SeoQuote from '@/app/Components/Services/LondonSeo/SeoQuote';
import SeoRecognition from '@/app/Components/Services/LondonSeo/SeoRecognition';
import SeoReviews from '@/app/Components/Services/LondonSeo/SeoReviews';
import SeoServices from '@/app/Components/Services/LondonSeo/SeoServices';
import SeoServicesIncludes from '@/app/Components/Services/LondonSeo/SeoServicesIncludes';
import SeoSolution from '@/app/Components/Services/LondonSeo/SeoSolution';
import TrustedBrands from '@/app/Components/Services/LondonSeo/TrustedBrands';
import React from 'react';
import AccordiansFAQ from '@/app/Components/Services/LondonSeo/AccordiansFAQ';
import RootLayout from '../layout';


export const metadata = {
    title: "Leading Austin SEO Company | Web Dev Sphere", // Dynamic title
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
