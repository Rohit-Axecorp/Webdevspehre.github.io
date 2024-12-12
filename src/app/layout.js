"use client"
import "./globals.css";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import Head from "next/head";
import { usePathname } from "next/navigation";

config.autoAddCss = false;

export default function RootLayout({ children, canonicalUrl }) {
  const pathname = usePathname(); // Get the current path

  return (
    <html lang="en-US">
      <head>
        {/* Always Include Global Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.0.3/dist/tailwind.min.css" rel="stylesheet" />

        {/* Conditionally Render Homepage-Specific Tags */}
        {pathname === "/" && (
          <>
            <meta property="og:url" content="https://webdevsphere.com" />
            <meta property="og:title" content="Web Dev Sphere" />
            <meta property="og:type" content="website" />
            <meta
              property="og:description"
              content="Leading web development and design agency delivering affordable modern and responsive web design services in Houston TX USA."
            />

            <link rel="canonical" href="https://webdevsphere.com" />
            <link rel="me" href="https://www.facebook.com/webdevsphere1" />
            <link rel="me" href="https://www.instagram.com/webdevsphere" />
            <link rel="me" href="https://www.linkedin.com/company/web-dev-sphere" />
            <link rel="me" href="https://www.pinterest.com/webdevsphere1/" />
            <link rel="me" href="https://www.youtube.com/@webdevsphere1" />


            {/* JSON-LD for Organization */}
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

            {/* JSON-LD for Website */}
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
            ></script>
          </>
        )}

        {/* Set Canonical Link for All Pages */}
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
