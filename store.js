import { applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {combineReducers} from 'redux-immutable';
import Immutable from 'immutable'
import initialState from './initialState'
import pagesReducer from './reducers/pagesReducer'
const reducers = combineReducers({
	//todos:todos,
	page: pagesReducer
})
export default createStore(reducers, initialState,applyMiddleware(thunk,logger))
