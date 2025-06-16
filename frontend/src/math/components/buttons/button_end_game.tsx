import { useOnGameEnd } from "@/math/logic/useOnGameEnd";

export const ButtonEndGame = () => {
  const { onGameEnd } = useOnGameEnd();
  return (
    <button className="w-auto h-10 border p-3 m-3" onClick={onGameEnd}>
      End Game
    </button>
  );
};
