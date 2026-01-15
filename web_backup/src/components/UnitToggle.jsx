import React from 'react';
import './UnitToggle.css';

const UnitToggle = ({ unit, setUnit, options = ['Imperial', 'Metric'] }) => {
  return (
    <div className="unit-toggle-container">
      <div className="unit-toggle">
        <div 
          className={`unit-option ${unit === options[0] ? 'active' : ''}`}
          onClick={() => setUnit(options[0])}
        >
          {options[0]}
        </div>
        <div className="toggle-switch" onClick={() => setUnit(unit === options[0] ? options[1] : options[0])}>
          <div className={`toggle-handle ${unit === options[1] ? 'right' : ''}`}></div>
        </div>
        <div 
          className={`unit-option ${unit === options[1] ? 'active' : ''}`}
          onClick={() => setUnit(options[1])}
        >
          {options[1]}
        </div>
      </div>
    </div>
  );
};

export default UnitToggle;
