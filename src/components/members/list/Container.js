import { connect } from 'react-redux'
import { getMembers, deleteMember } from "../modules/actions"
import { bindActionCreators } from 'redux';

const mapStateToProps = state => ({
    members: state.member.members
})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(
      {
        getMembers,
        deleteMember
      },
      dispatch,
    ),
});


export default connect(mapStateToProps, mapDispatchToProps)