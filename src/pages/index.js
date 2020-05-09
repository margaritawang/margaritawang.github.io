import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import theme from '../theme';
import { Flex } from 'rebass';
import Navbar from '../Components/navbar';
import About from '../Components/about';
import Header from '../Components/header';
import Skills from '../Components/skills';
import backgroundImage from '../images/art-books-bright-contemporary-174671.jpg';
import Resume from '../Components/resume';
import { Helmet } from 'react-helmet';

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
      <link
        href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <ThemeProvider theme={theme}>
      <Navbar />
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
        <Header />
      </Flex>
      <About />
      <Resume />
      <Skills />
    </ThemeProvider>
  </>
);
