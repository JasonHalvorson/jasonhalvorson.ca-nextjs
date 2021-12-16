import 'tailwindcss/tailwind.css'
import Script from 'next/script'
import Sidenav from '../components/Sidenav/Sidenav'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script strategy="beforeInteractive" src="/scripts/darkMode.js"/>
      <Sidenav>
        <Component {...pageProps} />
      </Sidenav>
    </>
  )
}

export default MyApp
