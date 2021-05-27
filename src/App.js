import React from 'react';
import { ChakraProvider, Image, Box, Grid, GridItem } from '@chakra-ui/react';
import Form from './components/Form';
import Card from './components/Card';
import { properties } from './components/mock'

function App() {

  return (
    <ChakraProvider>
      <Box>
        <Box w="100%" rounded="md">
          <Image src={properties.imgBackgroundUrl} objectFit="cover" h="50vh" w="100%" rounded="md" />
        </Box>

        <Grid templateColumns="repeat(6, 1fr)" gap={6}>

          <GridItem w="100%" colStart={2} colEnd={4} px={10}>
            <Form />
          </GridItem>

          <GridItem w="100%" colStart={4} colEnd={6} mt={-150}>
            <Card />
          </GridItem>
        </Grid>
      </Box>

    </ChakraProvider>
  );
}

export default App;


