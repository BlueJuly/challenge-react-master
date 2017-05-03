import React from 'react';
import { connect } from 'react-redux'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';

class CallTable extends React.Component {

	renderRow(call, index) {
		return (
			<TableRow key={index}>
				<TableRowColumn>{index + 1}</TableRowColumn>
		        <TableRowColumn>{call.get('leadName')}</TableRowColumn>
		        <TableRowColumn>{call.get('contactName')}</TableRowColumn>
		        <TableRowColumn>{call.get('boundValue')}</TableRowColumn>
		    </TableRow>
	    );
	}

	render() {

		var {calls} = this.props;

		return ( 
			<Table>
			    <TableHeader>
			      <TableRow>
			        <TableHeaderColumn>ID</TableHeaderColumn>
			        <TableHeaderColumn>Lead Name</TableHeaderColumn>
			        <TableHeaderColumn>Contact Name</TableHeaderColumn>
			        <TableHeaderColumn>Type</TableHeaderColumn>
			      </TableRow>
			    </TableHeader>
			    <TableBody>
			      	{ calls.map(this.renderRow) }
			    </TableBody>
			 </Table>
	  	);
	}
}


function mapStateToProps(state) {
	console.log("this is call: " + state.calls)
  return {
    calls: state.get('calls')
  }
}

export default connect(mapStateToProps)(CallTable)