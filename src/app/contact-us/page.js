import AboutDigitalLandscape from '@/app/Components/About/AboutDigitalLandscape'
import Aboutlocationcontact from '@/app/Components/About/Aboutlocationcontact'
import GlobalPresenceSlider from '@/app/Components/About/GlobalPresenceSlider'
import Footer from '@/app/Components/Footer'
import Header from '@/app/Components/Header'
import Awards from '@/app/Components/Home/Awards'
import CTAsection from '@/app/Components/Home/CTAsection'
import Head from 'next/head' // Import Head for adding meta tags
import React from 'react'

export default function ContactPage() {
  return (
    <>
      <Head>
        {/* Title */}
        <title>Contact us | Web Dev Sphere</title>

        {/* Canonical URL */}
        <link rel="canonical" href="https://webdevsphere.com/contact-us" />

        {/* Open Graph (OG) Tags */}
        <meta property="og:title" content="Contact us | Web Dev Sphere" />
        <meta property="og:url" content="https://webdevsphere.com/contact-us" />
        <meta property="og:type" content="website" />
        <meta property="og:image:alt" content="Contact us at Web Dev Sphere" />

        {/* Twitter Card Tags
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact us | Web Dev Sphere" /> */}
      </Head>

      <Header />
      <Aboutlocationcontact />
      <AboutDigitalLandscape />
      <Awards />
      <GlobalPresenceSlider />
      <CTAsection />
      <Footer />
    </>
  );
}
