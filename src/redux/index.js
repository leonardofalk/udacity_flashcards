import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';

import { redux as reduxConfig } from '../config/environment';
import rootReducer from './reducers';
import rootSaga from './sagas';

export default () => {
  const middleware = [];
  const enhancers = [];

  if (reduxConfig.logging) {
    middleware.push(logger);
  }

  const sagaMiddleware = createSagaMiddleware();

  middleware.push(sagaMiddleware);
  enhancers.push(applyMiddleware(...middleware));

  const store = createStore(rootReducer, compose(...enhancers));

  sagaMiddleware.run(rootSaga);

  return store;
};
