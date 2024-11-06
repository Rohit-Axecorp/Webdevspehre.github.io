import Head from 'next/head';
import Footer from '@/app/Components/Footer'
import Header from '@/app/Components/Header'
import CTAsection from '@/app/Components/Home/CTAsection'
import MarketingServices from '@/app/Components/Services/SocialMedia/MarketingServices'
import ProcessSocialMedia from '@/app/Components/Services/SocialMedia/ProcessSocialMdeia'
import TechnologyStack from '@/app/Components/Services/SocialMedia/TechnologyStack'
import TrustedBrands from '@/app/Components/Services/Seo/TrustedBrands'
import React from 'react'
import SocialMediaContact from '../Components/Services/SocialMedia/SocialMediaContact'
import SocialMediaCompany from '../Components/Services/SocialMedia/SocialMediaCompany';
import Digitalsocialmedia from '../Components/Services/SocialMedia/Digitalsocialmedia';
import SocialMediaServicesIncludes from '../Components/Services/SocialMedia/SocialMediaServicesIncludes';
import SocialmediaReviews from '../Components/Services/SocialMedia/SocialmediaReviews';
import SocialMediaRecognition from '../Components/Services/SocialMedia/SocialMediaRecognition';
import SocialMediaBusinessSolutions from '../Components/Services/SocialMedia/SocialMediaBusinessSolutions';
import SocialMediaLocation from '../Components/Services/SocialMedia/SocialMediaLocation';
import SocialMediaQuote from '../Components/Services/SocialMedia/SocialMediaQuote';
import SocialMediaAccordiansFAQ from '../Components/Services/SocialMedia/SocialMediaAccordiansFAQ';

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
      <SocialmediaReviews />
      <TechnologyStack />
      <MarketingServices />
      <SocialMediaRecognition />
      <SocialMediaBusinessSolutions />
      <SocialMediaLocation />
      <SocialMediaQuote />
      <SocialMediaAccordiansFAQ />
      <CTAsection />
      <Footer />

    </>
  )
}
