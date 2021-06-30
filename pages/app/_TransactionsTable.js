import React, { useState } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  VisuallyHidden,
  Icon,
  Spinner,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Center,
  HStack,
  Text,
  Flex,
} from '@chakra-ui/react';
import { format } from 'date-fns';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { deleteDocument } from '@nandorojo/swr-firestore';
import formatNumberToCurrency from '../../Utils/formatNumberToCurrency';

function TransactionsTable({ transactions, loading }) {
  const [modalInfo, setModalInfo] = useState({});
  const {
    isOpen: deleteIsOpen,
    onOpen: deleteOnOpen,
    onClose: deleteOnClose,
  } = useDisclosure();

  const formatDate = (date) => {
    return format(new Date(date), 'dd/MM/yyyy');
  };

  const addSignAndCurrency = (number, type) => {
    const currency = formatNumberToCurrency(number);

    const sign = type == 'income' ? '+' : '-';

    return `${sign} ${currency}`;
  };

  const handleDeleteDocument = (id) => {
    deleteDocument('/transactions/' + id);
    deleteOnClose();
  };

  if (loading) {
    return <Spinner size='lg' mt={100} mx='auto' />;
  }

  if (transactions.length === 0) {
    return (
      <Flex mt={6} mx='auto'>
        <Text
          color='green.600'
          fontSize='2xl'
          fontWeight='bold'
          textAlign='center'
        >
          Nothing to show. <br /> Click the button above to start organizing
          your finances!
        </Text>
      </Flex>
    );
  }

  return (
    <>
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
          {transactions.map((transaction) => {
            return (
              <Tr key={transaction.id}>
                <Td textAlign='center' maxW={60}>
                  {transaction.description}
                </Td>
                <Td
                  textAlign='center'
                  color={transaction.type === 'expense' ? 'red' : 'green'}
                >
                  {addSignAndCurrency(transaction.value, transaction.type)}
                </Td>
                <Td textAlign='center'>{formatDate(transaction.date)}</Td>
                <Td textAlign='center' isNumeric>
                  <Icon as={FiEdit} h={6} w={6} />
                </Td>
                <Td textAlign='center' isNumeric>
                  <Icon
                    as={FiTrash2}
                    h={7}
                    w={7}
                    color='red'
                    _hover={{ cursor: 'pointer' }}
                    onClick={() => {
                      deleteOnOpen();
                      setModalInfo({
                        description: transaction.description,
                        id: transaction.id,
                      });
                    }}
                  />
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>

      {/* Delete Modal */}
      <Modal isOpen={deleteIsOpen} onClose={deleteOnClose}>
        <ModalOverlay />
        <ModalContent backgroundColor='red.500' color='white'>
          <ModalHeader fontSize='3xl' fontWeight='medium' textAlign='center'>
            Are you sure you want to delete:
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Center>
              <Text
                fontWeight='bold'
                fontSize='3xl'
                overflow='hidden'
                textAlign='center'
              >
                "{modalInfo.description}"
              </Text>
            </Center>
          </ModalBody>
          <ModalFooter>
            <HStack justify='space-around' w='100%' mt={4}>
              <Button
                py={6}
                px={8}
                color='white'
                variant='ghost'
                colorScheme='blackAlpha'
                onClick={deleteOnClose}
              >
                Cancel
              </Button>
              <Button
                py={6}
                px={8}
                colorScheme='blackAlpha'
                onClick={() => {
                  handleDeleteDocument(modalInfo.id);
                }}
              >
                Delete
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default TransactionsTable;
