import {gameItems} from "../../const";
import {Item} from "../../components/Item";
import {useState} from "react";
import {ItemType, Result} from "../../types";
import {getGameItemByType, judgeResult, randomlySelectedItem} from "../../util";
import classnames from 'classnames';
import './style.css';

export const Home = () => {
  const [userItem, setUserItem] = useState<ItemType | null>(null);
  const [botItem, setBotItem] = useState<ItemType | null>(null);
  const [result, setResult] = useState<Result | null>(null);
  const [score, setScore] = useState(0);

  const handleSelect = (type: ItemType) => {
    setUserItem(type);
    setTimeout(() => {
      handlePlay();
    }, 700);
  };

  const handlePlay = () => {
    const botItem = randomlySelectedItem();
    setBotItem(botItem);

    if (userItem) {
      const roundResult = judgeResult({ user: userItem, bot: botItem });
      setResult(roundResult);
      setScore(score + roundResult.score);
    }
  }

  return (
    <div className='home-container'>
      <div className='game-items'>
        {
          !userItem && gameItems.map((item, index) => (
            <Item
              key={index}
              item={item}
              onClick={handleSelect}
            />
          ))
        }
        {userItem && (
          <Item
            className={classnames('on-game user', {
              slide: userItem === ItemType.Paper,
              left: userItem !== ItemType.Scissors,
              right: userItem === ItemType.Scissors,
            })}
            item={getGameItemByType(userItem)}
          />
        )}
        {botItem && (
          <Item
            className={classnames('on-game bot', {
              left: userItem === ItemType.Scissors,
              right: userItem !== ItemType.Scissors,
            })}
            item={getGameItemByType(botItem)}
          />
        )}
      </div>

      <h1>Rock-Paper-Scissors Game</h1>
    </div>
  );
};