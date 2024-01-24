import { HStack, Image } from "@chakra-ui/react";
import Logo from "../assets/Logo.jpeg";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack>
      <Image src={Logo} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
