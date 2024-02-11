
import React from 'react';
import  img1 from './Images/career.png'

function Career() {
  return (
    <div>
      <h2>Career</h2>
      <p>This page contains information about Career opportunities.</p>
      <div>
      <img src={img1} alt="FSd1"  style={{ width: '100px', height: '100px', borderRadius: '50%' }}/>
      <p style={{color: "red"}}>Info: About career</p>
      </div>
    </div>
  );
}

export default Career;
