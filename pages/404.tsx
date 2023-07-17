import Head from 'next/head';
import Link from 'next/link';
import { ReactElement } from 'react';

export default function Custom404(): ReactElement {
  return (
    <div>
      <Head>
        <title>Jason Halvorson: 404</title>
      </Head>
      <div className="min-h-full pt-16 pb-12 flex flex-col mx-auto align-middle">
        <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex-shrink-0 flex justify-center">
            <Link href="/" className="inline-flex">
              <span className="sr-only">JH Logo</span>
              <img className="h-12 w-auto" src="/logo.png" alt="JH Logo" />
            </Link>
          </div>
          <div className="py-16">
            <div className="text-center">
              <p className="text-sm font-semibold text-jhpurple uppercase tracking-wide">404 error</p>
              <h1 className="mt-2 text-4xl font-extrabold dark:text-white text-gray-900 tracking-tight sm:text-5xl transition-colors duration-300">Page not found.</h1>
              <p className="mt-2 text-base dark:text-gray-400 text-gray-500 transition-colors duration-300">Sorry, we couldn't find the page you're looking for.</p>
              <div className="mt-6">
                <Link href="/" className="text-base font-medium text-jhblue hover:text-jhpurple">
                  Go back home<span aria-hidden="true"> &rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
