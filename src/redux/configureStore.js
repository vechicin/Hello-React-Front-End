import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import greetings from './greetings';

const reducer = combineReducers({
  greetings,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
