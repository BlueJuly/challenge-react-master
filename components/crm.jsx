import React from 'react'
import { connect } from 'react-redux'

import { addTodo, deleteTodo, changeView } from '../actions'
import LeadTable from './LeadTable'
import CreateLead from './CreateLead';
import AccountTable from './AccountTable'
import PhoneCallsTable from './PhoneCallsTable'
import MeetingTable from './MeetingTable'
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



const CRM = ({currentView, dispatch}) => (
  <MuiThemeProvider>
    <div>
      <AppBar title={'Leads Table'} />
      <RaisedButton label="Add Lead" primary={true} onClick={ ()=> dispatch(changeView('addLead'))}/>

      {(()=> {
        
        switch(currentView) {
          case 'leads':
            return <LeadTable />
          case 'addLead':
            return <CreateLead />
          default:
            return <LeadTable />
        }
      }).call()}
      <AppBar title={'Account Table'} />
      <AccountTable />
      <AppBar title={'Calls Table'} />
      <PhoneCallsTable />
      <AppBar title={'Meeting Table'} />
      <MeetingTable />
    </div>
  </MuiThemeProvider>
)

function mapStateToProps(state) {
  return {
    currentView: state.get('currentView')
  }
}

export default connect(mapStateToProps)(CRM)
