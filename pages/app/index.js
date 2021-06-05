import {
  Flex,
  Image,
  HStack,
  VStack,
  Box,
  Icon,
  Text,
  Stack,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { FiLogIn, FiLogOut, FiDollarSign } from 'react-icons/fi';
import ToggleModeButton from '../../components/ToggleModeButton';
import { useColors } from '../../contexts/ColorsContext';

const App = () => {
  const { colorMode, toggleColorMode } = useColors();

  console.log(colorMode);
  useEffect(() => {
    if (colorMode === 'dark') {
      toggleColorMode();
      console.log(`Inside effect: color changed to ${colorMode}`);
    }
  }, []);

  return (
    <Box minH='100vh' minW='100vw' bg='#ededed'>
      {/* Header */}
      <Flex
        background='green.900'
        justify='center'
        align='center'
        minH={'35vh'}
        pb={40}
      >
        <Image
          src={'/logo-dark.svg'}
          width={{ base: 250, md: 400 }}
          height={130}
        />
      </Flex>

      {/* Page Content */}
      <Flex w={'50vw'} mx='auto'>
        {/* Cards */}
        <Stack
          direction={{ base: 'column', md: 'row' }}
          mx='auto'
          mt={-24}
          justify='space-around'
          align='center'
          w='100%'
          spacing={10}
          overflow='visible'
        >
          {/* Income Card  */}
          <VStack
            bg='white'
            p={{ base: 25, md: 35 }}
            align='flex-start'
            borderRadius={5}
            minW={275}
          >
            <HStack justify='space-between' w='100%'>
              <Text fontSize={{ base: '2xl', md: '3xl' }} color='teal.900'>
                Entradas
              </Text>
              <Icon as={FiLogIn} color='green' w={6} h={6} />
            </HStack>
            <Text fontSize={{ base: '3xl', md: '4xl' }}>R$ 50,00</Text>
          </VStack>
          {/* Outcome Card  */}
          <VStack
            bg='white'
            p={{ base: 25, md: 35 }}
            align='flex-start'
            borderRadius={5}
            minW={275}
          >
            <HStack justify='space-between' w='100%'>
              <Text fontSize={{ base: '2xl', md: '3xl' }} color='teal.900'>
                Saídas
              </Text>
              <Icon as={FiLogOut} color='red' w={6} h={6} />
            </HStack>
            <Text fontSize={{ base: '3xl', md: '4xl' }}>R$ 100,00</Text>
          </VStack>
          {/* Total Card */}
          <VStack
            bg='green.500'
            p={{ base: 25, md: 35 }}
            align='flex-start'
            borderRadius={5}
            minW={275}
          >
            <HStack justify='space-between' w='100%'>
              <Text fontSize={{ base: '2xl', md: '3xl' }} color='white'>
                Total
              </Text>
              <Icon as={FiDollarSign} color='white' w={6} h={6} />
            </HStack>
            <Text
              fontSize={{ base: '3xl', md: '4xl' }}
              color='white'
              isTruncated
            >
              R$ -50,00
            </Text>
          </VStack>
        </Stack>
      </Flex>
    </Box>
  );
};

export default App;
