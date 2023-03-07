import React from 'react'
import { useMyContext } from '../../context';

const Component2 = () => {
    const { count, setCount } = useMyContext()
    
  return (
    <>
      <button onClick={() => setCount((p) => p + 1)}>+++</button>
          <p>{count}</p>
          <p>lalala</p>
      <button onClick={() => setCount((p) => p - 1)}>---</button>
    </>
  );
}

export default Component2;