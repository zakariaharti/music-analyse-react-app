import * as React from 'react';
import { connect } from 'react-redux';

import AlbumsList from '../../components/AlbumsList';
import { IAlbumType } from '../../components/Album';
import { fetchAlbumsThunk } from '../../ducks/album/epics';

interface IAlbumsContainerType{
  albums: IAlbumType[];
  error?: boolean;
  loading?: boolean;
  onFetchAlbums: () => void;
}

class AlbumsContainer extends React.Component<IAlbumsContainerType,{}>{

  public componentDidMount(){
    this.props.onFetchAlbums();
  }

  public render(){
    if(this.props.loading){
      return <p>loading</p>
    }

    if(this.props.error){
      return <p>error</p>
    }

    return(
      <AlbumsList albums={this.props.albums} />
    )
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return{
    onFetchAlbums: () => dispatch(fetchAlbumsThunk())
  }
}

const mapStateToProps = (state: any) => {
  return{
    albums: state.albumsState.albums
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumsContainer);
