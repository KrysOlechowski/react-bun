import { MATH_VIEW, useMathGameSettings } from "../store/math_game_settings";

export const MathStartScreen = () => {
  const { set_game_view } = useMathGameSettings();

  const onGameStart = () => {
    set_game_view(MATH_VIEW.game);
  };

  return (
    <div>
      <button className="w-10 h-10 border p-3 m-3" onClick={onGameStart}>
        Start Game
      </button>
      Math Start screen
    </div>
  );
};
