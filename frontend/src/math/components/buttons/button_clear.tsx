type Props = {
  onButtonClear: () => void;
};

export const ButtonClear = ({ onButtonClear }: Props) => {
  return (
    <div className="flex column text-sm">
      <button onClick={onButtonClear}>Clear Tiles</button>
    </div>
  );
};
