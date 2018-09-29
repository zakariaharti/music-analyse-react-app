import { TypeKeys } from './types';
import {
  IFetchAlbumsFailure,
  IFetchAlbumsRequest,
  IFetchAlbumsSuccess,
  ISearchAlbumsRequest,
  IFetchAlbumDetail
} from './types';

export const searchAlbums = (albums: any): ISearchAlbumsRequest => {
  return{
    albums,
    type: TypeKeys.SEARCH_ALBUMS_REQUEST,
  }
};

export const fetchAlbums = (albums: any): IFetchAlbumsSuccess => {
  return{
    albums,
    type: TypeKeys.FETCH_ALBUMS_SUCCESS,
  }
};

export const fetchAlbumDetail = (album: any): IFetchAlbumDetail => {
  return{
    album,
    type: TypeKeys.FEATCH_ALBUM_DETAIL,
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
