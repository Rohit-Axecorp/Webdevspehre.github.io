import Head from 'next/head'; // Import Head from next/head
import Homepage from './Home/page';
import '../app/globals.css';
import Script from 'next/script'; // Import the Script component from next/script

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      
      {/* Google Analytics Script */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-Y31S4WWE7N"
        async
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
