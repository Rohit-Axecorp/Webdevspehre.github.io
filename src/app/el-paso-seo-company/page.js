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
    title: "SEO Company El Paso | SEO Services & Pricing El Paso", // Dynamic title
    description: "As an award-winning SEO company in El Paso, we offer cost-effective marketing solutions that provide good return on investment and value for money." // Dynamic description
};

export default function Page() {
    const canonicalUrl = "https://webdevsphere.com/el-paso-seo-company";

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
