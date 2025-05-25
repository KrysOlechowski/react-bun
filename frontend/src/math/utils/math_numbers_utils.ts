import { randomIntFromInterval } from "@/utils/numbers";
import { MATH_TILES_TYPE } from "../types/math_types";

export const getCorrectRandomNumbers = (
  firstNumber = 7,
  numberOfNumbers = 3,
  minimumTileValue = 1,
  maximumTileValue = 9
): MATH_TILES_TYPE => {
  let arr = [];
  for (let i = 0; i < numberOfNumbers; i++) {
    if (i === 0) {
      arr.push({
        value: randomIntFromInterval(firstNumber, maximumTileValue),
        is_correct: true,
        id: i,
        is_clicked: false,
      });
    }
    if (i > 0) {
      arr.push({
        value: randomIntFromInterval(minimumTileValue, maximumTileValue),
        is_correct: true,
        id: i,
        is_clicked: false,
      });
    }
  }
  return arr;
};

export const getWrongRandomNumbers = (
  firstNumber = 6,
  numberOfNumbers = 3,
  minimumTileValue = 2,
  maximumTileValue = 9
): MATH_TILES_TYPE => {
  let arr = [];
  for (let i = 0; i < numberOfNumbers; i++) {
    if (i === 0) {
      arr.push({
        value: randomIntFromInterval(firstNumber, maximumTileValue),
        is_correct: false,
        id: i + numberOfNumbers,
        is_clicked: false,
      });
    }
    if (i > 0) {
      arr.push({
        value: randomIntFromInterval(minimumTileValue, maximumTileValue),
        is_correct: false,
        id: i + numberOfNumbers,
        is_clicked: false,
      });
    }
  }
  return arr;
};

export const shuffleOrSort = (
  arr: MATH_TILES_TYPE,
  type: "shuffle" | "sort_asc" | "sort_des"
) => {
  const newArr = arr.slice();
  if (type === "shuffle") {
    for (let i = newArr.length - 1; i > 0; i--) {
      const rand = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
    }
  } else if (type === "sort_asc") {
    newArr.sort((a, b) => a.value - b.value);
  } else {
    newArr.sort((a, b) => b.value - a.value);
  }

  return newArr;
};

export const sumUpCorrectValues = (arr: MATH_TILES_TYPE): number => {
  let num = 0;
  for (const { value } of arr) {
    num = num + value;
  }
  return num;
};
