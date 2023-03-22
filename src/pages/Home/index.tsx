import { gameItems } from "../../const";
import {Item} from "../../components/Item";
import './style.css';
import {useState} from "react";
import {GameItem} from "../../types";

export const Home = () => {
  const [userItem, setUserItem] = useState<GameItem | null>(null);
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);

  return (
    <div className='home-container'>
      <div className='game-items'>
        {
          gameItems.map((item, index) => (
            <Item {...item} />
          ))
        }
      </div>
    </div>
  );
};