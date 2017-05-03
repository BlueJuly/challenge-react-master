import Immutable from 'immutable'
import 'whatwg-fetch'

const initialState = Immutable.fromJS({
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
	}],
  pages:[]

});


export default initialState