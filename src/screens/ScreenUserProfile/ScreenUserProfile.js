import React, { useContext } from 'react';
import { ChakraProvider, Image, Box, Grid, GridItem, Center, Text } from '@chakra-ui/react';
import FormUserComponent from '../../components/User/FormUserComponent/FormUserComponent';
import CardUserComponent from '../../components/User/CardUserComponent/CardUserComponent';
import { UserContext } from '../../components/User/ContextUser/UserContext'
import './style.css'

function ScreenUserProfile() {

  const { preferences } = useContext(UserContext)

  return (

    <ChakraProvider>
      <Box>
        <Box w="100%" rounded="md" className="container">
          <Image src={preferences.imgBackgroundUrl} objectFit="cover" h="70vh" w="100%" />

          <div className="overlay">
            <Center>
              <div className="text">
                <Text noOfLines={[1, 2, 3]} as="em" color="#008CBA" fontSize="xl">Click para cambiar el fondo</Text>
              </div>
            </Center>
          </div>

        </Box>
        <Grid templateColumns="repeat(9, 1fr)" gap={6} className="box">

          <GridItem w="100%" h="100%" colStart={3} colEnd={6} mt={-150} >
            <FormUserComponent />
          </GridItem>

          <GridItem w="100%" colStart={6} colEnd={8} mt={-150} >
            <CardUserComponent />
          </GridItem>
        </Grid>
      </Box>

    </ChakraProvider>

  );
}

export default ScreenUserProfile;