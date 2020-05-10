import React from 'react';
import { Flex, Box, Link, Text } from 'rebass';
import { navBar } from '../content/work';

export default ({ scrollTo }) => (
  <Flex
    bg="primary"
    sx={{
      position: 'fixed',
      boxShadow: '4px 4px 10px 1px rgba(0,0,0,0.1)',
      zIndex: 999999,
      textAlign: 'center',
      right: 0,
      left: 0,
    }}
    width="100%"
  >
    {navBar.map(item => (
      <Box p={3} width={1 / navBar.length || 1} color="text" key={item.label}>
        <Link
          sx={{
            display: 'inline-block',
            px: 2,
            py: 1,
          }}
          variant="nav"
          onClick={() => scrollTo(item.href)}
        >
          {item.label}
        </Link>
      </Box>
    ))}
    {/* TODO: add pages below */}
    {/* <Box p={3} width={1 / 6} color="text" sx={{ zIndex: 100 }}>
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
    </Box> */}
  </Flex>
);
