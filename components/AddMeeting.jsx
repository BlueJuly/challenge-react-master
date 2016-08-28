import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import TextField from 'material-ui/TextField';
import { addMeeting } from '../actions'
import { connect } from 'react-redux'
const styles = {
  radioButton: {
    marginBottom: 16,
  },
};
/**
 * Dialog content can be scrollable.
 */
class AddMeeting extends React.Component {
  
  constructor(props){

    super(props);
    this.state = {open:false}
    console.log(this.state)
  };

  handleOpen() {

    console.log("get into handleOpen")
    this.setState({open: true});

  };

  handleClose() {
    console.log("get into handleClose")
    this.setState({open: false});
  };

  handleSubmit(){
    // console.log("meeting date: " + this.date)
    // console.log("meeting time: " + this.time)
    var {dispatch} = this.props;
    var meeting = {
      owner:this.props.ownerName,
      title:this.title,
      attendees:this.attendees,
      date: this.date.toDateString(),
      time: this.time.toTimeString()
    }
    console.log("meeting: "+ meeting);
    this.setState({open : false});
    dispatch(addMeeting(meeting));
  }

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

    const DateTimePicker =(
      <div>
        <DatePicker hintText="Meeting Date" mode="landscape" onChange ={ (e,v) => this.date = v}/>
        <TimePicker hintText="Meeting Time" onChange = {(e,v) => this.time = v}/>
      </div>
      )
    
    

    const callTextField =(
      <div>
        <TextField
          hintText="Title"
          floatingLabelText="Tite"
          onChange = {e => this.title = e.target.value}
        /><br />
        <TextField
          hintText="Attendees"
          floatingLabelText="Attendees"
          onChange = {e => this.attendees = e.target.value}
        /><br />
      </div>
      )
    
    return (
      <div>
        <RaisedButton label="Add Meeting" onClick={this.handleOpen.bind(this)} />
        <Dialog
          title="Schedule Mettings"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose.bind(this)}
          autoScrollBodyContent={true}
        >
          {callTextField}
          {DateTimePicker}
        </Dialog>
      </div>
    );
  }
}

export default connect()(AddMeeting)