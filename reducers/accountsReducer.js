import Immutable from 'immutable'
import initialState from '../initialState'

const accountsState =Immutable.fromJS({accounts:initialState.accounts}) 

export default (state = accountsState, action) => {
  switch(action.type) {
    case 'addAccount':
      return state.update('accounts', accounts=>accounts.push(Immutable.fromJS(action.account)))
    default:
      return state
  }
}