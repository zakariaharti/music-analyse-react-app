import * as React from 'react';
import { match } from 'react-router-dom';
import { History } from 'history';
import {
  FaArrowLeft
} from 'react-icons/fa';
import styled from 'styled-components';

import TrackContainer from '../containers/TrackContainer';
import Container from '../ui/Container';
import Footer from '../ui/Footer';

interface ITrackContainerPropType{
  match: match<{
    id: string
  }>,
  history: History
}

const StyledHeader = styled.div`
  width: 100%;
  padding: 50px 0;

  a{
    color: #969696;
    text-transform: capitalize;
    cursor: pointer;
  }
`;

class TrackComponent extends React.Component<ITrackContainerPropType,{}>{

  public goBack = () => this.props.history.goBack();

  public render(){
    return(
      <Container>
        <StyledHeader>
          <a onClick={this.goBack}>
            <FaArrowLeft /> go back
          </a>
        </StyledHeader>
        <TrackContainer url_id={this.props.match.params.id} />
        <Footer />
      </Container>
    )
  }
}

export default TrackComponent;
