import React from 'react';
import useBearStore from './useBearStore';

const BearCounter: React.FC = () => {
  const bears = useBearStore((state) => state.bears);

  return <h1>{bears} bears</h1>;
};

export default BearCounter;
