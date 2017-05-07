import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store from '../store'
import SinglePage from './SinglePage'
import PageCard from './PageCard'
import initPagesAction from "../actions/pagesAction";
var injectTapEventPlugin = require("react-tap-event-plugin");

injectTapEventPlugin();

let reactElement = document.getElementById('react')

render(
  <Provider store={store}>
  	<MuiThemeProvider>
  	 <div>
  		<PageCard />
    	<SinglePage />
     </div>
    </MuiThemeProvider>
  </Provider>,
  reactElement
)

store.dispatch(initPagesAction());


