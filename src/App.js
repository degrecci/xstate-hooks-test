import React, { Component } from 'react';
import './App.css';
import Toggle from './Toggle';
import GlobalStyles from './globalStyles';
import SignIn from './SignIn';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Toggle /> */}
        <GlobalStyles />
        <SignIn />
      </div>
    );
  }
}

export default App;
