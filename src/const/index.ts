import { GameItem, ItemType } from "../types";

export const gameItems: GameItem[] = [
  {
    type: ItemType.Rock,
    image: require('../assets/rock.png'),
    label: 'Rock',
  },
  {
    type: ItemType.Paper,
    image: require('../assets/paper.png'),
    label: 'Paper',
  },
  {
    type: ItemType.Scissors,
    image: require('../assets/scissors.png'),
    label: 'Scissors',
  }
]