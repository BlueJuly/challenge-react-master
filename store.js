import { combineReducers, createStore } from 'redux';
import todos from './reducers/todos'
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
export default createStore(todos)
