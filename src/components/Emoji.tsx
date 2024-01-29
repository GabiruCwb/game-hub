import { Image, ImageProps } from "@chakra-ui/react";
import AddFolder from "../assets/Add Folder.jpeg";
import Config from "../assets/Config.jpeg";
import OpenedFolder from "../assets/Opened folder.png";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: AddFolder, alt: "meh", boxSize: "25px" },
    4: { src: Config, alt: "Recommended", boxSize: "25px" },
    5: { src: OpenedFolder, alt: "Ex", boxSize: "25px" },
  };

  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
