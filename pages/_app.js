import { ChakraProvider } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import { TerminalContextProvider } from 'react-terminal';
import Layout from '../components/layouts/main';
import Fonts from '../components/fonts';
import theme from '../lib/theme';
import { MenuProvider } from '../contexts/menuContext'; // Update the path
import '../styles/terminalEmulator.css'; // Import your custom styles for changing the look of the terminal prompt

function Website({ Component, router }) {
  return (
    <ChakraProvider theme={theme}>
      <TerminalContextProvider>
        <MenuProvider>
          <Fonts />
          <Layout router={router}>
            <AnimatePresence mode="wait">
              <Component
                // not entirely sure what removing this exactly does so for now im
                // just going to comment this out
                // {...pageProps}
                key={router.route}
              />
            </AnimatePresence>
          </Layout>
        </MenuProvider>
      </TerminalContextProvider>
    </ChakraProvider>
  );
}

export default Website;
