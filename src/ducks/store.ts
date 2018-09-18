import { createStore, applyMiddleware } from 'redux';
import loggerMiddleware from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';

import { rootReducer, rootEpic } from './reducer';

const configureStore = () => {
  const epicMiddleware = createEpicMiddleware();
  const middlewares = [epicMiddleware,loggerMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = composeWithDevTools(middlewareEnhancer);

  epicMiddleware.run(rootEpic);

  return createStore(rootReducer, {}, enhancers);
}

export default configureStore;
