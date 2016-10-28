import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import NavBar from './components/NavBar';

import './App.css';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  toggle: {
    thumbOnColor: '#ffffff',
    trackOnColor: '#32DD9C'
  }
});

class App extends Component {
  render() {
    return <MuiThemeProvider muiTheme={muiTheme}>
      <NavBar />
    </MuiThemeProvider>
  }
}

export default App;
