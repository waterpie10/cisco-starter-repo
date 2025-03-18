import React from 'react';
import './Exhibit.css';

const Exhibit = ({ heading, children }) => {
  return (
    <div className="exhibit">
      <h2>{heading}</h2>
      <div className="exhibit-content">
        {children}
      </div>
    </div>
  );
};

export default Exhibit;