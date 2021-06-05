import React, { useState } from 'react';
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Text,
  Icon,
  Input,
  Link,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';

import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

// import { Container } from './styles';

const SignUser = () => {
  const [isSigningUp, setIsSigningUp] = useState(false);
  const { register, handleSubmit } = useForm();

  return (
    <Flex p={10} direction='column'>
      <VStack mx='auto' spacing={5} mb={8}>
        <Heading>{isSigningUp ? 'Sign Up' : 'Sign In'}</Heading>
        <Text align='center'>
          {isSigningUp ? (
            <>
              Already have an account?{' '}
              <Link color='blue.400' onClick={() => setIsSigningUp(false)}>
                Sign In
              </Link>
            </>
          ) : (
            <>
              Don't have an account?{' '}
              <Link color='blue.400' onClick={() => setIsSigningUp(true)}>
                Sign Up
              </Link>
            </>
          )}
        </Text>
      </VStack>
      <form>
        <VStack mb={10} spacing={5}>
          <Button>
            <Icon
              as={useColorModeValue(FcGoogle, FaGoogle)}
              w={useColorModeValue(8, 6)}
              h={useColorModeValue(8, 6)}
              mr={3}
            />
            {isSigningUp ? 'Sign Up' : 'Sign In'} With Google
          </Button>
          <Heading fontSize={'lg'}>Or</Heading>
          <FormControl w='100%'>
            <FormLabel display='none'>Email</FormLabel>
            <Input
              {...register('email')}
              type='email'
              variant='flushed'
              placeholder='Email'
              isRequired
            />
          </FormControl>
          <FormControl>
            <FormLabel display='none' w='100%'>
              Password
            </FormLabel>
            <Input
              {...register('password')}
              type='password'
              variant='flushed'
              placeholder='Password'
              isRequired
            />
          </FormControl>
          <FormControl>
            <FormLabel display='none' w='100%'>
              Repeat Password
            </FormLabel>
            <Input
              {...register('repeat-password')}
              type='password'
              variant='flushed'
              placeholder='Repeat Password'
              isRequired
            />
          </FormControl>
        </VStack>

        <Flex direction='row-reverse'>
          <Button type='submit' colorScheme='green'>
            {isSigningUp ? 'Sign Up' : 'Sign In'}
          </Button>
        </Flex>
      </form>
    </Flex>
  );
};

export default SignUser;
