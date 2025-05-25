import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";

export const ProgressBar = () => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevCount) => prevCount - 10);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Progress value={progress} className="w-[60%]" />
    </div>
  );
};
