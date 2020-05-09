import React from 'react';
import { Flex, Box, Link, Text } from 'rebass';

export default () => (
  <Flex
    bg="primary"
    sx={{
      position: 'fixed',
      boxShadow: '4px 4px 10px 1px rgba(0,0,0,0.1)',
      zIndex: 999999,
      textAlign: 'center',
    }}
    width="100%"
  >
    <Box p={3} width={1 / 6} color="text">
      <Link
        sx={{
          display: 'inline-block',
          px: 2,
          py: 1,
        }}
        variant="nav"
        href="#"
      >
        Home
      </Link>
    </Box>
    <Box p={3} width={1 / 6} color="text">
      <Link
        sx={{
          display: 'inline-block',
          px: 2,
          py: 1,
        }}
        variant="nav"
        href="#about"
      >
        About
      </Link>
    </Box>
    <Box p={3} width={1 / 6} color="text" sx={{ zIndex: 100 }}>
      <Link
        sx={{
          display: 'inline-block',
          px: 2,
          py: 1,
        }}
        variant="nav"
        href="#resume"
      >
        Resume
      </Link>
    </Box>
    <Box p={3} width={1 / 6} color="text" sx={{ zIndex: 100 }}>
      <Link
        sx={{
          display: 'inline-block',
          px: 2,
          py: 1,
        }}
        variant="nav"
        href="#skills"
      >
        Skills
      </Link>
    </Box>
    <Box p={3} width={1 / 6} color="text" sx={{ zIndex: 100 }}>
      <Link
        sx={{
          display: 'inline-block',
          px: 2,
          py: 1,
        }}
        variant="nav"
        href="/contact-me"
      >
        Contact
      </Link>
    </Box>
    <Box p={3} width={1 / 6} color="text" sx={{ zIndex: 100 }}>
      <Link
        sx={{
          display: 'inline-block',

          px: 2,
          py: 1,
        }}
        variant="nav"
        href="/blogs"
      >
        Blogs
      </Link>
    </Box>
  </Flex>
);
