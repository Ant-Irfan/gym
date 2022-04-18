import {combineReducers} from 'redux'
import { memberReducer } from '../components/members/modules/reducer'

export default combineReducers({
    member: memberReducer
})