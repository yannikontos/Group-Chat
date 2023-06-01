import { Center, Container, Flex, Heading, Stack, Avatar, AvatarBadge, Text, Box, Button, ButtonGroup, IconButton  } from '@chakra-ui/react';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { IoLogoFirebase } from "react-icons/io5";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';
import { LogOut } from './LogOut';

  const firebaseConfig = {
    apiKey: "AIzaSyDlLfulDOnOVkQYGylQvF4fAzYdQ14pewU",
    authDomain: "react-chat-app-acfce.firebaseapp.com",
    projectId: "react-chat-app-acfce",
    storageBucket: "react-chat-app-acfce.appspot.com",
    messagingSenderId: "965772325708",
    appId: "1:965772325708:web:e723b7f2a3e580ecdb55e9",
    measurementId: "G-KGKGNNVLP7"
  };
  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  
  export function DisplayLogin() {
    const [user] = useAuthState(auth);
    
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
        <Center h='100vh' w='100%' zIndex='3' position='absolute' bg='#171923'>
        <Flex direction='column' alignItems='center' w='100%' margin='auto' gap={5}>
        <IoLogoFirebase fontSize='2.5rem' />

        <Heading>
          <Text>Login To Use:</Text>
        </Heading>

        <Button onClick={checkLogin} leftIcon={<FcGoogle  />} size='lg' fontWeight='normal' colorScheme='teal' variant='outline'>
          Login With Google
        </Button>

        <LogOut />

        </Flex>
        </Center>
      </>
    )
}