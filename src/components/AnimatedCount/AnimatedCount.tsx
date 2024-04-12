import { useEffect, useState } from 'react';

interface AnimatedCountProps {
  number: string;
  duration: string;
}

const AnimatedCount: React.FC<AnimatedCountProps> = ({
  number,
  duration
}: AnimatedCountProps) => {
  // number to increment to
  // duration of count in seconds
  // number displayed by component
  const [count, setCount] = useState('0');

  useEffect(() => {
    let start = 0;
    const end = parseInt(number.substring(0, 3));

    if (start === end) return;

    // find duration per increment
    let totalMillisecondsDuration = parseInt(duration);
    let incrementTime = (totalMillisecondsDuration / end) * 100;

    // timer increments start counter
    // then updates count
    // ends if start reaches end
    let timer = setInterval(() => {
      start += 1;
      setCount(String(start) + number.substring(3));

      if (start === end) clearInterval(timer);
    }, incrementTime);
  }, [number, duration]);

  return <div>{count}</div>;
};

export default AnimatedCount;
