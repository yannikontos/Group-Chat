import { Center, Flex, Heading, Stack, Avatar, AvatarBadge, Text, Box, Button, ButtonGroup, IconButton, FormControl, Input, Spacer  } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import { DisplayLogin } from './components/CheckLogin';
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';
import { firebaseConfig } from './components/FirebaseConfig';
import { Chat } from './components/ChatroomLayout';
import "./styles.css"; 


function App() {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const [user] = useAuthState(auth); 


  return (
    <Box>
      { user ? <Chat /> : <DisplayLogin /> }
    </Box>
  )
} 

export default App