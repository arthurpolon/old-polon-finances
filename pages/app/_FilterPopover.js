import React, { useState } from 'react';
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
  Link,
  Flex,
} from '@chakra-ui/react';
import { FiChevronDown } from 'react-icons/fi';

function FilterPopover() {
  const [selectedType, setSelectedType] = useState([]);
  const [dateValue, setDateValue] = useState('');

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
            <PopoverBody p={4}>
              <Stack direction='column' spacing={4}>
                {/* By Type Field */}
                <Stack direction='column' spacing={2}>
                  <Text fontWeight='bold'>By Type:</Text>
                  <RadioGroup name='filter-radio'>
                    <Stack direction='row'>
                      <Checkbox
                        value='incomes'
                        colorScheme='green'
                        mr={4}
                        onChange={() => {
                          if (selectedType.includes('income')) {
                            setSelectedType(
                              selectedType.filter((item) => item !== 'income')
                            );
                          } else {
                            setSelectedType([...selectedType, 'income']);
                          }
                        }}
                      >
                        Incomes
                      </Checkbox>
                      <Checkbox
                        value='expenses'
                        colorScheme='red'
                        onChange={() => {
                          if (selectedType.includes('expense')) {
                            setSelectedType(
                              selectedType.filter((item) => item !== 'expense')
                            );
                          } else {
                            setSelectedType([...selectedType, 'expense']);
                          }
                        }}
                      >
                        Expenses
                      </Checkbox>
                    </Stack>
                  </RadioGroup>
                </Stack>
                {/* ByMonth Field */}
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
              </Stack>
            </PopoverBody>
          </PopoverContent>
        </>
      )}
    </Popover>
  );
}

export default FilterPopover;
