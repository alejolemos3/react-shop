import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  renter() {
    return (
      <Html lang="en">
        <Head>
          <title>React Shop</title>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-TWP61LGQGN"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-TWP61LGQGN');
              `,
            }}
          />
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
