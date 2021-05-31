import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import dollsReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const allReducers = combineReducers({
  MainPage: dollsReducer,
});

export type RootStore = ReturnType<typeof allReducers>;

export const store = createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(thunk))
);
