import { combineReducers } from 'redux';

import { albumReducer } from './album/reducers';
import { albumDetailReducer } from './albumDetail/reducers';

export const rootReducer = combineReducers({
  albumsState: albumReducer,
  albumDetailState: albumDetailReducer
});
