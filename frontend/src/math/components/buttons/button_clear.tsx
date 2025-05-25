type Props = {
  onButtonClear: () => void;
};

export const ButtonClear = ({ onButtonClear }: Props) => {
  return (
    <div className="w-auto h-10 border p-3 m-3">
      <button onClick={onButtonClear}>Clear Tiles</button>
    </div>
  );
};
