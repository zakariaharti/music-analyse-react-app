import axios from 'axios';

import {
  fetchAlbum,
  fetchTrack,
  albumError,
  albumLoading,
} from './actionCreators';

import { clientId, clientSecret } from '../../../secrets';

const url = 'https://cors-anywhere.herokuapp.com/https://accounts.spotify.com/api/token';
const albumDetailUrl = 'https://cors-anywhere.herokuapp.com/https://api.spotify.com/v1/albums';
const trackUrl = 'https://cors-anywhere.herokuapp.com/https://api.spotify.com/v1/audio-features';

export const fetchAlbumThunk = (id: string) => (dispatch: any) => {
  dispatch(albumLoading(true));

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
      dispatch(fetchAlbum(albumsData.data));
    }).catch(error => {
      console.error('some errors occured '+ error);

      dispatch(albumError(true));
    })
  }).catch(error => {
    console.error('some errors occured '+ error);

    dispatch(albumError(true));
  })
}

export const fetchTrackThunk = (id: string) => (dispatch: any) => {
  dispatch(albumLoading(true));

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
       axios.get(`${trackUrl}/${id}`,{
         headers: {
           'Authorization': `Bearer ${response.data['access_token']}`,
         }
    }).then(albumsData => {
      dispatch(fetchTrack(albumsData.data));
    }).catch(error => {
      console.error('some errors occured '+ error);

      dispatch(albumError(true));
    })
  }).catch(error => {
    console.error('some errors occured '+ error);

    dispatch(albumError(true));
  })
}
