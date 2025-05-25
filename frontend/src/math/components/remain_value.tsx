type Props = {
  valueRemain: number | null;
};

export const RemainValue = ({ valueRemain }: Props) => {
  return (
    <div className="w-20 h-20 border text-xl">
      Remain:{valueRemain && valueRemain > 0 ? valueRemain : "XX"}
    </div>
  );
};
