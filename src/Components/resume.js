import React from 'react';
import { Flex, Box, Text, Link, Image, Button } from 'rebass';
import { FaUserGraduate, FaLaptopCode } from 'react-icons/fa';

const EducationSection = () => (
  <Flex
    flexDirection="row"
    justifyContent="space-around"
    sx={{ textAlign: 'center' }}
    my={4}
  >
    <Box>
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
    <Box>
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

const WorkSection = () => (
  <Flex flexDirection="column">
    <Box>
      <h3>TerraTrue</h3>
      <p className="info">
        Software Engineer
        <span>&bull;</span> <em className="date">November 2019 - Present</em>{' '}
      </p>
      <p>San Francisco, CA</p>
      <ul>
        <li>
          Built the core user interface for an award-winning securities exchange
          platform using React and Redux and developed new user-facing features
        </li>
        <li>
          Refactored the legacy code by introducing hooks, context and design
          systems
        </li>
        <li>
          Translated business logic into a GraphQL microservice for form
          submission using Hasura
        </li>
        <li>
          Built, designed, and implemented REST API endpoints with an
          event-driven architecture using Rust and Postgres
        </li>
        <li>
          Mentored junior developers, onboarded team members by creating
          training guide and pair-programming with fellow developers
        </li>
        <li>
          Collaborated with UX designers regarding user design and ensured the
          technical feasibility of UI/UX designs
        </li>
        <li>
          Deployed applications using Kubernetes engines, created and managed
          different Kubernetes clusters and pods
        </li>
      </ul>
    </Box>
    <Box>
      <h3>Finhaven Technology</h3>
      <p className="info">
        Software Developer
        <span>&bull;</span>{' '}
        <em className="date">January 2019 - November 2019</em>
      </p>
      <p>Vancouver, BC, Canada</p>
      <ul>
        <li>
          Built the core user interface for an award-winning securities exchange
          platform using React and Redux and developed new user-facing features
        </li>
        <li>
          Refactored the legacy code by introducing hooks, context and design
          systems
        </li>
        <li>
          Translated business logic into a GraphQL microservice for form
          submission using Hasura
        </li>
        <li>
          Built, designed, and implemented REST API endpoints with an
          event-driven architecture using Rust and Postgres
        </li>
        <li>
          Mentored junior developers, onboarded team members by creating
          training guide and pair-programming with fellow developers
        </li>
        <li>
          Collaborated with UX designers regarding user design and ensured the
          technical feasibility of UI/UX designs
        </li>
        <li>
          Deployed applications using Kubernetes engines, created and managed
          different Kubernetes clusters and pods
        </li>
      </ul>
    </Box>
    <Box>
      <h3>BC Children's Hospital Digital Lab</h3>
      <p className="info">
        Application Developer
        <span>&bull;</span>{' '}
        <em className="date">February 2018 - December 2018</em>
      </p>
      <p>Vancouver, BC, Canada</p>
      <ul>
        <li>
          Created smoother user experiences in applications using Laravel,
          Ionic, React and designed SQL database models and set up unit testing
          with PHPUnit and Jest and React end-to-end test suites with Cypress
        </li>
        <li>
          Introduced and implemented data visualization tools such as Plot.ly
          and embedded Google Analytics in existing applications
        </li>
        <li>
          Implemented coding standards, best practices, and industry standard
          workflows including PR reviews
        </li>
        <li>
          Set up documentation practices and introduced test-driven development
          practices
        </li>
      </ul>
    </Box>
  </Flex>
);

export default () => {
  return (
    <Flex
      id="resume"
      flexDirection="column"
      alignItems="center"
      mx="auto"
      my={4}
    >
      <Box
        sx={{
          width: '80%',
        }}
      >
        <Text as="h2" variant="subHeading">
          Education
        </Text>
        <EducationSection />
      </Box>
      <Box
        sx={{
          width: '80%',
        }}
      >
        <Text variant="subHeading" as="h2">
          Work
        </Text>

        <WorkSection />
      </Box>
      <Box className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>
      </Box>
    </Flex>
  );
};
