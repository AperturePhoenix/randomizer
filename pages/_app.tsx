import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Open_Sans } from 'next/font/google'
import { useEffect } from 'react'

const openSans = Open_Sans({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    if (mediaQuery.matches) document.documentElement.classList.add('dark')
  }, [])

  return (
    <main
      className={`${openSans.className} w-screen h-screen overflow-auto bg-white text-black dark:bg-bg-dark dark:text-white`}
    >
      <Component {...pageProps} />
    </main>
  )
}
