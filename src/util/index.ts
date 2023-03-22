import { GameItem, ItemType, Result } from "../types";
import { gameItems, ResultItems } from "../const";

export const getGameItemByType = (type: ItemType): GameItem | undefined => gameItems.find((item) => item.type === type);

export const randomlySelectedItem = (): ItemType => {
  return gameItems[Math.floor(Math.random() * gameItems.length)].type;
};

export const judgeResult = ({ user, computer }: { user: ItemType, computer: ItemType }): Result => {
  const userItem = getGameItemByType(user);
  const computerItem = getGameItemByType(computer);

  if (userItem?.defeatedBy === computer) {
    return ResultItems.lost;
  } else if (computerItem?.defeatedBy === user) {
    return ResultItems.win;
  }
  return ResultItems.tied;
};