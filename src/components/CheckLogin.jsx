import { Center, Flex, Heading, Text, Button  } from '@chakra-ui/react';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { IoLogoFirebase } from "react-icons/io5";
import { firebaseConfig } from './FirebaseConfig';
  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  
  export function DisplayLogin() {
    
    function checkLogin() {
      signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
      })
      
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
    }

    return (
      <>
        <Center h='100vh' w='100%' zIndex='3' position='absolute'>
        <Flex direction='column' alignItems='center' w='100%' margin='auto' gap={5}>
        <IoLogoFirebase fontSize='2.5rem' />

        <Heading>
          <Text>Login To Use:</Text>
        </Heading>

        <Button onClick={checkLogin} leftIcon={<FcGoogle  />} size='lg' fontWeight='normal' colorScheme='teal' variant='outline'>
          Login With Google
        </Button>

        </Flex>
        </Center>
      </>
    )
}