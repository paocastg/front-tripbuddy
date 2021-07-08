import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="es">
        <Head>
          <meta name="theme-color" content="#003c71"></meta>
          <meta name="facebook-domain-verification" content="i1lbtk4rn99jb25u6x9mk0qqpfmpss" />
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
