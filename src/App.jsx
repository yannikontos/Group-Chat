import { Center, Flex, Heading, Stack, Avatar, AvatarBadge, Text, Box, Button, ButtonGroup, IconButton, FormControl, Input, Spacer  } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import { DisplayLogin } from './components/CheckLogin';
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';
import { firebaseConfig } from './components/FirebaseConfig';
import { Chat } from './components/ChatroomLayout';
import "./styles.css"; 
import { SubmitMessage } from './components/SubmitMessage';

function App() {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const [user] = useAuthState(auth); 


  return (
    <>
      <Box>
        { user ? <Chat /> : <DisplayLogin /> }
      </Box>
    <SubmitMessage />
    </>
  )
} 

export default App