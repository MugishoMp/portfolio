import { ChakraProvider } from '@chakra-ui/react';
import Layout from '../components/layouts/main';
import Fonts from '../components/fonts';
import theme from '../lib/theme';
import { MenuProvider } from '../contexts/menuContext'; // Update the path

function Website({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <MenuProvider>
        <Fonts />
        <Layout router={router}>
          <Component {...pageProps} key={router.route} />
        </Layout>
      </MenuProvider>
    </ChakraProvider>
  );
}

export default Website;
