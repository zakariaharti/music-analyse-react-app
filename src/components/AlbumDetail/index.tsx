import * as React from 'react';
import {
  FaPortrait,
  FaStar,
  FaCalendar,
  FaMusic
} from 'react-icons/fa';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface IAlbumDetailPropType{
  url_id: string,
  album: {
    artists: [
      {
        name: string
      }
    ],
    external_urls: {
      spotify: string
    },
    id?: string,
    images: [
      {
        height: number,
        url: string,
        width: number
      },
      {
        height: number,
        url: string,
        width: number
      },
      {
        height: number,
        url: string,
        width: number
      }
    ],
    label?: string,
    name?: string,
    popularity?: number,
    release_date?: string,
    total_tracks?: number,
    tracks: {
      href: string,
      items: [
        {
          disc_number: number,
          duration_ms: number,
          external_urls: {
            spotify: string
          },
          id: string,
          name: string,
          preview_url: string,
          track_number: number
        }
      ]
    }
  }
}

const StyledAlbumHeader = styled.div`
  display: flex;

  @media(max-width: ${810/15}em){
    flex-direction: column;
  }

  img{
    border-radius: 6px;

    @media(max-width: ${810/15}em){
      width: 100%;
      height: 100%;
    }
  }

  div.detail-container{

    a.more-btn{
      padding: 5px 10px;
      background: rgba(128, 128, 128, 0.12);
      border-radius: 6px;
      color: rgba(128, 128, 128, 0.56);
      font-size: .9em;
      transition: .3s ease-in;

      &:hover{
        background: rgba(128, 128, 128, 0.32);
        color: rgba(47, 47, 47, 0.48);
      }
    }

    flex-grow: 100;
    padding: 20px;

    h1{
      padding: 0;
      margin: 0;
      color: #8BC34A;
    }

    h5{
      color: rgba(167, 167, 167, 0.54);
    }

    div.detail{
      p{
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid rgba(220, 220, 220, 0.4);
        padding: 5px 0;
      }

      span{
        text-transform: capitalize;
        color: #a7acb7;

        svg{
          vertical-align: middle;
        }

        a{
          color: rgba(3, 169, 244, 0.73);
          transition: .3s ease-in;

          &:hover{
            color: #03A9F4;
          }
        }
      }
    }
  }
`;

const StyledTracks = styled.div`
  padding: 20px 0;
  margin-top: 30px;

  h3{
    text-transform: capitalize;
    color: #a7a6a6;
  }

  div{
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 1px solid rgba(220,220,220,0.4);

    a.name{
      color: rgba(3, 169, 244, 0.73);
      transition: .3s ease-in;

      &:hover{
        color: #03A9F4;
      }
    }

    a.more-btn{
      padding: 5px 15px;
      background: rgba(128, 128, 128, 0.12);
      border-radius: 6px;
      color: rgba(128, 128, 128, 0.56);
      font-size: .9em;
      transition: .3s ease-in;

      &:hover{
        background: rgba(128, 128, 128, 0.32);
        color: rgba(47, 47, 47, 0.48);
      }
    }
  }
`;

const AlbumDetail: React.SFC<IAlbumDetailPropType> = (props) => {
  return(
    <div>
      <StyledAlbumHeader>
        <img src={props.album.images[1].url} />
        <div className="detail-container">
          <h1>{props.album.name}</h1>
          <h5>{props.album.label}</h5>
          <div className="detail">
            <p>
              <span>
                <FaPortrait /> artist
              </span>
              <span>
                <a href="#">{props.album.artists[0].name}</a>
              </span>
            </p>
            <p>
              <span>
                <FaStar /> popularity
              </span>
              <span>
                {props.album.popularity}
              </span>
            </p>
            <p>
              <span>
                <FaCalendar /> date of release
              </span>
              <span>
                {props.album.release_date}
              </span>
            </p>
            <p>
              <span>
                <FaMusic /> total songs
              </span>
              <span>
                {props.album.total_tracks}
              </span>
            </p>
          </div>
          <a href={props.album.external_urls.spotify} className="more-btn">more on spotify</a>
        </div>
      </StyledAlbumHeader>
      <StyledTracks>
        <h3>tracks ({props.album.total_tracks})</h3>
        {props.album.tracks.items.map(track => {
          return(
            <div key={track.id}>
              <Link to={`/analyse/track/${track.id}`} className="name">
                <span>{track.disc_number}# </span> {
                  track.name.length > 70 ? track.name.slice(0,70) : track.name
                }
              </Link>
              <a href="#" className="more-btn">see analyses</a>
            </div>
          )
        })}
      </StyledTracks>
    </div>
  )
}

export default AlbumDetail;
