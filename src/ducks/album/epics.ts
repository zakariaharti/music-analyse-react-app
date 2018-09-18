import { ActionsObservable, ofType } from 'redux-observable';
import { Action } from 'redux';

import {
  TypeKeys,
} from './types';

import { fetchAlbums } from './actionCreators';

import * as rxjs from 'rxjs';

const url = 'https://accounts.spotify.com/api/token';
const albumsUrl = `https://api.spotify.com/v1/albums?ids=382ObEPsp2rxGrnsizN5TX%2C1A2GTWGtFfWp7KSQTwWOyo%2C2noRn2Aes5aoNVsU6iWThc&market=ES`;

export const fetchAlbumsEpic = (action$: ActionsObservable<Action<any>>) => {
  return action$.pipe(
    ofType(TypeKeys.FETCH_ALBUMS_REQUEST),
    rxjs.operators.mergeMap(action => {
      return rxjs.Observable.ajax({
        method: 'POST',
        url,
        body: {
          'grant_type': 'client_credentials '
        },
        headers: {
          'Authorization': 'Basic fb192c8fe1ba40c7b6c36f563f03bbd1:c0b8128106c54d1eb5233d7f88427677'
        }
      }).pipe(
        rxjs.operators.mergeMap(response => {
          return rxjs.Observable.ajax({
            method: 'GET',
            url: albumsUrl,
            headers: {
              'Authorization': `Bearer ${response['access_token']}`
            }
          }).pipe(
            rxjs.operators.map(response => fetchAlbums(response))
          )
        }),
        rxjs.operators.catchError(error => rxjs.Observable.of({
          type: TypeKeys.FETCH_ALBUMS_FAILURE,
          error: true
        }))
      )
    })
  )
}
