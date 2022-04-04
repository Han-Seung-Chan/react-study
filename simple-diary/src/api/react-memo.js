import React, { useEffect, useState } from 'react';

const CounterA = React.memo(({ count }) => {
  useEffect(() => {
    console.log(`카운터 A 변경 ${count}`);
  });

  return <div>{count}</div>;
});

const CounterB = ({ obj }) => {
  useEffect(() => {
    console.log(`카운터 B 변경 ${obj.count}`);
  });
  return <div>{obj.count}</div>;
};

const areEqual = (pre, next) => {
  return pre.obj.count === next.obj.count;
};

const MemoizedCountB = React.memo(CounterB, areEqual);

const OptimizeTest = () => {
  const [count, setCount] = useState(1);
  const [obj, setObj] = useState({
    count: 1,
  });

  return (
    <div style={{ padding: 50 }}>
      <div>
        <h2>Count A</h2>
        <CounterA count={count} />
        <button onClick={() => setCount(count)}>Count A</button>
      </div>
      <div>
        <h2>Count B</h2>
        <MemoizedCountB obj={obj} />
        <button
          onClick={() =>
            setObj({
              count: obj.count,
            })
          }
        >
          Count B
        </button>
      </div>
    </div>
  );
};

export default OptimizeTest;
