import { Box, Button, useColorMode, Icon } from '@chakra-ui/react';
import React from 'react';
import {IoMdMoon} from 'react-icons/io'
import {FiSun} from 'react-icons/fi'

// import { Container } from './styles';

function ThemeButton() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box pos="absolute" mt="20px" ml="20px">
      <Button onClick={toggleColorMode}>
        {colorMode === "light" ? <Icon as={IoMdMoon} w={5} h={5} /> : <Icon as={FiSun} w={5} h={5} />}
      </Button>
    </Box>
  )
}

export default ThemeButton;