// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    {/* You can add custom meta tags, link tags, or other elements here */}
                </Head>
                <body>
                    <Main />  {/* This renders your page's content */}
                    <NextScript />  {/* This includes Next.js's scripts */}
                </body>
            </Html>
        );
    }
}

export default MyDocument;
