import { connect } from 'react-redux'
import {addMember, getMemberTypes} from "../modules/actions"
import { bindActionCreators } from 'redux';

const mapStateToProps = state => ({
    memberTypes: state.member.memberTypes
})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(
      {
        addMember,
        getMemberTypes
      },
      dispatch,
    ),
});


export default connect(mapStateToProps, mapDispatchToProps)