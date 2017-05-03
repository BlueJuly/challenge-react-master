import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import 'whatwg-fetch'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store from '../store'
import CRM from './crm'
import SinglePage from './SinglePage'
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

let reactElement = document.getElementById('react')
render(
  <Provider store={store}>
  	<MuiThemeProvider>
    	<SinglePage />
    </MuiThemeProvider>
  </Provider>,
  reactElement
)

// fetch('https://server-qa.mozzazcare.com/rpc.ashx', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//   	"jsonrpc":"2.0",
//   	"method":"GetPageList",
//   	"params":{
//   		"ClientId":58204,
//   		"apiVersion":"1.14",
//   		"appIdentifier":"MCA",
//   		"applicationVersion":"2.5",
//   		"buildNo":"0.0.0",
//   		"requestType":"app",
//   		"source":"Mozzaz Care",
//   		"CID":58204,
//   		"Auth":"31f0a022-22b8-446a-816c-55e232fdcbb4"
//   	},
//   	"id":"27"})
// })
// .then(function(response) {
//     return response.json()
//   }).then(function(json) {
//     console.log('parsed json', json.result)
//   }).catch(function(ex) {
//     console.log('parsing failed', ex)
//   })

