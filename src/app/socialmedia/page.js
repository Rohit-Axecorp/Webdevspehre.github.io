import Head from 'next/head';
import Footer from '@/app/Components/Footer'
import Header from '@/app/Components/Header'
import AccordiansFAQ from '@/app/Components/Home/AccordiansFAQ'
import CTAsection from '@/app/Components/Home/CTAsection'
import Testimonials from '@/app/Components/Home/Testmonials'
import MarketingServices from '@/app/Components/Services/DigitalMarketing/MarketingServices'
import ProcessSocialMedia from '@/app/Components/Services/DigitalMarketing/ProcessSocialMdeia'
import TechnologyStack from '@/app/Components/Services/DigitalMarketing/TechnologyStack'
import SeoBusinessSolutions from '@/app/Components/Services/Seo/SeoBusinessSolutions'
import SeoLocation from '@/app/Components/Services/Seo/SeoLocation'
import SeoQuote from '@/app/Components/Services/Seo/SeoQuote'
import SeoRecognition from '@/app/Components/Services/Seo/SeoRecognition'
import SeoSolution from '@/app/Components/Services/Seo/SeoSolution'
import TrustedBrands from '@/app/Components/Services/Seo/TrustedBrands'
import React from 'react'
import SocialMediaContact from '../Components/Services/SocialMedia/SocialMediaContact'
import SocialMediaCompany from '../Components/Services/SocialMedia/SocialMediaCompany';
import Digitalsocialmedia from '../Components/Services/SocialMedia/Digitalsocialmedia';
import SocialMediaServicesIncludes from '../Components/Services/SocialMedia/SocialMediaServicesIncludes';

export default function page() {
  return (
    <>

      <Head>
        <title>Professional Social Media Marketing Services | Web Dev Sphere</title>
        <meta name="description" content="Are you looking for top-tier social media marketing services? Web Dev Sphere has expert social media strategists who can help you grow your online presence. " />
      </Head>
      <Header />
      <SocialMediaContact />
      <SocialMediaCompany />
      <TrustedBrands />
      <Digitalsocialmedia />
      <SocialMediaServicesIncludes />
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
