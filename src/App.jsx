import { Center, Container, Flex, Heading, Stack, Avatar, AvatarBadge, Text, Box, Button, ButtonGroup  } from '@chakra-ui/react';
import { FormControl, FormLabel, FormErrorMessage, FormHelperText, Input } from '@chakra-ui/react'
import { useState } from 'react';
import { IoPaperPlaneOutline, IoCall } from "react-icons/io5";
import { BsSun, BsFillCameraVideoFill } from "react-icons/bs";
import ThemeButton  from "./compnents/ThemeButton"
import "./styles.css"; 

function App() {
  
  return (
    <>
      <Center h='100vh' >
        <Container w={[400, 350, 500]} boxShadow='rgba(0, 0, 0, 0.500) 0 2px 8px' borderRadius='4px' p={5}>
            <Flex flexDir='row' flexWrap='wrap' justifyContent='space-evenly' gap={6} p={4}  borderRadius='4px' boxShadow='rgba(0, 0, 0, 0.500) 0 2px 8px'>
              <Avatar name='Yannis Kontos'src='/imgs/pfp.webp' boxSize='80px'>
                  <AvatarBadge bg='green.400' borderColor='white' boxSize='1.25em'  />
              </Avatar>
              
              <Stack direction='column' textShadow='0 0 .1rem #00000094' fontWeight='light'>
                <Heading fontSize='1.75rem'>
                  <Text>Yannis Kontos</Text>
                </Heading>

                <Heading size='md' fontWeight='semibold'>
                 <Text ml={1} color='green.300' textAlign={{base: 'center', md: "start"}}>Online</Text>
                </Heading>
              </Stack>
              
              <ButtonGroup alignItems='center'>
                <Button>
                  <BsFillCameraVideoFill />
                </Button>

                <Button>
                  <IoCall />
                </Button>
              </ButtonGroup>
            </Flex>

            <Box mt='2' p={3} boxShadow='rgba(0, 0, 0, 0.500) 0 2px 8px' borderRadius='0 0 4px 4px'>

            <Flex direction='column-reverse'  h={['50vh', 350, 500]} >
              <Text>chat messages will go here</Text>
            </Flex>

            <FormControl mt='5' borderRadius='4px' >

              <ButtonGroup position='absolute' right='0' borderRadius='full' margin='.5em .7em 0 0' cursor='pointer' zIndex={2}>

              <ThemeButton />

              <Button size='md'>
                <IoPaperPlaneOutline/>
              </Button>

              </ButtonGroup>

              <Input type='text' border='1px solid grey' boxShadow='rgba(0, 0, 0, 0.500) 0 2px 8px' placeholder='Send A Message...' h='3.5em' p={4} borderRadius='4px'/>
            </FormControl>
            
            </Box>
        </Container> 
      </Center>
    </>
    )
}

export default App
