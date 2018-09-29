import { TypeKeys } from './types';
import {
  IFetchAlbumFailure,
  IFetchAlbumRequest,
  IFetchAlbumSuccess,
  IFetchTrack
} from './types';

export const fetchTrack = (track: any): IFetchTrack => {
  return{
    track,
    type: TypeKeys.FETCH_TRACK_SUCCESS,
  }
};

export const fetchAlbum = (album: any): IFetchAlbumSuccess => {
  return{
    album,
    type: TypeKeys.FETCH_ALBUM_SUCCESS,
  }
};

export const albumLoading = (loading: boolean): IFetchAlbumRequest => {
  return{
    loading,
    type: TypeKeys.FETCH_ALBUM_REQUEST,
  }
};

export const albumError = (error: boolean): IFetchAlbumFailure => {
  return{
    error,
    type: TypeKeys.FETCH_ALBUM_FAILURE,
  }
};
