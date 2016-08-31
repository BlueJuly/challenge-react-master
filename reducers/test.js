var Immutable = require('immutable');
var map1 = Immutable.Map({a:1, b:2, c:3});
var map2 = map1.set('b', 50);
var map3 = {
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
};

console.log(map3.currentView)
