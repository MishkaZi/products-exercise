import React from 'react';
import Axios from 'axios';
import { DollModel } from '../DollModel';
import './DollCard.css';
import { useDispatch } from 'react-redux';
import { getALLDolls } from '../../redux/actions';

const VacationCard = (doll: DollModel): JSX.Element => {
  const dispatch = useDispatch();
  const updateDoll = async (updatedDoll: DollModel) => {
    try {
      await Axios.put(
        'http://localhost:3001/dolls/' + updatedDoll.id,
        updatedDoll
      );
    } catch (error) {
      return new Error(error);
    }
  };
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
          onChange={async (event) => {
            let updatedDoll = { ...doll };
            if (event.target.checked === false) {
              updatedDoll.owned = 0;
              await updateDoll(updatedDoll);
            } else {
              updatedDoll.owned = 1;
              await updateDoll(updatedDoll);
            }
            dispatch(getALLDolls());
          }}
          type='checkbox'
          id='owned'
          name='owned'
          checked={doll.owned === 1 ? true : false}
        />
      </div>
    </div>
  );
};

export default VacationCard;
