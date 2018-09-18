import { IAlbumType } from '../../components/Album';

export enum TypeKeys{
  FETCH_ALBUMS_SUCCESS = 'FETCH_ALBUMS_ACTION',
  FETCH_ALBUMS_REQUEST = 'FETCH_ALBUMS_ACTION',
  FETCH_ALBUMS_FAILURE = 'ALBUMS_FETCHED_ACTION'
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
  albums: IAlbumType[];
  loading: boolean;
  error: boolean;
}

export type rootState = {
  albumsState: AlbumsState
}
