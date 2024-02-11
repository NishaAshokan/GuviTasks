
import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './Home';
import FullStackDeveloper from './FullStackDeveloper';
import DataScience from './DataScience';
import CyberSecurity from './CyberSecurity';
import Career from './Career';
import img2 from './Images/fsd2.png';
import './App.css'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">All</Link>
            </li>
            <li>
              <Link to="/about">Full Stack Developer</Link>
            </li>
            <li>
              <Link to="/ds">Data Science</Link>
            </li>
            <li>
              <Link to="/cs">Cyber Security</Link>
            </li>
            <li>
              <Link to="/career">Career</Link>
            </li>
          </ul>
        </nav>

       <Routes>
       <Route path="/" Component={Home}></Route>
       <Route path="/about" Component={FullStackDeveloper}></Route>
       <Route path="/ds" Component={DataScience}></Route>
       <Route path="/cs" Component={CyberSecurity}></Route>
       <Route path="/career" Component={Career}></Route>
      

          </Routes>
      </div>
      <div>
      <img src={img2} alt="FSd1"  style={{ width: '100px', height: '100px', borderRadius: '50%' }}/>
      <p style={{color: "Grey"}}>nfo:All courses</p>
      </div>
    </Router>

  );
}

export default App;

