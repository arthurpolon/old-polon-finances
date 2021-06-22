import React from 'react';
import NextLink from 'next/link';
import { Button, Center, Flex, Heading, Icon, VStack } from '@chakra-ui/react';

import { FiArrowLeftCircle } from 'react-icons/fi';

// import { Container } from './styles';

function custom404() {
  return (
    <Center
      w='100vw'
      h='100vh'
      bgImage={'url("/404_background.svg")'}
      bgRepeat='no-repeat'
      bgSize='cover'
    >
      <VStack justify='center' align='center' spacing={8} p={12}>
        <Heading fontSize={{ base: 'md', md: '2xl' }} color='green.600'>
          Sorry, but the page you are looking for was not found.
        </Heading>
        <NextLink href='/'>
          <Button
            p={{ base: 4, md: 8 }}
            variant='ghost'
            colorScheme='green'
            fontSize={{ base: 'lg', md: '2xl' }}
          >
            <Icon as={FiArrowLeftCircle} boxSize={{ base: 6, md: 8 }} mr={2} />
            Back to Home
          </Button>
        </NextLink>
      </VStack>
    </Center>
  );
}

export default custom404;
