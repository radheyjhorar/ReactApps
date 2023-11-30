import React from 'react';
import { useSelector } from 'react-redux';

const Counter = () => {
  const count = useSelector(state => state)
  return (
    <>
        <h2>{count}</h2>
    </>
  )
}

export default Counter;