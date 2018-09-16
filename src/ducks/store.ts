import { createStore, applyMiddleware } from 'redux';
import loggerMiddleware from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducer';

const configureStore = (state: any) => {
  const middlewares = [loggerMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = composeWithDevTools(middlewareEnhancer);

  return createStore(rootReducer, state, enhancers);
}

export default configureStore;
