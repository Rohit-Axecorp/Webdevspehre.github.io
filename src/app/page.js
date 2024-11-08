import Head from 'next/head'; // Import Head from next/head
import Homepage from './Home/page';
import '../app/globals.css';

export default function Home() {
  return (
    <>
      <Head>
        {/* Google Tag Manager */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-Y31S4WWE7N"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Y31S4WWE7N');
            `,
          }}
        />
      </Head>
      <Homepage />
    </>
  );
}
