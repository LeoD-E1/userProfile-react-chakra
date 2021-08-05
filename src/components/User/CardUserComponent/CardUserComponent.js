import React, { useContext } from 'react';
import {
  Box,
  Avatar,
  Text,
  Center,
  Flex,
  Stack,
  Heading,
  Icon,
} from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import { UserContext } from '../ContextUser/UserContext';

const CardUserComponent = () => {
  const { user, preferences } = useContext(UserContext);

  return (
    <Center>
      <Box
        maxW={'400px'}
        w={'full'}
        bgColor="#FFF"
        overflow={'hidden'}
        mt={-24}
        boxShadow={'2xl'}
        rounded="md"
      >
        <Flex justify={'center'}>
          <Avatar
            my="3"
            pos={'relative'}
            mb={4}
            src={preferences.profileImg}
            h={['100px', '150px', '200px']}
            w={['100px', '150px', '200px']}
          />
        </Flex>
        <Center>
          <Icon
            as={EditIcon}
            w={7}
            h={7}
            p={1}
            color="#008CBA"
            css={{
              border: '1px solid #999',
              transition: 'all 300ms ease-in',
            }}
            _hover={{
              bg: '#1E607A',
              color: 'white',
              border: '1px solid #1E607A',
              borderRadius: '50%',
            }}
          />
        </Center>
        <hr />
        <Box py={10}>
          <Stack spacing={0} align={'center'} mb={5}>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
              {user.name} {user.surname}
            </Heading>
            <Text color={'gray.500'}>{user.role}</Text>
          </Stack>

          <Text fontSize={'sm'} color={'gray.500'} textAlign="center">
            Email
          </Text>
          <Text fontWeight={600} textAlign="center">
            {user.email}
          </Text>
        </Box>
      </Box>
    </Center>
  );
};

export default CardUserComponent;
