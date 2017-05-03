import { applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {combineReducers} from 'redux-immutable';
import Immutable from 'immutable'
import initialState from './initialState'
import pagesReducer from './reducers/pagesReducer'
import leadsReducer from './reducers/leadsReducer'
import accountsReducer from './reducers/accountsReducer'
import callsReducer from './reducers/callsReducer'
import meetingsReducer from './reducers/meetingsReducer'
import changeViewReducer from './reducers/changeViewReducer'
const reducers = combineReducers({
	//todos:todos,
	leads:leadsReducer,
	currentView: changeViewReducer,
	accounts: accountsReducer,
	calls: callsReducer,
	meetings: meetingsReducer,
	pages: pagesReducer
})
export default createStore(reducers, initialState,applyMiddleware(thunk,logger))
