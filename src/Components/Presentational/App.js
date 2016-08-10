import React, { Component } from 'react';
import AddAuthor from '../Container/AddAuthor.js';
import AuthorDropdown from './AuthorDropdown.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddAuthor />
        <AuthorDropdown />
      </div>
    );
  }
}

export default App;
