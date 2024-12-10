import Footer from '@/app/Components/Footer'
import Header from '@/app/Components/Header'
import AccordiansFAQ from '@/app/Components/Home/AccordiansFAQ'
import Awards from '@/app/Components/Home/Awards'
import CTAsection from '@/app/Components/Home/CTAsection'
import Roadmap from '@/app/Components/Services/Seo/Roadmap'
import SeoBusinessSolutions from '@/app/Components/Services/Seo/SeoBusinessSolutions'
import SeoCompany from '@/app/Components/Services/Seo/SeoCompany'
import SeoQuote from '@/app/Components/Services/Seo/SeoQuote'
import SeoRecognition from '@/app/Components/Services/Seo/SeoRecognition'
import SeoReviews from '@/app/Components/Services/Seo/SeoReviews'
import ProfessionalWebDesignServices from '@/app/Components/Services/Webdesign/ProfessionalWebDesignServices'
import WebdesignCTA from '@/app/Components/Services/Webdesign/WebdesignCTA'
import BusinessNeed from '@/app/Components/Services/Webmaintenance/BusinessNeed'
import Packages from '@/app/Components/Services/Webmaintenance/Packages'
import WebmaintenanceQuote from '@/app/Components/Services/Webmaintenance/WebmaintenanceQuote'
import React from 'react'
export const metadata = {
  title: "Website Services Maintenance USA", // Dynamic title
};
import RootLayout from '../layout';

export default function page() {
  const canonicalUrl = "https://webdevsphere.com/website-maintenance-services";

  return (
    <>
      <RootLayout canonicalUrl={canonicalUrl} />
      <Header />
      <WebmaintenanceQuote />
      <Packages />
      <SeoRecognition />
      <ProfessionalWebDesignServices />
      <SeoCompany />
      <WebdesignCTA />
      <Roadmap />
      <BusinessNeed />
      <SeoReviews />
      <Awards />
      <SeoBusinessSolutions />
      <SeoQuote />
      <AccordiansFAQ />
      <CTAsection />
      <Footer />
    </>

  )
}
