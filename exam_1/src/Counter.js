import React, { useState } from 'react';
import TrueFalse from './TrueFalse';

const Counter = (value) => {
  const [count1, setCount1] = useState(value.a);

  const onIncrease1 = () => {
    setCount1(count1 + 1);
  };

  const onDecrease1 = () => {
    setCount1(count1 - 1);
  };

  const [count2, setCount2] = useState(value.b);

  const onIncrease2 = () => {
    setCount2(count2 + 10);
  };

  const onDecrease2 = () => {
    setCount2(count2 - 5);
  };

  return (
    <div>
      <h2>{count1}</h2>
      <button onClick={onIncrease1}>+</button>
      <button onClick={onDecrease1}>-</button>
      <TrueFalse count={count1} />
      <h2>{count2}</h2>
      <button onClick={onIncrease2}>+</button>
      <button onClick={onDecrease2}>-</button>
      <TrueFalse count={count2} />
    </div>
  );
};

export default Counter;
