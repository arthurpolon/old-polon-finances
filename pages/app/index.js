import {
  Flex,
  Image,
  HStack,
  VStack,
  Button,
  Box,
  Icon,
  Text,
  Stack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  VisuallyHidden,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import {
  FiLogIn,
  FiLogOut,
  FiDollarSign,
  FiEdit,
  FiTrash2,
  FiArrowLeftCircle,
} from 'react-icons/fi';
import NextLink from 'next/link';
import { useColors } from '../../contexts/ColorsContext';
import checkAuth from '../../components/checkAuth';
import UserInfo from '../../components/UserInfo';
import IncomeModal from './_IncomeModal';
import ExpenseModal from './_ExpenseModal';
import FilterPopover from './_FilterPopover';

const App = () => {
  const { colorMode, toggleColorMode } = useColors();
  const {
    isOpen: incomeIsOpen,
    onOpen: incomeOnOpen,
    onClose: incomeOnClose,
  } = useDisclosure();
  const {
    isOpen: expenseIsOpen,
    onOpen: expenseOnOpen,
    onClose: expenseOnClose,
  } = useDisclosure();

  useEffect(() => {
    if (colorMode === 'dark') {
      toggleColorMode();
    }
  }, []);

  return (
    <>
      <Box minH='100vh' minW='100vw' bg='#ededed'>
        {/* Header */}
        <NextLink href='/'>
          <Button
            variant='ghost'
            color='white'
            _hover='none'
            position='absolute'
            top={10}
            left={10}
          >
            <Icon as={FiArrowLeftCircle} boxSize={6} mr={2} />
            Back to Home
          </Button>
        </NextLink>
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
        {/* UserInfo Card */}
        <UserInfo position='absolute' top={10} right={10} />
        {/* Page Content */}
        <Flex w={{ base: '80vw', md: '50vw' }} mx='auto' direction='column'>
          {/* Cards */}
          <Stack
            direction={{ base: 'column', md: 'row' }}
            mx='auto'
            mt={{ base: -28, md: -24 }}
            justify='space-between'
            align='center'
            w='100%'
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
                  Income
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
                  Expenses
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
          {/* Income & Expense Buttons */}
          <HStack
            mt={6}
            w={'100%'}
            justify={{ base: 'space-around', md: 'flex-start' }}
            spacing={6}
          >
            <Button
              colorScheme='green'
              fontWeight='medium'
              onClick={incomeOnOpen}
            >
              + Add Income
            </Button>
            <Button
              colorScheme='red'
              fontWeight='medium'
              onClick={expenseOnOpen}
            >
              - Add Expense
            </Button>
            <FilterPopover />
          </HStack>
          {/* Table */}
          <Table variant='unstyled' w='100%' mt={6} bg='white' borderRadius={4}>
            <Thead>
              <Tr>
                <Th textAlign='center'>Descrição</Th>
                <Th textAlign='center'>Valor</Th>
                <Th textAlign='center'>Data</Th>
                <Th textAlign='center' isNumeric>
                  <VisuallyHidden>Edit Button</VisuallyHidden>
                </Th>
                <Th textAlign='center' isNumeric>
                  <VisuallyHidden>Delete Button</VisuallyHidden>
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td textAlign='center'>Veterinário Pepeu</Td>
                <Td textAlign='center' color='red'>
                  - R$ 100,00
                </Td>
                <Td textAlign='center'>18/05/2020</Td>
                <Td textAlign='center' isNumeric>
                  <Icon as={FiEdit} h={6} w={6} />
                </Td>
                <Td textAlign='center' isNumeric>
                  <Icon as={FiTrash2} h={7} w={7} color='red' />
                </Td>
              </Tr>
              <Tr>
                <Td textAlign='center'>Venda salgadinho</Td>
                <Td textAlign='center' color='green'>
                  + R$ 50,00
                </Td>
                <Td textAlign='center'>20/05/2020</Td>
                <Td textAlign='center' isNumeric>
                  <Icon as={FiEdit} h={6} w={6} />
                </Td>
                <Td textAlign='center' isNumeric>
                  <Icon as={FiTrash2} h={7} w={7} color='red' />
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Flex>
      </Box>
      {/* Income Modal */}
      <IncomeModal incomeIsOpen={incomeIsOpen} incomeOnClose={incomeOnClose} />
      {/* Expense Modal */}
      <ExpenseModal
        expenseIsOpen={expenseIsOpen}
        expenseOnClose={expenseOnClose}
      />
    </>
  );
};

export default checkAuth(App);
