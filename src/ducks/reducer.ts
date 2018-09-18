import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';

import { albumReducer } from './album/reducers';
import { fetchAlbumsEpic } from './album/epics';


export const rootEpic = combineEpics(fetchAlbumsEpic);

export const rootReducer = combineReducers({
  albumsState: albumReducer
});
