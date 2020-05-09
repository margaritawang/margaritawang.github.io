import React from 'react';
import Margarita from '../images/margarita.jpg';
import { FaDownload } from 'react-icons/fa';
import { Flex, Box, Link, Image, Button, Text } from 'rebass';

export default () => (
  <Flex
    id="about"
    bg="secondary"
    alignItems="center"
    justifyContent="space-around"
    py={4}
  >
    <Box width={1 / 3} sx={{textAlign: 'center'}}>
      <Image
        src={Margarita}
        alt="Margarita Profile Pic"
        sx={{
          width: ['100%', '60%'],
          borderRadius: '50%',
          border: '5px solid #fff'
        }}
      />
    </Box>
    <Box width={2 / 3} my={3}>
      <Text variant="subHeading" as="h2" my={3}>
        About Me
      </Text>
      <Text variant="body" as="p" mt={4} mb={5} width={4 / 5}>
        Experience in building full-stack web apps, familiar with JavaScript,
        Ruby, Matlab, C and SQL. I meditate by building virtual architectures,
        creating smoother user interface and solving new problems each day. A
        dedicated team player and a solution-oriented team leader. Kept awake by
        coffee, quality food, pep talks and ideas that fuel imagination.
      </Text>
      <Text variant="subHeading" as="h2" my={2}>
        Contact Details
      </Text>
      <Flex>
        <Box width={1 / 2} my={3}>
          <Text variant="body" as="span">
            Margarita Wang
          </Text>
          <br />
          <Text variant="body" as="span">
            San Francisco, California
          </Text>
          <br />
          <Text variant="body" as="span">
            (415) 910 - 4137
          </Text>
          <br />
          <Text variant="body" as="span">
            margaritaawang@gmail.com
          </Text>
        </Box>
        <Box width={1 / 2}>
          <Button variant="secondary" p={3}>
            <Link
              href="https://resume.creddle.io/resume/2wzomyp8z1o"
              target="_blank"
              rel="noopener noreferrer"
              variant='nav'
            >
              <FaDownload style={{marginRight: 8}}/>
              Download Resume
            </Link>
          </Button>
        </Box>
      </Flex>
    </Box>
  </Flex>
);
