import {gameItems} from "../../const";
import {Item} from "../../components/Item";
import {useEffect, useState} from "react";
import {ItemType, Result} from "../../types";
import {getGameItemByType, judgeResult, randomlySelectedItem} from "../../util";
import classnames from 'classnames';
import './style.css';

export const Home = () => {
  const [userItem, setUserItem] = useState<ItemType | null>(null);
  const [botItem, setBotItem] = useState<ItemType | null>(null);
  const [result, setResult] = useState<Result | null>(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (userItem) {
      setTimeout(() => {
        handlePlay();
      }, 700);
    }
    // eslint-disable-next-line
  }, [userItem]);

  const handleSelect = (type: ItemType) => {
    setUserItem(type);
  };

  const handlePlay = () => {
    console.log('here!!!');
    const botItem = randomlySelectedItem();
    setBotItem(botItem);

    if (userItem) {
      const roundResult = judgeResult({ user: userItem, bot: botItem });
      setResult(roundResult);
      setScore(score + roundResult.score);
    }
  }

  const handleInit = () => {
    setResult(null);
    setUserItem(null);
    setBotItem(null);
  };

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
        {result && (
          <div className='game-result fade-in'>
            <h1>{result.text}</h1>
            <div className="game-score">
              <h1>{score}</h1>
            </div>
            <div className='game-replay' onClick={handleInit}>Play again?</div>
          </div>
        )}
        {botItem && (
          <Item
            className={classnames('on-game bot fade-in', {
              left: userItem === ItemType.Scissors,
              right: userItem !== ItemType.Scissors,
            })}
            item={getGameItemByType(botItem)}
          />
        )}
      </div>

      <h1 className="game-title">Rock-Paper-Scissors Game</h1>
    </div>
  );
};