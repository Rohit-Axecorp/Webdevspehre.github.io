import Footer from '@/app/Components/Footer';
import Header from '@/app/Components/Header';
import CTAsection from '@/app/Components/Home/CTAsection';
import SeoCompany from '@/app/Components/Services/Seo/SeoCompany';
import SeoContact from '@/app/Components/Services/Seo/SeoContact';
import TrustedBrands from '@/app/Components/Services/Seo/TrustedBrands';
import React from 'react';


export default function Seo() {
  return (
    <>

      <Header />
      <SeoContact />
      <TrustedBrands />
      <SeoCompany />
      <CTAsection />
      <Footer />
    </>
  );
}
