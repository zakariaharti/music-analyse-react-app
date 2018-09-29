import { IAlbumType } from '../../components/Album';

export enum TypeKeys{
  FETCH_ALBUMS_SUCCESS = 'FETCH_ALBUMS_SUCCESS',
  FETCH_ALBUMS_REQUEST = 'FETCH_ALBUMS_REQUEST',
  FETCH_ALBUMS_FAILURE = 'ALBUMS_FETCHED_ACTION',
  FEATCH_ALBUM_DETAIL = 'FEATCH_ALBUM_DETAIL',
  SEARCH_ALBUMS_REQUEST = 'SEARCH_ALBUMS_REQUEST'
}

export interface IFetchAlbumDetail{
  type: TypeKeys.FEATCH_ALBUM_DETAIL,
  album: any;
}

export interface ISearchAlbumsRequest{
  type: TypeKeys.SEARCH_ALBUMS_REQUEST;
  albums: any;
}

export interface IFetchAlbumsSuccess{
  type: TypeKeys.FETCH_ALBUMS_SUCCESS;
  albums: any;
}

export interface IFetchAlbumsRequest{
  type: TypeKeys.FETCH_ALBUMS_REQUEST;
  loading: boolean;
}

export interface IFetchAlbumsFailure{
  type: TypeKeys.FETCH_ALBUMS_FAILURE;
  error: boolean
}

export type ActionTypes = IFetchAlbumsSuccess |
                          IFetchAlbumsRequest |
                          IFetchAlbumsFailure;

export type AlbumsState = {
  albums: {
    items: IAlbumType[]
  };
  loading: boolean;
  error: boolean;
}

export type rootState = {
  albumsState: AlbumsState
}
