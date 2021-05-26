import {
  Box,
  chakra,
  Container,
  Icon,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';

import { FaLinkedin } from 'react-icons/fa';
import { AiFillGithub } from "react-icons/ai";
import Image from 'next/image'
import NextLink from 'next/link'

export default function Footer(props) {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.800')}
      color={useColorModeValue('gray.700', 'gray.200')}
      {...props}
      >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        spacing={4}
        justify={'center'}
        align={'center'}>
        <Image src={useColorModeValue('/logo-light.svg', '/logo-dark.svg')} width="180" height="100" />
        <Stack direction={'row'} spacing={6}>
          <NextLink href="/">
            <Link as="a">Home</Link>
          </NextLink>
          <NextLink href="/plans">
            <Link as="a">Plans</Link>
          </NextLink>
          <NextLink href="/about">
            <Link as="a">About Me</Link>
          </NextLink>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Link href="https://www.instagram.com/arthur_polon/" isExternal>@Arthur_Polon</Link>
          <Stack direction={'row'} spacing={6}>
            <Link href="https://github.com/arthurpolon" isExternal>
              <Icon as={AiFillGithub} boxSize={8} label="GitHub"/>
            </Link>
            <Link href="https://www.linkedin.com/in/arthur-polon-55a3b420a/" isExternal>
              <Icon as={FaLinkedin} boxSize={8} label="LinkedIn"/>
            </Link>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};