import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import { rootReducer } from './reducer';

const configureStore = () => {
  const middlewares = [thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = composeWithDevTools(middlewareEnhancer);

  const store = createStore(rootReducer, {}, enhancers);

  return store;
}

export default configureStore;
