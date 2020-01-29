import React from 'react';
import { Flex, Box, Link, Image, Button } from 'rebass';
const EducationSection = () => (
  <Flex flexDirection="column">
    <Box>
      <h3>University of British Columbia</h3>
      <p className="info">
        Bachelor of Applied Science <span>&bull;</span>
        <em className="date">May 2017</em>
      </p>
      <p>B.Eng. Chemical Engineering - Commerce Minor</p>
    </Box>
    <Box>
      <h3>Lighthouse Labs</h3>
      <p className="info">
        Web Development Diploma <span>&bull;</span>
        <em className="date">Feb 2018</em>
      </p>
      <p>Web Development Immersive Bootcamp</p>
    </Box>
  </Flex>
);

const WorkSection = () => (
  <Flex flexDirection="column">
      <Box>
      <h3>TerraTrue</h3>
      <p className="info">
        Software Engineer
        <span>&bull;</span>{' '}
        <em className="date">November 2019 - Present</em>{' '}
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
      sx={{
        width: '80%',
      }}
    >
      <Box
        sx={{
          width: '100%',
        }}
      >
        <Flex justifyContent="space-between">
          <Box width={1 / 3}>
            <h1>
              <span>Education</span>
            </h1>
          </Box>
          <Box width={2 / 3}>
            <EducationSection />
          </Box>
        </Flex>
      </Box>
      <Box>
        <Flex justifyContent="space-between">
          <Box width={1 / 3}>
            <h1>
              <span>Work</span>
            </h1>
          </Box>
          <Box width={2 / 3}>
            <WorkSection />
          </Box>
        </Flex>
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
