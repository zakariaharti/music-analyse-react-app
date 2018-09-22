import { combineReducers } from 'redux';

import { albumReducer } from './album/reducers';

export const rootReducer = combineReducers({
  albumsState: albumReducer
});
