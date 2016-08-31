import Immutable from 'immutable'
import initialState from '../initialState'



// const leadsState =Immutable.fromJS({leads:initialState.leads}) 

export default (state, action) => {
  switch(action.type) {
    case 'addLead':
      return state.push(Immutable.fromJS(action.lead))	
    default:
      return state
  }
}