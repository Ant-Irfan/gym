import {applyMiddleware, createStore, compose} from 'redux'
import rootReducer from '../reducer'
import thunk from 'redux-thunk'

const initialState = {};
const middleware = [thunk]


const store = createStore(rootReducer,initialState, compose (applyMiddleware(...middleware)))


export default store;