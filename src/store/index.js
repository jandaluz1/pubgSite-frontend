import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducer';
export * from './player';
export * from './matches';

const middleware = composeWithDevTools(applyMiddleware(ReduxThunk));

const store = createStore(rootReducer, middleware);

export default store;
