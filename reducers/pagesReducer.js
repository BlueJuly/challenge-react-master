import Immutable from 'immutable'
import initialState from '../initialState'


// const callsState = Immutable.fromJS({calls:initialState.calls}) 

export default (state, action) => {
  switch(action.type) {
    case 'addTile':
    	//console.log(" "+action.type + action.pages)
      return state.push(Immutable.fromJS(action.page))
    case 'initTiles':
      //console.log('state in reducer:~~~~~~',state)
      return state=action.page
    default:
      return state
  }
}