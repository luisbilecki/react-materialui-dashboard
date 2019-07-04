import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import createSagaMiddleware from 'redux-saga';

import authReducer from '../reducers/auth';
import rootSaga from '../sagas';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
    }),
    composeEnhancers(applyMiddleware(sagaMiddleware)),
  );

  // Run saga middleware
  sagaMiddleware.run(rootSaga);

  return store;
};
