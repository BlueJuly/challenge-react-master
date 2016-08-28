import React from 'react';
import { connect } from 'react-redux'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';

class AccountTable extends React.Component {

	renderRow(account, index) {
		console.log("account name: " + account.get('name') )
		return (
			<TableRow key={index}>
				<TableRowColumn>{index + 1}</TableRowColumn>
		        <TableRowColumn>{account.get('name')}</TableRowColumn>
		        <TableRowColumn>{account.get('number')}</TableRowColumn>
		    </TableRow>
	    );
	}

	render() {

		var {accounts} = this.props;

		return ( 
			<Table>
			    <TableHeader>
			      <TableRow>
			        <TableHeaderColumn>ID</TableHeaderColumn>
			        <TableHeaderColumn>Account Name</TableHeaderColumn>
			        <TableHeaderColumn>Account Phone</TableHeaderColumn>
			      </TableRow>
			    </TableHeader>
			    <TableBody>
			      	{ accounts.map(this.renderRow) }
			    </TableBody>
			 </Table>
	  	);
	}
}


function mapStateToProps(state) {
	console.log("this is account: " + state.get('accounts'))
  return {
    accounts: state.get('accounts')
  }
}

export default connect(mapStateToProps)(AccountTable)