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

export const metadata = {
    title: "Leading Digtial Marketing Agency Houston | Web Dev Sphere",
    description: "Ready to grow your business in the competitive online space? Collaborate with the leading digital marketing agency Houston to attain long-term success!"
};

export default function page() {
    return (
        <>

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
