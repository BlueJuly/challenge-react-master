import Immutable from 'immutable'
import initialState from '../initialState'

const meetingsState =Immutable.fromJS({meetings:initialState.meetings}) 

export default (state = meetingsState, action) => {
  switch(action.type) {
    case 'addMeeting':
      return state.update('meetings', meetings => meetings.push(Immutable.fromJS(action.meeting)))
    default:
      return state
  }
}