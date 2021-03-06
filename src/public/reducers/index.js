import {combineReducers} from 'redux';

import books from './books';
import genres from './genres';
import user from './user';
import history from './history';

const rootReducer = combineReducers({
  user,
  books,
  genres,
  history,
});

export default rootReducer;
