import { Progress } from "@/components/ui/progress";
import { MATH_VIEW, useMathGameSettings } from "../store/math_game_settings";
import { useEffect } from "react";

export const HealthBar = () => {
  const {
    healthbar_value,
    set_healthbar_value,
    set_is_game_end,
    is_game_end,
    set_game_view,
  } = useMathGameSettings();

  useEffect(() => {
    if (healthbar_value <= 0) {
      set_is_game_end(true);
      set_game_view(MATH_VIEW.idle);
      set_healthbar_value(30);
    }
  }, [healthbar_value]);

  return !is_game_end ? (
    <Progress value={healthbar_value} className="w-[60%]" />
  ) : null;
};
