type Props = {
  onGameEnd: () => void;
};

export const ButtonEndGame = ({ onGameEnd }: Props) => {
  return (
    <button className="w-10 h-10 border p-3 m-3" onClick={onGameEnd}>
      End Game
    </button>
  );
};
