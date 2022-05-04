import React from 'react';
import { useSelector } from 'react-redux';

const Greetings = () => {
  const data = useSelector((state) => state.greetings.greetings);

  return (
    <h1>{data.greeting}</h1>
  );
};

export default Greetings;
