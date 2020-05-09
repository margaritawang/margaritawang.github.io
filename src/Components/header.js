import React from 'react';
import {
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaArrowCircleDown,
} from 'react-icons/fa';
import { Flex, Box, Link, Text } from 'rebass';

export default () => (
  <>
    <Flex
      flexDirection="row"
      alignItems="flex-end"
      justifyContent="space-between"
      height="70%"
    >
      <Box width={2 / 3} mx={5}>
        <Text variant="subHeading" as="h2" my={3}>
          Hi there,
        </Text>
        <Text variant="heading" as="h1" my={4}>
          I'm Margarita Wang.
        </Text>
        <Text variant="body" as="p" my={4}  width={3 / 5}>
          I'm a <em>front-end focused software engineer</em> with a degree in
          Chemical Engineering currently developing robust code for
          <em>TerraTrue</em>, a cutting-edge Privacy Platform based in San
          Francisco.
        </Text>
      </Box>
      <Flex flexDirection="column" mx={5}>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/margarita-amy-wang-64223a84/"
          variant="icon"
          mb={2}
        >
          <FaLinkedin />
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://instagram.com/la.marcianita"
          variant="icon"
          mb={2}
        >
          <FaInstagram />
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/margaritawang"
          variant="icon"
          mb={2}
        >
          <FaGithub />
        </Link>
      </Flex>
    </Flex>
    <Flex sx={{ position: 'relative', top: 100 }} justifyContent="center">
      <Link href="#about" variant="icon">
        <FaArrowCircleDown />
      </Link>
    </Flex>
  </>
);
