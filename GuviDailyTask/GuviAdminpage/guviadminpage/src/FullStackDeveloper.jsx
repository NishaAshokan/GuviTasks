import React from 'react';
import img1 from './Images/fsd1.png';
import img2 from './Images/fsd2.png';
import img3 from './Images/fsd3.png';
function FullStackDeveloper() {
  return (
    <div>
      <h2>Full Stack Developer</h2>
      
      <p>This page contains information about Full Stack Developer course.</p>
      <div>
      <img src={img1} alt="FSd1"  style={{ width: '100px', height: '100px', borderRadius: '50%' }}/>
      <p style={{color: "blue"}}>Info: FSD COURSE FULLTIME</p>
      </div>
      <div>
      <img src={img2} alt="FSd2" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
      <p style={{color: "blue"}}>Info: FSD COURSE PART TIME</p>
      </div>
      <div>
      <img src={img3} alt="FSd3"style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
      <p style={{color: "blue"}}>Info: FSD COURSE WEEKENDS</p>
      </div>
    </div>
  )
}

export default FullStackDeveloper;
