import { createStore} from 'redux';
import {combineReducers} from 'redux-immutable';
import Immutable from 'immutable'
import initialState from './initialState'
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
	meetings: meetingsReducer
})
export default createStore(reducers, initialState)
