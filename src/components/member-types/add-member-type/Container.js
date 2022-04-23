import { connect } from 'react-redux'
import {addMemberType} from "../../members/modules/actions"
import { bindActionCreators } from 'redux';

const mapStateToProps = state => ({
})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(
      {
        addMemberType,
      },
      dispatch,
    ),
});


export default connect(mapStateToProps, mapDispatchToProps)