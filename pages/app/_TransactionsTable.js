import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  VisuallyHidden,
  Icon,
} from '@chakra-ui/react';
import { FiEdit, FiTrash2 } from 'react-icons/fi';

function TransactionsTable() {
  return (
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
  );
}

export default TransactionsTable;
