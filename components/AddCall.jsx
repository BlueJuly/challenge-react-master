import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import TextField from 'material-ui/TextField';
import { addCall } from '../actions'
import { connect } from 'react-redux'
const styles = {
  radioButton: {
    marginBottom: 16,
  },
};
/**
 * Dialog content can be scrollable.
 */
class AddCall extends React.Component {
  
  constructor(props){

    super(props);
    this.state = {open:false}
    console.log(this.state)
  };

  handleOpen() {

    this.setState({open: true});

  };

  handleClose() {

    this.setState({open: false});
  };

  handleSubmit(){
    // console.log("lead name: " + this.props.leadName)
    // console.log(this.contactName+this.contactNumber+this.boundValue)
    var {dispatch} = this.props;
    var phoneCall = {
      leadName:this.props.leadName,
      contactName:this.contactName,
      boundValue:this.boundValue
    }
    this.setState({open : false})
    dispatch(addCall(phoneCall));
  }

  // handleBoundChange(event, index, boundValue){
  //   console.log(boundValue)
  //   this.setState({boundValue: boundValue});
  // };

  render() {

    

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose.bind(this)}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleSubmit.bind(this)}
      />,
    ];

    const callTextField =(
      <div>
        <TextField
          hintText="Contact Name"
          floatingLabelText="Contact Name"
          onChange = {e => this.contactName = e.target.value}
        /><br />
        <TextField
          hintText="Phone Number"
          floatingLabelText="Phone Number"
          onChange = {e => this.contactNumber = e.target.value}
        /><br />
      </div>
      )
    const callBound =(
      <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
        <RadioButton
          value="Inbound"
          label="Inbound"
          styles = {styles.radioButton}
          onClick = {e => this.boundValue = e.target.value}
        />
        <RadioButton
          value="OutBound"
          label="OutBound"
          styles = {styles.radioButton}
          onClick = {e => this.boundValue = e.target.value}
        />
      </RadioButtonGroup>
      )

    return (
      <div>
        <RaisedButton label="Add Calls" onClick={this.handleOpen.bind(this)} />
        <Dialog
          title="Add Calls"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose.bind(this)}
          autoScrollBodyContent={true}
        >
          {callTextField} 
          {callBound}
        </Dialog>
      </div>
    );
  }
}

export default connect()(AddCall)