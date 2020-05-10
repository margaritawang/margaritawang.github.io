import React from 'react';
import {
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaArrowCircleDown,
} from 'react-icons/fa';
import { Flex, Box, Link, Text } from 'rebass';
import backgroundImage from '../images/art-books-bright-contemporary-174671.jpg';

export default () => (
  <>
    <Flex
      flexWrap="wrap"
      alignItems="center"
      justifyContent="space-between"
      minHeight="85%"
      pt={[5]}
    >
      <Box width={[1, 2 / 3]} px={[3, 5]}>
        <Text variant="subHeading" as="h2" my={3}>
          Hi there,
        </Text>
        <Text variant="heading" as="h1" my={4}>
          I'm Margarita Wang.
        </Text>
        <Text
          variant="body"
          as="p"
          my={4}
          width={[1, 1, 4 / 5, 3 / 5]}
          px={[2, 0]}
        >
          I'm a <em>front-end focused software engineer</em> with a degree in
          Chemical Engineering currently developing robust code for
          <em>TerraTrue</em>, a cutting-edge Privacy Platform based in San
          Francisco.
        </Text>
      </Box>
      <Box width={[1, 1 / 3]} px={[3, 5]}>
        <Flex
          ml={[0, 5, 6, 7]}
          alignItems="flex-end"
          pr={[0, 0, 0, 4]}
          flexWrap="wrap"
        >
          <Box width={[1 / 3, 1]} mb={[2, 3, 4]} sx={{ textAlign: 'center' }}>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/margarita-amy-wang-64223a84/"
              variant="icon"
              mb={2}
            >
              <FaLinkedin />
            </Link>
          </Box>
          <Box width={[1 / 3, 1]} mb={[2, 3, 4]} sx={{ textAlign: 'center' }}>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://instagram.com/la.marcianita"
              variant="icon"
              mb={2}
            >
              <FaInstagram />
            </Link>
          </Box>
          <Box width={[1 / 3, 1]} mb={[2, 3, 4]} sx={{ textAlign: 'center' }}>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/margaritawang"
              variant="icon"
              mb={2}
            >
              <FaGithub />
            </Link>
          </Box>
        </Flex>
      </Box>
    </Flex>
    <Flex justifyContent="center">
      <Link href="#about" variant="icon">
        <FaArrowCircleDown />
      </Link>
    </Flex>
  </>
);
