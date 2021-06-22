import React from 'react';
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  VisuallyHidden,
  VStack,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

// import { Container } from './styles';

function IncomeModal({ incomeIsOpen, incomeOnClose }) {
  const { register, handleSubmit, reset } = useForm();

  const incomeSubmit = ({ incomeDescription, incomeValue, incomeDate }) => {
    console.log('income: ', incomeDescription, incomeValue, incomeDate);
    incomeOnClose();
    reset();
  };

  return (
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
  );
}

export default IncomeModal;
