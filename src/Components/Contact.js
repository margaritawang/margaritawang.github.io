import React from 'react';
import { Flex, Box, Text, Link, Image, Button } from 'rebass';
import { Label, Input, Textarea } from '@rebass/forms';
import SanFran from '../images/sf.png';

export default () => {
  return (
    <Flex
      id="contact"
      flexDirection="column"
      alignItems="center"
      mx="auto"
      pt={4}
      backgroundColor="background"
    >
      <Text as="h2" variant="subHeading" my={5}>
        Let's chat
      </Text>
      <Box
        sx={{
          backgroundImage: `url(${SanFran})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          minHeight: '600px',
        }}
        pt={4}
        px={6}
        pb={6}
        width={1}
      >
        <Flex
          width={1}
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="flex-end"
          alignItems="center"
          my={4}
        >
          <Box
            backgroundColor="primary"
            p={5}
            width="600px"
            sx={{ borderRadius: 4 }}
          >
            <form
              name="contact"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />
              <Box my={3}>
                <Label>
                  <Text variant="body">Your Name:</Text>
                </Label>
                <Input
                  type="text"
                  name="name"
                  mt={2}
                  p={2}
                  height={40}
                  color="tertiary"
                  backgroundColor="secondary"
                  sx={{
                    borderRadius: 4,
                    ':focus': { outline: 'none' },
                    border: 'none',
                  }}
                />
              </Box>
              <Box my={3}>
                <Text variant="body">Your Email:</Text>
                <Input
                  type="email"
                  name="email"
                  mt={2}
                  height={40}
                  p={2}
                  color="tertiary"
                  backgroundColor="secondary"
                  sx={{
                    borderRadius: 4,
                    ':focus': { outline: 'none' },
                    border: 'none',
                  }}
                />
              </Box>
              <Box mt={3} mb={4}>
                <Text variant="body">Message:</Text>
                <Textarea
                  name="message"
                  mt={2}
                  p={2}
                  color="tertiary"
                  backgroundColor="secondary"
                  sx={{
                    borderRadius: 4,
                    ':focus': { outline: 'none' },
                    minHeight: 120,
                    resize: 'none',
                    border: 'none',
                  }}
                />
              </Box>
              <Button type="submit" variant="primary" p={3} width={100}>
                Send
              </Button>
            </form>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};
