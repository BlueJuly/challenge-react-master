import Immutable from 'immutable'
import initialState from '../initialState'


const callsState = Immutable.fromJS({calls:initialState.calls}) 

export default (state = callsState, action) => {
  switch(action.type) {
  
    case 'addCall':
    	console.log(" "+action.type + action.phoneCall)
      return state.update('calls', calls => calls.push(Immutable.fromJS(action.phoneCall)))
    default:
      return state
  }
}