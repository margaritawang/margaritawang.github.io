import React from 'react';
import {
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaArrowCircleDown,
} from 'react-icons/fa';
import { Flex, Box, Link, Image, Button } from 'rebass';
import img from '../images/dark-purple-blurred-water.jpg';

export default () => (
  <Flex
    flexDirection="column"
    alignItems="center"
    sx={{
      backgroundImage: `url(${img})`,
      backgroundSize: 'cover',
      color: 'white',
      height: '100vh',
    }}
  >
    <Flex
      flexDirection="column"
      sx={{
        width: '85%',
        textAlign: 'center',
      }}
    >
      <h2>Hi there,</h2>
      <h1>I'm Margarita Wang.</h1>
      <h3>
        I'm a <span>front-end focused software engineer</span> with a degree in
        Chemical Engineering and a minor in Commerce developing robust code for
        for a cutting-edge Privacy Platform based in San Francisco.
      </h3>
    </Flex>
    <Box
      as="hr"
      my={3}
      sx={{
        bg: 'gray',
        border: 0,
        minWidth: '60%',
        height: 1,
      }}
    />
    <Box
      sx={{
        color: 'white',
      }}
    >
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/margarita-amy-wang-64223a84/"
      >
        <FaLinkedin />
      </Link>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://instagram.com/la.marcianita"
      >
        <FaInstagram />
      </Link>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/margaritawang"
      >
        <FaGithub />
      </Link>
    </Box>
    <Box>
      <p className="scrolldown">
        <Link className="smoothscroll" href="#about">
          <FaArrowCircleDown />
        </Link>
      </p>
    </Box>
  </Flex>
);
