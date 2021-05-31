import Axios from 'axios';
import { DollModel } from '../Components/DollModel';
import { Dispatch } from 'redux';

export interface DollsAction {
  type: string;
  payload: DollModel[];
}

export const DollsActionType = {
  GET_ALL_DOLLS: 'GET_ALL_DOLLS',
};

export const getALLDolls = () => async (dispatch: Dispatch<DollsAction>) => {
  try {
    const dolls = await Axios.get('http://localhost:3001/dolls');

    dispatch({
      type: 'GET_ALL_DOLLS',
      payload: dolls.data,
    });
  } catch (error) {
    return new Error(error);
  }
};


