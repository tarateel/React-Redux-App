import React from 'react';
import Species from './Species';

const SpeciesList = props => {
  return (
    <ul>
      {props.species.map(species => {
        return <Species
          key={species.name}
          species={species}
        />
      })}
    </ul>
  );
};

export default SpeciesList;