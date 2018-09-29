import * as React from 'react';
import styled from 'styled-components';

interface ITrackPropType{
  url_id: string,
  track: {
    danceability: number,
    energy: number,
    key: number,
    loudness: number,
    mode: number,
    speechiness: number,
    acousticness: number,
    instrumentalness: number,
    liveness: number,
    valence: number,
    tempo: number,
    type: string,
    id: string,
    uri: string,
    track_href: string,
    analysis_url: string,
    duration_ms: number,
    time_signature: number
  }
}

const StyledTrack = styled.div`
  div{
    display: flex;
justify-content: space-between;
padding: 20px 10px;
border-bottom: 1px solid rgba(197, 197, 197, 0.52);
color: gray;
text-transform: capitalize;
  }
`;

const Track: React.SFC<ITrackPropType> = (props) => {
  return(
    <StyledTrack>
      <div>
        <span>acousticness</span>
        <span>{props.track.acousticness}</span>
      </div>
      <div>
        <span>danceability</span>
        <span>{props.track.danceability}</span>
      </div>
      <div>
        <span>duration</span>
        <span>{props.track.duration_ms}</span>
      </div>
      <div>
        <span>energy</span>
        <span>{props.track.energy}</span>
      </div>
      <div>
        <span>instrumentalness</span>
        <span>{props.track.instrumentalness}</span>
      </div>
      <div>
        <span>key</span>
        <span>{props.track.key}</span>
      </div>
      <div>
        <span>liveness</span>
        <span>{props.track.liveness}</span>
      </div>
      <div>
        <span>loudness</span>
        <span>{props.track.loudness}</span>
      </div>
      <div>
        <span>mode</span>
        <span>{props.track.mode}</span>
      </div>
      <div>
        <span>speechiness</span>
        <span>{props.track.speechiness}</span>
      </div>
      <div>
        <span>liveness</span>
        <span>{props.track.liveness}</span>
      </div>
      <div>
        <span>valence</span>
        <span>{props.track.valence}</span>
      </div>
      <div>
        <span>tempo</span>
        <span>{props.track.tempo}</span>
      </div>
    </StyledTrack>
  )
}

export default Track;
