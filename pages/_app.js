import { ChakraProvider } from "@chakra-ui/react"
import Head from 'next/head'
import AppContextProvider from "../contexts/AppContext"

import "@fontsource/poppins/200.css"
import "@fontsource/poppins/400.css"
import "@fontsource/poppins/600.css"
import theme from '../styles/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <AppContextProvider>
        <Head>
          <title>Polon-Finance$</title>
          <meta name="description" content="Homepage" />
          <link rel="icon" href="/favicon.svg"/>
        </Head>
        <Component {...pageProps} />
      </AppContextProvider>
    </ChakraProvider>
  )
}
export default MyApp
