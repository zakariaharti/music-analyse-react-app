import * as React from 'react';
import { connect } from 'react-redux';

import Track from '../../components/Track';

import {
  fetchTrackThunk,
} from '../../ducks/albumDetail/epics';
import Loader from '../../ui/Loader';

interface ITrackContainerPropType{
  url_id: string;
  track: any;
  onFetchTrack: () => void;
  loading: boolean;
  error: boolean;
}

class TrackContainer extends React.Component<ITrackContainerPropType,{}> {

  public componentDidMount(){
    this.props.onFetchTrack();
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
      <Track {...this.props} />
    )
  }
}

interface IMapDispacthToProps{
  onFetchTrack: () => void;
}

interface IMapStateToProps{
  track: any;
  loading: any;
  error: any;
}

const mapDispatchToProps = (dispatch: any, ownProps: {url_id: string}): IMapDispacthToProps => {
  return{
    onFetchTrack: () => dispatch(fetchTrackThunk(ownProps.url_id)),
  }
}

const mapStateToProps = (state: any): IMapStateToProps => {
  return{
    track: state.albumDetailState.track,
    loading: state.albumDetailState.loading,
    error: state.albumDetailState.error
  }
};

export default connect<IMapStateToProps,IMapDispacthToProps>(
  mapStateToProps,
  mapDispatchToProps
)(TrackContainer);
