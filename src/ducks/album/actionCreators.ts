import { TypeKeys } from './types';
import {
  IFetchAlbumsFailure,
  IFetchAlbumsRequest,
  IFetchAlbumsSuccess
} from './types';

export const fetchAlbums = (albums: any): IFetchAlbumsSuccess => {
  return{
    type: TypeKeys.FETCH_ALBUMS_SUCCESS,
    albums
  }
};

export const albumsLoading = (loading: boolean): IFetchAlbumsRequest => {
  return{
    type: TypeKeys.FETCH_ALBUMS_REQUEST,
    loading
  }
};

export const albumsError = (error: boolean): IFetchAlbumsFailure => {
  return{
    type: TypeKeys.FETCH_ALBUMS_FAILURE,
    error
  }
};
