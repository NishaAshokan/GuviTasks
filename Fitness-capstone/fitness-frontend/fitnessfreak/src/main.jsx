// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(

  
//   <React.StrictMode>
//    <App />
    
//   </React.StrictMode>,
// )
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx'; // Assuming App is your main component

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './App';

// createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
