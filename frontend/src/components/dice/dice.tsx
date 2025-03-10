import { useDiceStore } from "@/store/dice/dice_store";
import { DICE_VALUE_TYPE } from "@/types/dice_types";
import { useEffect, useState } from "react";
import { DiceTileView } from "./dice_tile_view";

type Props = {
  dice: DICE_VALUE_TYPE[];
};

export const Dice = ({ dice }: Props) => {
  const [prevRolledTiles, setPrevRolledTiles] = useState<
    null | DICE_VALUE_TYPE[]
  >(null);
  const [rolledTile, setRolledTile] = useState<null | DICE_VALUE_TYPE>(null);
  const { number_of_rolls, is_test_mode } = useDiceStore();

  useEffect(() => {
    if (number_of_rolls === 0) {
      setPrevRolledTiles(null);
      setRolledTile(null);
      return;
    }
    const randomTile = dice[Math.floor(Math.random() * dice.length)];

    if (!rolledTile) {
      setRolledTile(randomTile);
      return;
    }

    const prevTile = rolledTile;

    if (prevRolledTiles) {
      let newHistoryArray = [...prevRolledTiles];
      newHistoryArray.unshift(prevTile);
      if (prevRolledTiles.length > 9) {
        newHistoryArray.pop();
      }
      setPrevRolledTiles(newHistoryArray);
    } else {
      setPrevRolledTiles([prevTile]);
    }

    setRolledTile(randomTile);
  }, [number_of_rolls]);

  return (
    <div className="p-1 relative border-red-400 border-2">
      <div className="flex">
        <div>
          <h1>Current Value:</h1>
          {rolledTile ? (
            <DiceTileView tile={rolledTile} />
          ) : (
            <EmptyDiceTileView />
          )}
        </div>
      </div>

      {is_test_mode && (
        <div className="flex p-2.5 border-solid border-4 border-gray-600">
          <div>
            <h1>Previous tile:</h1>
            {prevRolledTiles ? (
              prevRolledTiles.map((tile) => (
                <DiceTileView tile={tile} type="small" />
              ))
            ) : (
              <EmptyDiceTileView />
            )}
          </div>

          <div>
            <div>Dice Tiles:</div>
            {dice.map((tile, i) => {
              return (
                <DiceTileView
                  key={`${tile.name}${i}`}
                  tile={tile}
                  type="small"
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

const EmptyDiceTileView = () => {
  return (
    <div className="m-1 relative w-20 h-20 p-1 border-solid border-2 border-black rounded-sm">
      <div className={`h-full p-2`}>X</div>

      <div className="hidden z-50 p-2 absolute left-0 top-0 text-[12px] opacity-0 hover:opacity-100 hover:bg-violet-300">
        <div className="whitespace-nowrap">
          <span>Index: X</span>
        </div>
        <div className="whitespace-nowrap">
          <span>Name: X</span>
        </div>
        <div className="whitespace-nowrap">
          <span>Value: X</span>
        </div>
      </div>
    </div>
  );
};
