import React from 'react';
import NextLink from 'next/link';
import {
  Center,
  Divider,
  Spinner,
  Text,
  VStack,
  Button,
  Icon,
} from '@chakra-ui/react';
import { FiArrowLeftCircle } from 'react-icons/fi';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../lib/firebase';
import SignUser from './SignUser';

const checkAuth = (Component) => () => {
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    return (
      <Center h='100vh'>
        <Spinner size='xl' thickness={6} color='green.500' />
      </Center>
    );
  }
  if (error) {
    console.log(error);
    return (
      <Center h='100vh'>
        <Text>
          An error was found: {error.message}. Check console for more
          information.
        </Text>
      </Center>
    );
  }

  if (user) {
    return <Component />;
  }

  return (
    <>
      <NextLink href='/'>
        <Button
          variant='ghost'
          color='green.600'
          position='absolute'
          left={10}
          display={{ base: 'none', md: 'block' }}
        >
          <Icon as={FiArrowLeftCircle} boxSize={6} mr={2} />
          Back to Home
        </Button>
      </NextLink>
      <Center direction='column' mt='20px'>
        <VStack w={{ base: '90%', md: '60%', lg: '30%' }}>
          <Text
            fontSize='4xl'
            fontWeight='extrabold'
            color='green.600'
            textAlign='center'
          >
            Log in or create your account to continue.
          </Text>
          <Divider />
          <SignUser mx='auto' />
        </VStack>
      </Center>
    </>
  );
};

export default checkAuth;
