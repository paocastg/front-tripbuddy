import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <Html lang="es">
        <Head>
          <meta name="theme-color" content="#003c71"></meta>
          <meta
            name="facebook-domain-verification"
            content="i1lbtk4rn99jb25u6x9mk0qqpfmpss"
          />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=[UA-64139340-8]"
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '[UA-64139340-8]', { page_path: window.location.pathname });
            `
            }}
          />
        </Head>
        <body>
          <div id="root-float-elements"></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
