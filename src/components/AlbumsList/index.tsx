import * as React from 'react';
import styled from 'styled-components';

import Album, { IAlbumType } from '../Album';
import Container from '../../ui/Container';

interface IAlbumsListType{
  albums: {
    items: IAlbumType[]
  };
  searchHasChanged: boolean;
  noKeywordTyped: boolean;
  noResultFound: boolean;
  keyword: string;
}

const StyledContainer = styled.div`
  margin: 20px 0;

  h3{
    margin: 0;
    padding: 0;
  }

  p{
    color: gray;
  }

  .section-heading{
    color: #4caf50;
    text-transform: capitalize;
    font-family: opensans;
    font-size: 1.3em;
  }
`;

const AlbumsList: React.SFC<IAlbumsListType> = (props) => {
  return(
    <StyledContainer>
      <Container>
        <div>
          <h3 className="section-heading">{props.searchHasChanged ? `search result for "${props.keyword}"` : 'new releases'}</h3>
          <p>{props.searchHasChanged && (props.noKeywordTyped || !props.albums.items.length) ?
           'no result found' : null}</p>
        </div>
        {props.albums.items.map(album => (
            <Album {...album} key={album.id} />
        ))}
      </Container>
    </StyledContainer>
  );
};

export default AlbumsList;
