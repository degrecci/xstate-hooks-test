import React, { Component } from 'react';
import './App.css';
// import Toggle from './Toggle/Toggle';
import GlobalStyles from './globalStyles';
// import SignIn from './SignIn';
import CheckIn from './CheckIn/CheckIn';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Toggle /> */}
        <GlobalStyles />
        {/* <SignIn /> */}
        <CheckIn />
      </div>
    );
  }
}

export default App;
