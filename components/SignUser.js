import React, { useState, useEffect } from 'react';
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
  Alert,
  AlertIcon,
} from '@chakra-ui/react';

import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { useAuth } from '../contexts/AuthContext';

// import { Container } from './styles';

const SignUser = ({ initialState }) => {
  const [isSigningUp, setIsSigningUp] = useState(initialState);
  const { register, handleSubmit } = useForm();
  const { createUser, signInUser, signInWithGoogle, loading, error, setError } =
    useAuth();

  const onSubmit = ({ email, password, repeatPassword, name }) => {
    if (isSigningUp) {
      if (password.trim() === repeatPassword.trim()) {
        createUser(email, password, name);
      } else {
        setError('Passwords does not match.');
      }
    } else {
      signInUser(email, password);
    }
  };

  useEffect(() => {
    setError(null);
  }, [isSigningUp]);

  return (
    <Flex p={10} direction='column' w='100%'>
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack mb={10} spacing={5}>
          <Button isLoading={loading} onClick={signInWithGoogle}>
            <Icon
              as={useColorModeValue(FcGoogle, FaGoogle)}
              w={useColorModeValue(8, 6)}
              h={useColorModeValue(8, 6)}
              mr={3}
            />
            {isSigningUp ? 'Sign Up' : 'Sign In'} With Google
          </Button>
          <Heading fontSize={'lg'}>Or</Heading>
          {isSigningUp && (
            <FormControl>
              <FormLabel display='none' w='100%'>
                Name
              </FormLabel>
              <Input
                isDisabled={loading}
                {...register('name')}
                type='text'
                variant='flushed'
                placeholder='Name'
                isRequired
              />
            </FormControl>
          )}
          <FormControl w='100%'>
            <FormLabel display='none'>Email</FormLabel>
            <Input
              isDisabled={loading}
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
              isDisabled={loading}
              {...register('password')}
              type='password'
              variant='flushed'
              placeholder='Password'
              isRequired
            />
          </FormControl>
          {isSigningUp && (
            <FormControl>
              <FormLabel display='none' w='100%'>
                Repeat Password
              </FormLabel>
              <Input
                isDisabled={loading}
                {...register('repeatPassword')}
                type='password'
                variant='flushed'
                placeholder='Repeat Password'
                isRequired
              />
            </FormControl>
          )}
          {error && (
            <Alert status='error'>
              <AlertIcon />
              <Text align='center'>{error}</Text>
            </Alert>
          )}
        </VStack>

        <Flex direction='row-reverse'>
          <Button type='submit' colorScheme='green' isLoading={loading}>
            {isSigningUp ? 'Sign Up' : 'Sign In'}
          </Button>
        </Flex>
      </form>
    </Flex>
  );
};

export default SignUser;
