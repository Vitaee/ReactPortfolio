import { useState, useEffect, useCallback } from 'react';

export function useCountUp(
  end: number,
  duration: number = 2000,
  shouldStart: boolean = false
): number {
  const [count, setCount] = useState(0);

  const animate = useCallback(() => {
    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [end, duration]);

  useEffect(() => {
    if (shouldStart) {
      animate();
    }
  }, [shouldStart, animate]);

  return count;
}
