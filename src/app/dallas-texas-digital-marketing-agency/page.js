import Footer from '@/app/Components/Footer'
import Header from '@/app/Components/Header'
import AccordiansFAQ from '@/app/Components/Services/DigitalMarketingDallas/AccordiansFAQ'
import CTAsection from '@/app/Components/Home/CTAsection'
import Testimonials from '@/app/Components/Home/Testmonials'
import Digitalsocialmedia from '@/app/Components/Services/DigitalMarketingDallas/Digitalsocialmedia'
import MarketingServices from '@/app/Components/Services/DigitalMarketingDallas/MarketingServices'
import ProcessSocialMdeia from '@/app/Components/Services/DigitalMarketingDallas/ProcessSocialMdeia'
import TechnologyStack from '@/app/Components/Services/DigitalMarketingDallas/TechnologyStack'
import SeoBusinessSolutions from '@/app/Components/Services/DigitalMarketingDallas/SeoBusinessSolutions'
import SeoCompany from '@/app/Components/Services/DigitalMarketingDallas/SeoCompany'
import SeoContact from '@/app/Components/Services/DigitalMarketingDallas/SeoContact'
import SeoLocation from '@/app/Components/Services/DigitalMarketingDallas/SeoLocation'
import SeoQuote from '@/app/Components/Services/DigitalMarketingDallas/SeoQuote'
import SeoRecognition from '@/app/Components/Services/Seo/SeoRecognition'
import SeoServicesIncludes from '@/app/Components/Services/DigitalMarketingDallas/SeoServicesIncludes'
import SeoReviews from '../Components/Services/DigitalMarketingDallas/SeoReviews'

export const metadata = {
    title: "Digital Marketing Agency Dallas",
    description: "Looking for a top-tier digital marketing agency Dallas? Collaborate with Web Dev Sphere to turn your business into success."
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
