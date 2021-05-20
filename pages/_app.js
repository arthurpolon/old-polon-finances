import { ChakraProvider } from "@chakra-ui/react"
import Head from 'next/head'
import ThemeButton from "../components/ThemeButton"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>

      <ThemeButton />
      <Head>
        <title>Polon-Finance$</title>
        <meta name="description" content="Homepage" />
        <link rel="icon" href="/favicon.svg"/>
      </Head>

      <Component {...pageProps} />
    </ChakraProvider>
  )
}
export default MyApp
