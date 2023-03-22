export enum ItemType {
  Rock,
  Paper,
  Scissors,
}

export type ResultType = 'win' | 'lost' | 'tied';

export type GameItem = {
  type: ItemType;
  image: string;
  label: 'Rock' | 'Scissors' | 'Paper';
  defeatedBy: ItemType;
}

export type Result = {
  score: -1 | 0 | 1;
  text: string;
}