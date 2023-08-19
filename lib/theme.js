import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import fontConfig from '../config/fontConfig'; // Import the fontConfig

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

// TODO: Color palette here

const styles = {
  global: (props) => ({
    body: {
      bg: mode('#f0e7db', '#202023')(props),
    },
    // Hide the scrollbars for webkit browsers (Chrome, Safari)
    '::-webkit-scrollbar': {
      width: '0.5em', // Set the width of the invisible scrollbar
    },
    '::-webkit-scrollbar-thumb': {
      backgroundColor: 'transparent', // Make the thumb of the scrollbar transparent
    },
    /* Firefox */
    '*': {
      'scrollbar-width': 'none',
    },
    /* Chrome, Edge, and Safari */
    '*::-webkit-scrollbar': {
      width: '0px',
    },
  }),
};

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontsize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
  Link: {
    baseStyle: (props) => ({
      color: mode('#3d7aed', '#ff63c3')(props),
      textUnderlineOffset: 3,
    }),
  },
};

const colors = {
  glassTeal: '#88ccca',
};

const fonts = {
  // heading: "'Roboto'"
  heading: fontConfig.fontFamily,
  // heading: `"'${fontConfig.familyName}'"`
};

const theme = extendTheme({
  config,
  styles,
  components,
  colors,
  fonts,
});

export default theme;
