import React from 'react';
import { Flex, Box, Text, Link, Image, Button } from 'rebass';
import { skills } from '../content/work';
export default () => {
  return (
    <Flex
      id="skills"
      bg="tertiary"
      flexDirection="column"
      alignItems="center"
      mx="auto"
      py={4}
    >
      <Text as="h2" variant="subHeading" color="background" mt={4}>
        Skills
      </Text>
      <Flex
        width={[1, 1, 3 / 4]}
        flexDirection="column"
        justifyContent="space-around"
        my={4}
      >
        {skills.map(item => (
          <Flex
            key={item.name}
            m={3}
            mx={[3, 5, 3]}
            justifyContent="space-between"
            alignItems="stretch"
            flexWrap="wrap"
          >
            <Box width={[1, 1, 2 / 12]} mb={[2, 2, 0]}>
              <Text variant="title" color="background">
                {item.name}
              </Text>
            </Box>
            <Box
              width={[9 / 12, 10 / 12, 9 / 12]}
              bg="primary"
              sx={{ borderRadius: 5 }}
              height={20}
            >
              <Box
                bg="secondary"
                width={item.proficiency}
                height="100%"
                sx={{
                  borderRadius: '5px 0 0 5px',
                }}
              />
            </Box>
            <Box width={[3 / 12, 2 / 12, 1 / 12]} pl={4}>
              <Text variant="caption" color="background">
                {item.proficiency}
              </Text>
            </Box>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};
