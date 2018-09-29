import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import AlbumsList from '../../components/AlbumsList';
import { IAlbumType } from '../../components/Album';
import {
  fetchAlbumsThunk,
  searchAlbumsThunk
} from '../../ducks/album/epics';
import Loader from '../../ui/Loader';

interface IAlbumsContainerType{
  albums: {
    items: IAlbumType[],
    limit: number;
    offset: number;
    next: any;
    previous: string | null;
    total: number;
  };
  error?: boolean;
  loading?: boolean;
  onFetchAlbums: () => void;
  onSearchAlbums: (keyword: string,url ?: string) => void;
  keyword: string;
}

interface IAlbumStateType{
  searchMessage: string;
  searchHasChanged: boolean;
  noKeywordTyped: boolean;
  noResultFound: boolean;
  limit: string;
  offset: string;
}

const StyledArrowBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 15px 0;
  align-items: baseline;

  button{
    padding: 5px 20px;
    margin: 15px;
    border: none;
    border-radius: 6px;
    color: #4b4c4c;
    cursor: pointer;
    text-transform: capitalize;
    transition: .3s ease-in;

    &:hover{
      background-color: #c1c1c1;
    }
  }

  button:disabled{
    opacity: .7;
    cursor: not-allowed;
  }

  p{
    color: gray;
  }
`;

class AlbumsContainer extends React.Component<IAlbumsContainerType,IAlbumStateType>{

  public state = {
    searchMessage: '',
    searchHasChanged: false,
    noKeywordTyped: false,
    noResultFound: false,
    limit: '20',
    offset: '0'
  }

  public componentDidMount(){
    this.props.onFetchAlbums();
  }

  public componentDidUpdate(prevProps: IAlbumsContainerType){
    if(prevProps.keyword !== this.props.keyword){

      if(this.props.keyword.length){
        this.props.onSearchAlbums(this.props.keyword);


        if(!this.props.albums.items.length){
            this.setState({
              noResultFound: true
            });
        }
      }

      this.setState({
        searchHasChanged: true
      });

    }
  }

  public onNextPage = () => {
    if(this.props.albums.next){
      this.props.onSearchAlbums('',this.props.albums.next);
    }
  }

  public onPreviousPage = () => {
    if(this.props.albums.previous){
      this.props.onSearchAlbums('',this.props.albums.previous);
    }
  }

  public render(){
    if(this.props.loading){
      return(
        <React.Fragment>
          <StyledArrowBar>
            <button
              onClick={this.onPreviousPage}
              disabled={!this.props.albums.previous}
              >
                previous
            </button>
            <p>{this.props.albums.offset} / {this.props.albums.limit}</p>
            <button
              onClick={this.onNextPage}
              disabled={!this.props.albums.next}
              >
                next
              </button>
          </StyledArrowBar>
          <Loader />
        </React.Fragment>
      )
    }

    if(this.props.error){
      return <p className="error-note">Oops ! some errors occured while loading data .
        please check your internet connection</p>
    }

    return(
      <React.Fragment>
      <StyledArrowBar>
        <button
          onClick={this.onPreviousPage}
          disabled={!this.props.albums.previous}
          >
            previous
        </button>
        <p>{this.props.albums.offset} / {this.props.albums.total}</p>
        <button
          onClick={this.onNextPage}
          disabled={!this.props.albums.next}
          >
            next
          </button>
      </StyledArrowBar>
      <AlbumsList
        albums={this.props.albums}
        keyword={this.props.keyword}
        noKeywordTyped={this.state.noKeywordTyped}
        noResultFound={this.state.noResultFound}
        searchHasChanged={this.state.searchHasChanged}
      />
    </React.Fragment>
    )
  }
}

interface IMapDispacthToProps{
  onFetchAlbums: () => void;
  onSearchAlbums: (keyword: string,url: string) => void;
}

interface IMapStateToProps{
  albums: any;
  loading: any;
  error: any;
}

interface ISearchType{
  keyword: string;
  offset: string;
  limit: string;
}

const mapDispatchToProps = (dispatch: any, ownProps: ISearchType): IMapDispacthToProps => {
  return{
    onFetchAlbums: () => dispatch(fetchAlbumsThunk()),
    onSearchAlbums:
      (keyword: string,url: string) =>
        dispatch(searchAlbumsThunk(keyword, url))
  }
}

const mapStateToProps = (state: any): IMapStateToProps => {
  return{
    albums: state.albumsState.albums,
    loading: state.albumsState.loading,
    error: state.albumsState.error
  }
};

export default connect<IMapStateToProps,IMapDispacthToProps,ISearchType>(
  mapStateToProps,
  mapDispatchToProps
)(AlbumsContainer);
