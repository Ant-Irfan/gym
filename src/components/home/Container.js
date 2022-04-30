import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMembersInGym } from "../members/modules/actions"
const mapStateToProps = (state) => ({
    membersInGym: state.member.membersInGym
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      getMembersInGym
    },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps);
