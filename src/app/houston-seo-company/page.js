import Footer from '@/app/Components/Footer';
import Header from '@/app/Components/Header';
import AccordiansFAQ from '@/app/Components/Services/Seo/AccordiansFAQ';
import CTAsection from '@/app/Components/Home/CTAsection';
import Roadmap from '@/app/Components/Services/Seo/Roadmap';
import SeoAudit from '@/app/Components/Services/Seo/SeoAudit';
import SeoBusinessSolutions from '@/app/Components/Services/Seo/SeoBusinessSolutions';
import SeoCaseStudies from '@/app/Components/Services/Seo/SeoCaseStudies';
import SeoCompany from '@/app/Components/Services/Seo/SeoCompany';
import SeoContact from '@/app/Components/Services/Seo/SeoContact';
import SeoCTA from '@/app/Components/Services/Seo/SeoCTA';
import SeoLocation from '@/app/Components/Services/Seo/SeoLocation';
import SeoPackages from '@/app/Components/Services/Seo/SeoPackages';
import SeoQuote from '@/app/Components/Services/Seo/SeoQuote';
import SeoRecognition from '@/app/Components/Services/Seo/SeoRecognition';
import SeoReviews from '@/app/Components/Services/Seo/SeoReviews';
import SeoServices from '@/app/Components/Services/Seo/SeoServices';
import SeoServicesIncludes from '@/app/Components/Services/Seo/SeoServicesIncludes';
import SeoSolution from '@/app/Components/Services/Seo/SeoSolution';
import TrustedBrands from '@/app/Components/Services/Seo/TrustedBrands';
import React from 'react';

export const metadata = {
  title: "Houston SEO Company | Top Rated Houston SEO  SEO Services", // Dynamic title
  description: "Web Dev Sphere is a well-known and trusted SEO company and full-service digital marketing agency in the Houston Texas." // Dynamic description
};

export default function Seo() {
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
