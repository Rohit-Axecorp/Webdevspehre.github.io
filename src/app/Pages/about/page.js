import AboutAchievements from '@/app/Components/About/AboutAchievements'
import AboutDigitalLandscape from '@/app/Components/About/AboutDigitalLandscape'
import AboutHero from '@/app/Components/About/AboutHero'
import Aboutlocationcontact from '@/app/Components/About/Aboutlocationcontact'
// import AboutTimeline from '@/app/Components/About/AboutTimeline'
import FourStatsAbout from '@/app/Components/About/FourStatsAbout'
import IndustriesAbout from '@/app/Components/About/IndustriesAbout'
import ProWebStory from '@/app/Components/About/ProWebStory'
import SpecialistsSection from '@/app/Components/About/SpecialistsSection'
import Footer from '@/app/Components/Footer'
import Header from '@/app/Components/Header'
import CTAsection from '@/app/Components/Home/CTAsection'
import SeoQuote from '@/app/Components/Services/Seo/SeoQuote'
import React from 'react'


export default function about() {
  return (
    <>

      <Header />
      <AboutHero />
      <ProWebStory />
      <FourStatsAbout />
      <IndustriesAbout />
      {/* <AboutTimeline /> */}
      <SpecialistsSection />
      <AboutAchievements />
      <Aboutlocationcontact />
      <AboutDigitalLandscape />
      <CTAsection />
      <Footer />



    </>
  )
}
