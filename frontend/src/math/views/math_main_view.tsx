import { useEffect, useState } from "react";
import {
  getCorrectRandomNumbers,
  getWrongRandomNumbers,
  shuffleOrSort,
  sumUpCorrectValues,
} from "../utils/math_numbers_utils";
import { MATH_TILE_TYPE, MATH_TILES_TYPE } from "../types/math_types";
import { MATH_VIEW, useMathGameSettings } from "../store/math_game_settings";

const NUMBER_OF_CORRECT_TILES = 3;
const NUMBER_OF_TOTAL_TILES = 6;

const NUMBER_OF_TILES_TO_CLICK = NUMBER_OF_CORRECT_TILES;

const FIRST_NUMBER_MIN_VALUE = 7;
const FIRST_NUMBER_WRONG_MIN_VALUE = 7;

const MINIMUM_TILE_VALUE = 1;
const MAXIMUN_TILE_VALUE = 9;

const TYPE_OF_SORT = "sort_des";

export const MathMainView = () => {
  const { set_game_view } = useMathGameSettings();

  const [answers, setAnswers] = useState<MATH_TILES_TYPE>([]);
  const [prevAnswers, setPrevAnswers] = useState<MATH_TILES_TYPE>([]);

  const [valueRemain, setValueRemain] = useState<number | null>(null);
  const [prevValueRemain, setPrevValueRemain] = useState<number | null>(null);

  const [numberOfClicksRemain, setNumbersOfClicksRemain] = useState<
    number | null
  >(null);
  const [prevNumberOfClicksRemain, setPrevNumbersOfClicksRemain] = useState<
    number | null
  >(null);

  const [correctAnswer, setCorrectAnswer] = useState<number | null>(null);

  if (prevAnswers.length === 0) {
    const random_correct_numbers = getCorrectRandomNumbers(
      FIRST_NUMBER_MIN_VALUE,
      NUMBER_OF_CORRECT_TILES,
      MINIMUM_TILE_VALUE,
      MAXIMUN_TILE_VALUE
    );
    const random_wrong_numbers = getWrongRandomNumbers(
      FIRST_NUMBER_WRONG_MIN_VALUE,
      NUMBER_OF_TOTAL_TILES - NUMBER_OF_CORRECT_TILES,
      MINIMUM_TILE_VALUE,
      MAXIMUN_TILE_VALUE
    );

    const merged_numbers = [...random_correct_numbers, ...random_wrong_numbers];

    const shuffled_numbers = shuffleOrSort(merged_numbers, TYPE_OF_SORT);

    const correct_answer = sumUpCorrectValues(random_correct_numbers);

    setAnswers(shuffled_numbers);
    setPrevAnswers(shuffled_numbers);

    setValueRemain(correct_answer);
    setPrevValueRemain(correct_answer);

    setNumbersOfClicksRemain(NUMBER_OF_TILES_TO_CLICK);
    setPrevNumbersOfClicksRemain(NUMBER_OF_TILES_TO_CLICK);

    setCorrectAnswer(correct_answer);
  }

  useEffect(() => {
    if (answers.length === 0 && prevAnswers.length > 0) {
      setAnswers(prevAnswers);
      setValueRemain(prevValueRemain);
      setNumbersOfClicksRemain(prevNumberOfClicksRemain);
    }
  }, [answers]);

  console.log(correctAnswer);

  const onTileClick = (tile: MATH_TILE_TYPE) => {
    setNumbersOfClicksRemain((prev) => (prev ? prev - 1 : null));
    setValueRemain((prev) => (prev ? prev - tile.value : null));
  };

  if (
    (numberOfClicksRemain === 0 && valueRemain !== 0) ||
    (numberOfClicksRemain !== null &&
      numberOfClicksRemain > 0 &&
      valueRemain !== null &&
      valueRemain <= 0)
  ) {
    console.log("You loose");
  }
  if (numberOfClicksRemain === 0 && valueRemain === 0) {
    console.log("You won");
  }

  const onButtonClear = () => {
    setAnswers([]);
  };

  const onGameEnd = () => {
    set_game_view(MATH_VIEW.idle);
  };

  return (
    <div>
      <div className="flex">
        {answers ? (
          answers.map((tile) => {
            const styles = `p-3 m-3  w-10 h-10 border ${tile.value ? "text-green-700" : "text-red-700"}`;
            return (
              <button
                onClick={(event) => {
                  onTileClick(tile),
                    (event.currentTarget.disabled = true),
                    (event.currentTarget.style.backgroundColor = "red");
                }}
                key={tile.id}
                className={styles}
              >
                {tile.value}
              </button>
            );
          })
        ) : (
          <div>loading</div>
        )}
      </div>
      <div className="w-20 h-20 border text-xl">Correct:{correctAnswer}</div>
      <div className="w-20 h-20 border text-xl">
        Remain:{valueRemain && valueRemain > 0 ? valueRemain : "XX"}
      </div>

      <div className="flex column text-sm">
        <span>Clicks:</span>
        <span>{numberOfClicksRemain}</span>
      </div>

      <div className="flex column text-sm">
        <button onClick={onButtonClear}>Clear</button>
      </div>
      <button className="w-10 h-10 border p-3 m-3" onClick={onGameEnd}>
        End Game
      </button>
    </div>
  );
};
