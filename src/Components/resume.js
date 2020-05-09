import React from 'react';
import { Flex, Box, Text, Link, Image, Button } from 'rebass';
import { FaUserGraduate, FaLaptopCode } from 'react-icons/fa';
import { work } from '../content/work';
const EducationSection = () => (
  <Flex justifyContent="space-around" sx={{ textAlign: 'center' }} my={5}>
    <Box width={[1, 1 / 2]}>
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
        <FaUserGraduate />
      </Box>

      <Text variant="title">University of British Columbia</Text>
      <Text variant="body">
        Bachelor of Applied Science <span>&bull;</span> <em>May 2017</em>
      </Text>
      <Text variant="body">B.Eng. Chemical Engineering - Commerce Minor</Text>
    </Box>
    <Box width={[1, 1 / 2]}>
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
        <FaLaptopCode />
      </Box>
      <Text variant="title">Lighthouse Labs</Text>
      <Text variant="body">
        Web Development Diploma <span>&bull;</span> <em>Feb 2018</em>
      </Text>
      <Text variant="body">Web Development Immersive Bootcamp</Text>
    </Box>
  </Flex>
);

const WorkSection = () => {
  return (
    <Flex
      flexDirection="column"
      my={4}
      sx={{
        position: 'relative',
        maxWidth: 1200,
        '::after': {
          content: '""',
          position: 'absolute',
          width: 6,
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
            px={5}
            py={2}
            sx={{
              position: 'relative',
              width: '50%',
              left: index % 2 === 0 ? '0' : '50%',
              '::after': {
                content: '""',
                position: 'absolute',
                width: 25,
                height: 25,
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
              {item.duties.map(duty => (
                <li>
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
    <Box width={'80%'}>
      <Text as="h2" variant="subHeading">
        Education
      </Text>
      <EducationSection />
    </Box>
    <Box width={'80%'}>
      <Text variant="subHeading" as="h2">
        Work
      </Text>
      <WorkSection />
    </Box>
  </Flex>
);
