export default {
  breakpoints: ['426px', '769px', '1025px', '1249px'],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72, 128],
  colors: {
    text: '#7c677f', //Factory Stone Purple
    background: '#fff',
    primary: '#f9c5bd', // Misty Mountain Pink
    secondary: '#ffe5c0', // Light Yellow
    tertiary: '#8076a3', // Purple Mountains Majesty
    muted: '#AAA',
    hoverBlue: '#95c9e1',
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
      color: 'tertiary',
      fontFamily: 'body',
      transition: 'all .3s ease-in-out',
      cursor: 'pointer',
      ':hover': {
        color: 'hoverBlue',
      },
    },
    icon: {
      color: 'tertiary',
      fontSize: [40, 45, 50],
      transition: 'all .3s ease-in-out',
      cursor: 'pointer',
      ':hover': {
        color: 'hoverBlue',
      },
    },
  },
  text: {
    subHeading: {
      color: 'text',
      fontFamily: 'body',
      fontSize: [4, 5],
      lineHeight: 'body',
    },
    heading: {
      color: 'tertiary',
      fontFamily: 'body',
      fontSize: [5, 7, 8],
      lineHeight: 'heading',
    },
    body: {
      color: 'text',
      fontFamily: 'body',
      lineHeight: 'body',
      fontSize: [0, 2],
    },
    title: {
      color: 'tertiary',
      fontFamily: 'monospace',
      fontSize: [0, 1],
      lineHeight: 'body',
    },
    caption: {
      color: 'text',
      fontFamily: 'body',
      lineHeight: 'body',
      fontSize: 13,
    },
  },
  buttons: {
    primary: {
      color: 'text',
      bg: 'secondary',
      fontFamily: 'body',
      outline: 'none',
      ':hover': {
        cursor: 'pointer',
      },
    },
    secondary: {
      color: 'white',
      bg: 'primary',
      fontFamily: 'body',
      outline: 'none',
      ':hover': {
        cursor: 'pointer',
      },
    },
  },
};
