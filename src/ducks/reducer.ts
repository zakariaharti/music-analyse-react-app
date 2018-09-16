import { combineReducers } from 'redux';

import { albumReducer } from './album/reducers';

const rootReducer = combineReducers({ albumReducer });

export default rootReducer;
