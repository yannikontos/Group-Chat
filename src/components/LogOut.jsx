import { BiLogOut } from "react-icons/bi";
import { Center, Container, Flex, Heading, Stack, Avatar, AvatarBadge, Text, Box, Button, ButtonGroup, IconButton  } from '@chakra-ui/react';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth, GoogleAuthProvider, signOut } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { IoLogoFirebase } from "react-icons/io5";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';

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

export function LogOut() {
    return (
        <IconButton 
            icon={<BiLogOut />} onClick={() => signOut(auth)} 
            fontSize='xl' alignSelf='center' color='whitesmoke' variant='outline' 

        />
    )
}