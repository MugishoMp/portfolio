
const fontConfig = {
  // Font import link
  importLink: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap',

  fontFamily: 'IBM Plex Mono', // Change this to the desired font name

  fallbackFontFamily: 'Monospace', // generic font family that serves as a fallback option

  // Potential font sizes
  sizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '26px',
    xl: '36px',
    '2xl': '46px', // 2.8% of the smaller dimension of the viewport
    '3xl': '56px', // 3.2% of the smaller dimension of the viewport
  },

  // Font weights
  weights: {
    regular: 400,
    medium: 500,
    bold: 700,
  },

  // Line heights
  lineHeights: {
    base: 1.5,
    heading: 1.2,
  },

  // More font-related settings can be added here...
};

export default fontConfig;