import Footer from '@/app/Components/Footer';
import Header from '@/app/Components/Header';
import CTAsection from '@/app/Components/Home/CTAsection';
import Roadmap from '@/app/Components/Services/Dallas/Roadmap';
import SeoAudit from '@/app/Components/Services/Dallas/SeoAudit';
import SeoBusinessSolutions from '@/app/Components/Services/Dallas/SeoBusinessSolutions';
import SeoCaseStudies from '@/app/Components/Services/Dallas/SeoCaseStudies';
import SeoCompany from '@/app/Components/Services/Dallas/SeoCompany';
import SeoContact from '@/app/Components/Services/Dallas/SeoContact';
import SeoCTA from '@/app/Components/Services/Dallas/SeoCTA';
import SeoLocation from '@/app/Components/Services/Dallas/SeoLocation';
import SeoPackages from '@/app/Components/Services/Dallas/SeoPackages';
import SeoQuote from '@/app/Components/Services/Dallas/SeoQuote';
import SeoRecognition from '@/app/Components/Services/Dallas/SeoRecognition';
import SeoReviews from '@/app/Components/Services/Dallas/SeoReviews';
import SeoServices from '@/app/Components/Services/Dallas/SeoServices';
import SeoServicesIncludes from '@/app/Components/Services/Dallas/SeoServicesIncludes';
import SeoSolution from '@/app/Components/Services/Dallas/SeoSolution';
import TrustedBrands from '@/app/Components/Services/Dallas/TrustedBrands';
import React from 'react';
import AccordiansFAQ from '../Components/Services/Dallas/AccordiansFAQ';

export const metadata = {
    title: "Dallas SEO Company | Best SEO Services In Dallas", // Dynamic title
    description: "Web Dev Sphere is the leading Dallas SEO company that provides top-notch SEO solutions to Dallas-based businesses. Request a quote now!" // Dynamic description
};

export default function Page() { // Use PascalCase for component names
    return (
        <>
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
