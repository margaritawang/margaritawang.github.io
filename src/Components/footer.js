import React from 'react';
import { Flex, Box, Link, Text } from 'rebass';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import currentYear from 'current-year';

export default () => (
  <Flex
    bg="secondary"
    alignItems="center"
    minHeight="90%"
    p={[4]}
    flexDirection="column"
  >
    <Flex width={1} px={[3, 3, 5, 7]}>
      <Box width={[1 / 3]} mb={4} sx={{ textAlign: 'center' }}>
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
      <Box width={[1 / 3]} mb={4} sx={{ textAlign: 'center' }}>
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
      <Box width={[1 / 3]} mb={4} sx={{ textAlign: 'center' }}>
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
    <Text variant="caption">© {currentYear()} Margarita Wang</Text>
  </Flex>
);
