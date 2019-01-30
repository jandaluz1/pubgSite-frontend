import playerReducer from './player';
import matchReducer from './matches';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  player: playerReducer,
  matchInfo: matchReducer
});

export default rootReducer;
