import { DICE_TILES_ENUM } from "@/types/dice_types";

export const DEFAULT_ATTACK_DICE = {
  index: 0,
  type: DICE_TILES_ENUM.ATTACK,
  name: DICE_TILES_ENUM.ATTACK,
  attack_value: 4,
  defense_value: 0,
  magic_value: 0,
  values: [
    { index: 0, value: 1, name: DICE_TILES_ENUM.ATTACK, max: 3 },
    { index: 1, value: 1, name: DICE_TILES_ENUM.ATTACK, max: 3 },
    { index: 2, value: 1, name: DICE_TILES_ENUM.ATTACK, max: 3 },
    { index: 3, value: 1, name: DICE_TILES_ENUM.ATTACK, max: 3 },
    { index: 4, value: 0, name: DICE_TILES_ENUM.ATTACK, max: 3 },
    { index: 5, value: 0, name: DICE_TILES_ENUM.ATTACK, max: 3 },
  ],
};

export const DEFAULT_DEFENSE_DICE = {
  index: 0,
  type: DICE_TILES_ENUM.DEFENSE,
  name: DICE_TILES_ENUM.DEFENSE,
  attack_value: 0,
  defense_value: 6,
  magic_value: 0,
  values: [
    { index: 0, value: 2, name: DICE_TILES_ENUM.DEFENSE, max: 3 },
    { index: 1, value: 2, name: DICE_TILES_ENUM.DEFENSE, max: 3 },
    { index: 2, value: 1, name: DICE_TILES_ENUM.DEFENSE, max: 3 },
    { index: 3, value: 1, name: DICE_TILES_ENUM.DEFENSE, max: 3 },
    { index: 4, value: 0, name: DICE_TILES_ENUM.DEFENSE, max: 3 },
    { index: 5, value: 0, name: DICE_TILES_ENUM.DEFENSE, max: 3 },
  ],
};

export const DEFAULT_MAGIC_DICE = {
  index: 0,
  type: DICE_TILES_ENUM.MAGIC,
  name: DICE_TILES_ENUM.MAGIC,
  attack_value: 0,
  defense_value: 0,
  magic_value: 4,
  values: [
    { index: 0, value: 2, name: DICE_TILES_ENUM.MAGIC, max: 3 },
    { index: 1, value: 2, name: DICE_TILES_ENUM.MAGIC, max: 3 },
    { index: 2, value: 0, name: DICE_TILES_ENUM.MAGIC, max: 3 },
    { index: 3, value: 0, name: DICE_TILES_ENUM.MAGIC, max: 3 },
    { index: 4, value: 0, name: DICE_TILES_ENUM.MAGIC, max: 3 },
    { index: 5, value: 0, name: DICE_TILES_ENUM.MAGIC, max: 3 },
  ],
};

export const USER_DICES = [
  DEFAULT_ATTACK_DICE,
  DEFAULT_DEFENSE_DICE,
  DEFAULT_MAGIC_DICE,
];
