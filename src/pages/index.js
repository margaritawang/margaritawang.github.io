import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import theme from '../theme';
import { Flex } from 'rebass';
import Navbar from '../Components/navbar';
import About from '../Components/about';
import Header from '../Components/header';
import Skills from '../Components/skills';
import backgroundImage from '../images/imageedit_1_7862756946.png';
import Resume from '../Components/resume';
import Footer from '../Components/footer';
import { Helmet } from 'react-helmet';
import { animateScroll, scroller } from 'react-scroll';

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
      <Navbar scrollTo={scrollTo} />
      <Flex
        flexDirection="column"
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          color: 'white',
          height: '100vh',
        }}
      >
        <Header scrollTo={scrollTo} />
      </Flex>
      <About />
      <Resume />
      <Skills />
      <Footer />
    </ThemeProvider>
  </>
);
