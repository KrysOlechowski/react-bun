import { useMathGeneralSettings } from "../store/math_general_settings_store";

export const Score = () => {
  const onDeleteStore = () => {
    useMathGeneralSettings.persist.clearStorage();
    window.location.reload();
  };
  return (
    <div className="p-4 flex flex-col">
      <h3>Your Score:</h3>
      <span>Points: xxx</span>
      <span>Correct Answers: xxx</span>
      <span>Wrong Answers: xxx</span>
      <h3>Your best score:</h3>
      <span>Points: xxx</span>
      <span>Correct answers: xxx</span>
      <span>Wrong Answers: xxx</span>
      <button onClick={onDeleteStore}>Delete data</button>
    </div>
  );
};
