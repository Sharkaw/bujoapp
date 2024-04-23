import React from 'react';
// import Header from './components/Header';
// import Footer from './components/Footer'

const LayoutGrid = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <div className="bg-white text-black min-h-screen">
          <div className="grid grid-cols-12 gap-4">
            {/* <Header /> */}
            <main>{children}</main>
            {/* <Footer /> */}
          </div>
        </div>
      </body>
    </html>
  );
};

export default LayoutGrid;
