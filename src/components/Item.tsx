import {GameItem, ItemType} from "../types";
import './style.css';

type Props = {
  onClick: (type: ItemType) => void;
} & GameItem;

export const Item = ({ onClick, type, image, label }: Props) => {
  const handleClick = () => {
    onClick(type);
  };

  return (
    <div className='game-item' onClick={handleClick}>
      <img src={image} alt={label} />
    </div>
  );
};