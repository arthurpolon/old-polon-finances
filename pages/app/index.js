import {
  Flex,
  useColorModeValue,
  Image,
  HStack,
  VStack,
  Box,
  Icon,
  Heading,
  Text,
} from '@chakra-ui/react';
import { FiLogIn, FiLogOut, FiDollarSign } from 'react-icons/fi';

const App = () => {
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
          src={useColorModeValue('/logo-dark.svg', '/logo-light.svg')}
          width={400}
          height={130}
        />
      </Flex>

      {/* Page Content */}
      <Flex w={'50vw'} mx='auto'>
        {/* Cards */}
        <HStack mt={-24} justify='space-around' w='100%'>
          <VStack
            bg='white'
            p={35}
            align='flex-start'
            borderRadius={5}
            minW={275}
          >
            <HStack justify='space-between' w='100%'>
              <Text fontSize='3xl' color='teal.900'>
                Entradas
              </Text>
              <Icon as={FiLogIn} color='green' w={8} h={8} />
            </HStack>
            <Text fontSize='4xl'>R$ 50,00</Text>
          </VStack>
          <VStack
            bg='white'
            p={35}
            align='flex-start'
            borderRadius={5}
            minW={275}
          >
            <HStack justify='space-between' w='100%'>
              <Text fontSize='3xl' color='teal.900'>
                Saídas
              </Text>
              <Icon as={FiLogOut} color='red' w={8} h={8} />
            </HStack>
            <Text fontSize='4xl'>R$ 100,00</Text>
          </VStack>
          <VStack
            bg='green.500'
            p={35}
            align='flex-start'
            borderRadius={5}
            minW={275}
          >
            <HStack justify='space-between' w='100%'>
              <Text fontSize='3xl' color='white'>
                Total
              </Text>
              <Icon as={FiDollarSign} color='white' w={8} h={8} />
            </HStack>
            <Text fontSize='4xl' color='white' bold isTruncated>
              R$ -50,00
            </Text>
          </VStack>
        </HStack>
      </Flex>
    </Box>
  );
};

export default App;
