import React from 'react';
import useBearStore from './useBearStore';

const Controls: React.FC = () => {
  const increase = useBearStore((state) => state.increase);
  const decrease = useBearStore((state) => state.decrease);

  return <>
  <button onClick={() => increase(1)}>Increase Bears</button><br /><br />
  <button onClick={() => decrease(1)}>decrease Bears</button>
  
  </>
};

export default Controls;
