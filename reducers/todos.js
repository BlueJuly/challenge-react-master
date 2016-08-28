import Immutable from 'immutable'

const defaultState = Immutable.fromJS({
	leads: [{name:'Xiaochuan',number:'777'}],
	currentView: 'leads',
	accounts:[{name:'cc',number:'789'}],
	calls :[{leadName:'BatMan', contactName:'Super Man', boundValue:'InBound'}],
	meetings : [{
		title :'Interview',
		owner : 'Xiaochuan',
		attendees : "xiaozheng",
		date :'2016/08/30',
		time: '13:00 PM'
	}]
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case 'addTodo':
      return state.unshift(action.todo)
    case 'deleteTodo':
      return state.filter((todo, index) => index !== action.index)
    case 'changeView':
      return state.update('currentView', view => action.view)
    case 'addLead':
      return state
      			.update('leads', leads => leads.push(Immutable.fromJS(action.lead)))
      			.update('currentView', view => 'leads')
    case 'addAccount':
      return state.update('accounts', accounts=>accounts.push(Immutable.fromJS(action.account)))
    case 'addCall':
    	console.log(" "+action.type + action.phoneCall)
      return state.update('calls', calls => calls.push(Immutable.fromJS(action.phoneCall)))
    case 'addMeeting':
      return state.update('meetings', meetings => meetings.push(Immutable.fromJS(action.meeting)))
    default:
      return state
  }
}
