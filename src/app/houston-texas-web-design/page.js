import Head from "next/head";
import Footer from "@/app/Components/Footer";
import Header from "@/app/Components/Header";
import AccordiansFAQ from "@/app/Components/Services/Webdesign/AccordiansFAQ";
import Awards from "@/app/Components/Services/Webdesign/Awards";
import CTAsection from "@/app/Components/Home/CTAsection";
import Portfolio from "@/app/Components/Services/Webdesign/Portfolio";
import Roadmap from "@/app/Components/Services/Webdesign/Roadmap";
import SeoBusinessSolutions from "@/app/Components/Services/Webdesign/SeoBusinessSolutions";
import SeoCompany from "@/app/Components/Services/Webdesign/SeoCompany";
import SeoLocation from "@/app/Components/Services/Webdesign/SeoLocation";
import SeoPackages from "@/app/Components/Services/Webdesign/SeoPackages";
import SeoQuote from "@/app/Components/Services/Webdesign/SeoQuote";
import SeoRecognition from "@/app/Components/Services/Webdesign/SeoRecognition";
import SeoReviews from "@/app/Components/Services/Webdesign/SeoReviews";
import SeoServices from "@/app/Components/Services/Webdesign/SeoServices";
import SeoSolution from "@/app/Components/Services/Webdesign/SeoSolution";
import ProfessionalWebDesignServices from "@/app/Components/Services/Webdesign/ProfessionalWebDesignServices";
import WebDesignAgency from "@/app/Components/Services/Webdesign/WebDesignAgency";
import WebdesignCTA from "@/app/Components/Services/Webdesign/WebdesignCTA";

export const metadata = {
  title: "Leading Web Design Company in Houston Texas",
  description: "Web Dev Sphere is the best Web Design Agency in Houston for mobile-responsive websites, custom web design, and the best WordPress websites in Houston.",
  canonical: "https://webdevsphere.com/houston-texas-web-design",
};

export default function Page() {
  return (
    <>
      <Head>

        <link rel="canonical" href="https://webdevsphere.com/houston-texas-web-design" />
      </Head>
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
  );
}
