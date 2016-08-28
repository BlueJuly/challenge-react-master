import React from 'react';
import { connect } from 'react-redux'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import { addAccount } from '../actions'
import AddCall from './AddCall'
import AddMeeting from './AddMeeting'
class LeadTable extends React.Component {

	renderRow(lead, index) {

		var {dispatch} = this.props;

		return (
			<TableRow key={index}>
		        <TableRowColumn>{index + 1}</TableRowColumn>
		        <TableRowColumn>{lead.get('name')}</TableRowColumn>
		        <TableRowColumn>{lead.get('number')}</TableRowColumn>
		        <TableRowColumn>
		        	<RaisedButton label="Convert" secondary={true}
		        	onClick={ ()=> dispatch(addAccount(lead)) }/>
		        </TableRowColumn>
		        <TableRowColumn>
		        	<AddCall leadName={lead.get('name')}/>
		        </TableRowColumn>
		        <TableRowColumn>
		        	<AddMeeting ownerName={lead.get('name')}/>
		        </TableRowColumn>
		    </TableRow>
	    );
	}

	render() {

		var {leads} = this.props;

		return ( 
			<Table>
			    <TableHeader>
			      <TableRow>
			        <TableHeaderColumn>ID</TableHeaderColumn>
			        <TableHeaderColumn>Name</TableHeaderColumn>
			        <TableHeaderColumn>Phone Number</TableHeaderColumn>
			        <TableHeaderColumn></TableHeaderColumn>
			        <TableHeaderColumn></TableHeaderColumn>
			        <TableHeaderColumn></TableHeaderColumn>
			      </TableRow>
			    </TableHeader>
			    <TableBody>
			      	{ leads.map(this.renderRow.bind(this)) }
			    </TableBody>
			 </Table>
	  	);
	}
}


function mapStateToProps(state) {
  return {
    leads: state.get('leads')
  }
}

export default connect(mapStateToProps)(LeadTable)