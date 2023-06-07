import { Flex, Heading, Avatar, Text } from '@chakra-ui/react';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from './FirebaseConfig';
import { getAuth } from 'firebase/auth';
import 'firebase/compat/firestore';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export function DisplayMessage(props) {
    let displayName = props.docDetails.displayName;
    const { formMessage, photoURL, timeSent, uid, docId } = props.docDetails;
    const sentUsersUid = auth.currentUser.uid == uid ? true : false;
    sentUsersUid === true ? displayName = 'You' : displayName; 

    function randomizeColors() {
        let colorGeneration = `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
        return colorGeneration;
    };


        return (
            <>
                <Heading key={docId} minW='200px' alignSelf={sentUsersUid ? 'flex-start' : 'flex-end'} backgroundColor='#5d5e602a' borderRadius={sentUsersUid ? '8px 8px 8px 0px' : '8px 8px 0px 8px'} size='md' padding={2}>
                <Text pb={3} ml='1.5em' mr={2.5} fontSize='1.4rem' textAlign={sentUsersUid ? 'left' : 'right'} color={randomizeColors}>{displayName}</Text>
                <Flex gap={3} ml={1} color='#ffffff' fontWeight='normal' textAlign={sentUsersUid ? 'left' : 'right'}  justifyContent={sentUsersUid  ? 'flex-start' : 'flex-end'}>
                    <Avatar order={sentUsersUid ? 1 : 2} src={photoURL || ''} alt={displayName} w='50px' h='50px' borderRadius='full' alignSelf='center' />
                    <Text order={sentUsersUid ? 2 : 1}>{formMessage}</Text>
                </Flex>
                </Heading>
            </>
        )
}