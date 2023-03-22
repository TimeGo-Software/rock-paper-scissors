export enum ItemType {
  Rock = 'Rock',
  Paper = 'Paper',
  Scissors = 'Scissors',
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