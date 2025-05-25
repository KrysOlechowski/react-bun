import { Progress } from "@/components/ui/progress";
import { useMathGameSettings } from "../store/math_game_settings";

export const HealthBar = () => {
  const { healthbar_value } = useMathGameSettings();
  return (
    <div>
      <Progress value={healthbar_value} className="w-[60%]" />
    </div>
  );
};
