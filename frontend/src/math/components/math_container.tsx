import { MathMainView } from "../views/math_main_view";
import { MathStartScreen } from "../views/math_start_screen";
import { MATH_VIEW, useMathGameSettings } from "../store/math_game_settings";
import { TestContainer } from "./test_container";
import { useMathGeneralSettings } from "../store/math_general_settings_store";

export const MathContainer = () => {
  const { game_view } = useMathGameSettings();
  const { is_test_mode, set_test_mode } = useMathGeneralSettings();

  const setTestMode = () => {
    is_test_mode ? set_test_mode(false) : set_test_mode(true);
  };
  return (
    <div className="relative h-screen">
      {game_view === MATH_VIEW.idle && <MathStartScreen />}
      {game_view === MATH_VIEW.game && <MathMainView />}
      {is_test_mode && <TestContainer />}
      <button
        className="w-auto h-10 border absolute bottom-2 left-2"
        onClick={setTestMode}
      >
        Test
      </button>
    </div>
  );
};
