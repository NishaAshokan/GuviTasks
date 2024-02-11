
import React from 'react';
import img1 from './Images/fsd1.png';
import img2 from './Images/fsd2.png';
import img3 from './Images/fsd3.png';

function CyberSecurity() {
  return (
    <div>
      <h2>Cyber Security</h2>
      <p>This page contains information about Cyber Security course.</p>
      <div>
      <img src={img1} alt="FSd1"  style={{ width: '100px', height: '100px', borderRadius: '50%' }}/>
      <p style={{color: "Green"}}>Info: Cyber security</p>
      </div>
      <div>
      <img src={img2} alt="FSd1"  style={{ width: '100px', height: '100px', borderRadius: '50%' }}/>
      <p style={{color: "Green"}}>nfo: Cyber security</p>
      </div>
      <div>
      <img src={img3} alt="FSd1"  style={{ width: '100px', height: '100px', borderRadius: '50%' }}/>
      <p style={{color: "Green"}}>nfo: Cyber security</p>
      </div>
    </div>
  );
}

export default CyberSecurity;
