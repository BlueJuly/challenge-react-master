import React from 'react';
import { connect } from 'react-redux'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';

class MeetingTable extends React.Component {

	renderRow(meeting, index) {
		return (
			<TableRow key={index}>
				<TableRowColumn>{index + 1}</TableRowColumn>
		        <TableRowColumn>{meeting.get('title')}</TableRowColumn>
		        <TableRowColumn>{meeting.get('owner')}</TableRowColumn>
		        <TableRowColumn>{meeting.get('attendees')}</TableRowColumn>
		        <TableRowColumn>{meeting.get('date')}</TableRowColumn>
		        <TableRowColumn>{meeting.get('time')}</TableRowColumn>

		    </TableRow>
	    );
	}

	render() {

		var {meetings} = this.props;

		return ( 
			<Table>
			    <TableHeader>
			      <TableRow>
			        <TableHeaderColumn>ID</TableHeaderColumn>
			        <TableHeaderColumn>Title</TableHeaderColumn>
			        <TableHeaderColumn>Owner</TableHeaderColumn>
			        <TableHeaderColumn>Attendees</TableHeaderColumn>
			        <TableHeaderColumn>Date</TableHeaderColumn>
			        <TableHeaderColumn>Time</TableHeaderColumn>
			      </TableRow>
			    </TableHeader>
			    <TableBody>
			      	{ meetings.map(this.renderRow) }
			    </TableBody>
			 </Table>
	  	);
	}
}


function mapStateToProps(state) {
	//console.log("this is meeting: " + state.get('meetings'))
  return {
    meetings: state.get('meetings')
  }
}

export default connect(mapStateToProps)(MeetingTable)