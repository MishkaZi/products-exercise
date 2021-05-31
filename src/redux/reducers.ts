import { DollsAction } from './actions';
import { DollModel } from '../Components/DollModel';

interface defaultStateI {
  dolls?: DollModel[];
}

const initialState: defaultStateI = {};

const dollsReducer = (
  state: defaultStateI = initialState,
  action: DollsAction
): defaultStateI => {
  switch (action.type) {
    case 'GET_ALL_DOLLS':
      return {
        dolls: action.payload,
      };

    default:
      return {};
  }
};

export default dollsReducer;
