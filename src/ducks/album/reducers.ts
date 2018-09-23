import {
  AlbumsState,
  TypeKeys,
} from './types';

const localState: AlbumsState = {
  albums: {
    items: [
      {
        id: '',
        images: [
          {
            url: '',
            height: '',
            width: ''
          },
          {
            url: '',
            height: '',
            width: ''
          },
          {
            url: '',
            height: '',
            width: ''
          }
        ],
        artists: [
          {
            external_urls: {
              spotify: ''
            },
            id: '',
            name: ''
          }
        ],
        label: '',
        name: '',
        popularity: '',
        release_date: '',
        total_tracks: '',
      }
    ]
  },
  loading: false,
  error: false
};

export const albumReducer = (state: AlbumsState = localState, action: any) => {
  switch(action.type){
    case TypeKeys.FETCH_ALBUMS_REQUEST:
      return Object.assign({},state,{
        loading: true
      });

    case TypeKeys.FETCH_ALBUMS_SUCCESS:
      return Object.assign({},state,{
        albums: action.albums,
        loading: false
      });

    case TypeKeys.SEARCH_ALBUMS_REQUEST:
      return Object.assign({},state,{
        albums: action.albums,
        loading: false
      })

    case TypeKeys.FETCH_ALBUMS_FAILURE:
      return Object.assign({},state,{
        error: true,
        loading: false
      });

    default:
      return state;
  }
}
