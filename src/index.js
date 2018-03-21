import React from 'react'
import ReactDOM from 'react-dom'

import App from './App';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { createMuiTheme } from 'material-ui/styles'
import lime from 'material-ui/colors/lime'

const theme = createMuiTheme({
  palette: {
    primary: lime,
  },
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root'));
