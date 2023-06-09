import { Center, Flex, Heading, Stack, Avatar, AvatarBadge, Text, Box, ButtonGroup, Spacer  } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { DisplayLogin } from './components/CheckLogin';
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';
import { firebaseConfig } from './components/FirebaseConfig';
import { LogOut } from './components/LogOut';
import { HandleGroupChat } from './components/HandleGroupChat';
import { DisplayMessage } from './components/DisplayMessage';
import firebase from 'firebase/compat/app';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import "./styles.css"; 
import 'firebase/compat/firestore';

const app = firebase.initializeApp(firebaseConfig);
const auth = getAuth(app);
const collectionRef = firebase.firestore().collection('chat-room');
const query2 =  collectionRef.orderBy('timeSent').limit(1);

function App() {
  const [user] = useAuthState(auth); 
  const [sentMessages] = useCollectionData(query2, { idField: 'id' });
  const [items, setItems] = useState([]);

  useEffect(() => {
      const collectionRef = firebase.firestore().collection('chat-room');
      const query2 = collectionRef.orderBy('timeSent', 'desc');

      const unsubscribe = query2.onSnapshot((querySnapshot) => {
          const documents = querySnapshot.docs.map((doc) => doc.data());
          setItems(documents);
      })
      
      return () => unsubscribe();
  }, []);

    function ChatroomLayout() {
      return (
        <>
        <Center h='100svh'>
          <Box maxW='600px' w='95%' backgroundColor='#171923' boxShadow='rgba(0, 0, 0, 0.500) 0 2px 8px' borderRadius='4px'>
            <Flex flexDir='row' flexWrap='wrap' placeContent={{base: 'center', md: 'flex-start'}} gap={6} p={4}  borderRadius='4px' boxShadow='rgba(0, 0, 0, 0.500) 0 0 8px'>
              <Avatar name='Group Chat' src='' boxSize={{base :'50px', md:'80px'}}>
                  <AvatarBadge bg='green.400' borderColor='white' boxSize='20px'  />
              </Avatar>
              
              <Stack direction='column' textShadow='0 0 .1rem #00000094'  fontWeight='light'>
                <Heading>
                  <Text color='#ffffff' fontSize={{ base: '1.2rem', md: '1.9rem', lg: '1.8rem'}}>Group Chat</Text>
                  <Text mt={1.5} fontWeight='normal'fontSize={{ base: '1.2rem', md: '1.6rem', lg: '1.6rem'}} color='green.300'>Online</Text>
                </Heading>

              </Stack>

              <Spacer />
              
              <ButtonGroup>
              <LogOut />
              </ButtonGroup>

            </Flex>

            <Box>
                <Flex height='60svh' gap={{ base: '2em', md:'3.4em', lg:'1.8em'}} overflowY='scroll' overflowX='hidden' direction='column-reverse' p={4}>
                  {sentMessages && items.map(item => <DisplayMessage docDetails={item} key={item.docId} />)}
                </Flex>

                <HandleGroupChat />

            </Box>

          </Box> 
        </Center>
      </>
      )
    }

    return (
      <>
        <Box>
          { user ? ChatroomLayout() : <DisplayLogin /> }
        </Box>
      </>
    )
  }

export default App