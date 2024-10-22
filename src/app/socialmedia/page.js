import Footer from '@/app/Components/Footer'
import Header from '@/app/Components/Header'
import Accordians from '@/app/Components/Home/Accordians'
import AccordiansFAQ from '@/app/Components/Home/AccordiansFAQ'
import CTAsection from '@/app/Components/Home/CTAsection'
import Testimonials from '@/app/Components/Home/Testmonials'
import Digitalsocialmedia from '@/app/Components/Services/DigitalMarketing/Digitalsocialmedia'
import MarketingServices from '@/app/Components/Services/DigitalMarketing/MarketingServices'
import ProcessSocialMedia from '@/app/Components/Services/DigitalMarketing/ProcessSocialMdeia'
import TechnologyStack from '@/app/Components/Services/DigitalMarketing/TechnologyStack'
import SeoBusinessSolutions from '@/app/Components/Services/Seo/SeoBusinessSolutions'
import SeoCompany from '@/app/Components/Services/Seo/SeoCompany'
import SeoContact from '@/app/Components/Services/Seo/SeoContact'
import SeoLocation from '@/app/Components/Services/Seo/SeoLocation'
import SeoQuote from '@/app/Components/Services/Seo/SeoQuote'
import SeoRecognition from '@/app/Components/Services/Seo/SeoRecognition'
import SeoServicesIncludes from '@/app/Components/Services/Seo/SeoServicesIncludes'
import SeoSolution from '@/app/Components/Services/Seo/SeoSolution'
import TrustedBrands from '@/app/Components/Services/Seo/TrustedBrands'
import React from 'react'

export default function page() {
  return (
    <>
    
    <Header />
    <SeoContact />
    <TrustedBrands />
    <SeoCompany />
    <Digitalsocialmedia />
    <SeoServicesIncludes />
    <ProcessSocialMedia />
    <Testimonials />
    <TechnologyStack />
    <MarketingServices />
    <SeoRecognition />
    <SeoBusinessSolutions />
    <SeoSolution />
    <SeoLocation />
    <SeoQuote />
    <AccordiansFAQ />
    <CTAsection />
    <Footer />
    
    
    
    </>
  )
}
