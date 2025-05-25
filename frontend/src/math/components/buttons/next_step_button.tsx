type Props = {
  onNextStep: () => void;
};

export const NextStepButton = ({ onNextStep }: Props) => {
  return (
    <button className="w-auto h-10 border p-3 m-3" onClick={onNextStep}>
      Next step
    </button>
  );
};
