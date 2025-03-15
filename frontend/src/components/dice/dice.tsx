import { useDiceStore } from "@/store/dice/dice_store";
import { DICE_VALUE_TYPE, DICE_VALUES_TILES } from "@/types/dice_types";
import { useEffect, useState } from "react";
import { DiceTileView } from "./dice_tile_view";

type Props = {
  dice: DICE_VALUE_TYPE;
};

export const Dice = ({ dice }: Props) => {
  const [prevRolledTiles, setPrevRolledTiles] = useState<
    null | DICE_VALUES_TILES[]
  >(null);
  const [rolledTile, setRolledTile] = useState<null | DICE_VALUES_TILES>(null);
  const {
    number_of_rolls,
    is_test_mode,
    inc_number_of_attack,
    inc_number_of_defense,
    inc_number_of_magic,
  } = useDiceStore();

  useEffect(() => {
    if (number_of_rolls === 0) {
      setPrevRolledTiles(null);
      setRolledTile(null);
      return;
    }
    const randomTile =
      dice.values[Math.floor(Math.random() * dice.values.length)];
    if (randomTile.name === "ATTACK" && randomTile.value > 0) {
      console.log("INC ATTACK");
      inc_number_of_attack(randomTile.value);
    }
    if (randomTile.name === "DEFENSE" && randomTile.value > 0) {
      console.log("INC DEFENSE");
      inc_number_of_defense(randomTile.value);
    }
    if (randomTile.name === "MAGIC" && randomTile.value > 0) {
      console.log("INC MAGIC");

      inc_number_of_magic(randomTile.value);
    }

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
          {rolledTile ? (
            <DiceTileView tile={rolledTile} />
          ) : (
            <EmptyDiceTileView type={dice.type} />
          )}
          <span>Dice Index: {dice.index}</span>
        </div>
      </div>

      {is_test_mode && (
        <div className="flex p-2.5 border-solid border-4 border-gray-600">
          <div>
            <h1>Previous tile:</h1>
            {prevRolledTiles ? (
              prevRolledTiles.map((tile, i) => (
                <DiceTileView
                  key={`${tile.name}-${i}`}
                  tile={tile}
                  type="small"
                />
              ))
            ) : (
              <EmptyDiceTileView type={dice.type} />
            )}
          </div>

          <div>
            <div>Dice Tiles:</div>
            {dice.values.map((tile, i) => {
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

const EmptyDiceTileView = (tile_type: any) => {
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
