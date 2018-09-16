import { connect } from 'react-redux';

import AlbumsList from '../../components/AlbumsList';

const mapStateToProps = (state: any) => {
  return{
    albums: state.albums
  }
};

export default connect(
  mapStateToProps
)(AlbumsList);
