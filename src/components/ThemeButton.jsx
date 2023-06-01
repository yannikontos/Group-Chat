import { useColorMode, IconButton } from "@chakra-ui/react";
import { BsSun } from "react-icons/bs";
import { HiOutlineMoon } from "react-icons/hi";

export function ThemeButton() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton size='md' onClick={toggleColorMode}
      aria-label='Toggle Theme'
        icon={
          colorMode === "dark" ? <BsSun /> : <HiOutlineMoon />
        }
    />
  );
}