import Homepage from './Home/page';
import '../app/globals.css';
import Script from 'next/script'; // Import the Script component from next/script
import Head from 'next/head'; // Import the Head component from next/head
import PopupModal from './Components/PopupModal';

export const metadata = {
  title: "Website Development Company", // Dynamic title
  description: "Professional web designing and development company offering custom websites, responsive designs, and innovative digital solutions to grow your business online."
};

export default function Home() {
  return (
    <>
      {/* Add the Favicon link here */}
      <Head>
        <link rel="icon" href="/Images/21.png" />
      </Head>

      <PopupModal />
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-Y31S4WWE7N"
        async
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What services does a web design and development company offer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We do comprehensive web design, custom web development, e-commerce solutions, and digital marketing SEO services. Whether we are talking about user-friendly, engaging websites that help your business grow and convert visitors or other technologies for your business our goal is your success."
                }
              },
              {
                "@type": "Question",
                "name": "What’s the difference between web design and web development?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Web design looks at how your site appears and what the user can do with it and web development takes care of the technical structure and how it works. We weave them both together to integrate a seamless, attractive, and fully functional website."
                }
              },
              {
                "@type": "Question",
                "name": "Why should I choose a custom web design for my business?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A custom web design means we can make your website look exactly how you, your website, and your brand want it to. We’ve tailored our solution to your specific goals and user needs to suit your site."
                }
              },
              {
                "@type": "Question",
                "name": "How do you ensure website maintenance and support after launch?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As part of our service, we keep your site maintained and supported, with regular updates, security, and optimization. Your site is monitored proactively for potential issues and updates are performed proactively, ensuring your site performs at its best."
                }
              },
              {
                "@type": "Question",
                "name": "Can a website development company help with e-commerce integration?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely! We are eCommerce specialists and dedicated to making your shopping experience for your customers a safe, easy, and seamless one. We cover everything from the management of product listing, to secure payment integration."
                }
              },
              {
                "@type": "Question",
                "name": "How long does it take to develop a custom website?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Typically, it will take you anywhere from one to six months to build a website, based on how far you want to go and how much effort and time you have available. While you’re excited to publish your website, it’s frustrating not to have a specific yes or no to the question of when. It’s why we know that ‘it depends’ may not appease you as an answer. However, this section will describe what time frame that actually depends on."
                }
              },
              {
                "@type": "Question",
                "name": "What industries do you specialize in for web design and development?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We partner with industries ranging from eCommerce to healthcare and finance to education and more with tailored solutions to fit their needs. We know how to design a certain type of website – ideally from the niche you’re in and from the regulatory standards."
                }
              },
              {
                "@type": "Question",
                "name": "Why is mobile optimization important for my website?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "With the majority of users accessing websites on mobile devices, a mobile-optimized website ensures a seamless experience, leading to higher engagement and better search engine rankings. We ensure all our sites are mobile-friendly and responsive."
                }
              },
              {
                "@type": "Question",
                "name": "What is the process for custom web development?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The process of custom web development that we follow involves consultation, planning, designing, development, testing, and launch. At each step of the way, we work with you closely to make sure the website reflects what you want to accomplish."
                }
              },
              {
                "@type": "Question",
                "name": "How can digital marketing SEO services improve my website’s ranking on Google?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SEO services we offer are all about using sophisticated NLP algorithms and key phrase strategies according to your website. By understanding and implementing relevant terms and search intents, we try to improve your ranking on Google and draw in high-quality, targeted traffic."
                }
              }
            ]
          })
        }}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-Y31S4WWE7N');
        `}
      </Script>
      <Homepage />
    </>
  );
}
