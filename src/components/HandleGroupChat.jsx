import { FormControl, Input, ButtonGroup, IconButton  } from "@chakra-ui/react";
import { useEffect, useRef } from 'react';
import { ThemeButton } from "./ThemeButton";
import { Firestore, getFirestore, collection, doc, setDoc } from 'firebase/firestore';
import { IoPaperPlaneOutline } from "react-icons/io5";

export function HandleGroupChat() {
    const dummySpan = useRef();
  
    useEffect(() => {
        dummySpan.current.scrollIntoView({ behaviour: 'smooth' });
    });

    const db = getFirestore();
    const chatMessagesRef = collection(db, 'messages'); 

    function sendMessage(props) {
        setDoc(doc(db, "chat-room", "LA"), {
            name: "Los Angeles",
            state: "CA",
            country: "USA"
        });
    };

    
    return (
      <FormControl bottom='0' mt='2' borderRadius='4px' onSubmit={sendMessage}>

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

        <Input type='text' h='3.5em' p={4} color='#ffffff' _focusVisible='none' backgroundColor='#1A202C' placeholder='Send A Message...' borderRadius='4px'/>

        <span ref={dummySpan}></span>
      </FormControl>
    )
  }