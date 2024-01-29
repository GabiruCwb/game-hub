import AddFolder from "../assets/Add Folder.jpeg";
import Config from "../assets/Config.jpeg";
import OpenedFolder from "../assets/Opened folder.png";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;
  return <div>Emoji</div>;
};

export default Emoji;
