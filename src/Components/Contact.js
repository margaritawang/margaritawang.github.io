import React, { useState } from 'react';
import { Flex, Box, Text, Link, Image, Button } from 'rebass';
import { Label, Input, Textarea } from '@rebass/forms';
import SanFran from '../images/sf.png';

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

export default () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: '',
  });
  const handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...formValues }),
    })
      .then(() => {
        alert('Form Submitted');
        setFormValues({ name: '', email: '', message: '' });
      })
      .catch(error => alert(error));

    e.preventDefault();
  };

  const handleChange = e =>
    setFormValues({ ...formValues, [e.target.name]: e.target.value });

  const { name, email, message } = formValues;

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
            <form onSubmit={handleSubmit}>
              <Box my={3}>
                <Label>
                  <Text variant="body">Your Name:</Text>
                </Label>
                <Input
                  type="text"
                  name="name"
                  required
                  mt={2}
                  p={2}
                  height={40}
                  fontFamily="body"
                  value={name}
                  onChange={handleChange}
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
                  required
                  mt={2}
                  height={40}
                  p={2}
                  value={email}
                  onChange={handleChange}
                  color="tertiary"
                  fontFamily="body"
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
                  required
                  value={message}
                  onChange={handleChange}
                  mt={2}
                  p={2}
                  color="tertiary"
                  fontFamily="body"
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
