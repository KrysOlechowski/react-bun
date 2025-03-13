export enum DICE_TILES_TYPES {
  ATTACK = "ATTACK",
  SHIELD = "SHIELD",
  MAGIC = "MAGIC",
}

export type DICE_VALUES_TILES = {
  index: number;
  value: number;
  name: string;
  max: number;
};

export type DICE_VALUE_TYPE = {
  index: number;
  type: string;
  name: string;
  attack_value: number;
  defense_value: number;
  magic_value: number;
  values: DICE_VALUES_TILES[];
};

export enum DICE_TILES_POWERS_TYPES {
  HEALTH = "HEALTH",
}
