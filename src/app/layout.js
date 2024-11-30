import "./globals.css";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

export const metadata = {
  title: "Houston Web Design and Website Development Company | Web Agency Houston", // Dynamic title
  description: "Leading web development and design agency delivering affordable modern and responsive web design services in Houston TX USA." // Dynamic description
};

export default function RootLayout({ children, canonicalUrl }) {
  return (
    <html lang="en">
      <head>
        {/* Viewport Meta Tag */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph Meta Tags */}
        <meta property="og:url" content="https://webdevsphere.com" />
        <meta property="og:title" content="Web Dev Sphere" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Leading web development and design agency delivering affordable modern and responsive web design services in Houston TX USA."
        />
        <meta property="og:image" content="https://webdevsphere.com/logo.png" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@webdevsphere" />
        <meta name="twitter:title" content="Web Dev Sphere" />
        <meta name="twitter:description" content="Leading web development and design agency delivering affordable modern and responsive web design services in Houston TX USA." />
        <meta name="twitter:image" content="https://webdevsphere.com/logo.png" />

        {/* Canonical and Hreflang Tags */}
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
        <link rel="alternate" hrefLang="en-US" href="https://webdevsphere.com" />
        <link rel="alternate" hrefLang="x-default" href="https://webdevsphere.com" />

        {/* Social Media Links */}
        <link rel="me" href="https://www.facebook.com/webdevsphere1" />
        <link rel="me" href="https://www.instagram.com/webdevsphere" />
        <link rel="me" href="https://www.linkedin.com/company/web-dev-sphere" />
        <link rel="me" href="https://www.pinterest.com/webdevsphere1/" />
        <link rel="me" href="https://www.youtube.com/@webdevsphere1" />

        {/* Google Site Verification */}
        <meta name="google-site-verification" content="T5IIkWnlq8DjeYbqup_Ud0biM1DjbK8xh08AwI7UDgM" />
        <meta name="google-site-verification" content="rneVRzNxeftgc8icex1C-tgULkheYe98qU8A8AKy2yo" />
        <meta name="google-site-verification" content="8c3gU25bOefRDZOX84FW6hZati8pKHpSgdyDJwqvw_A" />
        <meta name="google-site-verification" content="H_aKn9-DZgHX9wAiVAOBKtWuW4YeByxHq3mE0RQl8X4" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
