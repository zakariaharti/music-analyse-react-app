export enum TypeKeys{
  FETCH_ALBUM_SUCCESS = 'FETCH_ALBUM_SUCCESS',
  FETCH_ALBUM_REQUEST = 'FETCH_ALBUM_REQUEST',
  FETCH_ALBUM_FAILURE = 'ALBUM_FETCHED_ACTION',
  FETCH_TRACK_SUCCESS = 'FETCH_TRACK'
}

export interface IFetchTrack{
  type: TypeKeys.FETCH_TRACK_SUCCESS;
  track: any;
}

export interface IFetchAlbumSuccess{
  type: TypeKeys.FETCH_ALBUM_SUCCESS;
  album: any;
}

export interface IFetchAlbumRequest{
  type: TypeKeys.FETCH_ALBUM_REQUEST;
  loading: boolean;
}

export interface IFetchAlbumFailure{
  type: TypeKeys.FETCH_ALBUM_FAILURE;
  error: boolean
}

export type ActionTypes = IFetchAlbumSuccess |
                          IFetchAlbumRequest |
                          IFetchAlbumFailure;

export type AlbumState = {
  album: any;
  track: any;
  loading: boolean;
  error: boolean;
}
