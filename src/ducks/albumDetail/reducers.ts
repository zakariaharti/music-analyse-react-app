import {
  AlbumState,
  TypeKeys,
} from './types';

const localState: AlbumState = {
  album: {
    artists: [
      {
        name: ''
      }
    ],
    external_urls: {
      spotify: ''
    },
    id: '',
    images: [
      {
        height: 0,
        url: '',
        width: 0
      },
      {
        height: 0,
        url: '',
        width: 0
      },
      {
        height: 0,
        url: '',
        width: 0
      }
    ],
    label: '',
    name: '',
    popularity: 0,
    release_date: '',
    total_tracks: 0,
    tracks: {
      href: '',
      items: [
        {
          disc_number: 0,
          duration_ms: 0,
          external_urls: {
            spotify: ''
          },
          id: '',
          name: '',
          preview_url: '',
          track_number: 0
        }
      ]
    }
  },
  track: {
    danceability: 0,
    energy: 0,
    key: 0,
    loudness: 0,
    mode: 0,
    speechiness: 0,
    acousticness: 0,
    instrumentalness: 0,
    liveness: 0,
    valence: 0,
    tempo: 0,
    type: '',
    id: '',
    uri: '',
    track_href: '',
    analysis_url: '',
    duration_ms: 0,
    time_signature: 0
  },
  loading: false,
  error: false
};

export const albumDetailReducer = (state: AlbumState = localState, action: any) => {
  switch(action.type){
    case TypeKeys.FETCH_ALBUM_REQUEST:
      return Object.assign({},state,{
        loading: true
      });

    case TypeKeys.FETCH_ALBUM_SUCCESS:
      return Object.assign({},state,{
        album: action.album,
        loading: false
      });

    case TypeKeys.FETCH_TRACK_SUCCESS:
      return Object.assign({},state,{
        track: action.track,
        loading: false
      });

    case TypeKeys.FETCH_ALBUM_FAILURE:
      return Object.assign({},state,{
        error: true,
        loading: false
      });

    default:
      return state;
  }
}
