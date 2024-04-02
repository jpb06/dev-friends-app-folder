'use client';

import { useEffect, useState } from 'react';

type CountDownProgressProps = {
  durationMs: number;
};

export const CountDownProgress = ({ durationMs }: CountDownProgressProps) => {
  const [progress, setProgress] = useState(0);

  const durationInSeconds = durationMs / 1000;

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(
        (prev) =>
          prev +
          (durationInSeconds <= 1 ? durationInSeconds : durationInSeconds / 10),
      );
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, [setProgress, durationInSeconds]);

  return (
    <progress className="progress progress-info" value={progress} max="100" />
  );
};
