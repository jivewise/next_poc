import { combineReducers } from 'redux';

import todos from './todos';
import error from './error';

export default combineReducers({ todos, error });
