import React from 'react';
import Navbar from '../src/components/Navbar/Navbar';
import './global.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomeBanner1 from '../src/components/HomeBanner1/HomeBanner1';
import HomeBanner2 from '../src/components/HomeBanner2/HomeBanner2';


const App = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        />
        <style>{`
          body {
            font-family: 'Inter', sans-serif;
          }
        `}</style>
      </head>
      <body>
        
      <div>
      
      <main>
      <HomeBanner1 />
      <HomeBanner2 />
    </main>
        <Navbar />
        {children}
        <ToastContainer />
        </div>
      </body>
    </html>
  );
};

export default App;
// const App = ({ children }) => {
//   return (

//     <div>
//       <main>
//         <HomeBanner1 />
//         <HomeBanner2 />
//       </main>
//       <Navbar />
//       {children}
//       <ToastContainer />
//     </div>
//   );
// };

//export default App;

//write a code for app.jsx with browserrouter and routes to about and contact page
// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from '././';
// import About from './pages/About';  
// import Contact from './pages/Contact';
// import Navbar from './components/Navbar';
// import './App.css';

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }