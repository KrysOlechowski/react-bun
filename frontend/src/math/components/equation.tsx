type Props = {
  correctAnswer: number | null;
};

export const Equation = ({ correctAnswer }: Props) => {
  return (
    <div className="w-20 h-20 border text-xl">Correct:{correctAnswer}</div>
  );
};
