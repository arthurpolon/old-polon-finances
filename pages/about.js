import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Link,
  Stack,
  Button,
  Icon,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react';

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import { FaLinkedin } from 'react-icons/fa';
import { AiFillGithub } from "react-icons/ai";

export default function About() {
  return (
    <>
      <Navbar />
      <Center py={6}>
        <Box
          maxW={{base: '80%', md: '60%', lg: '30%'}}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={10}
          textAlign={'center'}>
          <Avatar
            size={'2xl'}
            src={
              "https://avatars.githubusercontent.com/u/48016312?v=4"
            }
            alt={'Avatar Photo'}
            mb={4}
            pos={'relative'}
          />
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            Arthur Polon
          </Heading>
          <Link href="https://www.instagram.com/arthur_polon/" isExternal>
            <Text fontWeight={600} color={'gray.500'} mb={4}>
              @Arthur_Polon
            </Text>
          </Link>
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
            Front end developer. In love for NextJs. Making my opportunity to enter a cool company.
          </Text>

          <Stack align={'center'} justify={'center'} direction={{base: 'column', md: 'row'}} mt={6} spacing={5}>
            <Badge
              px={2}
              py={1}
              colorScheme="gray"
              fontWeight={'400'}>
              #JavaScript
            </Badge>
            <Badge
              px={2}
              py={1}
              colorScheme="gray"
              fontWeight={'400'}>
              #NextJS
            </Badge>
            <Badge
              px={2}
              py={1}
              colorScheme="gray"
              fontWeight={'400'}>
              #ReactJS
            </Badge>
          </Stack>

          <Stack mt={8} direction={'row'} spacing={4} justify="space-around">
            <Link href="https://github.com/arthurpolon" isExternal>
              <Button
                fontSize={{base: 'md', md: 'lg'}}
                rounded={{base: 'md', md: 'full'}}
                colorScheme="gray"
                variant={'link'}
              >
                <Icon as={AiFillGithub} boxSize={{base: 5, md: 8}} mr='5px' />
                Github
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/arthur-polon-55a3b420a/" isExternal>
              <Button
                fontSize={{base: 'md', md: 'lg'}}
                rounded={{base: 'md', md: 'full'}}
                colorScheme="gray"
                variant={'link'}
              >
                <Icon as={FaLinkedin} boxSize={{base: 5, md: 8}} mr="5px"/>
                Linkedin
              </Button>
            </Link>
          </Stack>
        </Box>
      </Center>
      <Footer position={{base: 'static', md: 'fixed'}} bottom="0" w="100%"/>
    </>
  );
}