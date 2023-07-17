import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { ReactElement } from 'react';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render(): ReactElement {
    return (
      <Html className="h-full bg-gray-100">
        <Head>
          <link rel="stylesheet" href="/main.css" />
          <link rel="icon" href="/logo.png" />
        </Head>
        <body className="h-full dark:bg-gray-900 transition-colors duration-300">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
