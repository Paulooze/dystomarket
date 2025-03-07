import { Dot, MoveDownRight, MoveUpRight } from 'lucide-react';

type Props = {
  direction: 'up' | 'down' | 'neutral';
};

export default function UpDownIcon({ direction }: Props) {
  if (direction === 'up') {
    return <MoveUpRight className="w-3 h-3" color="currentColor" />;
  } else if (direction === 'down') {
    return <MoveDownRight className="w-3 h-3" color="currentColor" />;
  } else {
    return <Dot className="w-3 h-3" color="currentColor" />;
  }
}
