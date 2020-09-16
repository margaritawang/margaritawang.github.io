import React from 'react';
import { Flex, Box, Text, Link, Image, Button } from 'rebass';
import { Label, Input, Textarea } from '@rebass/forms';
import SanFran from '../images/imageedit_1_2065693240.png';

export default () => {
  return (
    <Flex
      id="contact"
      flexDirection="column"
      alignItems="center"
      mx="auto"
      pt={4}
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
        pr={6}
        width={1}
      >
        <Flex
          width={1}
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="flex-end"
          my={6}
        >
          <Box backgroundColor="primary" p={5} width="600px">
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
                <Input type="text" name="name" mt={2} color="tertiary" />
              </Box>
              <Box my={3}>
                <Text variant="body">Your Email:</Text>
                <Input type="email" name="email" mt={2} color="tertiary" />
              </Box>
              <Box my={3}>
                <Text variant="body">Message:</Text>
                <Textarea name="message" mt={2} color="tertiary" />
              </Box>

              <Button type="submit" variant="primary">
                Send
              </Button>
            </form>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};
