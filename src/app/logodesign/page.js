import Footer from '@/app/Components/Footer'
import Header from '@/app/Components/Header'
import CTAsection from '@/app/Components/Home/CTAsection'
import Portfolio from '@/app/Components/Home/Portfolio'
import Strategies from '@/app/Components/Home/Strategies'
import Testimonials from '@/app/Components/Home/Testmonials'
import ProcessSocialMedia from '@/app/Components/Services/DigitalMarketing/ProcessSocialMdeia'
import LogoExperience from '@/app/Components/Services/Logodesign/LogoExperience'
import ProfessionalLogo from '@/app/Components/Services/Logodesign/ProfessionalLogo'
import SeoBusinessSolutions from '@/app/Components/Services/Seo/SeoBusinessSolutions'
import SeoCompany from '@/app/Components/Services/Seo/SeoCompany'
import SeoLocation from '@/app/Components/Services/Seo/SeoLocation'
import SeoPackages from '@/app/Components/Services/Seo/SeoPackages'
import SeoQuote from '@/app/Components/Services/Seo/SeoQuote'
import SeoRecognition from '@/app/Components/Services/Seo/SeoRecognition'
import React from 'react'
import RootLayout from '../layout';


export default function page() {
  const canonicalUrl = "https://webdevsphere.com/logodesign";

  return (
    <>
      <RootLayout canonicalUrl={canonicalUrl} />
      <Header />
      <ProfessionalLogo />
      <Portfolio />
      <LogoExperience />
      <Strategies />
      <ProcessSocialMedia />
      <Testimonials />
      <SeoRecognition />
      <SeoBusinessSolutions />
      <SeoPackages />
      <SeoLocation />
      <SeoQuote />
      <CTAsection />
      <Footer />

    </>
  )
}
