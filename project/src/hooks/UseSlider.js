import { useState } from 'react';

const UseSlider = ({ lastIndex }) => {
  const [index, setIndex] = useState(0);
  const [next, setNext] = useState(true);

  const onPrev = async () => {
    await setNext(false);
    setIndex((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const onNext = async () => {
    await setNext(true);
    setIndex((prev) => (prev == lastIndex ? lastIndex : prev + 1));
  };

  return { index, next, onPrev, onNext };
};

export default UseSlider;
