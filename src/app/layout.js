import "./globals.css";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

export const metadata = {
  title: "Houston Web Design and Website Development Company | Web Agency Houston",
  description: "Leading web development and design agency delivering affordable modern and responsive web design services in Houston TX USA."
};

export default function RootLayout({ children, canonicalUrl }) {
  return (
    <html>
      <head>
        {/* Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.0.3/dist/tailwind.min.css" rel="stylesheet" />

        <meta property="og:url" content="https://webdevsphere.com" />
        <meta property="og:title" content="Web Dev Sphere" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Leading web development and design agency delivering affordable modern and responsive web design services in Houston TX USA."
        />
        <meta property="og:image" content="https://webdevsphere.com/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@webdevsphere" />
        <meta name="twitter:title" content="Web Dev Sphere" />
        <meta name="twitter:description" content="Leading web development and design agency delivering affordable modern and responsive web design services in Houston TX USA." />
        <meta name="twitter:image" content="https://webdevsphere.com/logo.png" />
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
        <link rel="canonical" href="https://webdevsphere.com" />
        <link rel="alternate" hrefLang="en-US" href="https://webdevsphere.com" />
        <link rel="alternate" hrefLang="x-default" href="https://webdevsphere.com" />
        <link rel="me" href="https://www.facebook.com/webdevsphere1" />
        <link rel="me" href="https://www.instagram.com/webdevsphere" />
        <link rel="me" href="https://www.linkedin.com/company/web-dev-sphere" />
        <link rel="me" href="https://www.pinterest.com/webdevsphere1/" />
        <link rel="me" href="https://www.youtube.com/@webdevsphere1" />
        <meta name="google-site-verification" content="T5IIkWnlq8DjeYbqup_Ud0biM1DjbK8xh08AwI7UDgM" />
        <meta name="google-site-verification" content="rneVRzNxeftgc8icex1C-tgULkheYe98qU8A8AKy2yo" />
        <meta name="google-site-verification" content="8c3gU25bOefRDZOX84FW6hZati8pKHpSgdyDJwqvw_A" />
        <meta name="google-site-verification" content="H_aKn9-DZgHX9wAiVAOBKtWuW4YeByxHq3mE0RQl8X4" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Web Dev Sphere",
              "alternateName": "Web Dev Sphere",
              "url": "https://webdevsphere.com/",
              "logo": "https://webdevsphere.com/Images/21.png",
              "sameAs": [
                "https://www.facebook.com/webdevsphere1",
                "https://www.instagram.com/webdevsphere/",
                "https://www.youtube.com/@webdevsphere1",
                "https://www.pinterest.com/webdevsphere1/",
                "https://webdevsphere.com/"
              ]
            }),
          }}
        ></script>

        {/* JSON-LD for WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "WebSite",
              "name": "Web Dev Sphere",
              "url": "https://webdevsphere.com/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://webdevsphere.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        {/* JSON-LD for FAQPage */}
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
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
