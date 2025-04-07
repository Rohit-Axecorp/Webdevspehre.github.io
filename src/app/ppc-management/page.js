import Head from 'next/head';
import Footer from '@/app/Components/Footer'
import Header from '@/app/Components/Header'
import CTAsection from '@/app/Components/Home/CTAsection'
import React from 'react'
import RootLayout from '../layout';
import PPCSection01 from '../Components/PPCManagement/PPCSection01';
import PPCSection02 from '../Components/PPCManagement/PPCSection02';
import PPCSection03 from '../Components/PPCManagement/PPCSection03';
import PPCSection04 from '../Components/PPCManagement/PPCSection04';

export const metadata = {
    title: "PPC Management | Web Dev Sphere", // Dynamic title
    description: "Web Dev Sphere is the leading digital agency that offers all-inclusive solutions to grow your business online. Visit us to learn more about our services." // Dynamic description
};
export default function about() {
    const canonicalUrl = "https://webdevsphere.com/ppc-management";
    return (
        <>

            <RootLayout canonicalUrl={canonicalUrl} />
            <Head>
                <title>Who We Are | Web Dev Sphere</title>
                <meta name="description" content="Web Dev Sphere is the leading digital agency that offers all-inclusive solutions to grow your business online. Visit us to learn more about our services!" />
            </Head>
            <Header />
            <PPCSection01 />
            <PPCSection02 />
            <PPCSection03 />
            <PPCSection04 />
            <CTAsection />
            <Footer />

        </>
    )
}
