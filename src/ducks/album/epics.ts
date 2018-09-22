import axios from 'axios';

import {
  fetchAlbums,
//  albumsError,
  albumsLoading
} from './actionCreators';


const clientId = 'fb192c8fe1ba40c7b6c36f563f03bbd1';
const clientSecret = 'c0b8128106c54d1eb5233d7f88427677';
const url = 'https://accounts.spotify.com/api/token';
const albumsUrl = `https://api.spotify.com/v1/albums?ids=382ObEPsp2rxGrnsizN5TX%2C1A2GTWGtFfWp7KSQTwWOyo%2C2noRn2Aes5aoNVsU6iWThc&market=ES`;


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
      console.log(response);
       axios.get(albumsUrl,{
         headers: {
           'Authorization': `Bearer ${response.data['access_token']}`,
         }
    }).then(albumsData => {
      console.log(albumsData);
      dispatch(albumsLoading(false));
      dispatch(fetchAlbums(albumsData.data));
    })
  })
}
