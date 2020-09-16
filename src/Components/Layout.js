import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import theme from '../theme';
import Navbar from './Navbar';
import { Helmet } from 'react-helmet';
import { animateScroll, scroller } from 'react-scroll';
import Footer from './Footer';

const scrollTo = id => {
  if (id) {
    scroller.scrollTo(id, {
      duration: 500,
      smooth: true,
      isDynamic: true,
    });
  } else {
    animateScroll.scrollToTop();
  }
};

export default props => (
  <>
    <Helmet
      style={[
        {
          cssText: `
          body {
            margin: 0;
            scroll-behavior: smooth;
          }

          html, body,#___gatsby {
            height: 100%;
          }
        `,
        },
      ]}
    >
      <title>Margaritaville</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <ThemeProvider theme={theme}>
      {props.children}
      <Footer />
    </ThemeProvider>
  </>
);
