import { ReactNode } from 'react';
import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';

import NextLink from 'next/link'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Plans() {
  return (
    <>
      <Navbar />
      <Box py={{base: '15px', md: 0}}>
        <VStack spacing={2} textAlign="center">
          <Heading as="h1" fontSize="4xl">
            Choose the best plan
          </Heading>
          <Text fontSize="lg" color={'gray.500'}>
            Look carefully, they are really different.
          </Text>
        </VStack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          textAlign="center"
          justify="center"
          spacing={{ base: 4, lg: 10 }}
          py={10}>
          <PriceWrapper>
            <Box py={4} px={12}>
              <Text fontWeight="500" fontSize="2xl">
                Starter
              </Text>
              <HStack justifyContent="center">
                <Text fontSize="5xl" fontWeight="900">
                  Free
                </Text>
              </HStack>
            </Box>
            <VStack
              bg={useColorModeValue('gray.50', 'gray.700')}
              py={4}
              borderBottomRadius={'xl'}>
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Everything unlimited.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Add items with simple clicks.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Unlimited server usage.
                </ListItem>
              </List>
              <Box w="80%" pt={7}>
                <NextLink href="/app">
                  <Button as="a" w="full" colorScheme="green" variant="outline">
                    Get Started
                  </Button>
                </NextLink>
              </Box>
            </VStack>
          </PriceWrapper>

          <PriceWrapper>
            <Box position="relative">
              <Box
                position="absolute"
                top="-16px"
                left="50%"
                style={{ transform: 'translate(-50%)' }}>
                <Text
                  textTransform="uppercase"
                  bg={useColorModeValue('green.500', 'green.200')}
                  px={3}
                  py={1}
                  color={useColorModeValue('white', 'gray.800')}
                  fontSize="sm"
                  fontWeight="600"
                  rounded="xl">
                  Most Popular
                </Text>
              </Box>
              <Box py={4} px={12}>
                <Text fontWeight="500" fontSize="2xl">
                  Growth
                </Text>
                <HStack justifyContent="center">
                  <Text fontSize="3xl" fontWeight="600">
                    $
                  </Text>
                  <Text fontSize="5xl" fontWeight="900">
                    0
                  </Text>
                  <Text fontSize="3xl" color="gray.500">
                    /month
                  </Text>
                </HStack>
              </Box>
              <VStack
                bg={useColorModeValue('gray.50', 'gray.700')}
                py={4}
                borderBottomRadius={'xl'}>
                <List spacing={3} textAlign="start" px={12}>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    Everything unlimited.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    Add items with simple clicks.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    Unlimited server usage.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    More text for you to see it's good.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    Same as previous, but better.
                  </ListItem>
                </List>
                <Box w="80%" pt={7}>
                  <NextLink href="/app">
                    <Button as="a" w="full" colorScheme="green">
                      Get Started
                    </Button>
                  </NextLink>
                </Box>
              </VStack>
            </Box>
          </PriceWrapper>
          <PriceWrapper>
            <Box py={4} px={12}>
              <Text fontWeight="500" fontSize="2xl">
                Master in Finances
              </Text>
              <HStack justifyContent="center">
                <Text fontSize="3xl" fontWeight="600">
                  $
                </Text>
                <Text fontSize="5xl" fontWeight="900">
                  99,9
                </Text>
                <Text fontSize="3xl" color="gray.500">
                  /month
                </Text>
              </HStack>
            </Box>
            <VStack
              bg={useColorModeValue('gray.50', 'gray.700')}
              py={4}
              borderBottomRadius={'xl'}>
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  By far the most expensive.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  But this is the best one.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Trust me.
                </ListItem>
              </List>
              <Box w="80%" pt={7}>
                <NextLink href="/app">
                  <Button as="a" w="full" colorScheme="green" variant="outline">
                    Get Started
                  </Button>
                </NextLink>
              </Box>
            </VStack>
          </PriceWrapper>
        </Stack>
      </Box>
      <Footer />
    </>
  );
}

function PriceWrapper({ children }) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={useColorModeValue('gray.200', 'gray.500')}
      borderRadius={'xl'}>
      {children}
    </Box>
  );
}

