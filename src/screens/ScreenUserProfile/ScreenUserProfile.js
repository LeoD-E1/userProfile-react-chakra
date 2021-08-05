import React, { useContext } from 'react';
import { ChakraProvider, Image, Box, Text, Flex } from '@chakra-ui/react';
import FormUserComponent from '../../components/User/FormUserComponent/FormUserComponent';
import CardUserComponent from '../../components/User/CardUserComponent/CardUserComponent';
import { UserContext } from '../../components/User/ContextUser/UserContext';
import './style.css';

function ScreenUserProfile() {
  const { preferences } = useContext(UserContext);

  return (
    <ChakraProvider>
      <Box rounded="md" className="container">
        <Image
          src={preferences.imgBackgroundUrl}
          objectFit="cover"
          h="50vh"
          w="100%"
        />

        <Flex className="overlay" justifyContent="center" alignItems="center">
          <Text as="em" color="#008CBA" fontSize="xl">
            Click para cambiar el fondo
          </Text>
        </Flex>
      </Box>

      <Box m="auto" mt="-150px" maxW="1300px" zIndex="50" className="box">
        <Flex justifyContent="center" flexWrap="wrap">
          <Box maxW="350px" w="100%" my="10%" mx="5%">
            <CardUserComponent />
          </Box>
          <Box maxW="650px" w="100%" my="10%" mx="5%">
            <FormUserComponent />
          </Box>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default ScreenUserProfile;
