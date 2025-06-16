import { MATH_VIEW, useMathGameSettings } from "../store/math_game_settings";
import { useMathGeneralSettings } from "../store/math_general_settings_store";

export const useOnGameEnd = () => {
  const {
    set_is_game_end,
    set_game_view,
    set_healthbar_value,
    reset_current_steps,
    current_points,
    number_of_correct_answers,
    number_of_wrong_answers,
    set_current_points,
    set_number_of_correct_answers,
    set_number_of_wrong_answers,
  } = useMathGameSettings();

  const {
    set_persist_last_score,
    persist_best_current_score,
    set_persist_best_current_score,
    persist_best_correct_answers,
    set_persist_correct_answers,
    set_persist_best_correct_answers,
    set_persist_wrong_answers,
    persist_best_wrong_answers,
    set_persist_best_wrong_answers,
  } = useMathGeneralSettings();

  const onGameEnd = () => {
    console.log("On game end");
    addStatistics();
    resetValues();
  };

  const addStatistics = () => {
    set_persist_last_score(current_points);
    if (current_points > persist_best_current_score) {
      set_persist_best_current_score(current_points);
    }
    set_persist_correct_answers(number_of_correct_answers);
    if (number_of_correct_answers > persist_best_correct_answers) {
      set_persist_best_correct_answers(number_of_correct_answers);
    }
    set_persist_wrong_answers(number_of_wrong_answers);
    if (number_of_wrong_answers > persist_best_wrong_answers) {
      set_persist_best_wrong_answers(number_of_wrong_answers);
    }
  };

  const resetValues = () => {
    set_is_game_end(true);
    set_game_view(MATH_VIEW.idle);
    set_healthbar_value(30);
    reset_current_steps();
    set_current_points(0);
    set_number_of_correct_answers(0);
    set_number_of_wrong_answers(0);
  };

  return { onGameEnd };
};
