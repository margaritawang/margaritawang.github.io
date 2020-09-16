import React from 'react';
import Contact from '../Components/Contact';
import { Flex } from 'rebass';
import Navbar from '../Components/Navbar';
import About from '../Components/About';
import Header from '../Components/Header';
import Skills from '../Components/Skills';
import backgroundImage from '../images/imageedit_1_7862756946.png';
import Resume from '../Components/Resume';
import { animateScroll, scroller } from 'react-scroll';
import Layout from '../Components/Layout';

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

export default () => (
  <>
    <Layout>
      <Navbar scrollTo={scrollTo} />
      <Flex
        flexDirection="column"
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          height: '100vh',
        }}
      >
        <Header scrollTo={scrollTo} />
      </Flex>
      <About />
      <Resume />
      <Skills />
      <Contact />
    </Layout>
  </>
);
