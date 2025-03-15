export enum DICE_TILES_ENUM {
  ATTACK = "ATTACK",
  DEFENSE = "DEFENSE",
  MAGIC = "MAGIC",
}

export type DICE_TILES_TYPE = keyof typeof DICE_TILES_ENUM;

export type DICE_VALUES_TILES = {
  index: number;
  value: number;
  name: DICE_TILES_TYPE;
  max: number;
};

export type DICE_VALUE_TYPE = {
  index: number;
  type: DICE_TILES_ENUM;
  name: DICE_TILES_ENUM;
  attack_value: number;
  defense_value: number;
  magic_value: number;
  values: DICE_VALUES_TILES[];
  rolled_value?: number;
};

export enum DICE_TILES_POWERS_TYPES {
  HEALTH = "HEALTH",
}
