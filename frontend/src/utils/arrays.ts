import { DICE_VALUE_TYPE } from "@/types/dice_types";

export const getShuffledArrayItems = (
  arr: DICE_VALUE_TYPE[]
): DICE_VALUE_TYPE[] => {
  const newArr = arr.slice();
  for (let i = newArr.length - 1; i > 0; i--) {
    const rand = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
  }
  return newArr;
};
