import Immutable from 'immutable'
import initialState from '../initialState'



const leadsState =Immutable.fromJS({leads:initialState.leads}) 

export default (state = leadsState, action) => {
  switch(action.type) {
    case 'addLead':
      return state
      			.update('leads', leads => leads.push(Immutable.fromJS(action.lead)))
      			.update('currentView', view => 'leads')
    default:
      return state
  }
}