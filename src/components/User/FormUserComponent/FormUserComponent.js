import React, { useContext } from 'react';
import {
  ChakraProvider,
  Box,
  FormControl,
  Input,
  FormLabel,
  Flex,
  Button,
  Heading,
  VStack,
  Spacer,
} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import FormUseState from './UseForm';
import { UserContext } from '../ContextUser/UserContext';

const FormUserComponent = () => {
  const { user, deleteAccount } = useContext(UserContext);

  const [handleChange, handleSubmit, show] = FormUseState();
  const userKeys = Object.keys(user).filter(items => items !== 'profileImg');

  return (
    <ChakraProvider>
      <Box rounded="md" boxShadow={'2xl'} bgColor="#FFFFFF" mt={-24}>
        <Flex px={5} bgColor="#1e607a" alignItems="center" rounded="md">
          <Box p="3">
            <Heading fontSize={'xl'} color="#FFF" fontFamily={'body'} flex={1}>
              Mi Perfil
            </Heading>
          </Box>

          <Spacer />

          <Box p="3">
            {show === false ? (
              <Button
                flex={1}
                rounded={5}
                bg={'red.400'}
                color="#FFF"
                _hover={{ bg: 'red.500' }}
                onClick={deleteAccount}
              >
                Borrar cuenta
              </Button>
            ) : (
              <Button
                flex={1}
                rounded={5}
                bg={'blue.400'}
                color="#FFF"
                _hover={{ bg: 'blue.500' }}
                onClick={handleSubmit}
              >
                <CheckCircleIcon />
              </Button>
            )}
          </Box>
        </Flex>

        <VStack p={10}>
          {userKeys.map((item, i) => (
            <FormControl id={item} key={i}>
              <FormLabel fontWeight="bold">{item}</FormLabel>
              <Input
                type="text"
                variant="flushed"
                placeholder="Ingresar Nombre"
                defaultValue={Object.values(user)[i]}
                name={item}
                onChange={handleChange}
              />
            </FormControl>
          ))}
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default FormUserComponent;
