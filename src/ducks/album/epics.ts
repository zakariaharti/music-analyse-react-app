import axios from 'axios';

import {
  fetchAlbums,
  albumsError,
  albumsLoading,
  fetchAlbumDetail
} from './actionCreators';

import { clientId, clientSecret } from '../../../secrets';

const url = 'https://cors-anywhere.herokuapp.com/https://accounts.spotify.com/api/token';
const albumsUrl = `https://cors-anywhere.herokuapp.com/https://api.spotify.com/v1/browse/new-releases`;
const searchUrl = `https://cors-anywhere.herokuapp.com/https://api.spotify.com/v1/search`;
const albumDetailUrl = 'https://cors-anywhere.herokuapp.com/https://api.spotify.com/v1/albums';

export const fetchAlbumsThunk = () => (dispatch: any) => {
  dispatch(albumsLoading(true));

  const dataEncoded = new URLSearchParams();
  dataEncoded.append('grant_type','client_credentials');

  return axios({
    url,
    method: 'POST',
    data: dataEncoded,
    auth: {
      username: clientId,
      password: clientSecret
    },
    headers: {
      'Content-type': 'application/x-www-form-urlencoded'
    }
  }).then(
    response => {
       axios.get(albumsUrl,{
         headers: {
           'Authorization': `Bearer ${response.data['access_token']}`,
         }
    }).then(albumsData => {
      dispatch(fetchAlbums(albumsData.data.albums));
    }).catch(error => {
      console.error('some errors occured '+ error);

      dispatch(albumsError(true));
    })
  }).catch(error => {
    console.error('some errors occured '+ error);

    dispatch(albumsError(true));
  })
}

export const searchAlbumsThunk = (keyword: string = '',href: string = searchUrl) => (dispatch: any) => {
  dispatch(albumsLoading(true));

  const dataEncoded = new URLSearchParams();
  dataEncoded.append('grant_type','client_credentials');

  const paramsEncoded = new URLSearchParams();
  paramsEncoded.append('q',encodeURIComponent(keyword));
  paramsEncoded.append('type','album')

  return axios({
    url,
    method: 'POST',
    data: dataEncoded,
    auth: {
      username: clientId,
      password: clientSecret
    },
    headers: {
      'Content-type': 'application/x-www-form-urlencoded'
    }
  }).then(
    response => {
       axios.get(href,{
         params: paramsEncoded,
         headers: {
           'Authorization': `Bearer ${response.data['access_token']}`,
         }
    }).then(albumsData => {
      dispatch(fetchAlbums(albumsData.data.albums));
    }).catch(error => {
      console.error('some errors occured '+ error);

      dispatch(albumsError(true));
    })
  }).catch(error => {
    console.error('some errors occured '+ error);

    dispatch(albumsError(true));
  })
}


export const fetchAlbumDetailThunk = (id: string) => (dispatch: any) => {
  dispatch(albumsLoading(true));

  const dataEncoded = new URLSearchParams();
  dataEncoded.append('grant_type','client_credentials');

  return axios({
    url,
    method: 'POST',
    data: dataEncoded,
    auth: {
      username: clientId,
      password: clientSecret
    },
    headers: {
      'Content-type': 'application/x-www-form-urlencoded'
    }
  }).then(
    response => {
       axios.get(`${albumDetailUrl}/${id}`,{
         headers: {
           'Authorization': `Bearer ${response.data['access_token']}`,
         }
    }).then(albumsData => {
      dispatch(fetchAlbumDetail(albumsData.data));
    }).catch(error => {
      console.error('some errors occured ');
      console.error(error);

      dispatch(albumsError(true));
    })
  }).catch(error => {
    console.error('some errors occured ');
    console.error(error);

    dispatch(albumsError(true));
  })
}
