import { GameItem, ItemType } from "../types";
import './style.css';

type Props = {
  className?: string
  item: GameItem;
  onClick?: (type: ItemType) => void;
};

export const Item = ({ className = '', onClick, item }: Props) => {
  const handleClick = () => {
    onClick && onClick(item.type);
  };

  return (
    <div className={`game-item ${className}`} onClick={handleClick}>
      <img src={item.image} alt={item.label} />
      <img className='shadow' src={require("../assets/shadow.png")} />
    </div>
  );
};