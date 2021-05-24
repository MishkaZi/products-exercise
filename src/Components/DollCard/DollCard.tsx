import React from 'react';
import { DollModel } from '../DollModel';
import './DollCard.css';

// import { useSelector, useDispatch } from 'react-redux';

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
        <input
          onChange={(event) => {
            // let checked= event.target.checked;
          }}
          type='checkbox'
          id='owned'
          name='owned'
          checked={doll.owned}
        />
      </div>
    </div>
  );
};

export default VacationCard;
