import React, { useRef, useState } from 'react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Icon,
  Heading,
  RadioGroup,
  Stack,
  Checkbox,
  Text,
  Input,
  HStack,
  Link,
  Flex,
} from '@chakra-ui/react';
import { FiChevronDown } from 'react-icons/fi';

// import { Container } from './styles';

function FilterPopover() {
  const [selected, setSelected] = useState([]);
  const [dateValue, setDateValue] = useState('');

  console.log(selected, dateValue);

  return (
    <Popover placement='right'>
      {({ onClose }) => (
        <>
          <PopoverTrigger>
            <Button bgColor='white' fontWeight='bold'>
              Filter
              <Icon as={FiChevronDown} ml={1} />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>
              <Heading fontSize='2xl' textAlign='center'>
                Filter
              </Heading>
            </PopoverHeader>
            <PopoverBody>
              <Stack direction='column' spacing={4}>
                <Stack direction='column' spacing={2}>
                  <Text fontWeight='bold'>By Type:</Text>
                  <RadioGroup name='filter-radio'>
                    <Stack direction='row'>
                      <Checkbox
                        value='incomes'
                        colorScheme='green'
                        mr={4}
                        onChange={() => {
                          if (selected.includes('income')) {
                            setSelected(
                              selected.filter((item) => item !== 'income')
                            );
                          } else {
                            setSelected([...selected, 'income']);
                          }
                        }}
                      >
                        Incomes
                      </Checkbox>
                      <Checkbox
                        value='expenses'
                        colorScheme='red'
                        onChange={() => {
                          if (selected.includes('expense')) {
                            setSelected(
                              selected.filter((item) => item !== 'expense')
                            );
                          } else {
                            setSelected([...selected, 'expense']);
                          }
                        }}
                      >
                        Expenses
                      </Checkbox>
                    </Stack>
                  </RadioGroup>
                </Stack>
                <Stack spacing={2}>
                  <Flex justify='space-between'>
                    <Text fontWeight='bold'>By Month:</Text>
                    {dateValue && (
                      <Link
                        color='red'
                        onClick={() => {
                          setDateValue('');
                        }}
                      >
                        clear date
                      </Link>
                    )}
                  </Flex>

                  <Input
                    value={dateValue}
                    onChange={(e) => {
                      setDateValue(e.target.value);
                    }}
                    type='month'
                  />
                </Stack>
                {/* <HStack alignSelf='flex-end'>
                  <Button
                    colorScheme='red'
                    mr={3}
                    size='sm'
                    onClick={clearFields}
                  >
                    Clear
                  </Button>
                  <Button
                    bgColor='transparent'
                    size='sm'
                    border='1px solid black'
                    onClick={onClose}
                  >
                    Ok
                  </Button>
                </HStack> */}
              </Stack>
            </PopoverBody>
          </PopoverContent>
        </>
      )}
    </Popover>
  );
}

export default FilterPopover;
