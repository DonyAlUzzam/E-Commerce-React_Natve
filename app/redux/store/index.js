import  { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';

import counts from '../reducers/index';

export const store = createStore(counts, {}, applyMiddleware(logger, promise))