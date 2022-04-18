import { notification } from 'antd';
import {
    ADD_MEMBER_FAIL,
    ADD_MEMBER_REQUEST,
    ADD_MEMBER_SUCCESS,
    GET_MEMBERS_REQUEST,
    GET_MEMBERS_RECEIVE,
    GET_MEMBERS_ERROR,
    GET_MEMBERS_TYPES_RECEIVE,
    GET_MEMBERS_TYPE_RECEIVE,
    GET_MEMBER_RECEIVE
} from '../../../modules/types';
import axios from 'axios';
import history from "../../../history"

const requestAddMember = () => ({ type: ADD_MEMBER_REQUEST });
const requestMembers = () => ({ type: GET_MEMBERS_REQUEST });
const addMemberError = () => ({ type: ADD_MEMBER_FAIL });
const receiveMembersError = () => ({ type: GET_MEMBERS_ERROR });
const receiveMembers = (payload) => ({ type: GET_MEMBERS_RECEIVE, payload });
const receiveMember = (payload) => (
    console.log(payload),
    { type: GET_MEMBER_RECEIVE, payload });
const receiveMemberTypes = (payload) => ({ type: GET_MEMBERS_TYPES_RECEIVE, payload });
const receiveMemberType = (payload) => ({ type: GET_MEMBERS_TYPE_RECEIVE, payload });


export const addMember = member => async (dispatch, getState) => {
    dispatch(requestAddMember())
    const response = await axios.post(
		'http://localhost:5000/api/members/add',
        member, 
        {
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			}
		}
    )
    if(response){
        dispatch(getMembers())
        notification.success({
            message:"Clan uspjesno dodan!"
        })
        history.push('/clanovi')
    }
    else
        dispatch(addMemberError())
}

export const getMembers = () => async (dispatch, getState) => {
    dispatch(requestMembers())
    const response = await axios.get(
		'http://localhost:5000/api/members',
        {
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			}
		}
    )
    if(response){
        dispatch(receiveMembers(response.data))
    }
    else
        dispatch(receiveMembersError())
}

export const deleteMember = (id) => async (dispatch, getState) => {
    const response = await axios.delete(
		`http://localhost:5000/api/members/${id}`,
        {
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			}
		}
    )
    if(response){
        dispatch(getMembers())
        notification.success({
            message:"Clan uspjesno izbrisan!"
        })
    }
}

export const getMemberTypes = () => async (dispatch, getState) => {
    dispatch(requestMembers())
    const response = await axios.get(
		'http://localhost:5000/api/memberTypes',
        {
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			}
		}
    )
    if(response){
        dispatch(receiveMemberTypes(response.data))
    }
    else
        dispatch(receiveMembersError())
}

export const addMemberType = memberType => async (dispatch, getState) => {
    console.log(memberType);
    dispatch(requestAddMember())
    const response = await axios.post(
		'http://localhost:5000/api/memberTypes/add',
        memberType, 
        {
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			}
		}
    )
    console.log(response);
    if(response){
        dispatch(getMemberTypes())
        history.push('/kategorije')
        notification.success({
            message:"Tip clana uspjesno dodan!"
        })
    }
    else
        dispatch(addMemberError())
}

export const deleteMemberType = (id) => async (dispatch, getState) => {
    const response = await axios.delete(
		`http://localhost:5000/api/memberTypes/${id}`,
        {
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			}
		}
    )
    if(response){
        notification.success({
            message:"Tip clana uspjesno izbrisan!"
        })
        dispatch(getMemberTypes())
    }
}

export const getMemberById = (id) => async (dispatch, getState) => {
    dispatch(requestMembers())
    const response = await axios.get(
			`http://localhost:5000/api/members/${id}`,
        {
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			}
		}
    )
    if(response){
        console.log(response);
        dispatch(receiveMember(response.data))
    }
    else
        dispatch(receiveMembersError())
}

export const getMemberTypeById = (id) => async (dispatch, getState) => {
    dispatch(requestMembers())
    const response = await axios.get(
			`http://localhost:5000/api/memberTypes/${id}`,
        {
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			}
		}
    )
    if(response){
        dispatch(receiveMemberType(response.data))
    }
    else
        dispatch(receiveMembersError())
}

export const updateMemberType = (memberType, id) =>  async (dispatch, getState) => {
    console.log("dadad", memberType, id);
    dispatch(requestMembers())
    const response = await axios.put(
			`http://localhost:5000/api/memberTypes/editMemberType/${id}`,
            memberType,
        {
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			}
		}
    )
    if(response){
        notification.success({
            message:"Kategorija uspjesno uredjena!"
        })
        history.replace("/kategorije")
    }
    else
        dispatch(receiveMembersError())
}

export const editMember = (member, id) =>  async (dispatch, getState) => {
    dispatch(requestMembers())
    const response = await axios.put(
			`http://localhost:5000/api/members/editMember/${id}`,
            member,
        {
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			}
		}
    )
    if(response){
        notification.success({
            message:"Clan uspjesno uredjen!"
        })
        history.replace("/clanovi")
    }
    else
        dispatch(receiveMembersError())
}