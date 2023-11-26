import type { AppProps } from 'next/app';
import Script from 'next/script';

import 'tailwindcss/tailwind.css';

import Sidenav from '@/components/Sidenav/Sidenav';
import { ReactElement } from 'react';

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <Script strategy="beforeInteractive" src="/scripts/darkMode.js" />
      <Sidenav>
        <Component {...pageProps} />
      </Sidenav>
    </>
  );
}

export default MyApp;
