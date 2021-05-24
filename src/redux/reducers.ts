import { DollsAction } from './actions';

const initialState= {
  dolls: [],
};

const dollsReducer = (state = initialState, action: DollsAction) => {
  const newState = { ...state };

  switch (action.type) {
    case 'GET_ALL_DOLLS':
      newState.dolls = action.payload;

      break;

    default:
      return newState;
  }
};

export default dollsReducer;
