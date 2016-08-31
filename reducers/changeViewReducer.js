import Immutable from 'immutable'
import initialState from '../initialState'



//const changeViewState =Immutable.fromJS({currentView:initialState.currentView}) 

export default (state, action) => {
  switch(action.type) {
    case 'changeView':
      return state=action.view
    default:
      return state
  }
}