import {createStore, applyMiddleware, compose} from 'redux';
import {rootReducer} from '../reducers/rootReducer';
import {logger} from '../middlewares/logger';
import {freezeState} from '../middlewares/freezeState';
import {thunk} from '../middlewares/thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  undefined,
  composeEnhancers(applyMiddleware(freezeState, thunk, logger))
);
