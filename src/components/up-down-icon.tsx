import { FaMinus, FaChevronUp, FaChevronDown } from "react-icons/fa"; // Import icons

interface UpDownIconProps {
  direction: "up" | "down" | "neutral";
}

const UpDownIcon: React.FC<UpDownIconProps> = ({ direction }) => {
  if (direction === "up") {
    return <FaChevronUp className="w-3 h-3" color="currentColor" />; // Adjust size as needed
  } else if (direction === "down") {
    return <FaChevronDown className="w-3 h-3" />;
  } else {
    return <FaMinus className="w-3 h-3" />; // Neutral
  }
};

export default UpDownIcon;
