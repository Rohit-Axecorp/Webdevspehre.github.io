import Footer from '@/app/Components/Footer'
import Header from '@/app/Components/Header'
import AccordiansFAQ from '@/app/Components/Services/DigitalMarketing/AccordiansFAQ'
import CTAsection from '@/app/Components/Home/CTAsection'
import Testimonials from '@/app/Components/Home/Testmonials'
import Digitalsocialmedia from '@/app/Components/Services/DigitalMarketing/Digitalsocialmedia'
import MarketingServices from '@/app/Components/Services/DigitalMarketing/MarketingServices'
import ProcessSocialMdeia from '@/app/Components/Services/DigitalMarketing/ProcessSocialMdeia'
import TechnologyStack from '@/app/Components/Services/DigitalMarketing/TechnologyStack'
import SeoBusinessSolutions from '@/app/Components/Services/DigitalMarketing/SeoBusinessSolutions'
import SeoCompany from '@/app/Components/Services/DigitalMarketing/SeoCompany'
import SeoContact from '@/app/Components/Services/DigitalMarketing/SeoContact'
import SeoLocation from '@/app/Components/Services/DigitalMarketing/SeoLocation'
import SeoQuote from '@/app/Components/Services/DigitalMarketing/SeoQuote'
import SeoRecognition from '@/app/Components/Services/Seo/SeoRecognition'
import SeoServicesIncludes from '@/app/Components/Services/DigitalMarketing/SeoServicesIncludes'
import SeoReviews from '../Components/Services/DigitalMarketing/SeoReviews'
import RootLayout from '../layout';

export const metadata = {
    title: "Digital Marketing Services Agency in Houston Texas",
    description: "Thrive a full-service Houston digital marketing agency. We offer web design, SEO, social media, PPC, and more. Request a proposal today!"
};

export default function page() {
    const canonicalUrl = "https://webdevsphere.com/houston-texas-digital-marketing-agency";

    return (
        <>
            <RootLayout canonicalUrl={canonicalUrl} />
            <Header />
            <SeoContact />
            <Digitalsocialmedia />
            <SeoCompany />
            <ProcessSocialMdeia />
            <MarketingServices />
            <TechnologyStack />
            <SeoReviews />
            <SeoServicesIncludes />
            <SeoBusinessSolutions />
            <SeoRecognition />
            <SeoLocation />
            <SeoQuote />
            <AccordiansFAQ />
            <CTAsection />
            <Footer />
        </>
    )
}
