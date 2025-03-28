import Footer from '@/app/Components/Footer';
import Header from '@/app/Components/Header';
import CTAsection from '@/app/Components/Home/CTAsection';
import SeoAudit from '@/app/Components/Services/LondonSeo/SeoAudit';
import SeoContact from '@/app/Components/Services/LondonSeo/SeoContact';
import SeoPackages from '@/app/Components/Services/LondonSeo/SeoPackages';
import SeoRecognition from '@/app/Components/Services/LondonSeo/SeoRecognition';
import SeoReviews from '@/app/Components/Services/LondonSeo/SeoReviews';
import SeoServicesIncludes from '@/app/Components/Services/LondonSeo/SeoServicesIncludes';
import TrustedBrands from '@/app/Components/Services/LondonSeo/TrustedBrands';
import React from 'react';
import AccordiansFAQ from '@/app/Components/Services/LondonSeo/AccordiansFAQ';
import RootLayout from '../../layout';
import Healthcare from '../../Components/Services/LondonSeo/Healthcare';
import ServicesLondon from '../../Components/Services/LondonSeo/ServicesLondon';
import SeoLondonTimeline from '../../Components/Services/LondonSeo/SeoLondonTimeline';
import CrossPlatform from '../../Components/Services/LondonSeo/CrossPlatform';
import Technologies from '@/app/Components/Home/Technologies';
import WebDevelopmentFeatures from '@/app/Components/Services/LondonSeo/WebDevelopmentFeatures';
import Ctaweblondon from '@/app/Components/Services/LondonSeo/Ctaweblondon';

export const metadata = {
    title: "London Web Development Company UK",
    description: "Looking for a top-rated web development company in London, UK? We design and build high-performance, SEO-optimized websites that drive traffic, leads, and growth. From custom development to eCommerce and WordPress solutions, our expert team delivers stunning, responsive, and user-friendly websites tailored to your business needs."
};

export default function Page() {
    const canonicalUrl = "https://webdevsphere.com/uk/london-webdevelopment-company";

    return (
        <>
            <RootLayout canonicalUrl={canonicalUrl} />
            <Header />
            <SeoContact />
            <TrustedBrands />
            <Healthcare />
            <SeoServicesIncludes />
            <ServicesLondon />
            <SeoPackages />
            <SeoAudit />
            <SeoReviews />
            <Technologies />
            <SeoLondonTimeline />
            <SeoRecognition />
            <CrossPlatform />
            <WebDevelopmentFeatures />
            <Ctaweblondon />
            <AccordiansFAQ />
            <CTAsection />
            <Footer />
        </>
    );
}
