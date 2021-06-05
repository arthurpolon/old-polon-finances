import { Box, Button, Icon, useColorModeValue } from '@chakra-ui/react';
import { IoMdMoon } from 'react-icons/io';
import { FiSun } from 'react-icons/fi';

import { useColors } from '../contexts/ColorsContext';

const ToggleModeButton = (props) => {
  const { toggleColorMode } = useColors();
  return (
    <Box {...props}>
      <Button onClick={toggleColorMode} p={0}>
        <Icon as={useColorModeValue(IoMdMoon, FiSun)} w={5} h={5} />
      </Button>
    </Box>
  );
};

export default ToggleModeButton;
