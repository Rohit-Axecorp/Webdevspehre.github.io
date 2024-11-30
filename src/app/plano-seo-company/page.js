import React from 'react';
import Footer from '@/app/Components/Footer';
import Header from '@/app/Components/Header';
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
import AccordiansFAQ from '../Components/Services/Plano/AccordiansFAQ';
import RootLayout from '../layout';



export const metadata = {
    title: "Plano SEO Company | SEO Agency in Plano, Texas", // Dynamic title
    description: "Web Dev Sphere is the premier Plano SEO company, offering exceptional SEO solutions tailored for local businesses. Get in touch today for a personalized quote!" // Dynamic description
};

export default function Page() {
    const canonicalUrl = "https://webdevsphere.com/plano-seo-company";

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
