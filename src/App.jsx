import { Box, Center, Container, Flex, Image, Heading, Stack, Button, ButtonGroup  } from '@chakra-ui/react';
import { SunIcon } from '@chakra-ui/icons'
import { useState } from 'react';
import "./styles.css"; 

function App() {
  
  return (
    <>
      <Center h='100vh' bg='black'>
        <Container w={[300, 350, 500]}  h='85vh' borderRadius='4px' p={5} bg='white'>
            <Flex flexDir='row' bg='black' gap={4} p={4} color='white' borderRadius='lg' boxShadow='rgba(0, 0, 0, 0.500) 0 2px 8px' border='1.5px solid hsla(0, 0%, 76%, 0.158)'>
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

                  <span className='online-status'>&#x2022;</span> Online
                </Heading>
              </Stack>
            

            </Flex>
        </Container> 
      </Center>
    </>
    )
}

export default App
