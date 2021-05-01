import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'
import { PageFooter } from '../components'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <title>Xatryx</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body className="text-black bg-white dark:bg-gray-900 dark:text-white">
          <div className="container mx-auto">
            <Main />
          </div>
          <PageFooter />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
