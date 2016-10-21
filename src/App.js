import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import NavBar from './components/NavBar';

import logo from './logo.svg';
import './App.css';

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <NavBar />
    );
  }
}

export default App;
