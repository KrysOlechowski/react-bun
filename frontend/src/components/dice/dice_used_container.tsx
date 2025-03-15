import { useDiceStoreV2 } from "@/store/dice/dice_store_v2";

export const DiceUsedContainer = () => {
  const { used_attack_dices, used_defense_dices, used_magic_dices } =
    useDiceStoreV2();

  return (
    <div className="flex p-2 w-full h-40 border-gray-600 border-2">
      <div className="m-2 w-full border-red-400 border-2">
        <h1>Attack</h1>
        <div>
          {used_attack_dices?.map((dice) => {
            return (
              <h3 key={dice.type + dice.index}>
                {dice.attack_value} - {dice.index}{" "}
              </h3>
            );
          })}
        </div>
      </div>
      <div className="m-2 w-full border-blue-400 border-2">
        <h1>Defense</h1>
        <div>
          {used_defense_dices?.map((dice) => {
            return (
              <h3>
                {dice.attack_value} - {dice.index}{" "}
              </h3>
            );
          })}
        </div>
      </div>
      <div className="m-2 w-full border-violet-400 border-2">
        {" "}
        <h1>Magic</h1>
        <div>
          {used_magic_dices?.map((dice) => {
            return (
              <h3>
                {dice.attack_value} - {dice.index}{" "}
              </h3>
            );
          })}
        </div>
      </div>
    </div>
  );
};
