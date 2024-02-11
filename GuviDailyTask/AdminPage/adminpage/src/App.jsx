// App.js
import React from 'react';
import './App.css';
import './App2.css'
import BookManagement from './BookManagement';
import AuthorManagement from './AuthorManagement';

function App() {
  return (
    <div className="App">
      <h1>Library store</h1>
      <div className="dashboard">
        <BookManagement />
        <AuthorManagement />
      </div>
    </div>
  );
}

export default App;

