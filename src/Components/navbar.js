import React from 'react';
import { Flex, Box, Link } from 'rebass';

export default () => (
  <Flex bg="primary">
    <Box p={3} width={1 / 5} color="text">
      <Link
        sx={{
          display: 'inline-block',
          fontWeight: 'bold',
          px: 2,
          py: 1,
          color: 'text',
        }}
        variant="nav"
        href="#about"
      >
        About
      </Link>
    </Box>
    <Box p={3} width={1 / 5} color="text">
      <Link
        sx={{
          display: 'inline-block',
          fontWeight: 'bold',
          px: 2,
          py: 1,
          color: 'text',
        }}
        variant="nav"
        href="#resume"
      >
        Resume
      </Link>
    </Box>
    <Box p={3} width={1 / 5} color="text">
      <Link
        sx={{
          display: 'inline-block',
          fontWeight: 'bold',
          px: 2,
          py: 1,
          color: 'text',
        }}
        variant="nav"
        href="#work"
      >
        Portfolio
      </Link>
    </Box>
    <Box p={3} width={1 / 5} color="text">
      <Link
        sx={{
          display: 'inline-block',
          fontWeight: 'bold',
          px: 2,
          py: 1,
          color: 'text',
        }}
        variant="nav"
        href="/contact-me"
      >
        Contact
      </Link>
    </Box>
    <Box p={3} width={1 / 5} color="text">
      <Link
        sx={{
          display: 'inline-block',
          fontWeight: 'bold',
          px: 2,
          py: 1,
          color: 'text',
        }}
        variant="nav"
        href="/blogs"
      >
        Blogs
      </Link>
    </Box>
  </Flex>
);
