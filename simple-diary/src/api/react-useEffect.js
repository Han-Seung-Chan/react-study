import React, { useEffect, useState } from 'react';

const UnmountTest = () => {
  // useEffect(() => {
  //   console.log('마운트');
  // }, []);

  useEffect(() => {
    console.log('마운트');

    return () => {
      console.log('언마운트');
    };
  }, []);

  return <div>Unmount Testing Component</div>;
};

const Lifecycle = () => {
  const [isVisible, setVisible] = useState(false);

  const toggle = () => setVisible(!isVisible);
  return (
    <div style={{ padding: 20 }}>
      <button onClick={toggle}>On / Off</button>
      {isVisible && <UnmountTest />}
    </div>
  );
};

export default Lifecycle;
