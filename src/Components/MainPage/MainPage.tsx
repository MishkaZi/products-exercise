import React, { useEffect, useState } from 'react';
import DollCard from '../DollCard/DollCard';
import { DollModel } from '../DollModel';
import Axios from 'axios';

import './MainPage.css';

const MainPage = (): JSX.Element => {
  const [dolls, setDolls] = useState<DollModel[]>();

  const getDolls = async () => {
    try {
      const result = await Axios.get('http://localhost:3001/dolls');

      setDolls(result.data);
    } catch (error) {
      return new Error(error);
    }
  };

  useEffect(() => {
    getDolls();
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
        <button>Reset</button>
        <label>Only purshased dolls:</label>
        <input type='checkbox' id='only-checked' name='only-checked' />
      </div>
    </div>
  );
};

export default MainPage;
