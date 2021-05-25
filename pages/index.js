import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  useColorModeValue,
  useColorMode,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react';
import { FiLayout, FiDollarSign, FiLock } from "react-icons/fi";
import NextLink from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  const { colorMode } = useColorMode()
  return (
    <>
      <Navbar />
      
      {/* Hero */}
      <Container maxW={'7xl'} minH="calc(85vh - 107px)">
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          pt={{ base: 10, md: 28 }}
          direction={{ base: 'column', md: 'row' }}
          >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: '30%',
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'green.400',
                  zIndex: -1,
                }}>
                Your money
              </Text>
              <br />
              <Text as={'span'} color={'green.400'}>
                in your control!
              </Text>
            </Heading>
            <Text color={'gray.500'}>
              Polon-Finance$ is an app to handle all your incomes and expenses.
              That way, you can see, save and plan your financial life in a simple way.
              Click below and start planning your future!
            </Text>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: 'column', sm: 'row' }}>
              <NextLink href="/app">
                <a>
                  <Button
                    rounded={'lg'}
                    size={'lg'}
                    fontWeight={'normal'}
                    px={6}
                    colorScheme={'green'}
                    >
                    Get started
                  </Button>
                </a>
              </NextLink>
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}>
            <Blob
              w={'150%'}
              h={'150%'}
              position={'absolute'}
              top={'-20%'}
              left={0}
              zIndex={-1}
              color={useColorModeValue('gray.100', 'green.400')}
            />
            <Box
              position={'relative'}
              height={'300px'}
              rounded={'2xl'}
              boxShadow={'2xl'}
              width={'full'}
              overflow={'hidden'}>
              <Image
                alt={'Hero Image'}
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={'100%'}
                src={
                  'https://images.pexels.com/photos/4386327/pexels-photo-4386327.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                }
              />
            </Box>
          </Flex>
        </Stack>
      </Container>

      {/* Bottom Cards */}
      <Box maxW="70%" mx="auto" p={4}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{base: 10, md: 20}}>
          <Feature
            icon={<Icon as={FiLayout} w={10} h={10} />}
            title={'Easy Interface'}
            text={
              'THe simple look makes the app very simple to use in the day by day.'
            }
          />
          <Feature
            icon={<Icon as={FiDollarSign} w={10} h={10} />}
            title={'Free to use'}
            text={
              'The app is free to use, because my main goal is to really help you achieve your goals.'
            }
          />
          <Feature
            icon={<Icon as={FiLock} w={10} h={10} />}
            title={'Secure and privacy'}
            text={
              'Your information will be completely secure, the app were built thinking in the privacy of our users.'
            }
          />
        </SimpleGrid>
      </Box>

      <Footer />
    </>
  )
}

export const Blob = (props) => {
  return (
    <Icon
      width={'100%'}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};

const Feature = ({ title, text, icon }) => {
  return (
    <VStack align="center">
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={useColorModeValue('gray.200', 'gray.700')}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text align="center" color={'gray.600'}>{text}</Text>
    </VStack>
  );
};
