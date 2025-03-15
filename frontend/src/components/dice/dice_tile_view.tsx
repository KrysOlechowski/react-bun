import { DICE_VALUES_TILES } from "@/types/dice_types";

type Props = {
  tile: DICE_VALUES_TILES;
  type?: "small" | "normal";
};

const getTileColor = (name: string) => {
  if (name === "ATTACK") return "bg-red-500";
  if (name === "DEFENSE") return "bg-blue-500";
  if (name === "MAGIC") return "bg-violet-500";

  return "bg-slate-300";
};

export const DiceTileView = ({ tile, type = "normal" }: Props) => {
  const tileColor = getTileColor(tile.name);
  const tileSize = type === "small" ? "10" : "20";

  return (
    <div
      className={`m-1 relative w-${tileSize} h-${tileSize} p-1 border-solid border-2 border-black rounded-sm`}
    >
      <div className={`h-full p-2 ${tileColor}`}>{tile.value}</div>

      <div className=" z-50 p-2 absolute left-0 top-0 text-[12px] opacity-0 hover:opacity-100 hover:bg-violet-300">
        <div className="whitespace-nowrap">
          <span>Index: {tile.index}</span>
        </div>
        <div className="whitespace-nowrap">
          <span>Name: {tile.name}</span>
        </div>
        <div className="whitespace-nowrap">
          <span>Value: {tile.value}</span>
        </div>
      </div>
    </div>
  );
};
