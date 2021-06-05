import React, { useState } from 'react';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Icon,
  Link,
  Button,
  Stack,
  Popover,
  PopoverTrigger,
  useColorModeValue,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  VStack,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Heading,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { IoMdMoon } from 'react-icons/io';
import { FiSun } from 'react-icons/fi';
import { FaGoogle } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import Image from 'next/image';
import NextLink from 'next/link';
import { useColors } from '../contexts/ColorsContext';
import { useAuth } from '../contexts/AuthContext';
import ToggleModeButton from './ToggleModeButton';

export default function Navbar() {
  const [isSigningUp, setIsSigningUp] = useState(false);
  const { colorMode, toggleColorMode } = useColors();
  const {
    isOpen: sideIsOpen,
    onToggle: sideOnToggle,
    onClose: sideOnClose,
  } = useDisclosure();
  const {
    isOpen: signIsOpen,
    onOpen: signOnOpen,
    onClose: signOnClose,
  } = useDisclosure();

  const { user } = useAuth();

  return (
    <Box>
      <Flex minH={'60px'} py={{ base: 2 }} px={{ base: 4 }} align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={sideOnToggle}
            icon={
              sideIsOpen ? (
                <CloseIcon w={3} h={3} />
              ) : (
                <HamburgerIcon w={5} h={5} />
              )
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <NextLink href='/'>
            <a>
              <Image
                src={useColorModeValue('/logo-light.svg', '/logo-dark.svg')}
                width='200'
                height='100'
              />
            </a>
          </NextLink>
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <ToggleModeButton
          display={{ base: 'none', md: 'block' }}
          ml='25px'
          mr={{ md: '25px', lg: '50px' }}
        />

        {/* Sign Buttons */}
        {!user && (
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={10}
          >
            <Button
              as={'a'}
              fontSize={'md'}
              fontWeight={400}
              variant={'link'}
              href={'#'}
              onClick={() => {
                signOnOpen();
                setIsSigningUp(false);
              }}
            >
              Sign In
            </Button>
            <Button
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'md'}
              fontWeight={600}
              colorScheme='green'
              onClick={() => {
                signOnOpen();
                setIsSigningUp(true);
              }}
            >
              Sign Up
            </Button>
          </Stack>
        )}

        {/* Sing User Modal */}
        <Modal isOpen={signIsOpen} onClose={signOnClose}>
          <ModalOverlay />
          <ModalContent w='80%'>
            <ModalCloseButton />
            <Flex p={10} direction='column'>
              <VStack mx='auto' spacing={5} mb={8}>
                <Heading>{isSigningUp ? 'Sign Up' : 'Sign In'}</Heading>
                <Text align='center'>
                  {isSigningUp ? (
                    <>
                      Already have an account?{' '}
                      <Link
                        color='blue.400'
                        onClick={() => setIsSigningUp(false)}
                      >
                        Sign In
                      </Link>
                    </>
                  ) : (
                    <>
                      Don't have an account?{' '}
                      <Link
                        color='blue.400'
                        onClick={() => setIsSigningUp(true)}
                      >
                        Sign Up
                      </Link>
                    </>
                  )}
                </Text>
              </VStack>
              <form>
                <VStack mb={10} spacing={5}>
                  <FormControl w='100%'>
                    <FormLabel display='none'>Email</FormLabel>
                    <Input
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
                      type='password'
                      variant='flushed'
                      placeholder='Password'
                      isRequired
                    />
                  </FormControl>
                  <FormControl display={isSigningUp ? 'block' : 'none'}>
                    <FormLabel display='none' w='100%'>
                      Repeat Password
                    </FormLabel>
                    <Input
                      type='password'
                      variant='flushed'
                      placeholder='Repeat Password'
                      isRequired
                    />
                  </FormControl>
                  <Heading fontSize={'lg'}>Or</Heading>
                  <Button>
                    <Icon
                      as={useColorModeValue(FcGoogle, FaGoogle)}
                      w={useColorModeValue(8, 6)}
                      h={useColorModeValue(8, 6)}
                      mr={3}
                    />
                    {isSigningUp ? 'Sign Up' : 'Sign In'} With Google
                  </Button>
                </VStack>

                <Flex direction='row-reverse'>
                  <Button type='submit' colorScheme='green'>
                    {isSigningUp ? 'Sign Up' : 'Sign In'}
                  </Button>
                  <Button mr={6} onClick={signOnClose} variant='ghost'>
                    Close
                  </Button>
                </Flex>
              </form>
            </Flex>
          </ModalContent>
        </Modal>

        {/* Mobile Drawer */}
        <Drawer placement='right' onClose={sideOnClose} isOpen={sideIsOpen}>
          <DrawerOverlay display={{ base: 'flex', md: 'none' }} />
          <DrawerContent display={{ base: 'flex', md: 'none' }} maxW='70%'>
            <DrawerHeader>
              <Flex direction='column'>
                <Image
                  src={
                    colorMode === 'light' ? '/logo-light.svg' : '/logo-dark.svg'
                  }
                  width='300'
                  height='200'
                />
                <Text mt='-30px' fontWeight='thin' fontSize='sm'>
                  by Arthur Polon
                </Text>
              </Flex>
              <Flex direction='row-reverse' mt='10px'>
                <Button onClick={toggleColorMode} p={0}>
                  <Icon as={useColorModeValue(IoMdMoon, FiSun)} w={5} h={5} />
                </Button>
              </Flex>
            </DrawerHeader>
            <DrawerBody>
              <VStack spacing='0' justify='space-evenly' boxSize='100%'>
                <NextLink href='/app'>
                  <Button colorScheme='green' p='30px' fontWeight='medium'>
                    <a>Get Started</a>
                  </Button>
                </NextLink>
                <VStack spacing='20px' align='start'>
                  {NAV_ITEMS.map((navItem, id) => {
                    return (
                      <NextLink href={navItem.href} key={id}>
                        <Box
                          bg='rgba(0,0,0,0.1)'
                          p='10px'
                          borderRadius='5px'
                          w={100}
                          align='center'
                        >
                          <a>{navItem.label}</a>
                        </Box>
                      </NextLink>
                    );
                  })}
                </VStack>
                <HStack spacing='30px' justify='space-between'>
                  <Button
                    as={'a'}
                    fontSize={'sm'}
                    fontWeight={600}
                    variant={'link'}
                    href={'#'}
                  >
                    Sign In
                  </Button>

                  <Button fontSize={'sm'} fontWeight={600} colorScheme='green'>
                    Sign Up
                  </Button>
                </HStack>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  );
}

const DesktopNav = () => {
  return (
    <Stack direction={'row'} align='center' spacing={50}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Box
                p={2}
                fontSize={'md'}
                fontWeight={500}
                align='center'
                color={useColorModeValue('gray.600', 'gray.200')}
                _hover={{
                  textDecoration: 'none',
                  color: useColorModeValue('gray.800', 'white'),
                }}
              >
                <NextLink href={navItem.href}>
                  <a>{navItem.label}</a>
                </NextLink>
              </Box>
            </PopoverTrigger>
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Plans',
    href: '/plans',
  },
  {
    label: 'About Me',
    href: '/about',
  },
];
