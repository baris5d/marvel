import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends NextDocument {
  static getInitialProps(ctx) {
    return NextDocument.getInitialProps(ctx)
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="robots" content="follow, index" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://unpkg.com/nprogress@0.2.0/nprogress.css"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}