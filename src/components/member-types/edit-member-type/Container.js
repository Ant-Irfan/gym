import { connect } from 'react-redux'
import {addMemberType, getMemberTypeById, updateMemberType} from "../../members/modules/actions"
import { bindActionCreators } from 'redux';

const mapStateToProps = state => ({
  memberType: state.member.memberType
})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(
      {
        addMemberType,
        getMemberTypeById,
        updateMemberType
      },
      dispatch,
    ),
});


export default connect(mapStateToProps, mapDispatchToProps)