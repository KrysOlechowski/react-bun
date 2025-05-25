import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { useMathGameSettings } from "../store/math_game_settings";
import { useMathGeneralSettings } from "../store/math_general_settings_store";

export const ProgressBar = () => {
  const { healthbar_value, set_healthbar_value } = useMathGameSettings();
  const { is_timer_disabled } = useMathGeneralSettings();

  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!is_timer_disabled) {
        setProgress((prevCount) => prevCount - 10);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress <= 0) {
      setProgress(100);
      set_healthbar_value(healthbar_value - 10);
    }
  }, [progress]);

  return (
    <div>
      <Progress value={progress} className="w-[60%]" />
    </div>
  );
};
