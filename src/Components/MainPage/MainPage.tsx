import React, { useEffect } from 'react';
import DollCard from '../DollCard/DollCard';
import { DollModel } from '../DollModel';
import { useDispatch, useSelector } from 'react-redux';
import './MainPage.css';
import { RootStore } from '../../redux/store';
import { getALLDolls, getOwnedDolls } from '../../redux/actions';

const MainPage = (): JSX.Element => {
  const dispatch = useDispatch();

  // const onlyPurshasedDolls = () => {
  //   const filteredDolls = dolls.filter((doll) => {
  //     return doll.owned === 1;
  //   });
  //   return filteredDolls;
  // }; 

  //Get dolls state from store
  let dolls = useSelector((state: RootStore) => state.MainPage.dolls);

  useEffect(() => {
    dispatch(getALLDolls());
  }, [dispatch]);

  return (
    <div className='main-page'>
      <div className='overall-cost'>
        <label>Overall cost: </label>
      </div>
      <div className='doll-card-list'>
        {dolls?.map((doll: DollModel, index: number) => {
          return <DollCard key={index} {...doll} />;
        })}
      </div>
      <div className='filters'>
        <label>Query: </label>
        <input type='text' id='query' name='query' />

        <button>Reset</button>
        <label>Only purshased dolls:</label>
        <input
          onChange={(event) => {
            if (event.target.checked === true) {
              dispatch(getOwnedDolls());
            } else {
              dispatch(getALLDolls());
            }
          }}
          type='checkbox'
          id='only-checked'
          name='only-checked'
        />
      </div>
    </div>
  );
};

export default MainPage;
