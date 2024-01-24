import { HStack, Image } from "@chakra-ui/react";
import Logo from "../assets/Logo.jpeg";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={Logo} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
