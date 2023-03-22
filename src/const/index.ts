import {GameItem, ItemType, Result, ResultType} from "../types";

export const gameItems: GameItem[] = [
  {
    type: ItemType.Rock,
    image: require('../assets/rock.png'),
    label: 'Rock',
    defeatedBy: ItemType.Paper,
  },
  {
    type: ItemType.Paper,
    image: require('../assets/paper.png'),
    label: 'Paper',
    defeatedBy: ItemType.Scissors,
  },
  {
    type: ItemType.Scissors,
    image: require('../assets/scissors.png'),
    label: 'Scissors',
    defeatedBy: ItemType.Rock,
  }
];

export const ResultItems: { [key in ResultType]: Result } = {
  win: { score: 1, text: 'You Win' },
  lost: { score: -1, text: 'You Lost' },
  tied: { score: 0, text: 'You Tied' },
};