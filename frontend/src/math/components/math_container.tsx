import { MathMainView } from "../views/math_main_view";
import { MathStartScreen } from "./math_start_screen";
import { MATH_VIEW, useMathGameSettings } from "../store/math_game_settings";

export const MathContainer = () => {
  const { game_view } = useMathGameSettings();
  return (
    <div>
      {game_view === MATH_VIEW.idle && <MathStartScreen />}
      {game_view === MATH_VIEW.game && <MathMainView />}
    </div>
  );
};
