import React from 'react'
import { properties } from './mock'
import { ChakraProvider, Box, FormControl, Input, FormLabel, Flex, Button, Heading, VStack, Spacer } from '@chakra-ui/react';

const Form = () => {
  return (
    <ChakraProvider>
      <Box mt={3} css={{ border: '1px solid #EBEBED ' }} rounded="md" boxShadow={'2xl'}>
        <Flex px={5} bgColor="#1e607a">
          <Box p="3">
            <Heading fontSize={'xl'} color="#FFF" fontFamily={'body'} flex={1}>
              Mi Perfil
            </Heading>
          </Box>

          <Spacer />

          <Box p="3">
            <Button
              flex={1}
              rounded={5}
              bg={'blue.400'}
              color="#FFF"
              _hover={{ bg: 'blue.500', }}
            >Edit</Button>
          </Box>
        </Flex>

        <VStack mt={5}>
          <Flex>
            <FormControl id="name" borderColor="transparent">
              <FormLabel >Nombre</FormLabel>
              <Input type="text" placeholder="Ingresar Nombre" defaultValue={properties.name} isDisabled />
            </FormControl>
            <FormControl id="surname" borderColor="transparent" >
              <FormLabel>Apellido</FormLabel>
              <Input type="text" placeholder="Ingresar Apellido" defaultValue={properties.surname} isDisabled />
            </FormControl>
          </Flex>
          <Flex>
            <FormControl id="email" borderColor="transparent">
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="maria@example.com" defaultValue={properties.email} isDisabled />
            </FormControl>
            <FormControl id="role" borderColor="transparent">
              <FormLabel>Rol</FormLabel>
              <Input type="text" placeholder="Presidente" defaultValue={properties.role} isDisabled />
            </FormControl>
          </Flex>
        </VStack>

      </Box>
    </ChakraProvider>
  )
}

export default Form
