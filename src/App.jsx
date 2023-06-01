import { Center, Flex, Heading, Stack, Avatar, AvatarBadge, Text, Box, Button, ButtonGroup, IconButton, FormControl, Input, Spacer  } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import { PostMessage } from './components/PostMessage';
import { useAuthState } from 'react-firebase-hooks/auth';
import { initializeApp } from 'firebase/app';
import { LogOut } from './components/LogOut';
import { DisplayLogin } from './components/FirebaseConfig';
import { ThemeButton } from './components/ThemeButton';
import "./styles.css"; 

function App() {
  const dummySpan = useRef();
  
  useEffect(() => {
    dummySpan.current.scrollIntoView({ behaviour: 'smooth' });
  });

  
  return (
    <>
    <DisplayLogin />
      <Center h='100vh'>
        <Box maxW='600px' w='95%' backgroundColor='#171923' boxShadow='rgba(0, 0, 0, 0.500) 0 2px 8px' borderRadius='4px'>
          <Flex flexDir='row' flexWrap='wrap' placeContent={{base: 'center', md: 'flex-start'}} gap={6} p={4}  borderRadius='4px' boxShadow='rgba(0, 0, 0, 0.500) 0 0 8px'>
            <Avatar name='Yannis Kontos'src='/imgs/pfp.webp' boxSize={{base :'50px', md:'80px'}}>
                <AvatarBadge bg='green.400' borderColor='white' boxSize='20px'  />
            </Avatar>
            
            <Stack direction='column' textShadow='0 0 .1rem #00000094'  fontWeight='light'>
              <Heading fontSize='1.75rem'>
                <Text color='#ffffff' >Yannis Kontos</Text>
                <Text mt={1.5} fontWeight='normal' fontSize='1.4rem' color='green.300'>Online</Text>
              </Heading>

            </Stack>

            <Spacer />
            
            <ButtonGroup>
            <LogOut />
            </ButtonGroup>

          </Flex>

          <Box>
              <Flex direction='column-reverse' height='60vh' overflowY='scroll' wordBreak='break-word' gap={{ base: '2em', md:'3.4em', lg:'2em'}} p={4}>
                
              </Flex>

                <FormControl bottom='0' mt='2' borderRadius='4px'>

                  <ButtonGroup position='absolute' right='0' borderRadius='full' margin='.5em .7em 0 0' cursor='pointer' zIndex={2}>
                    <ThemeButton />
                    <PostMessage />
                  </ButtonGroup>

                  <Input type='text' h='3.5em' p={4} color='#ffffff' _focusVisible='none' backgroundColor='#1A202C' placeholder='Send A Message...' borderRadius='4px'/>

                  <span ref={dummySpan}></span>
                </FormControl>
            </Box>

        </Box> 
      </Center>
    </>
    )
} 

export default App