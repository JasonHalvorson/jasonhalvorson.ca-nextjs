import 'tailwindcss/tailwind.css'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script strategy="beforeInteractive" src="scripts/darkMode.js"/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
