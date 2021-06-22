import { ChakraProvider } from '@chakra-ui/react';
import { FuegoProvider } from '@nandorojo/swr-firestore';
import { Fuego } from '../lib/fuego-swr';
import { firebaseConfig } from '../lib/firebase';
import Head from 'next/head';
import AppContextProvider from '../contexts/AppContext';
import '@fontsource/poppins/200.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/600.css';
import theme from '../styles/theme';

const fuego = new Fuego(firebaseConfig);

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <FuegoProvider fuego={fuego}>
        <AppContextProvider>
          <Head>
            <title>Polon-Finance$</title>
            <meta name='description' content='Homepage' />
            <link rel='icon' href='/favicon.svg' />
          </Head>
          <Component {...pageProps} />
        </AppContextProvider>
      </FuegoProvider>
    </ChakraProvider>
  );
}
export default MyApp;
