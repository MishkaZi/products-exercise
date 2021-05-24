import { createStore, combineReducers } from 'redux';
import dollsReducer from './reducers'

const allReducers = combineReducers({
  MainPage: dollsReducer,
});

export const store = createStore(allReducers);
