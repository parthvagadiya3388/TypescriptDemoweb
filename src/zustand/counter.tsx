import React from 'react';
import usePersonStore from './store';

const Counter: React.FC = () => {
  const { count, increase, decrease } = usePersonStore();

  return (
    <div className='text-center'>
      <h1>Count: {count}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
};

export default Counter;