import { useMathGeneralSettings } from "../store/math_general_settings_store";

export const Score = () => {
  const {
    persist_last_score,
    persist_correct_answers,
    persist_wrong_answers,
    persist_best_current_score,
    persist_best_correct_answers,
    persist_best_wrong_answers,
  } = useMathGeneralSettings();

  const onDeleteStore = () => {
    useMathGeneralSettings.persist.clearStorage();
    window.location.reload();
  };
  return (
    <div className="p-4 flex flex-col">
      <h3>Your last Score:</h3>
      <span>Points: {persist_last_score}</span>
      <span>Correct Answers: {persist_correct_answers}</span>
      <span>Wrong Answers: {persist_wrong_answers}</span>
      <h3>Your best score:</h3>
      <span>Points: {persist_best_current_score}</span>
      <span>Correct answers: {persist_best_correct_answers}</span>
      <span>Wrong Answers: {persist_best_wrong_answers}</span>
      <button onClick={onDeleteStore}>Delete data</button>
    </div>
  );
};
