import { useEffect, useState } from "react";

type Tile = { type: string };

type Props = {
  tiles: Tile[];
};

export const Dice = ({ tiles }: Props) => {
  const [number_of_rolls, set_number_of_rolls] = useState(0);
  const [prev_tile, set_prev_tile] = useState<Tile | null>(null);
  const [current_tile, set_current_tile] = useState<Tile | null>(null);
  const randomTile = tiles[Math.floor(Math.random() * tiles.length)];

  useEffect(() => {}, []);

  const onDiceRoll = () => {
    if (!prev_tile) {
      set_current_tile(randomTile);
    }
    if (current_tile) {
      set_prev_tile(current_tile);
      set_current_tile(randomTile);
    }
    set_number_of_rolls((prev) => prev + 1);
  };

  return (
    <div className="">
      <button
        onClick={onDiceRoll}
        className="fixed p-2.5 bottom-80 left-80 border-4 border-gray-600"
      >
        Roll The Dice: {number_of_rolls}
      </button>
      <div className="flex p-2.5 border-solid border-4 border-gray-600">
        <h1>All tiles:</h1>
        {tiles.map((tile) => {
          return (
            <div className="w-24 h-24 p-2.5 border-solid border-4 border-gray-600">
              {tile.type}
            </div>
          );
        })}
      </div>

      <div className="flex">
        <div>
          <h1>Previous tile:</h1>
          {prev_tile ? (
            <div>
              <div className="w-24 h-24 p-2.5 border-solid border-4 border-gray-600">
                {prev_tile.type}
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
          {current_tile ? (
            <div className="border-solid border-4 border-rose-600">
              <div className="border-solid border-4 border-rose-500">
                <div className="border-solid border-4 border-rose-400">
                  <div className="border-solid border-4 border-green-400">
                    <div className="border-solid border-4 border-purple-500">
                      <div className="border-solid border-4 border-purple-400">
                        <div>
                          <div className="w-24 h-24 p-2">
                            {current_tile.type}
                          </div>
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
