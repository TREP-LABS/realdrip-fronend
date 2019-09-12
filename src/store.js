import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';

const middlewareEnhancer = applyMiddleware(thunkMiddleware);

const composedEnhancers = composeWithDevTools(middlewareEnhancer);

const store = createStore(rootReducer, undefined, composedEnhancers);

export default store;
