import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
    },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps);
