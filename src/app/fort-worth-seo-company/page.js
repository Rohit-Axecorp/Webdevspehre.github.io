import React from 'react';
import Footer from '@/app/Components/Footer';
import Header from '@/app/Components/Header';
import CTAsection from '@/app/Components/Home/CTAsection';
import Roadmap from '@/app/Components/Services/FortWorth/Roadmap';
import SeoAudit from '@/app/Components/Services/FortWorth/SeoAudit';
import SeoBusinessSolutions from '@/app/Components/Services/FortWorth/SeoBusinessSolutions';
import SeoCaseStudies from '@/app/Components/Services/FortWorth/SeoCaseStudies';
import SeoCompany from '@/app/Components/Services/FortWorth/SeoCompany';
import SeoContact from '@/app/Components/Services/FortWorth/SeoContact';
import SeoCTA from '@/app/Components/Services/FortWorth/SeoCTA';
import SeoLocation from '@/app/Components/Services/FortWorth/SeoLocation';
import SeoPackages from '@/app/Components/Services/FortWorth/SeoPackages';
import SeoQuote from '@/app/Components/Services/FortWorth/SeoQuote';
import SeoRecognition from '@/app/Components/Services/FortWorth/SeoRecognition';
import SeoReviews from '@/app/Components/Services/FortWorth/SeoReviews';
import SeoServices from '@/app/Components/Services/FortWorth/SeoServices';
import SeoServicesIncludes from '@/app/Components/Services/FortWorth/SeoServicesIncludes';
import SeoSolution from '@/app/Components/Services/FortWorth/SeoSolution';
import TrustedBrands from '@/app/Components/Services/FortWorth/TrustedBrands';
import AccordiansFAQ from '../Components/Services/FortWorth/AccordiansFAQ';
import RootLayout from '../layout';


export const metadata = {
    title: "Fort Worth SEO Company - Award-Winning SEO Services", // Dynamic title
    description: "Web Dev Sphere is a professional Fort Worth SEO company known for its all-inclusive SEO services. For more info, visit our website now!" // Dynamic description
};

export default function Page() {
    const canonicalUrl = "https://webdevsphere.com/fort-worth-seo-company";

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
