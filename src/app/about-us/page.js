import Head from 'next/head';
import AboutAchievements from '@/app/Components/About/AboutAchievements'
import AboutDigitalLandscape from '@/app/Components/About/AboutDigitalLandscape'
import AboutHero from '@/app/Components/About/AboutHero'
import Aboutlocationcontact from '@/app/Components/About/Aboutlocationcontact'
import AboutTimeline from '@/app/Components/About/AboutTimeline'
import FourStatsAbout from '@/app/Components/About/FourStatsAbout'
import IndustriesAbout from '@/app/Components/About/IndustriesAbout'
import ProWebStory from '@/app/Components/About/ProWebStory'
import SpecialistsSection from '@/app/Components/About/SpecialistsSection'
import Footer from '@/app/Components/Footer'
import Header from '@/app/Components/Header'
import CTAsection from '@/app/Components/Home/CTAsection'
import React from 'react'
import RootLayout from '../layout';

export const metadata = {
  title: "Who We Are | Web Dev Sphere", // Dynamic title
  description: "Web Dev Sphere is the leading digital agency that offers all-inclusive solutions to grow your business online. Visit us to learn more about our services." // Dynamic description
};
export default function about() {
  const canonicalUrl = "https://webdevsphere.com/about-us";
  return (
    <>

      <RootLayout canonicalUrl={canonicalUrl} />
      <Head>
        <title>Who We Are | Web Dev Sphere</title>
        <meta name="description" content="Web Dev Sphere is the leading digital agency that offers all-inclusive solutions to grow your business online. Visit us to learn more about our services!" />
      </Head>
      <Header />
      <AboutHero />
      <ProWebStory />
      <FourStatsAbout />
      <IndustriesAbout />
      <AboutTimeline />
      <AboutAchievements />
      <SpecialistsSection />
      <Aboutlocationcontact />
      <AboutDigitalLandscape />
      <CTAsection />
      <Footer />

    </>
  )
}
