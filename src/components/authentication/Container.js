import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    Login
} from './modules/actions'

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
        Login
    },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps);
