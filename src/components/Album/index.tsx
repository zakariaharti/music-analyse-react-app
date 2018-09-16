import * as React from 'react';
import styled from 'styled-components';
import {
  FaTag,
  FaFire,
  FaCalendar
} from 'react-icons/fa';

export interface IAlbumType{
  id: string;
  imageSrc: string;
  label: string;
  name: string;
  popularity: number;
  releasedIn: string;
  totalTracks: number;
}

const StyledAlbum = styled.div`
  margin: 10px 0;
  padding: 20px 20px;
  border-radius: 6px;
  background: rgba(230, 230, 230, 0.17);
  border-bottom: 1px solid rgba(128, 128, 128, 0.28);

  &:after{
    display: block;
    content: "";
    clear: both;
  }

  img{
    width: 250px;
    height: 250px;
    border-radius: 6px;
    float: left;
  }
`;

const StyledAlbumBody = styled.div`
  float: left;
  padding: 20px;
  padding-top: 0;

  a.album-title{
    color: #3c3c3c;
    font-family: opensans-bold;
    font-size: 1.2em;
  }

  ul{
    margin: 0;
    padding: 0;

    li{
      font-size: .9em;
      margin: 10px 0;
    }

    svg{
      color: rgba(128, 128, 128, 0.64);
      margin-right: 10px;
    }

    span{
      color: gray;
    }
  }

  button{
    color: white;
    text-transform: uppercase;
    padding: 10px 22px;
    background: rgba(232, 56, 116, 0.8);
    border-radius: 6px;
    border: none;
    margin-top: 26px;
  }
`;

const Album: React.SFC<IAlbumType> = (props) => {
  return(
    <StyledAlbum>
      <img src={props.imageSrc} alt={props.label} />
      <StyledAlbumBody>
        <a href="#" className="album-title">
          <h3>{props.name}</h3>
        </a>
        <ul>
          <li>
            <span><FaTag /></span> <span>{props.label}</span>
          </li>
          <li>
            <span><FaFire /></span> <span>{props.popularity}%</span>
          </li>
          <li>
            <span><FaCalendar /></span> <span>{props.releasedIn}</span>
          </li>
          <li>
            <span><FaTag /></span> <span>{props.label}</span>
          </li>
        </ul>
        <button className="tracks-btn">view tracks ({props.totalTracks})</button>
      </StyledAlbumBody>
    </StyledAlbum>
  );
};

export default Album;
