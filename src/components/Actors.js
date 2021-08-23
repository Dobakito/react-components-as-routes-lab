import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, id) => (
        <div key={id}>
          <h2>{actor.name}</h2>
          <h3>{actor.movies}</h3>
        </div>
      ))}
    </div>
  );
};

export default Actors;
