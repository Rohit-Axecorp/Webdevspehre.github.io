import Footer from '@/app/Components/Footer';
import Header from '@/app/Components/Header';
import CTAsection from '@/app/Components/Home/CTAsection';
import Roadmap from '@/app/Components/Services/ElPasoSeo/Roadmap';
import SeoAudit from '@/app/Components/Services/ElPasoSeo/SeoAudit';
import SeoBusinessSolutions from '@/app/Components/Services/ElPasoSeo/SeoBusinessSolutions';
import SeoCaseStudies from '@/app/Components/Services/ElPasoSeo/SeoCaseStudies';
import SeoCompany from '@/app/Components/Services/ElPasoSeo/SeoCompany';
import SeoContact from '@/app/Components/Services/ElPasoSeo/SeoContact';
import SeoCTA from '@/app/Components/Services/ElPasoSeo/SeoCTA';
import SeoLocation from '@/app/Components/Services/ElPasoSeo/SeoLocation';
import SeoPackages from '@/app/Components/Services/ElPasoSeo/SeoPackages';
import SeoQuote from '@/app/Components/Services/ElPasoSeo/SeoQuote';
import SeoRecognition from '@/app/Components/Services/ElPasoSeo/SeoRecognition';
import SeoReviews from '@/app/Components/Services/ElPasoSeo/SeoReviews';
import SeoServices from '@/app/Components/Services/ElPasoSeo/SeoServices';
import SeoServicesIncludes from '@/app/Components/Services/ElPasoSeo/SeoServicesIncludes';
import SeoSolution from '@/app/Components/Services/ElPasoSeo/SeoSolution';
import TrustedBrands from '@/app/Components/Services/ElPasoSeo/TrustedBrands';
import React from 'react';
import AccordiansFAQ from '@/app/Components/Services/ElPasoSeo/AccordiansFAQ';
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
