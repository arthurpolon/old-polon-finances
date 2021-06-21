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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import {
  FiLogIn,
  FiLogOut,
  FiDollarSign,
  FiEdit,
  FiTrash2,
  FiChevronDown,
  FiArrowLeftCircle,
} from 'react-icons/fi';
import NextLink from 'next/link';
import { useColors } from '../../contexts/ColorsContext';
import checkAuth from '../../components/checkAuth';
import UserInfo from '../../components/UserInfo';
import { useForm } from 'react-hook-form';

const App = () => {
  const { colorMode, toggleColorMode } = useColors();
  const { register, handleSubmit, reset } = useForm();
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

  const incomeSubmit = ({ incomeDescription, incomeValue, incomeDate }) => {
    console.log(incomeDescription, incomeValue, incomeDate);
    incomeOnClose();
    reset();
  };

  const expenseSubmit = ({ expenseDescription, expenseValue, expenseDate }) => {
    console.log(expenseDescription, expenseValue, expenseDate);
    expenseOnClose();
    reset();
  };
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
            <Button bgColor='white' fontWeight='bold'>
              Filter
              <Icon as={FiChevronDown} ml={1} />
            </Button>
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
      <Modal isOpen={incomeIsOpen} onClose={incomeOnClose}>
        <ModalOverlay />
        <ModalContent bgColor='green.500'>
          <ModalHeader color='white' textAlign='center' fontSize='3xl'>
            Add Income
          </ModalHeader>
          <ModalCloseButton color='white' />
          <ModalBody p={8}>
            <form onSubmit={handleSubmit(incomeSubmit)}>
              <Flex direction='column'>
                <VStack spacing={2}>
                  <FormControl id='description'>
                    <FormLabel>
                      <VisuallyHidden>Description</VisuallyHidden>
                    </FormLabel>
                    <Input
                      color='white'
                      type='text'
                      placeholder='Description'
                      variant='flushed'
                      {...register('incomeDescription')}
                      _placeholder={{ color: 'gray.200' }}
                      isRequired
                    />
                  </FormControl>
                  <FormControl id='value'>
                    <FormLabel>
                      <VisuallyHidden>Value</VisuallyHidden>
                    </FormLabel>
                    <Input
                      color='white'
                      type='number'
                      placeholder='Value'
                      variant='flushed'
                      {...register('incomeValue')}
                      _placeholder={{ color: 'gray.200' }}
                      isRequired
                    />
                  </FormControl>
                  <FormControl id='date'>
                    <FormLabel>
                      <VisuallyHidden>Date</VisuallyHidden>
                    </FormLabel>
                    <Input
                      _placeholder={{ color: 'gray.200' }}
                      color='white'
                      type='date'
                      variant='flushed'
                      {...register('incomeDate')}
                      isRequired
                    />
                  </FormControl>
                </VStack>
                <HStack alignSelf='flex-end' mt={8}>
                  <Button colorScheme='red' mr={3} onClick={incomeOnClose}>
                    Cancel
                  </Button>
                  <Button type='submit' colorScheme='blackAlpha'>
                    Add
                  </Button>
                </HStack>
              </Flex>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
      {/* Expense Modal */}
      <Modal isOpen={expenseIsOpen} onClose={expenseOnClose}>
        <ModalOverlay />
        <ModalContent bgColor='red.500'>
          <ModalHeader color='white' textAlign='center' fontSize='3xl'>
            Add expense
          </ModalHeader>
          <ModalCloseButton color='white' />
          <ModalBody p={8}>
            <form onSubmit={handleSubmit(expenseSubmit)}>
              <Flex direction='column'>
                <VStack spacing={2}>
                  <FormControl id='description'>
                    <FormLabel>
                      <VisuallyHidden>Description</VisuallyHidden>
                    </FormLabel>
                    <Input
                      color='white'
                      type='text'
                      placeholder='Description'
                      variant='flushed'
                      {...register('expenseDescription')}
                      _placeholder={{ color: 'gray.200' }}
                      isRequired
                    />
                  </FormControl>
                  <FormControl id='value'>
                    <FormLabel>
                      <VisuallyHidden>Value</VisuallyHidden>
                    </FormLabel>
                    <Input
                      color='white'
                      type='number'
                      placeholder='Value'
                      variant='flushed'
                      {...register('expenseValue')}
                      _placeholder={{ color: 'gray.200' }}
                      isRequired
                    />
                  </FormControl>
                  <FormControl id='date'>
                    <FormLabel>
                      <VisuallyHidden>Date</VisuallyHidden>
                    </FormLabel>
                    <Input
                      _placeholder={{ color: 'gray.200' }}
                      color='white'
                      type='date'
                      variant='flushed'
                      {...register('expenseDate')}
                      isRequired
                    />
                  </FormControl>
                </VStack>
                <HStack alignSelf='flex-end' mt={8}>
                  <Button colorScheme='red' mr={3} onClick={expenseOnClose}>
                    Cancel
                  </Button>
                  <Button type='submit' colorScheme='blackAlpha'>
                    Add
                  </Button>
                </HStack>
              </Flex>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default checkAuth(App);
