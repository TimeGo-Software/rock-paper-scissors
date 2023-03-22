import { GameItem } from "../types";
import './style.css';

type Props = GameItem;

export const Item = ({ type, image, label }: Props) => {
  return (
    <div className='game-item'>
      <img src={image} alt={label} />
    </div>
  );
};