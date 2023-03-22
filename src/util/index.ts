import { GameItem, ItemType, Result } from "../types";
import { gameItems, ResultItems } from "../const";

export const getGameItemByType = (type: ItemType): GameItem => gameItems.find((item) => item.type === type) as GameItem;

export const randomlySelectedItem = (): ItemType => {
  return gameItems[Math.floor(Math.random() * gameItems.length)].type;
};

export const judgeResult = ({ user, bot }: { user: ItemType, bot: ItemType }): Result => {
  const userItem = getGameItemByType(user);
  const botItem = getGameItemByType(bot);

  if (userItem?.defeatedBy === bot) {
    return ResultItems.lost;
  } else if (botItem?.defeatedBy === user) {
    return ResultItems.win;
  }
  return ResultItems.tied;
};