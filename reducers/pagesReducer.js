import Immutable from 'immutable'
import initialState from '../initialState'


// const callsState = Immutable.fromJS({calls:initialState.calls}) 

export default (state, action) => {
  switch(action.type) {
    case 'addTile':
    	console.log(" "+action.type + action.tile)
      return state.push(Immutable.fromJS(action.tile))
    case 'showTiles':
      return state=action.tiles
    default:
      return state
  }
}