import Immutable from 'immutable'
import initialState from '../initialState'



const changeViewState =Immutable.fromJS({currentView:initialState.currentView}) 

export default (state = changeViewState, action) => {
  switch(action.type) {
    case 'changeView':
      return state.update('currentView', view => action.view)
    default:
      return state
  }
}