import { HStack, Image, Text } from "@chakra-ui/react";
import Logo from "../assets/Logo.jpeg";

const NavBar = () => {
  return (
    <HStack>
      <Image src={Logo} />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
