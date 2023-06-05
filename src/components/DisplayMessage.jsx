import { collection, query, getDocs, Firestore, getFirestore, onSnapshot } from 'firebase/firestore';
import { Center, Flex, Heading, Stack, Avatar, AvatarBadge, Text, Box, Button, ButtonGroup, IconButton, FormControl, Input, Spacer, Image  } from '@chakra-ui/react';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from './FirebaseConfig';
import { getAuth } from 'firebase/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useState } from 'react';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const q = query(collection(db, 'chat-room'));
const querySnapshot = await getDocs(q);

export function DisplayMessage() {

    function randomizeColors() {
        let colorGeneration = `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
        return colorGeneration;
    };

        const data = [];

        querySnapshot.forEach(doc => {
            data.push({ displayName: doc.data().displayName, formMessage: doc.data().formMessage, photoURL: doc.data().photoURL, uid: doc.data().uid });
        });
        
        
        const { displayName, formMessage, photoURL, uid } = data[0];

        const sentUsersUid = uid == auth.currentUser.uid ? true : false;

        return (
            <Heading width={{base: '300px', md:'500px'}} alignSelf={sentUsersUid == true ? 'flex-start' : 'flex-end'} backgroundColor='#5d5e602a' borderRadius={sentUsersUid == true ? '8px 8px 8px 0px' : '8px 8px 0px 8px'} size='md' padding={2}>
                <Text pb={2} ml='3em' fontSize='1.4rem' textAlign={sentUsersUid == true ? 'left' : 'right'} color={randomizeColors}>{displayName}</Text>
                <Flex gap={3} ml={1} color='#ffffff' fontWeight='normal'  justifyContent={sentUsersUid == true ? 'flex-start' : 'flex-end'}>
                <Image order={sentUsersUid == true ? 1 : 2} src={photoURL || 'https://bit.ly/broken-link'} alt={displayName} w='50px' h='50px' borderRadius='full' />
                <Text order={sentUsersUid == true ? 2 : 1}>{formMessage}</Text>
                </Flex>
            </Heading>
        )
}