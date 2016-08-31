import Immutable from 'immutable'
import initialState from '../initialState'

// const meetingsState =Immutable.fromJS({meetings:initialState.meetings}) 

export default (state, action) => {
  switch(action.type) {
    case 'addMeeting':
      return state.push(Immutable.fromJS(action.meeting))
    default:
      return state
  }
}