export enum ItemType {
    Rock,
    Paper,
    Scissors
}

export type GameItem = {
    type: ItemType;
    image: string;
    label: 'Rock' | 'Scissors' | 'Paper'
}