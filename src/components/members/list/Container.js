import { connect } from 'react-redux'
import { getMembers, deleteMember, editMember, memberCheckedIn } from "../modules/actions"
import { bindActionCreators } from 'redux';

const mapStateToProps = state => ({
    members: state.member.members
})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(
      {
        getMembers,
        deleteMember,
        editMember,
        memberCheckedIn
      },
      dispatch,
    ),
});


export default connect(mapStateToProps, mapDispatchToProps)