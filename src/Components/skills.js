import React from 'react';
import { Flex, Box, Text, Link, Image, Button } from 'rebass';
import { FaUserGraduate, FaLaptopCode } from 'react-icons/fa';
import { skills } from '../content/work';
export default () => {
  return (
    <Flex
      id="skills"
      bg="tertiary"
      flexDirection="column"
      alignItems="center"
      mx="auto"
      my={4}
    >
      <Text as="h2" variant="subHeading" color="background" mt={5}>
        Skills
      </Text>
      <Flex
        width={3 / 4}
        flexDirection="column"
        justifyContent="space-around"
        my={4}
      >
        {skills.map(item => (
          <Flex m={3} justifyContent="space-between" alignItems="stretch">
            <Box width={2 / 12}>
              <Text variant="title" color="background">
                {item.name}
              </Text>
            </Box>
            <Box width={9 / 12} bg="primary" sx={{ borderRadius: 5 }}>
              <Box
                bg="secondary"
                width={item.proficiency}
                height="100%"
                sx={{
                  borderRadius: '5px 0 0 5px',
                }}
              />
            </Box>
            <Box width={1 / 12} ml={4}>
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
