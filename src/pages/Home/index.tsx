import { gameItems } from "../../const";
import {Item} from "../../components/Item";
import './style.css';
import {useState} from "react";
import {GameItem, ItemType, Result} from "../../types";
import {getGameItemByType, judgeResult, randomlySelectedItem} from "../../util";

export const Home = () => {
  const [userItem, setUserItem] = useState<ItemType | null>(null);
  const [computerItem, setComputerItem] = useState<ItemType | null>(null);
  const [result, setResult] = useState<Result | null>(null);
  const [score, setScore] = useState(0);

  const handleSelect = (type: ItemType) => {
    setUserItem(type);

    const computerItem = randomlySelectedItem();
    setComputerItem(computerItem);

    const roundResult = judgeResult({ user: type, computer: computerItem });
    setResult(roundResult);
  };

  return (
    <div className='home-container'>
      <div className='game-items'>
        {
          gameItems.map((item, index) => (
            <Item key={index} {...item} onClick={handleSelect} />
          ))
        }
      </div>
      <div>
        <div>{userItem && getGameItemByType(userItem)?.label}</div>
        <div>{computerItem && getGameItemByType(computerItem)?.label}</div>
        <div>{result?.text}</div>
      </div>
    </div>
  );
};