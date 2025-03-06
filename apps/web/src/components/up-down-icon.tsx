import { Dot, MoveDownRight, MoveUpRight } from "lucide-react";

interface UpDownIconProps {
  direction: "up" | "down" | "neutral";
}

const UpDownIcon: React.FC<UpDownIconProps> = ({ direction }) => {
  if (direction === "up") {
    return <MoveUpRight className="w-3 h-3" color="currentColor" />;
  } else if (direction === "down") {
    return <MoveDownRight className="w-3 h-3" color="currentColor" />;
  } else {
    return <Dot className="w-3 h-3" color="currentColor" />;
  }
};

export default UpDownIcon;
