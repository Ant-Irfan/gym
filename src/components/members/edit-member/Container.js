import { connect } from 'react-redux'
import {editMember, getMemberTypes, getMemberById } from "../modules/actions"
import { bindActionCreators } from 'redux';

const mapStateToProps = state => ({
    memberTypes: state.member.memberTypes,
    member: state.member.member
})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(
      {
        editMember,
        getMemberTypes,
        getMemberById
      },
      dispatch,
    ),
});


export default connect(mapStateToProps, mapDispatchToProps)