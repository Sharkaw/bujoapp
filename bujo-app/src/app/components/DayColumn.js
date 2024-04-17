import React from 'react';

const DayColumn = ({ children }) => {
  return (
    <div className="border border-gray-300 p-4">
      {children}
    </div>
  );
};

export default DayColumn;