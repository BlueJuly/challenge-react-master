import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from '../store'
import CRM from './crm'
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

let reactElement = document.getElementById('react')
render(
  <Provider store={store}>
    <CRM />
  </Provider>,
  reactElement
)
