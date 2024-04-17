import React from 'react';
/*
import Navbar from './navbar'
import Footer from './footer'

<Navbar />
<main>{children}</main>
<Footer /> 
*/

const LayoutGrid = ({ children }) => {
  return (
    <div className="bg-white text-black font-kalam min-h-screen">
      <div className="grid grid-cols-7 gap-4">
        {children}
      </div>
    </div>
  );
};

export default LayoutGrid;