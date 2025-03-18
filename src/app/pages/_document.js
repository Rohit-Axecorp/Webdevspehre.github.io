import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    const formattedJSON = JSON.stringify(
      {
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
        ],
      },
      null,
      2 // Adds 2 spaces for indentation
    );

    return (
      <Html lang="en">
        <Head>
          {/* Add a Prettified JSON Debug View */}
          <pre style={{ display: "none" }}>{formattedJSON}</pre>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
