import { IconButton } from '@chakra-ui/react';
import { IoPaperPlaneOutline } from "react-icons/io5";


export function PostMessage() {
    return (
        <IconButton size='md'
            type='submit'
            icon={
                <IoPaperPlaneOutline />
            }
        />
    );
};