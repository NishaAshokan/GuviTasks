import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import './globals.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomeBanner1 from '@/components/HomeBanner1/HomeBanner1';
import HomeBanner2 from '@/components/HomeBanner2/HomeBanner2';


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
      <main className={styles.main}>
      <HomeBanner1 />
      <HomeBanner2 />
    </main>
        <Navbar />
        {children}
        <ToastContainer />
      </body>
    </html>
  );
};

export default App;
