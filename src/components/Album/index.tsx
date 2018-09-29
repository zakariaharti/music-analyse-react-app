import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  FaBookmark,
  FaChartBar
} from 'react-icons/fa';

export interface IAlbumType{
  id: string;
  images: [
    {
      url: string,
      height: string,
      width: string
    },
    {
      url: string,
      height: string,
      width: string
    },
    {
      url: string,
      height: string,
      width: string
    }
  ],
  artists: [
    {
      external_urls: {
        spotify: string
      },
      id: string,
      name: string
    }
  ]
  label: string;
  name: string;
  popularity: string;
  release_date: string;
  total_tracks: string;
}

const StyledAlbum = styled.div`
  margin: 10px 0;
  padding: 20px 0px;
  border-bottom: 1px solid hsla(0, 1%, 86%, 0.62);
  background: #ffffff;

  &:after{
    display: block;
    content: "";
    clear: both;
  }

  img{
    width: 182px;
    height: 185px;
    border-radius: 6px;
    float: left;

    @media(max-width: ${739/16}em){
      float: none;
      width: 100%;
      height: 100%;
    }
  }
`;

const StyledAlbumBody = styled.div`
  float: left;
  padding-left: 20px;

  a.album-title{
    color: #424242;
    font-family: opensans-bold;
    font-size: 1.1em;
  }

  @media(max-width: ${700/16}em){
    float: none;
    padding: 0;
  }
`;

const StyledInfo = styled.div`
  span{
    display: block;
    color: gray;
    font-size: .9em;

    a{
      color: #3e9ac3;
    }
  }

  span:last-of-type{
    margin-top: 2em;
  }
`;

const StyledButtons = styled.div`
  margin-top: 1.2em;

  .play-btn{
    padding: 7px 58px;
    background: var(--primary-color);
    color: #ffffff;
    border-radius: 10px;
    margin-right: 1em;
    text-transform: capitalize;
    cursor: pointer;
    transition: .3s ease-in;

    &:hover{
      background: rgb(122, 173, 64);
    }

    svg{
      vertical-align: middle;
    }
  }

  .save-btn{
    color: #4a4a4a;
    text-transform: capitalize;
    text-transform: capitalize;

    @media(max-width: ${556/16}em){
      display: none;
    }
  }
`;

const Album: React.SFC<IAlbumType> = (props) => {
  return(
    <StyledAlbum>
      <img src={props.images[1].url} alt={props.label} />
      <StyledAlbumBody>
        <Link to={`analyse/album/${props.id}`} className="album-title">
          <h3>{props.name.length > 40 ? props.name.slice(0,40) : props.name}</h3>
        </Link>
        <StyledInfo>
          <span>
            by <a href={props.artists[0].external_urls.spotify}>{props.artists[0].name}</a>
          </span>
          <span>
            {props.total_tracks} songs
          </span>
        </StyledInfo>
        <StyledButtons>
          <Link to={`analyse/album/${props.id}`} className="play-btn">
            <FaChartBar />  analyse
          </Link>
          <a className="save-btn">
            <FaBookmark /> save to your library
          </a>
        </StyledButtons>
      </StyledAlbumBody>
    </StyledAlbum>
  );
};

export default Album;
