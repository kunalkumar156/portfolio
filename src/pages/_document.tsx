// src/pages/_document.tsx
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap"
          rel="stylesheet"
        />

        {/* SEO Meta Tags */}
        <meta property="og:title" content="Kishor Kunal Portfolio" />
        <meta
          property="og:description"
          content="Explore Kishor Kunal's portfolio – web developer, creator of AuraUI, and open-source enthusiast."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/ogImage.png" />

        {/* Twitter Card for Better Preview */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kishor Kunal Portfolio" />
        <meta
          name="twitter:description"
          content="Explore Kishor Kunal's portfolio – web developer, creator of AuraUI, and open-source enthusiast."
        />
        <meta name="twitter:image" content="/ogImage.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
