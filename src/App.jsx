import { Box, Center, Container, Flex, Image, Heading, Stack, Button, ButtonGroup  } from '@chakra-ui/react';
import { SunIcon } from '@chakra-ui/icons'
import { useState } from 'react';

function App() {
  
  
  return (
    <>
      <Center h='100vh' bg=''>
        <Container w={[300, 350, 500]}  h='85vh' borderRadius='4px' p={5} bg='blue.600'>
            <Flex flexDir='row' bg='black' gap={4} p={4} color='white'>
              <Image 
                borderRadius='full'
                boxSize='80px'
                src='/imgs/pfp.webp/'
              />
              
              <Stack direction='column'>
                <Heading size='lg'>
                  Yannis Kontos
                </Heading>
                <Heading size='md'>
                  Green Icon Online
                </Heading>
              </Stack>
            
              <Button colorScheme='teal' size='sm' onClick={() => changeTheme}>
                <SunIcon float='right' color='white' fontSize='xl' />
              </Button>

            </Flex>
        </Container> 
      </Center>
    </>
    )
}

function changeTheme() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <header>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
    </header>
  )
}

export default App
