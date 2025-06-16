import { Progress } from "@/components/ui/progress";
import { useMathGameSettings } from "../store/math_game_settings";
import { useEffect } from "react";
import { useOnGameEnd } from "../logic/useOnGameEnd";

export const HealthBar = () => {
  const { healthbar_value, is_game_end } = useMathGameSettings();

  const { onGameEnd } = useOnGameEnd();

  useEffect(() => {
    if (healthbar_value <= 0) {
      onGameEnd();
    }
  }, [healthbar_value]);

  return !is_game_end ? (
    <Progress value={healthbar_value} className="w-[60%]" />
  ) : null;
};
