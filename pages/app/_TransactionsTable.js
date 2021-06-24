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
  Spinner,
} from '@chakra-ui/react';
import { format } from 'date-fns';
import { FiEdit, FiTrash2 } from 'react-icons/fi';

function TransactionsTable({ transactions, loading }) {
  if (loading) {
    return <Spinner size='lg' mt={100} mx='auto' />;
  }

  const formatDate = (date) => {
    return format(new Date(date), 'dd/MM/yyyy');
  };

  const formatNumberToCurrency = (number, type) => {
    const currency = Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(number);

    const sign = type == 'income' ? '+' : '-';

    return `${sign} ${currency}`;
  };

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
                {formatNumberToCurrency(transaction.value, transaction.type)}
              </Td>
              <Td textAlign='center'>{formatDate(transaction.date)}</Td>
              <Td textAlign='center' isNumeric>
                <Icon as={FiEdit} h={6} w={6} />
              </Td>
              <Td textAlign='center' isNumeric>
                <Icon as={FiTrash2} h={7} w={7} color='red' />
              </Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
}

export default TransactionsTable;
