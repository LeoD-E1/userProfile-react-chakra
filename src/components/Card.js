import React from 'react'
import { properties } from './mock'
import { ChakraProvider, Box, Avatar, Text, Center, Flex, Stack, Heading } from '@chakra-ui/react';

const Card = () => {
  return (
    <ChakraProvider>
      <Center>
        <Box
          maxW={'400px'}
          w={'full'}
          bgColor="#FFF"
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>

          <Flex justify={'center'}>
            <Avatar
              size={'4xl'}
              src={properties.profileImgUrl}
              css={{
                border: '2px solid white',
              }}
              h="200px"
              w="200px"
            />
          </Flex>

          <Box py={10}>
            <Stack spacing={0} align={'center'} mb={5}>
              <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                {properties.name} {properties.surname}
              </Heading>
              <Text color={'gray.500'}>{properties.role}</Text>
            </Stack>

            <Stack direction={'row'} justify={'center'} >
              <Stack spacing={0} align={'center'}>
                <Text fontSize={'sm'} color={'gray.500'}>
                  Email
                    </Text>
                <Text fontWeight={600}>{properties.email}</Text>
              </Stack>

            </Stack>
          </Box>
        </Box>
      </Center>
    </ChakraProvider>
  )
}

export default Card
