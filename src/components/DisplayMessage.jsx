import { collection, query, getDocs, Firestore, getFirestore, onSnapshot, doc } from 'firebase/firestore';
import { Center, Flex, Heading, Stack, Avatar, AvatarBadge, Text, Box, Button, ButtonGroup, IconButton, FormControl, Input, Spacer } from '@chakra-ui/react';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from './FirebaseConfig';
import { getAuth } from 'firebase/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const q = query(collection(db, 'chat-room'));
const querySnapshot = await getDocs(q);
firebase.initializeApp(firebaseConfig);


export function DisplayMessage(props) {
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

    function randomizeColors() {
        let colorGeneration = `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
        return colorGeneration;
    };

        return (
            <>
                <Flex height='60svh' overflowY='scroll' overflowX='hidden' direction='column-reverse' gap={{ base: '2em', md:'3.4em', lg:'1.8em'}} p={4}>
                {items.map((item) => {
                    const { formMessage, photoURL, timeSent, uid } = item;
                    let { displayName } = item;
                    const sentUsersUid = auth.currentUser.uid == item.uid ? true : false;
                    sentUsersUid === true ? displayName = 'You' : displayName;

                    return (
                        <Heading key={crypto.randomUUID()} minW='200px' alignSelf={sentUsersUid ? 'flex-start' : 'flex-end'} backgroundColor='#5d5e602a' borderRadius={sentUsersUid ? '8px 8px 8px 0px' : '8px 8px 0px 8px'} size='md' padding={2}>
                        <Text pb={3} ml='1.5em' fontSize='1.4rem' textAlign={sentUsersUid  ? 'left' : 'right'} color={randomizeColors}>{displayName}</Text>
                        <Flex gap={3} ml={1} color='#ffffff' fontWeight='normal' textAlign={sentUsersUid ? 'left' : 'right'}  justifyContent={sentUsersUid  ? 'flex-start' : 'flex-end'}>
                            <Avatar order={sentUsersUid ? 1 : 2} src={photoURL || ''} alt={displayName} w='50px' h='50px' borderRadius='full' alignSelf='center' />
                            <Text order={sentUsersUid ? 2 : 1}>{formMessage}</Text>
                        </Flex>
                        </Heading>
                        )
                })}
            </Flex>
            </>
        )
}