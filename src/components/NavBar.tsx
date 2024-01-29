import { HStack, Image } from "@chakra-ui/react";
import Logo from "../assets/Logo.jpeg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={Logo} />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
