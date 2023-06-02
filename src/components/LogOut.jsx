import { BiLogOut } from "react-icons/bi";
import { IconButton } from '@chakra-ui/react';
import { initializeApp } from 'firebase/app';
import { getAuth, signOut } from "firebase/auth";
import { firebaseConfig } from './FirebaseConfig';

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

export function LogOut() {
    return (
        <IconButton 
            icon={<BiLogOut />} onClick={() => signOut(auth)} 
            fontSize='xl' alignSelf='center' color='whitesmoke' variant='outline' 
        />
    )
}