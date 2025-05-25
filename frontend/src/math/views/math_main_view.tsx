import { useEffect, useState } from "react";
import {
  getCorrectRandomNumbers,
  getWrongRandomNumbers,
  shuffleOrSort,
  sumUpCorrectValues,
} from "../utils/math_numbers_utils";
import { MATH_TILE_TYPE, MATH_TILES_TYPE } from "../types/math_types";
import { MATH_VIEW, useMathGameSettings } from "../store/math_game_settings";
import { ClicksRemain } from "../components/clicks_remain";
import { ButtonClear } from "../components/buttons/button_clear";
import { ButtonEndGame } from "../components/buttons/button_end_game";
import { RemainValue } from "../components/remain_value";
import { Equation } from "../components/equation";
import { TilesContainer } from "../components/tiles_container";
import { ProgressBar } from "../components/progress_bar";
import { NextStepButton } from "../components/buttons/next_step_button";
import { HealthBar } from "../components/healthbar";

const NUMBER_OF_CORRECT_TILES = 3;
const NUMBER_OF_TOTAL_TILES = 6;

const NUMBER_OF_TILES_TO_CLICK = NUMBER_OF_CORRECT_TILES;

const FIRST_NUMBER_MIN_VALUE = 7;
const FIRST_NUMBER_WRONG_MIN_VALUE = 7;

const MINIMUM_TILE_VALUE = 1;
const MAXIMUN_TILE_VALUE = 9;

const TYPE_OF_SORT = "sort_des";

export const MathMainView = () => {
  const {
    set_game_view,
    healthbar_value,
    set_healthbar_value,
    current_step,
    increase_current_step,
  } = useMathGameSettings();

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

  useEffect(() => {
    console.log("USE EFFECT CREATE NEW");
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
  }, [current_step]);

  useEffect(() => {
    if (answers.length === 0 && prevAnswers.length > 0) {
      console.log("11111");

      setAnswers(prevAnswers);
      setValueRemain(prevValueRemain);
      setNumbersOfClicksRemain(prevNumberOfClicksRemain);
    }
  }, [answers]);

  console.log(current_step);

  const onTileClick = (tile: MATH_TILE_TYPE) => {
    console.log(tile);
    const arrayCopy = [...answers];
    const objIndex = answers.findIndex((obj) => obj.id == tile.id);
    arrayCopy[objIndex].is_clicked = true;

    setNumbersOfClicksRemain((prev) => (prev ? prev - 1 : null));
    setValueRemain((prev) => (prev ? prev - tile.value : null));
    setAnswers(arrayCopy);
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
    // increase_number_of_correct_answers();
    // increase_current_step();
  }

  useEffect(() => {}, []);

  const onButtonClear = () => {
    set_healthbar_value(healthbar_value - 15);
    setAnswers([]);
  };

  const onGameEnd = () => {
    set_game_view(MATH_VIEW.idle);
  };

  const onNextStep = () => {
    console.log("Next step");
    increase_current_step();
  };

  return (
    <div>
      <HealthBar />
      <TilesContainer tiles={answers} onTileClick={onTileClick} />

      <Equation correctAnswer={correctAnswer} />
      <RemainValue valueRemain={valueRemain} />

      <ClicksRemain numberOfClicksRemain={numberOfClicksRemain} />

      <ButtonClear onButtonClear={onButtonClear} />

      <NextStepButton onNextStep={onNextStep} />

      <ButtonEndGame onGameEnd={onGameEnd} />

      <ProgressBar />
    </div>
  );
};
