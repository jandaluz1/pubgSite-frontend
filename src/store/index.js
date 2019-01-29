import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { reducer } from './reducer';
export * from './reducer';

const middleware = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(reducer, middleware);

export default store;
