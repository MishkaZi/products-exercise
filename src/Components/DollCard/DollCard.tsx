import React from 'react';
import { DollModel } from '../DollModel';
import './DollCard.css';
// import { DollModel } from '../DollModel';

const VacationCard = (doll: DollModel): JSX.Element => {
  return (
    <div className='doll-card'>
      <div>
        <p>
          <b>Name: </b>
          {doll.name}
        </p>
      </div>
      <div className='bottom-doll-card'>
        <p>
          <b>Price: </b>
          {doll.price}
        </p>
        <input type='checkbox' id='owned' name='owned' />
      </div>
    </div>
  );
};

export default VacationCard;
