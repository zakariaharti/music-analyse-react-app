import { combineReducers } from 'redux';

import { albumReducer } from './album/reducers';

const rootReducer = combineReducers({
  albumsState: albumReducer
});

export default rootReducer;
