import React from 'react';
import { Flex, Box, Text, Link, Image, Button } from 'rebass';
import * as icons from 'react-icons/fa';
import { education, work } from '../content/work';

const EducationSection = () => (
  <Flex
    justifyContent="space-around"
    sx={{ textAlign: 'center' }}
    my={[3, 5]}
    flexWrap="wrap"
  >
    {education.map(item => {
      const icon = icons[item.icon];
      return (
        <Box key={item.school} width={[1, 1 / 2]} pb={[3, 0]}>
          <Box
            sx={{
              display: 'inline-block',
              color: 'white',
              bg: 'primary',
              fontSize: 64,
              borderRadius: 9999,
              height: 128,
            }}
            m={3}
            px={4}
            py={4}
          >
            {icon()}
          </Box>

          <Text variant="title">{item.school}</Text>
          <Text variant="body">
            {item.diploma} <span>&bull;</span> <em>{item.date}</em>
          </Text>
          <Text variant="body">{item.major}</Text>
        </Box>
      );
    })}
  </Flex>
);

const WorkSection = () => {
  return (
    <Flex
      flexDirection="column"
      flexWrap="wrap"
      my={[2, 2, 4]}
      sx={{
        position: 'relative',
        maxWidth: 1200,
        '::after': {
          content: '""',
          position: 'absolute',
          width: [0, 0, 6],
          backgroundColor: 'tertiary',
          top: 3,
          bottom: 0,
          left: '50%',
          marginLeft: -1,
          borderRadius: 5,
        },
      }}
    >
      {work.map((item, index) => {
        return (
          <Box
            key={item.company}
            px={[2, 5]}
            py={2}
            width={[1, 1, 1 / 2]}
            sx={{
              position: 'relative',
              left: index % 2 === 0 ? '0' : [0, 0, '50%'],
              '::after': {
                content: '""',
                position: 'absolute',
                width: [0, 0, 25],
                height: [0, 0, 25],
                right: -11,
                backgroundColor: 'primary',
                top: 2,
                borderRadius: '50%',
                zIndex: 1,
                left: index % 2 === 0 ? '' : '-13px',
              },
            }}
          >
            <Text variant="title">
              {item.company} <span>&bull;</span> <em>{item.date}</em>{' '}
            </Text>
            <Text variant="body">{item.location}</Text>
            <ul style={{ paddingInlineStart: 24 }}>
              {item.duties.map((duty, index) => (
                <li key={`duty-${index}`}>
                  <Text variant="caption">{duty}</Text>
                </li>
              ))}
            </ul>
          </Box>
        );
      })}
    </Flex>
  );
};

export default () => (
  <Flex id="resume" flexDirection="column" alignItems="center" mx="auto" my={4}>
    <Box width={[9 / 10, 9 / 10, 4 / 5]}>
      <Text as="h2" variant="subHeading">
        Education
      </Text>
      <EducationSection />
    </Box>
    <Box width={[9 / 10, 9 / 10, 4 / 5]}>
      <Text variant="subHeading" as="h2">
        Work
      </Text>
      <WorkSection />
    </Box>
  </Flex>
);
