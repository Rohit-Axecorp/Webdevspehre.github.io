import Head from 'next/head';
import AboutAchievements from '@/app/Components/About/AboutAchievements';
import AboutDigitalLandscape from '@/app/Components/About/AboutDigitalLandscape';
import AboutHero from '@/app/Components/About/AboutHero';
import Aboutlocationcontact from '@/app/Components/About/Aboutlocationcontact';
import AboutTimeline from '@/app/Components/About/AboutTimeline';
import FourStatsAbout from '@/app/Components/About/FourStatsAbout';
import IndustriesAbout from '@/app/Components/About/IndustriesAbout';
import ProWebStory from '@/app/Components/About/ProWebStory';
import SpecialistsSection from '@/app/Components/About/SpecialistsSection';
import Footer from '@/app/Components/Footer';
import Header from '@/app/Components/Header';
import CTAsection from '@/app/Components/Home/CTAsection';
import React from 'react';

export const metadata = {
  title: "Who We Are | Web Dev Sphere", // Dynamic title
  description: "Web Dev Sphere is the leading digital agency that offers all-inclusive solutions to grow your business online. Visit us to learn more about our services.", // Dynamic description
};

export default function About() {
  return (
    <>
      <Head>
        {/* Meta Tags for SEO and Social Media */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph Meta Tags */}
        <meta property="og:url" content="https://webdevsphere.com/about-us" />
        <meta property="og:title" content="Who We Are | Web Dev Sphere" />
        <meta property="og:description" content="Web Dev Sphere is the leading digital agency that offers all-inclusive solutions to grow your business online. Visit us to learn more about our services." />
        <meta property="og:site_name" content="Web Dev Sphere" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Who We Are | Web Dev Sphere" />
        <meta name="twitter:description" content="Web Dev Sphere is the leading digital agency that offers all-inclusive solutions to grow your business online. Visit us to learn more about our services." /> */}

        {/* Canonical Tag */}
        <link rel="canonical" href="https://webdevsphere.com/about-us" />
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
  );
}
