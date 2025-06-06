import AboutDigitalLandscape from '@/app/Components/About/AboutDigitalLandscape'
import Aboutlocationcontact from '@/app/Components/About/Aboutlocationcontact'
import GlobalPresenceSlider from '@/app/Components/About/GlobalPresenceSlider'
import Footer from '@/app/Components/Footer'
import Header from '@/app/Components/Header'
import Awards from '@/app/Components/Home/Awards'
import CTAsection from '@/app/Components/Home/CTAsection'
import React from 'react'
import RootLayout from '../layout';

export const metadata = {
  title: "Contact us | Web Dev Sphere", // Dynamic title
};

export default function ContactPage() {
  const canonicalUrl = "https://webdevsphere.com/contact-us";
  return (
    <>
      <RootLayout canonicalUrl={canonicalUrl} />
      <Header />
      <Aboutlocationcontact />
      <AboutDigitalLandscape />
      <Awards />
      <GlobalPresenceSlider />
      <CTAsection />
      <Footer />



    </>
  )
}
