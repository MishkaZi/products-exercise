import { DollModel } from '../Components/DollModel';

export const DollsActionType = {
  GET_ALL_DOLLS: 'GET_ALL_DOLLS',
};
export interface DollsAction {
  type: string;
  payload?: any;
}
export const getALLDolls = (dolls: DollModel[]): DollsAction => {
  return {
    type: DollsActionType.GET_ALL_DOLLS,
    payload: dolls,
  };
};
