import { createStore, combineReducers } from 'redux';
// import { DollModel } from '../Components/DollModel';
// import { DollsAction } from './actions';
import dollsReducer from './reducers';

// interface AppState {
//   dolls: DollModel[];
// }

const allReducers = combineReducers({
  MainPage: dollsReducer,
});

export const store = createStore(allReducers);
