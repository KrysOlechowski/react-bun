import { MATH_TILE_TYPE, MATH_TILES_TYPE } from "../types/math_types";

type Props = {
  tiles: MATH_TILES_TYPE;
  onTileClick: (tile: MATH_TILE_TYPE) => void;
};

export const TilesContainer = ({ tiles, onTileClick }: Props) => {
  console.log(tiles);
  return (
    <div className="flex">
      {tiles ? (
        tiles.map((tile) => {
          const styles = `p-3 m-3  w-10 h-10 border ${tile.is_clicked ? "text-green-700" : "text-red-700"}`;
          return (
            <button
              onClick={() => onTileClick(tile)}
              key={tile.id}
              className={styles}
              disabled={tile.is_clicked}
            >
              {tile.value}
            </button>
          );
        })
      ) : (
        <div>loading</div>
      )}
    </div>
  );
};
