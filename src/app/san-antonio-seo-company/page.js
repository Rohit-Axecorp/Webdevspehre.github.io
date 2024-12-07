import Footer from '@/app/Components/Footer';
import Header from '@/app/Components/Header';
import CTAsection from '@/app/Components/Home/CTAsection';
import Roadmap from '@/app/Components/Services/SanAntonioSeo/Roadmap';
import SeoAudit from '@/app/Components/Services/SanAntonioSeo/SeoAudit';
import SeoBusinessSolutions from '@/app/Components/Services/SanAntonioSeo/SeoBusinessSolutions';
import SeoCaseStudies from '@/app/Components/Services/SanAntonioSeo/SeoCaseStudies';
import SeoCompany from '@/app/Components/Services/SanAntonioSeo/SeoCompany';
import SeoContact from '@/app/Components/Services/SanAntonioSeo/SeoContact';
import SeoCTA from '@/app/Components/Services/SanAntonioSeo/SeoCTA';
import SeoLocation from '@/app/Components/Services/SanAntonioSeo/SeoLocation';
import SeoPackages from '@/app/Components/Services/SanAntonioSeo/SeoPackages';
import SeoQuote from '@/app/Components/Services/SanAntonioSeo/SeoQuote';
import SeoRecognition from '@/app/Components/Services/SanAntonioSeo/SeoRecognition';
import SeoReviews from '@/app/Components/Services/SanAntonioSeo/SeoReviews';
import SeoServices from '@/app/Components/Services/SanAntonioSeo/SeoServices';
import SeoServicesIncludes from '@/app/Components/Services/SanAntonioSeo/SeoServicesIncludes';
import SeoSolution from '@/app/Components/Services/SanAntonioSeo/SeoSolution';
import TrustedBrands from '@/app/Components/Services/SanAntonioSeo/TrustedBrands';
import React from 'react';
import AccordiansFAQ from '@/app/Components/Services/SanAntonioSeo/AccordiansFAQ';
import RootLayout from '../layout';


export const metadata = {
    title: "San Antonio SEO Company | Award-Winning SEO Services", // Dynamic title
    description: "Looking for a San Antonio based SEO Company to help you organic rankings? Look no further than Digital Position! Contact us today!" // Dynamic description
};

export default function Page() {
    const canonicalUrl = "https://webdevsphere.com/san-antonio-seo-company";

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
