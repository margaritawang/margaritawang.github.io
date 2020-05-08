export default {
  breakpoints: ['40em', '52em', '64em'],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  colors: {
    text: '#7c677f', //Factory Stone Purple
    background: '#fff',
    primary: '#f9c5bd', // Misty Mountain Pink
    secondary: '#ffe5c0', // Light Yellow
    tertiary: '#8076a3', // Purple Mountains Majesty
    muted: '#AAA',
    tableHeader: 'rgba(0,0,0,0.03)',
    buttonGrey: '#EBEDF3',
    warning: 'rgba(245, 65, 0, 1)',
    buttonSecondaryBg: '#E5F2D3',
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    body: '"Comfortaa", cursive',
    heading: 'Comfortaa',
    monospace: 'Menlo, monospace',
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)',
  },
  variants: {
    nav: {
      textDecoration: 'none',
      color: 'text',
      fontFamily: 'body',
    },
    icon: {
      color: 'text',
      fontSize: [5],
    },
  },
  text: {
    subHeading: {
      color: 'text',
      fontFamily: 'body',
      fontSize: [5],
      lineHeight: 'body',
    },
    heading: {
      color: 'tertiary',
      fontFamily: 'body',
      fontSize: [8],
      lineHeight: 'heading',
    },
    body: {
      color: 'text',
      fontFamily: 'body',
      lineHeight: 'body',
    },
    title: {
      color: 'tertiary',
      fontFamily: 'monospace',
      lineHeight: 'body',
    },
  },
  buttons: {
    primary: {
      color: 'white',
      bg: 'secondary',
      fontFamily: 'body',
    },
    secondary: {
      color: 'white',
      bg: 'primary',
      fontFamily: 'body',
    },
  },
};
