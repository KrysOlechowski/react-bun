import { useDiceStore } from "@/store/dice/dice_store";
import { DICE_VALUE_TYPE } from "@/types/dice_types";
import { useEffect, useState } from "react";

type Props = {
  dice: DICE_VALUE_TYPE[];
};

export const Dice = ({ dice }: Props) => {
  const [prevRolledTile, setPrevRolledTile] = useState<null | DICE_VALUE_TYPE>(
    null
  );
  const [rolledTile, setRolledTile] = useState<null | DICE_VALUE_TYPE>(null);
  const { number_of_rolls } = useDiceStore();

  useEffect(() => {
    if (number_of_rolls === 0) {
      setPrevRolledTile(null);
      setRolledTile(null);
      return;
    }
    const prevTile = rolledTile;
    const randomTile = dice[Math.floor(Math.random() * dice.length)];

    if (!rolledTile) {
      setRolledTile(randomTile);
      return;
    }
    setPrevRolledTile(prevTile);
    setRolledTile(randomTile);
  }, [number_of_rolls]);

  return (
    <div className="relative border-red-400 border-4">
      <div className="flex p-2.5 border-solid border-4 border-gray-600">
        <h1>All tiles:</h1>
        {dice.map((tile, i) => {
          return (
            <div
              key={`${tile.name}${i}`}
              className="w-24 h-24 p-2.5 border-solid border-4 border-gray-600"
            >
              {tile.name}
            </div>
          );
        })}
      </div>

      <div className="flex">
        <div>
          <h1>Previous tile:</h1>
          {prevRolledTile ? (
            <div>
              <div className="w-24 h-24 p-2.5 border-solid border-4 border-gray-600">
                {prevRolledTile.name}
              </div>
            </div>
          ) : (
            <div className="w-24 h-24 p-2.5 border-solid border-4 border-gray-600">
              Placeholder
            </div>
          )}
        </div>
        <div>
          <h1>Current tile:</h1>
          {rolledTile ? (
            <div className="border-solid border-4 border-rose-600">
              <div className="border-solid border-4 border-rose-500">
                <div className="border-solid border-4 border-rose-400">
                  <div className="border-solid border-4 border-green-400">
                    <div className="border-solid border-4 border-purple-500">
                      <div className="border-solid border-4 border-purple-400">
                        <div>
                          <div className="w-24 h-24 p-2">{rolledTile.name}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-24 h-24 p-2.5 border-solid border-4 border-gray-600">
              Placeholder
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
