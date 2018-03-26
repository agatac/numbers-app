import React from 'react'
import ReactDOM from 'react-dom'

import App from './App';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { createMuiTheme } from 'material-ui/styles'
import purple from 'material-ui/colors/purple'

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: purple,
  },
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root'));
