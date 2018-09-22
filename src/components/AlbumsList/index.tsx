import * as React from 'react';
import styled from 'styled-components';

import { IAlbumType } from '../Album';
import Container from '../../ui/Container';

interface IAlbumsListType{
  albums: IAlbumType[];
}

const StyledContainer = styled.div`
  margin: 20px 0;
`;

const AlbumsList: React.SFC<IAlbumsListType> = (props) => {
  return(
    <StyledContainer>
      <Container>
        {/*props.albums.map(album => (
          <Album {...album} key={album.id} />
        ))*/}
        <p>albums</p>
      </Container>
    </StyledContainer>
  );
};

export default AlbumsList;
