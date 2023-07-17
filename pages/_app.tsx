import { useRouter } from 'next/router';
import Script from 'next/script';
import useAckee from 'use-ackee';
import type { AppProps } from 'next/app';

import 'tailwindcss/tailwind.css';

import Sidenav from '@/components/Sidenav/Sidenav';
import { ReactElement } from 'react';

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  const { pathname } = useRouter();

  useAckee(pathname, {
    server: 'https://ackee.dev.jasonhalvorson.ca',
    domainId: '5656a284-92fb-47f8-9b72-4ad312ccf64d',
  });

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
