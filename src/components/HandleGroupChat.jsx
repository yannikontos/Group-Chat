import { FormControl, Input, ButtonGroup, IconButton } from "@chakra-ui/react";
import { useEffect, useRef, useState } from 'react';
import { ThemeButton } from "./ThemeButton";
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { IoPaperPlaneOutline } from "react-icons/io5";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./FirebaseConfig";
import { getAuth } from "firebase/auth";


export function HandleGroupChat() {
    const dummySpan = useRef();
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const db = getFirestore(app);
    const chatMessagesRef = collection(db, 'chat-room'); 
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        dummySpan.current.scrollIntoView({ behaviour: 'smooth' });
    });

    const sendMessage = async (e) =>  {
        const { uid, photoURL, displayName } = auth.currentUser;
        e.preventDefault();


          addDoc(chatMessagesRef, {
            formMessage: inputValue,
            timeSent: serverTimestamp(),
            docId: crypto.randomUUID(),
            displayName,
            photoURL,
            uid,
          });
          
        setInputValue('');
    };

    return (
      <form action="submit" onSubmit={sendMessage}>
        <FormControl isRequired bottom='0' mt='2' borderRadius='4px'>
          <ButtonGroup position='absolute' right='0' borderRadius='full' margin='.5em .7em 0 0' cursor='pointer' zIndex={2}>
            <ThemeButton />
            <IconButton size='md'
              type='submit'
              icon={
                <IoPaperPlaneOutline />
              }
              onClick={sendMessage}
              />
          </ButtonGroup>

          <Input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} h='3.5em' p={4} color='#ffffff' _focusVisible='none' backgroundColor='#1A202C' placeholder='Send A Message...' borderRadius='4px'/>

          <span ref={dummySpan}></span>
        </FormControl>
      </form>
    )
  }