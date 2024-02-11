
import React from 'react';
import img1 from './Images/fsd1.png';
import img2 from './Images/fsd2.png';
import img3 from './Images/fsd3.png';
function DataScience() {
  return (
    <div>
      <h2>Data Science</h2>
      <p>This page contains information about Data Science course.</p>
      <div>
      <img src={img1} alt="FSd1"  style={{ width: '100px', height: '100px', borderRadius: '50%' }}/>
      <p style={{color: "Purple"}}>Info: Data Science</p>
      </div>
      <div>
      <img src={img2} alt="FSd1"  style={{ width: '100px', height: '100px', borderRadius: '50%' }}/>
      <p style={{color: "Purple"}}>nfo: Data Science</p>
      </div>
      <div>
      <img src={img3} alt="FSd1"  style={{ width: '100px', height: '100px', borderRadius: '50%' }}/>
      <p style={{color: "Purple"}}>nfo: Data Sciencer</p>
      </div>
    </div>
  );
}

export default DataScience;
