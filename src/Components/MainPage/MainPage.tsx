import React, { useEffect } from 'react';
import DollCard from '../DollCard/DollCard';
import { DollModel } from '../DollModel';
import Axios from 'axios';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import './MainPage.css';
import { getALLDolls } from '../../redux/actions';

const MainPage = (): JSX.Element => {
  const dispatch = useDispatch();

  //Get dolls state from store
  const dolls = useSelector((state:RootStateOrAny) => state.MainPage.dolls);
  console.log(dolls);
  

  const getDolls = async () => {
    try {
      const result = await Axios.get('http://localhost:3001/dolls');
      //Save dolls to state
      dispatch(getALLDolls(result.data));
      
    } catch (error) {
      return new Error(error);
    }
  };

  useEffect(() => {
    getDolls();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        <input type='checkbox' id='only-checked' name='only-checked' />
      </div>
    </div>
  );
};

export default MainPage;
