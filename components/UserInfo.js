import {
  Box,
  Button,
  Image,
  Popover,
  Icon,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  HStack,
  Text,
  VStack,
  Stack,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import React from 'react';
import { useRouter } from 'next/router';
import { FiSettings } from 'react-icons/fi';
import { useAuth } from '../contexts/AuthContext';

// import { Container } from './styles';

function UserInfo(props) {
  const { currentUser, signOutUser, passwordResetEmail, feedback } = useAuth();
  const router = useRouter();
  return (
    <Box {...props}>
      <Popover>
        <PopoverTrigger>
          <Button fontSize={{ base: 'md', md: 'lg' }} p={{ base: 4, md: 8 }}>
            <HStack spacing={4}>
              <Text>{currentUser?.displayName}</Text>
              <Image
                borderRadius='full'
                boxSize={{ base: 8, md: 12 }}
                src={currentUser?.photoURL || 'https://via.placeholder.com/150'}
                alt='Profile Picture'
              />
            </HStack>
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverCloseButton />
          <VStack p={4} spacing={6} align='start'>
            <Stack spacing={0}>
              <Text fontWeight='bold'>Email:</Text>
              <Text>{currentUser?.email}</Text>
            </Stack>

            <Button onClick={passwordResetEmail}>
              <Icon as={FiSettings} mr={2} />
              Redefine Password
            </Button>
            {feedback && (
              <Alert status='success'>
                <AlertIcon />
                {feedback}
              </Alert>
            )}

            <Button
              colorScheme='red'
              alignSelf='flex-end'
              onClick={() => {
                router.push('/');
                signOutUser();
              }}
            >
              Logout
            </Button>
          </VStack>
        </PopoverContent>
      </Popover>
    </Box>
  );
}

export default UserInfo;
