import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director, id) => (
        <div key={id}>
          <h2>{director.name}</h2>
          <h3>{director.movies}</h3>
        </div>
      ))}
    </div>
  );
}

export default Directors
