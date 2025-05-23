import { useDiceStoreV2 } from "@/store/dice/dice_store_v2";

export const DiceUsedContainer = () => {
  const { used_attack_dices, used_defense_dices, used_magic_dices } =
    useDiceStoreV2();

  return (
    <div className="flex p-2 w-full h-80 border-gray-600 border-2">
      <div className="m-2 w-full border-red-400 border-2">
        <h1>Attack</h1>
        <div>
          {used_attack_dices?.map((dice) => {
            return (
              <div className="flex" key={dice.type + dice.index}>
                <div>Index - {dice.index} </div>
                <div>- Value - {dice.rolled_value}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="m-2 w-full border-blue-400 border-2">
        <h1>Defense</h1>
        <div>
          {used_defense_dices?.map((dice) => {
            return (
              <div className="flex" key={dice.type + dice.index}>
                <div>Index - {dice.index} </div>
                <div>- Value - {dice.rolled_value}</div>
              </div>
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
              <div className="flex" key={dice.type + dice.index}>
                <div>Index - {dice.index} </div>
                <div>- Value - {dice.rolled_value}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
