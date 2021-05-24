import { DollsAction } from './actions';

const initialState = {
  dolls: [],
};

const dollsReducer = (state = initialState, action: DollsAction) => {
  const newState = { ...state };

  switch (action.type) {
    case 'GET_ALL_DOLLS':
      return (newState.dolls = action.payload);


    default:
      return newState;
  }
};

export default dollsReducer;
