import React from 'react';
import Sad from '../images/Cute-sad-dog.png';
import Layout from '../Components/layout';
import { Flex, Box, Link, Image, Button, Text } from 'rebass';
const NotFound = () => {
  return (
    <Layout>
      <Flex
        sx={{
          minHeight: 'calc(100vh - 165px)',
          background:
            'linear-gradient(0deg, rgba(255,229,192,1) 10%, rgba(149,201,225,1) 60%, rgba(249,197,189,1) 80%);',
        }}
        flexDirection="column"
        alignItems="center"
      >
        <Text
          color="tertiary"
          fontFamily="body"
          fontSize={9}
          as="h1"
          mt={[5, 6]}
          mb={[4, 4, 5]}
          sx={{ letterSpacing: 10 }}
        >
          4 oh... 4
        </Text>
        <Box px={4}>
          <Text variant="subHeading" as="h2" my={[5]} fontSize={6}>
            Something went wrong... such sadness
          </Text>
        </Box>
        <Image
          src={Sad}
          height={[100, 150, 250]}
          sx={{ position: 'absolute', right: '70px', bottom: '180px' }}
        />
        <Link href="/" variant="nav" mt={4} fontSize={4}>
          Take me home 🏡
        </Link>
      </Flex>
    </Layout>
  );
};

export default NotFound;
