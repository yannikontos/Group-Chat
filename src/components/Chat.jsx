import { Center, Flex, Heading, Stack, Avatar, AvatarBadge, Text, Box, Button, ButtonGroup, IconButton, FormControl, Input, Spacer, Image  } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';
import { PostMessage } from './PostMessage';
import { LogOut } from './LogOut';
import { ThemeButton } from './ThemeButton';

export function Chat() {
    const dummySpan = useRef();
  
  useEffect(() => {
    dummySpan.current.scrollIntoView({ behaviour: 'smooth' });
  });

  function randomizeColors() {
    let colorGeneration = `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
    return colorGeneration;
};


  return (
    <>
      <Center h='100svh'>
        <Box maxW='600px' w='95%' backgroundColor='#171923' boxShadow='rgba(0, 0, 0, 0.500) 0 2px 8px' borderRadius='4px'>
          <Flex flexDir='row' flexWrap='wrap' placeContent={{base: 'center', md: 'flex-start'}} gap={6} p={4}  borderRadius='4px' boxShadow='rgba(0, 0, 0, 0.500) 0 0 8px'>
            <Avatar name='Yannis Kontos'src='/imgs/pfp.webp' boxSize={{base :'50px', md:'80px'}}>
                <AvatarBadge bg='green.400' borderColor='white' boxSize='20px'  />
            </Avatar>
            
            <Stack direction='column' textShadow='0 0 .1rem #00000094'  fontWeight='light'>
              <Heading>
                <Text color='#ffffff' fontSize={{ base: '1.2rem', md: '1.9rem', lg: '1.8rem'}}>Yannis Kontos</Text>
                <Text mt={1.5} fontWeight='normal'fontSize={{ base: '1.2rem', md: '1.6rem', lg: '1.6rem'}} color='green.300'>Online</Text>
              </Heading>

            </Stack>

            <Spacer />
            
            <ButtonGroup>
            <LogOut />
            </ButtonGroup>

          </Flex>

          <Box>
              <Flex direction='column-reverse' height='60svh' overflowY='scroll' overflowX='hidden'  gap={{ base: '2em', md:'3.4em', lg:'2em'}} p={4}>
           
              <Heading width={{base: '300px', md:'500px'}} backgroundColor='#5d5e602a' borderRadius='8px 8px 8px 0px' size='md' padding={2}>
                  <Text pb={2} ml='3em' fontSize='1.4rem' color={randomizeColors}>Jack</Text>
                  <Flex gap={3} ml={1} color='#ffffff' fontWeight='normal'>
                    <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' w='50px' h='50px' borderRadius='full' alignSelf='end' />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, sapiente non? Earum quidem modi dolorem quod, incidunt veniam, cupiditate voluptate consectetur iusto error, beatae iure laudantium labore deleniti itaque aperiam?
                  </Flex>
              </Heading>

              <Heading width={{base: '300px', md:'500px'}} backgroundColor='#5d5e602a' borderRadius='8px 8px 0px 8px' alignSelf='flex-end' size='md' padding={2}>
                  <Text textAlign='right' mr='3.3em' pb={2} color={randomizeColors}>Yannis</Text>
                  <Flex gap={3} mr={1} textAlign='right' fontWeight='normal' justifyContent='flex-end' color='#ffffff'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, numquam blanditiis ex nisi nemo laborum voluptates deleniti eos. Debitis corporis rerum quidem modi dolorem illum excepturi voluptatem voluptatum ipsa unde.
                    <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' w='50px' h='50px' borderRadius='full' alignSelf='end' />
                  </Flex>
              </Heading>

              <Heading width={{base: '300px', md:'500px'}} backgroundColor='#5d5e602a' borderRadius='8px 8px 8px 0px' size='md' padding={2}>
                  <Text pb={2} ml='3em' fontSize='1.4rem' color={randomizeColors}>Jack</Text>
                  <Flex gap={3} ml={1} color='#ffffff' fontWeight='normal'>
                    <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' w='50px' h='50px' borderRadius='full' alignSelf='end' />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, sapiente non? Earum quidem modi dolorem quod, incidunt veniam, cupiditate voluptate consectetur iusto error, beatae iure laudantium labore deleniti itaque aperiam?
                  </Flex>
              </Heading>
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