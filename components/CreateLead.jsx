import React from 'react';
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import { changeView, addLead } from '../actions'

class CreadLead extends React.Component {

	handleNameOnChange(e) {
		this._name = e.target.value
	}

	render() {
		var {dispatch} = this.props;

		return (
			  <div>
			    <TextField
			      onChange={this.handleNameOnChange.bind(this)}
			      hintText="Lead name"
			      floatingLabelText="Name"
			      floatingLabelFixed={true}
			    />
			    <br />
			    <TextField
			      onChange={e => this._number = e.target.value}
			      hintText="Lead's phone number"
			      floatingLabelText="Phone Number"
			      floatingLabelFixed={true}
			    />
			    <br />
			    <RaisedButton label="Save Lead" secondary={true} onClick={ ()=> dispatch(addLead({ name: this._name, number: this._number })) }/>
			  </div>
		);
	}
}

export default connect()(CreadLead)