import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import 'whatwg-fetch'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store from '../store'
import CRM from './crm'
import SinglePage from './SinglePage'
import pagesAction from "../actions/pagesAction";
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

store.dispatch(initPagesAction());


