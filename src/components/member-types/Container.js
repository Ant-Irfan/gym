import { connect } from 'react-redux'
import {getMemberTypes, deleteMemberType} from "../members/modules/actions"
import { bindActionCreators } from 'redux';

const mapStateToProps = state => ({
    memberTypes: state.member.memberTypes
})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(
      {
        getMemberTypes,
        deleteMemberType
      },
      dispatch,
    ),
});


export default connect(mapStateToProps, mapDispatchToProps)