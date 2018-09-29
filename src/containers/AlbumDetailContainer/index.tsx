import * as React from 'react';
import { connect } from 'react-redux';

import AlbumDetail from '../../components/AlbumDetail';

import {
  fetchAlbumThunk,
} from '../../ducks/albumDetail/epics';
import Loader from '../../ui/Loader';

interface IAlbumDetailContainerPropType{
  url_id: string;
  album: any;
  onFetchAlbum: () => void;
  loading: boolean;
  error: boolean;
}

class AlbumDetailContainer extends React.Component<IAlbumDetailContainerPropType,{}> {

  public componentDidUpdate(prevProps: IAlbumDetailContainerPropType){
    if(prevProps.url_id !== this.props.url_id){
      console.log(
        "yes"
      )
      this.props.onFetchAlbum();
    }
  }

  public componentDidMount(){
    this.props.onFetchAlbum();
  }

  public render(){

    if(this.props.loading){
      return <Loader />
    }

    if(this.props.error){
      return <p className="error-note" style={{minWidth: '200px'}}>Oops ! some errors occured while loading data .
        please check your internet connection</p>
    }

    return(
      <AlbumDetail {...this.props} />
    )
  }
}

interface IMapDispacthToProps{
  onFetchAlbum: () => void;
}

interface IMapStateToProps{
  album: any;
  loading: any;
  error: any;
}

const mapDispatchToProps = (dispatch: any, ownProps: {url_id: string}): IMapDispacthToProps => {
  return{
    onFetchAlbum: () => dispatch(fetchAlbumThunk(ownProps.url_id)),
  }
}

const mapStateToProps = (state: any): IMapStateToProps => {
  return{
    album: state.albumDetailState.album,
    loading: state.albumDetailState.loading,
    error: state.albumDetailState.error
  }
};

export default connect<IMapStateToProps,IMapDispacthToProps>(
  mapStateToProps,
  mapDispatchToProps
)(AlbumDetailContainer);
