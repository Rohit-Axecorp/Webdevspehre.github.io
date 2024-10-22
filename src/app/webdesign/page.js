import Footer from '@/app/Components/Footer'
import Header from '@/app/Components/Header'
import AccordiansFAQ from '@/app/Components/Home/AccordiansFAQ'
import Awards from '@/app/Components/Home/Awards'
import CTAsection from '@/app/Components/Home/CTAsection'
import Portfolio from '@/app/Components/Home/Portfolio'
import Roadmap from '@/app/Components/Services/Seo/Roadmap'
import SeoBusinessSolutions from '@/app/Components/Services/Seo/SeoBusinessSolutions'
import SeoCompany from '@/app/Components/Services/Seo/SeoCompany'
import SeoLocation from '@/app/Components/Services/Seo/SeoLocation'
import SeoPackages from '@/app/Components/Services/Seo/SeoPackages'
import SeoQuote from '@/app/Components/Services/Seo/SeoQuote'
import SeoRecognition from '@/app/Components/Services/Seo/SeoRecognition'
import SeoReviews from '@/app/Components/Services/Seo/SeoReviews'
import SeoServices from '@/app/Components/Services/Seo/SeoServices'
import SeoSolution from '@/app/Components/Services/Seo/SeoSolution'
import ProfessionalWebDesignServices from '@/app/Components/Services/Webdesign/ProfessionalWebDesignServices'
import WebDesignAgency from '@/app/Components/Services/Webdesign/WebDesignAgency'
import WebdesignCTA from '@/app/Components/Services/Webdesign/WebdesignCTA'

export default function page() {
  return (
    <>

    <Header />
    <WebDesignAgency />
    <SeoRecognition />
    <Portfolio />
    <SeoServices />
    <SeoCompany />
    <ProfessionalWebDesignServices />
    <WebdesignCTA />
    <Roadmap />
    <SeoPackages />
    <SeoReviews />
    <SeoSolution />
    <SeoBusinessSolutions />
    <Awards />
    <SeoLocation />
    <SeoQuote />
    <AccordiansFAQ />
    <CTAsection />
    <Footer />
    
    </>
  )
}
