import { Box, Center, Container, Flex, VStack } from '@chakra-ui/react';
import { useState } from 'react';

function App() {
  
  
  return (
    <>
      <Center h='100vh'>
        <Container w={[200, 350, 550]}  h='70vh' borderRadius='2px' p={4} bg='blue.600'>
          <Box>
            <Flex flexDir='row'>
              <header>
                <p>hello</p>
              </header>
                <p>hello</p>
            </Flex>
          </Box>
        </Container> 
      </Center>
    </>
    )
}

export default App
