export const DiceTestFile = () => {
  const numbers = [1, 2, 3, 4, 5];
  const rev = numbers.toReversed();

  console.log(rev);
  //   const lastFive = numbers.findLast((num) => num === 5); // 5
  //   const lastFiveIndex = numbers.findLastIndex((num) => num === 5); // 3

  //   console.log(lastFive);
  //   console.log(lastFiveIndex);
  const lol = {
    1: "11",
    2: "22",
  };

  for (const l in numbers) {
    console.log(l);
  }

  return (
    <div>
      <div>Dice Test File</div>
    </div>
  );
};
