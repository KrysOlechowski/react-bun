type Props = {
  numberOfClicksRemain: number | null;
};

export const ClicksRemain = ({ numberOfClicksRemain }: Props) => {
  return (
    <div className="flex column text-sm">
      <span>Clicks:</span>
      <span>{numberOfClicksRemain ? numberOfClicksRemain : "X"}</span>
    </div>
  );
};
