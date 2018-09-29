import * as React from 'react';
import { match } from 'react-router-dom';
import { History } from 'history';
import { } from 'react-router';
import {
  FaArrowLeft
} from 'react-icons/fa';
import styled from 'styled-components';

import AlbumDetailContainer from '../containers/AlbumDetailContainer';
import Container from '../ui/Container';
import Footer from '../ui/Footer';

interface IAlbumDetailContainerPropType{
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

class AlbumComponent extends React.Component<IAlbumDetailContainerPropType,{}>{

  public goBack = () => this.props.history.goBack();

  public render(){
    return(
      <Container>
        <StyledHeader>
          <a onClick={this.goBack}>
            <FaArrowLeft /> go back
          </a>
        </StyledHeader>
        <AlbumDetailContainer url_id={this.props.match.params.id} />
        <Footer />
      </Container>
    )
  }
}

export default AlbumComponent;
