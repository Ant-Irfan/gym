import {
    ADD_MEMBER_FAIL,
    ADD_MEMBER_REQUEST,
    ADD_MEMBER_SUCCESS,
    GET_MEMBERS_RECEIVE,
    GET_MEMBERS_TYPES_RECEIVE,
    GET_MEMBERS_TYPE_RECEIVE,
    GET_MEMBER_RECEIVE,
    GET_MEMBERS_IN_GYM_RECEIVE
} from '../../../modules/types';

const initialState = {
    members : [],
    memberTypes : [],
    member: null,
    loading:false,
    error:null,
    memberType: null,
    membersInGym: []
}

export const memberReducer = (state = initialState, action) => {

    switch(action.type){

        case ADD_MEMBER_REQUEST:
            return{
                ...state,
                loading:true,
            
            }
        case ADD_MEMBER_SUCCESS:
            return{
                members: [...state.members, action.payload],
                loading:false,
                error:null
            }
        case ADD_MEMBER_FAIL:
            return{
                ...state,
                loading:false,
                error:action.payload,
            }
            case GET_MEMBERS_RECEIVE:
                return{
                    members: action.payload.members,
                    loading:false,
                    error:null
                }
                case GET_MEMBERS_TYPES_RECEIVE:
                    return{
                        memberTypes: action.payload.members,
                        loading:false,
                        error:null
                    }
        case GET_MEMBERS_TYPE_RECEIVE:
                    return{
                        memberType: action.payload.memberType,
                        loading:false,
                        error:null
                    }
                    case GET_MEMBER_RECEIVE:
                        return{
                            member: action.payload.member,
                            loading:false,
                            error:null
                        }
                        case GET_MEMBERS_IN_GYM_RECEIVE: 
                        return{
                            membersInGym: action.payload,
                            loading:false,
                            error:null
                        }
        default:
            return{
                ...state
            }  
}
}