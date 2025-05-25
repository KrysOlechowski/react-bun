import { MATH_VIEW, useMathGameSettings } from "../store/math_game_settings";
import { Checkbox } from "@/components/ui/checkbox";
import { useMathGeneralSettings } from "../store/math_general_settings_store";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useEffect } from "react";
import { Score } from "../components/score";
export const MathStartScreen = () => {
  const { set_game_view, set_difficulty_current_level, set_is_game_end } =
    useMathGameSettings();
  const {
    is_auto_next_step,
    set_is_auto_next_step,
    is_timer_disabled,
    set_is_timer_disabled,
    is_level_difficulty_increment,
    set_is_level_difficulty_increment,
    difficulty_start_level,
    set_difficulty_start_level,
  } = useMathGeneralSettings();

  const onGameStart = () => {
    set_game_view(MATH_VIEW.game);
    set_is_game_end(false);
  };

  const onAutoStepClick = (isChecked: boolean) => {
    if (isChecked) {
      set_is_auto_next_step(true);
    } else {
      set_is_auto_next_step(false);
    }
  };

  const onDisableTimer = (isChecked: boolean) => {
    if (isChecked) {
      set_is_timer_disabled(true);
    } else {
      set_is_timer_disabled(false);
    }
  };

  const onIncrementLevelDifficulty = (isChecked: boolean) => {
    if (isChecked) {
      set_is_level_difficulty_increment(true);
    } else {
      set_is_level_difficulty_increment(false);
    }
  };

  const onDifficultyChange = (e: string) => {
    console.log(e);
    if (!e) {
      set_difficulty_start_level(1);
      set_difficulty_current_level(1);
    } else {
      set_difficulty_start_level(Number(e));
      set_difficulty_current_level(Number(e));
    }
  };

  useEffect(() => {
    set_difficulty_current_level(difficulty_start_level);
  }, [difficulty_start_level]);

  return (
    <div className="flex flex-col ">
      <Score />
      <div className=" w-auto h-15 border p-3 m-3">
        <Checkbox
          checked={is_auto_next_step}
          onCheckedChange={onAutoStepClick}
        />
        Auto next step
      </div>

      <div className=" w-auto h-15 border p-3 m-3">
        <Checkbox
          checked={is_timer_disabled}
          onCheckedChange={onDisableTimer}
        />
        Disable timer
      </div>

      <div className=" w-auto h-15 border p-3 m-3">
        <Checkbox
          checked={is_level_difficulty_increment}
          onCheckedChange={onIncrementLevelDifficulty}
        />
        Increment level difficulty
      </div>

      <div>
        Choose difficulty level:
        <ToggleGroup
          onValueChange={onDifficultyChange}
          defaultValue={difficulty_start_level.toString()}
          type="single"
        >
          <ToggleGroupItem value="1">Easy</ToggleGroupItem>
          <ToggleGroupItem value="3">Medium</ToggleGroupItem>
          <ToggleGroupItem value="5">Hard</ToggleGroupItem>
        </ToggleGroup>
      </div>
      <button className=" w-auto h-15 border p-3 m-3" onClick={onGameStart}>
        Start Game
      </button>
    </div>
  );
};
