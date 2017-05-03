
import 'whatwg-fetch'
export function changeView(view) {
	return {
		type: 'changeView',
		view
	}
}

export function addLead(lead) {
	return {
		type: 'addLead',
		lead
	}
}

export function addAccount(account){
	return{
		type: 'addAccount',
		account
	}
}

export function addCall(phoneCall){
	return{
		type:'addCall',
		phoneCall
	}
}

export function addMeeting(meeting){
	return{
		type:'addMeeting',
		meeting
	}
}
export function addTile(meeting){
	return{
		type:'addTile',
		tile
	}
}
export function showTiles(meeting){
	return{
		type:'showTiles',
		tiles
	}
}