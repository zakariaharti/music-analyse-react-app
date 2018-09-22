import { TypeKeys } from './types';
import {
  IFetchAlbumsFailure,
  IFetchAlbumsRequest,
  IFetchAlbumsSuccess
} from './types';

export const fetchAlbums = (albums: any): IFetchAlbumsSuccess => {
  return{
    albums,
    type: TypeKeys.FETCH_ALBUMS_SUCCESS,
  }

};

export const albumsLoading = (loading: boolean): IFetchAlbumsRequest => {
  return{
    loading,
    type: TypeKeys.FETCH_ALBUMS_REQUEST,
  }
};

export const albumsError = (error: boolean): IFetchAlbumsFailure => {
  return{
    error,
    type: TypeKeys.FETCH_ALBUMS_FAILURE,
  }
};
