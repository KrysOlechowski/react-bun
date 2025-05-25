import { useMathGameSettings } from "../store/math_game_settings";
import { useMathGeneralSettings } from "../store/math_general_settings_store";

export const TestContainer = () => {
  const {
    difficulty_start_level,
    is_level_difficulty_increment,
    is_timer_disabled,
    is_auto_next_step,
  } = useMathGeneralSettings();

  const {
    game_view,
    number_of_correct_answers,
    number_of_wrong_answers,
    difficulty_current_level,
    current_step,
    current_points,
  } = useMathGameSettings();
  return (
    <div className="flex flex-row">
      <div className="flex flex-col w-1/2 p-5 m2 border">
        <h3>General Settings</h3>
        <span>Start difficulty: {difficulty_start_level}</span>
        <span>Current difficulty: {difficulty_current_level}</span>
        <span>
          Difficulty Inrement:{" "}
          {is_level_difficulty_increment ? "True" : "False"}
        </span>
        <span>Timer disabled: {is_timer_disabled ? "True" : "False"}</span>
        <span>Auto next-step: {is_auto_next_step ? "True" : "False"}</span>
      </div>

      <div className="flex flex-col w-1/2 p-5 m2 border">
        <h3>Game Setting:</h3>
        <span>Game view: {game_view}</span>
        <span>Points: {current_points}</span>
        <span>Current step: {current_step}</span>
        <span>Correct answers: {number_of_correct_answers}</span>
        <span>Wrong answers: {number_of_wrong_answers}</span>
      </div>
    </div>
  );
};
